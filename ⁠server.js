<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, viewport-fit=cover">
    
    <!-- إعدادات التشغيل كـ تطبيق مستقل على Safari أيفون -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="XPG ANALYZER">
    
    <title>XPG OPTION ANALYZER PRO v12.0</title>
    <style>
        :root {
            --bg-color: #0b0e14;
            --card-bg: #151a21;
            --accent-blue: #00b0ff;
            --accent-green: #00e676;
            --accent-red: #ff1744;
            --text-main: #ffffff;
            --text-dim: #90a4ae;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            -webkit-tap-highlight-color: transparent;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-main);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px 15px;
            padding-top: env(safe-area-inset-top, 20px);
        }

        .container {
            width: 100%;
            max-width: 480px;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .header {
            background: var(--card-bg);
            padding: 15px;
            border-radius: 12px;
            text-align: center;
            border: 1px solid rgba(255,255,255,0.05);
        }

        .header h1 { font-size: 1.2rem; color: #fff; }

        .developer-info {
            font-size: 0.85rem;
            color: var(--accent-blue);
            margin-top: 6px;
            font-weight: bold;
        }

        .developer-info a {
            color: var(--accent-blue);
            text-decoration: none;
        }

        .status-badge {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            margin-top: 8px;
            background: rgba(0, 230, 118, 0.15);
            color: var(--accent-green);
        }

        .card {
            background: var(--card-bg);
            padding: 18px;
            border-radius: 12px;
            border: 1px solid rgba(255,255,255,0.05);
        }

        .section-title { font-size: 0.95rem; margin-bottom: 8px; color: var(--text-main); }

        .input-field, .select-field {
            width: 100%;
            padding: 12px;
            border-radius: 8px;
            border: 1px solid rgba(255,255,255,0.15);
            background: #0b0e14;
            color: #fff;
            font-size: 0.95rem;
            margin-bottom: 8px;
        }

        .market-advice {
            font-size: 0.82rem;
            padding: 10px 12px;
            border-radius: 6px;
            margin-bottom: 15px;
            background: rgba(255,255,255,0.03);
            border-right: 3px solid var(--accent-blue);
            line-height: 1.5;
        }

        .file-upload {
            border: 2px dashed rgba(0, 176, 255, 0.4);
            border-radius: 8px;
            padding: 18px;
            text-align: center;
            color: var(--accent-blue);
            cursor: pointer;
            font-size: 0.95rem;
            margin-bottom: 15px;
            background: rgba(0, 176, 255, 0.03);
        }

        .btn-action {
            width: 100%;
            padding: 14px;
            border: none;
            border-radius: 8px;
            font-weight: bold;
            font-size: 1rem;
            background: var(--accent-blue);
            color: #fff;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0, 176, 255, 0.3);
        }

        .btn-action:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        .result-box {
            background: #10141d;
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 10px;
            padding: 15px;
            margin-top: 15px;
        }

        .direction-badge {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 15px;
            border-radius: 8px;
            font-weight: bold;
            margin-bottom: 12px;
        }

        .bg-call {
            background: rgba(0, 230, 118, 0.1);
            border: 1px solid var(--accent-green);
            color: var(--accent-green);
        }

        .bg-put {
            background: rgba(255, 23, 68, 0.1);
            border: 1px solid var(--accent-red);
            color: var(--accent-red);
        }

        .info-list {
            list-style: none;
            font-size: 0.85rem;
            color: var(--text-dim);
            line-height: 1.6;
            white-space: pre-line;
        }

        .table-title { font-weight: bold; color: #fff; margin: 15px 0 8px 0; font-size: 0.9rem; }

        .schedule-list { list-style: none; font-size: 0.85rem; }

        .schedule-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 0;
            border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .modal-overlay {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.85);
            backdrop-filter: blur(8px);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            z-index: 9999;
        }

        .modal {
            background: var(--card-bg);
            padding: 25px;
            border-radius: 16px;
            width: 100%;
            max-width: 400px;
            text-align: center;
            border: 1px solid rgba(255,255,255,0.1);
        }

        .modal-dev-card {
            background: rgba(0, 176, 255, 0.08);
            border: 1px solid rgba(0, 176, 255, 0.2);
            padding: 12px;
            border-radius: 10px;
            margin-bottom: 15px;
        }

        .modal-dev-card .name {
            font-size: 1.1rem;
            font-weight: bold;
            color: #fff;
        }

        .modal-dev-card .telegram {
            font-size: 0.85rem;
            color: var(--accent-blue);
            margin-top: 4px;
        }

        .modal-dev-card .telegram a {
            color: var(--accent-blue);
            text-decoration: none;
            font-weight: bold;
        }

        .hidden { display: none !important; }
    </style>
</head>
<body>

<div class="container" id="app-content">
    <div class="header">
        <h1>XPG OPTION ANALYZER 🌐</h1>
        <div class="developer-info">المطور: 𝐁𝐑𝐐 ☂︎ | تليجرام: <a href="https://t.me/i60in" target="_blank">@i60in</a></div>
        <p style="font-size: 0.8rem; color: var(--text-dim); margin-top: 6px;">محلل الصفقات والاتجاهات لجميع منصات الأوبشن الذكي</p>
        <div class="status-badge" id="sub-status">جاري التحقق...</div>
    </div>

    <div class="card">
        <div class="section-title">1. اختر السوق المراد تحليله:</div>
        <select class="select-field" id="pair-select" onchange="updateMarketAdvice()">
            <optgroup label="🌐 أسواق حقيقية (Real Market)">
                <option value="EUR_USD_REAL">EUR/USD - حقيقي (سيولة مرتفعة) 🟢</option>
                <option value="GBP_USD_REAL">GBP/USD - حقيقي (اتجاه نقي) 🟢</option>
                <option value="USD_JPY_REAL">USD/JPY - حقيقي (اتجاهات قوية) 🟢</option>
                <option value="AUD_USD_REAL">AUD/USD - حقيقي (ارتداد متزن) 🟢</option>
                <option value="USD_CAD_REAL">USD/CAD - حقيقي (فايبوناتشي) 🟢</option>
                <option value="USD_CHF_REAL">USD/CHF - حقيقي (نقاط انعكاس) 🟢</option>
                <option value="NZD_USD_REAL">NZD/USD - حقيقي (تداول هادئ) 🟢</option>
            </optgroup>
            
            <optgroup label="⚡ أسواق OTC">
                <option value="AUD_CAD_OTC">AUD/CAD OTC - ممتاز للاتجاهات 🟢</option>
                <option value="EUR_JPY_OTC">EUR/JPY OTC - ممتاز للارتداد 🟢</option>
                <option value="GBP_USD_OTC">GBP/USD OTC - حركة متزنة 🟢</option>
                <option value="USD_JPY_OTC">USD/JPY OTC - مستقر للشموع السريعة 🟢</option>
                <option value="AUD_CHF_OTC">AUD/CHF OTC - يحترم المستويات 🟢</option>
                <option value="CAD_CHF_OTC">CAD/CHF OTC - تذبذب متوسط 🟡</option>
                <option value="EUR_CHF_OTC">EUR/CHF OTC - حركة حادة 🔴</option>
                <option value="AED_CNY_OTC">AED/CNY OTC - غير منتظم 🔴</option>
            </optgroup>
        </select>

        <div class="market-advice" id="market-advice-box">
            💡 <b>وضع السوق:</b> سيولة عالية، يتجاوب بدقة مع المستويات الفنية والمؤشرات.
        </div>

        <div class="section-title">2. إرفاق صورة الشارت للتحليل:</div>
        <div class="file-upload" onclick="document.getElementById('chart-input').click()">
            📷 <span id="upload-label">إدراج صورة الشارت لقراءتها بالذكاء الاصطناعي</span>
            <input type="file" id="chart-input" accept="image/*" class="hidden" onchange="handleImageUpload(this)">
        </div>

        <button class="btn-action" id="analyze-btn" onclick="analyzeChart()">📊 تحليل الشارت واستخراج الصفقات</button>

        <div class="result-box hidden" id="results-area">
            <div class="direction-badge" id="direction-box">
                <span id="direction-text">الاتجاه القادم: جاري التحليل...</span>
                <span id="candle-time">التوقيت: (00:00)</span>
            </div>
            <div class="info-list" id="analysis-details"></div>

            <div class="table-title">📅 جدول الصفقات القادمة المستخرجة:</div>
            <div class="schedule-list" id="schedule-box"></div>
        </div>
    </div>
</div>

<!-- نافذة تفعيل الكود -->
<div class="modal-overlay hidden" id="lock-modal">
    <div class="modal">
        <h2 style="color: var(--accent-red); margin-bottom: 12px; font-size: 1.1rem;">انتهت الفترة التجريبية (24 ساعة) 🔒</h2>
        
        <div class="modal-dev-card">
            <div class="name">𝐁𝐑𝐐 ☂︎</div>
            <div class="telegram">للحصول على كود التفعيل تواصل عبر تليجرام: <a href="https://t.me/i60in" target="_blank">@i60in</a></div>
        </div>

        <p style="color: var(--text-dim); font-size: 0.85rem; margin-bottom: 10px;">للاشتراك لمدة شهر، أدخل كود التفعيل الخاص بك:</p>
        <input type="text" id="activation-key" class="input-field" placeholder="أدخل كود الاشتراك هنا" style="text-align: center; margin-bottom: 12px;">
        <button class="btn-action" style="background: var(--accent-green); color: #000;" onclick="validateKey()">تفعيل الاشتراك 30 يوم</button>
        <p id="error-msg" style="color: var(--accent-red); font-size: 0.8rem; margin-top: 10px;" class="hidden">الكود غير صحيح أو مستخدم سابقاً.</p>
    </div>
</div>

<script>
    const MONTHLY_CODES = [
        "XPG-30D-881",
        "XPG-30D-902",
        "XPG-30D-443",
        "XPG-30D-115",
        "XPG-VIP-USER"
    ];

    const TRIAL_HOURS = 24;
    const SUB_DAYS = 30;
    let selectedBase64Image = null;

    const MARKET_DATA = {
        "EUR_USD_REAL": { text: "💡 <b>وضع السوق:</b> سيولة عالية، يتجاوب بدقة مع المستويات الفنية والمؤشرات." },
        "GBP_USD_REAL": { text: "💡 <b>وضع السوق:</b> يحترم كسر الترندات والنماذج الانعكاسية بشكل ممتاز." },
        "USD_JPY_REAL": { text: "💡 <b>وضع السوق:</b> اتجاهات قوية ومناسب جداً لصفقات 1 إلى 2 دقيقة." },
        "AUD_USD_REAL": { text: "💡 <b>وضع السوق:</b> حركات واضحة ومستقرة مع الشموع الارتدادية." },
        "USD_CAD_REAL": { text: "💡 <b>وضع السوق:</b> احترام عالي لمستويات التصحيح والتحليل الكلاسيكي." },
        "USD_CHF_REAL": { text: "💡 <b>وضع السوق:</b> سيولة متزنة واستجابة واضحة لمناطق الطلب." },
        "NZD_USD_REAL": { text: "💡 <b>وضع السوق:</b> حركات هادئة ومنتظمة ومناسبة لصفقات الارتداد." },
        "AUD_CAD_OTC": { text: "💡 <b>وضع السوق:</b> سوق OTC منتظم، يحترم المستويات والأنماط الممتلئة." },
        "EUR_JPY_OTC": { text: "💡 <b>وضع السوق:</b> اتجاه صاعد واضح، ممتاز لصفقات الارتداد السريعة." },
        "GBP_USD_OTC": { text: "💡 <b>وضع السوق:</b> حركة منتظمة ومناسبة للتداول الفوري." },
        "USD_JPY_OTC": { text: "💡 <b>وضع السوق:</b> احترام لخطوط الاتجاه والمستويات المئوية." },
        "AUD_CHF_OTC": { text: "💡 <b>وضع السوق:</b> سيولة متزنة، يوصى بالاعتماد على شموع الرفض." },
        "CAD_CHF_OTC": { text: "⚠️ <b>وضع السوق:</b> يوجد تذبذب، انتظر إغلاق الشمعة للتأكيد قبل الدخول." },
        "EUR_CHF_OTC": { text: "🚫 <b>وضع السوق:</b> ذيول طويلة وتذبذب عالي، يُفضل تجنبه حالياً." },
        "AED_CNY_OTC": { text: "🚫 <b>وضع السوق:</b> مخاطرة مرتفعة وحركة غير محترمة للفنيات." }
    };

    function checkAccess() {
        const now = new Date().getTime();
        let trialStart = localStorage.getItem('xpg_trial_start');
        let subEnd = localStorage.getItem('xpg_sub_end');

        if (subEnd && now < parseInt(subEnd)) {
            const daysLeft = Math.ceil((parseInt(subEnd) - now) / (1000 * 60 * 60 * 24));
            document.getElementById('sub-status').innerText = `اشتراك مفعل (متبقي ${daysLeft} يوم) 🟢`;
            document.getElementById('lock-modal').classList.add('hidden');
            return true;
        }

        if (!trialStart) {
            localStorage.setItem('xpg_trial_start', now.toString());
            trialStart = now;
        }

        const trialExpiry = parseInt(trialStart) + (TRIAL_HOURS * 60 * 60 * 1000);

        if (now < trialExpiry) {
            const hoursLeft = Math.ceil((trialExpiry - now) / (1000 * 60 * 60));
            document.getElementById('sub-status').innerText = `تجربة مجانية (متبقي ${hoursLeft} ساعة) ⏳`;
            document.getElementById('lock-modal').classList.add('hidden');
            return true;
        } else {
            document.getElementById('sub-status').innerText = `انتهت الفترة التجريبية 🔒`;
            document.getElementById('sub-status').style.color = `var(--accent-red)`;
            document.getElementById('sub-status').style.background = `rgba(255, 23, 68, 0.15)`;
            document.getElementById('lock-modal').classList.remove('hidden');
            return false;
        }
    }

    function validateKey() {
        const inputKey = document.getElementById('activation-key').value.trim();
        const usedKeys = JSON.parse(localStorage.getItem('xpg_used_keys') || '[]');

        if (MONTHLY_CODES.includes(inputKey) && !usedKeys.includes(inputKey)) {
            const now = new Date().getTime();
            const newSubEnd = now + (SUB_DAYS * 24 * 60 * 60 * 1000);
            
            localStorage.setItem('xpg_sub_end', newSubEnd.toString());
            usedKeys.push(inputKey);
            localStorage.setItem('xpg_used_keys', JSON.stringify(usedKeys));

            document.getElementById('error-msg').classList.add('hidden');
            checkAccess();
        } else {
            document.getElementById('error-msg').classList.remove('hidden');
        }
    }

    function updateMarketAdvice() {
        const selected = document.getElementById('pair-select').value;
        const adviceBox = document.getElementById('market-advice-box');
        adviceBox.innerHTML = MARKET_DATA[selected].text;
    }

    function handleImageUpload(input) {
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                selectedBase64Image = e.target.result;
                document.getElementById('upload-label').innerText = "تم إرفاق صورة الشارت بنجاح ✔️";
            };
            reader.readAsDataURL(input.files[0]);
        }
    }

    async function analyzeChart() {
        if (!checkAccess()) return;

        if (!selectedBase64Image) {
            alert("يرجى إرفاق صورة الشارت أولاً قبل البدء بالتحليل!");
            return;
        }

        const selectedPair = document.getElementById('pair-select').value;
        const btn = document.getElementById('analyze-btn');
        const resultsArea = document.getElementById('results-area');
        const directionBox = document.getElementById('direction-box');
        const directionText = document.getElementById('direction-text');
        const scheduleBox = document.getElementById('schedule-box');

        btn.disabled = true;
        btn.innerText = "⏳ جاري قراءة الشارت عبر الذكاء الاصطناعي...";

        try {
            const response = await fetch('/api/analyze', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    imageBase64: selectedBase64Image,
                    pair: selectedPair
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'حدث خطأ أثناء الاتصال بالذكاء الاصطناعي');
            }

            const now = new Date();
            const formatTime = (d) => d.toTimeString().substring(0, 5);

            let t1 = new Date(now.getTime() + 1 * 60000);
            let t2 = new Date(now.getTime() + 3 * 60000);
            let t3 = new Date(now.getTime() + 5 * 60000);

            const analysisText = data.analysis;
            const isCall = analysisText.includes("شراء") || analysisText.includes("CALL") || analysisText.includes("صاعد");

            if (isCall) {
                directionBox.className = "direction-badge bg-call";
                directionText.innerHTML = "الاتجاه الرئيس: شراء (CALL) ⬆️";
            } else {
                directionBox.className = "direction-badge bg-put";
                directionText.innerHTML = "الاتجاه الرئيس: بيع (PUT) ⬇️";
            }

            document.getElementById('candle-time').innerText = `التوقيت: (${formatTime(now)})`;
            document.getElementById('analysis-details').innerHTML = analysisText;

            scheduleBox.innerHTML = `
                <div class="schedule-item"><span>الساعة ${formatTime(t1)}</span><span style="color: ${isCall ? 'var(--accent-green)' : 'var(--accent-red)'};">التوقع: ${isCall ? 'CALL ⬆️' : 'PUT ⬇️'}</span></div>
                <div class="schedule-item"><span>الساعة ${formatTime(t2)}</span><span style="color: ${!isCall ? 'var(--accent-green)' : 'var(--accent-red)'};">التوقع: ${!isCall ? 'CALL ⬆️' : 'PUT ⬇️'}</span></div>
                <div class="schedule-item"><span>الساعة ${formatTime(t3)}</span><span style="color: ${isCall ? 'var(--accent-green)' : 'var(--accent-red)'};">التوقع: ${isCall ? 'CALL ⬆️' : 'PUT ⬇️'}</span></div>
            `;

            resultsArea.classList.remove('hidden');
        } catch (error) {
            alert("حدث خطأ أثناء التحليل: " + error.message);
        } finally {
            btn.disabled = false;
            btn.innerText = "📊 تحليل الشارت واستخراج الصفقات";
        }
    }

    checkAccess();
</script>

</body>
</html>
