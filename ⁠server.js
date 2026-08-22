import express from 'express';
import cors from 'cors';
import { GoogleGenAI } from '@google/genai';

const app = express();
const port = process.env.PORT || 3000;

const apiKey = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: apiKey });

app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.post('/api/analyze-chart', async (req, res) => {
  try {
    const { imageBase64, pair } = req.body;

    if (!imageBase64) {
      return res.status(400).json({ error: 'يرجى إرفاق صورة الشارت أولاً.' });
    }

    const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, '');

    const prompt = `
أنت محلل مالي خبير في تداول الخيارات الثنائية (Binary Options).
قم بتحليل صورة الشارت المرفقة لزوج: ${pair || 'غير محدد'}.

المطلوب إخراج النتيجة بتنسيق JSON حصراً بنفس الهيكل التالي بالضبط:
{
  "marketStatus": "شرح مختصر لوضع السوق وحركة الاتجاه العام بناءً على الشمعات",
  "mainDirection": "CALL" أو "PUT",
  "pairStatus": "احترام الدعوم والمقاومات أو سيولة عالية",
  "technicalPattern": "اسم النموذج الفني الملاحظ (مثال: ارتداد إيجابي Rejection، كسر دعم، نموذج ابتلاعي...)",
  "riskLevel": "منخفضة" أو "متوسطة" أو "عالية",
  "recommendation": "نصيحة الدخول بالتفصيل (مثال: دخول صفقة مدتها 1 دقيقة فور افتتاح الشمعة القادمة)",
  "futurePredictions": [
    { "offsetMinutes": 1, "signal": "CALL" أو "PUT" },
    { "offsetMinutes": 3, "signal": "CALL" أو "PUT" },
    { "offsetMinutes": 5, "signal": "CALL" أو "PUT" }
  ]
}
أرجِع كود الـ JSON فقط دون أي نصوص إضافية أو مقدمات.
`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        {
          role: 'user',
          parts: [
            { text: prompt },
            {
              inlineData: {
                mimeType: 'image/png',
                data: base64Data
              }
            }
          ]
        }
      ],
      config: {
        responseMimeType: 'application/json'
      }
    });

    const analysisResult = JSON.parse(response.text);
    return res.json({ success: true, data: analysisResult });

  } catch (error) {
    console.error('خطأ في التحليل:', error);
    return res.status(500).json({ error: 'حدث خطأ أثناء معالجة صورة الشارت.' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
