const lectureData = {
  title: "📊 التوزيع ذو الحدين - تطبيق على شركة التسويق العقاري",
  isSolvedDocument: true,
  exam: {
    essay: [
      {
        question: "إذا كان طلاب تخصص التسويق والتجارة الإلكترونية بالمعهد يعملون لدى شركة أ.م.د/ ممدوح عبدالحفيظ للتسويق العقاري وينجحون في إقناع وبيع الوحدات العقارية لنسبة 20% من العملاء الذين يتواصلون معهم. فإذا قام الطالب عبدالله محمد حامد بالتواصل مع عدد 10 عملاء في أحد الأيام، المطلوب باستخدام توزيع ثنائي الحدين أوجد ما يلي:",
        modelAnswer: `<style>
.options {
  display: flex;
  gap: 20px;
  margin: 15px 0;
  flex-wrap: wrap;
}
.option {
  background: #f0f0f0;
  padding: 8px 15px;
  border-radius: 8px;
  font-weight: bold;
}
.correct-answer {
  background: #e8f5e9;
  padding: 12px;
  border-radius: 8px;
  margin-top: 10px;
  border-right: 4px solid #27ae60;
}
.question-box {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 30px;
  border: 1px solid #ddd;
}
.question-title {
  font-size: 18px;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 15px;
  padding-bottom: 8px;
  border-bottom: 2px solid #3498db;
}
hr {
  margin: 20px 0;
  border: none;
  height: 1px;
  background: linear-gradient(to right, #ccc, transparent);
}
.law-box {
  background: #f3e5f5;
  padding: 15px;
  border-radius: 12px;
  margin: 20px 0;
  text-align: center;
  border-right: 6px solid #9c27b0;
  font-size: 18px;
  font-weight: bold;
  font-family: monospace;
}
.given-box {
  background: #e8eaf6;
  padding: 15px;
  border-radius: 12px;
  margin: 20px 0;
  border-right: 6px solid #3f51b5;
  font-size: 16px;
}
.steps-box {
  background: #e3f2fd;
  padding: 20px;
  border-radius: 12px;
  margin: 30px 0;
  border-right: 6px solid #2196f3;
}
.step-title h3 {
  font-size: 20px;
  font-weight: bold;
  color: #1565c0;
  margin-bottom: 15px;
}
.step-item {
  background: white;
  padding: 10px 15px;
  margin: 10px 0;
  border-radius: 8px;
  font-family: monospace;
  font-size: 16px;
  direction: ltr;
  text-align: left;
}
.result-box {
  background: #1b5e20;
  color: white;
  padding: 12px;
  border-radius: 8px;
  text-align: center;
  font-size: 18px;
  margin-top: 15px;
  font-family: monospace;
}
.warning {
  background: #ffebee;
  color: #c62828;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  margin-top: 15px;
}
</style>

<!-- ============================================== -->
<!-- القانون المستخدم -->
<!-- ============================================== -->

<div class="law-box">
📐 <strong>القانون المستخدم:</strong> P(x) = ⁿCₓ × pˣ × qⁿ⁻ˣ
</div>

<!-- ============================================== -->
<!-- المعطيات -->
<!-- ============================================== -->

<div class="given-box">
📊 <strong>المعطيات:</strong><br>
• n = عدد العملاء = 10<br>
• p = احتمال النجاح (البيع) = 20% = 0.2<br>
• q = احتمال الفشل = 80% = 0.8<br>
• x = عدد مرات النجاح (المطلوب)
</div>

<!-- ============================================== -->
<!-- السؤال الأول -->
<!-- ============================================== -->

<div class="question-box">
<div class="question-title">📌 1- ما هو احتمال أن ينجح هذا الطالب في البيع لجميع العملاء الذين تواصل معهم؟</div>
<div class="options">
  <span class="option">(أ) 0.000000</span>
  <span class="option">(ب) 0.03125</span>
  <span class="option">(ج) 0.15625</span>
  <span class="option">(د) 0.25</span>
</div>
<div class="correct-answer">
<strong>✅ الإجابة الصحيحة: <span style="color: #27ae60; background: #d5e8d4; padding: 3px 10px; border-radius: 5px;">(أ) 0.000000</span></strong><br><br>
<strong>🔍 الشرح:</strong> "للجميع" يعني عبدالله يبيع لـ 10 من 10 (x=10). وبما أن نسبة نجاحه أصلاً 20%، فمن الصعب جداً أن ينجح في إقناع جميع العملاء العشرة. الحساب: (0.2)¹⁰ = 0.0000001024، وتقربه الآلة إلى 0.000000.
</div>
</div>

<hr>

<!-- ============================================== -->
<!-- السؤال الثاني -->
<!-- ============================================== -->

<div class="question-box">
<div class="question-title">📌 2- ما هو احتمال أن ينجح هذا الطالب في البيع لثلاث عملاء فقط؟</div>
<div class="options">
  <span class="option">(أ) 0.015625</span>
  <span class="option">(ب) 0.20132</span>
  <span class="option">(ج) 0.30625</span>
  <span class="option">(د) 0.25</span>
</div>
<div class="correct-answer">
<strong>✅ الإجابة الصحيحة: <span style="color: #27ae60; background: #d5e8d4; padding: 3px 10px; border-radius: 5px;">(ب) 0.20132</span></strong><br><br>
<strong>🔍 الشرح:</strong> هنا نطبق قانون ثنائي الحدين حيث x = 3. متوسط نجاح عبدالله هو بيعتين من الـ 10 (لأن 10 × 0.2 = 2)، لذلك فإن بيع 3 عملاء احتمال وارد جداً. الحساب: ¹⁰C₃ × (0.2)³ × (0.8)⁷ = 120 × 0.008 × 0.2097 = 0.20132.
</div>
</div>

<hr>

<!-- ============================================== -->
<!-- السؤال الثالث -->
<!-- ============================================== -->

<div class="question-box">
<div class="question-title">📌 3- ما هو احتمال أن يفشل هذا الطالب في إقناع أي عميل؟</div>
<div class="options">
  <span class="option">(أ) 0.5625</span>
  <span class="option">(ب) 0.03125</span>
  <span class="option">(ج) 0.10625</span>
  <span class="option">(د) 0.10737</span>
</div>
<div class="correct-answer">
<strong>✅ الإجابة الصحيحة: <span class="highlight-correct" style="background: #27ae60; color: white; padding: 3px 10px; border-radius: 5px;">(د) 0.10737</span></strong><br><br>
<strong>🔍 الشرح:</strong> "يفشل في إقناع أي عميل" يعني ينجح مع صفر عملاء (x=0)، وجميع العملاء العشرة يرفضون. الحساب: (0.8)¹⁰ = 0.10737. هذا يعني أن احتمال أن يفشل في البيع لأي شخص هو حوالي 10.7%.
</div>
</div>

<!-- ============================================== -->
<!-- خطوات على الآلة -->
<!-- ============================================== -->

<div class="steps-box">
<div class="step-title">
<h3>🧮 خطوات على الآلة (مثال: حساب احتمال x = 3)</h3>
<p style="margin-bottom: 20px; font-size: 16px;">
📌 <strong>المطلوب:</strong> حساب احتمال نجاح الطالب مع 3 عملاء فقط<br>
( n = 10 , p = 0.2 , q = 0.8 , x = 3 )
</p>
</div>
<div class="step-item">
1️⃣ n = <strong>10</strong>
</div>
<div class="step-item">
2️⃣ Shift + ÷  →  حرف C على الشاشة
</div>
<div class="step-item">
3️⃣ x = <strong>3</strong>
</div>
<div class="step-item">
4️⃣ ×
</div>
<div class="step-item">
5️⃣ p = <strong>0.2</strong>
</div>
<div class="step-item">
6️⃣ x^□  ثم  <strong>3</strong>
</div>
<div class="step-item">
7️⃣ ×
</div>
<div class="step-item">
8️⃣ q = <strong>0.8</strong>
</div>
<div class="step-item">
9️⃣ x^□  ثم  (n−x) = <strong>7</strong>
</div>
<div class="step-item">
🔟 =
</div>
<div class="result-box">
📱 ¹⁰C₃ × 0.2³ × 0.8⁷ = 120 × 0.008 × 0.2097152 = 0.201326592
</div>
</div>

<!-- ============================================== -->
<!-- مسائل لحل بالآلة (مهم جداً) -->
<!-- ============================================== -->

<div class="warning">
🚨 <strong>تذكير بترتيب خطوات الآلة:</strong>
<br><br>
<strong style="direction: ltr; display: inline-block;">n → Shift + ÷ → x → × → p → x^□ → x → × → q → x^□ → (n−x) → =</strong>
</div>`
      }
    ]
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = lectureData;
}