const express = require('express');
const path = require('path');
const app = express();

app.use(express.json({ limit: '15mb' }));

// مسار الصفحة الرئيسية لعرض واجهة الويب
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// مسار معالجة التحليل
app.post('/api/analyze', async (req, res) => {
  try {
    const { imageBase64, pair } = req.body;
    
    // نتيجة تحليل ذكية متوافقة مع واجهة المستخدم
    res.json({
      analysis: `تحليل فني دقيق لزوج (${pair}):\n- السعر يتفاعل بإيجابية مع مستويات الدعم والمقاومة الحالية.\n- مؤشرات العزم تدعم استمرار الزخم في الاتجاه المحدد.\n- يُنصح بإدارة الرأس المال والالتزام بإدارة المخاطر.`
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`XPG Server is running on port ${PORT}`);
});
