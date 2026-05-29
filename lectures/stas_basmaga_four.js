const lectureData = {
  title: "📊 التوزيع ذو الحدين - إحتمالات الأطفال الذكور في الأسرة",
  isSolvedDocument: true,
  exam: {
    essay: [
      {
        question:
          "أسرة مكونة من 6 أطفال، واحتمالية ذكر وأنثى متساوية 0.5 (n=6, p=0.5, q=0.5)",
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
</style>

<!-- ============================================== -->
<!-- القانون المستخدم -->
<!-- ============================================== -->

<div class="law-box">
📐 <strong>القانون المستخدم:</strong> P(x) = ⁿCₓ × pˣ × qⁿ⁻ˣ
</div>

<!-- ============================================== -->
<!-- الأسئلة الاختيارية (8 أسئلة) -->
<!-- ============================================== -->

<div class="question-box">
<div class="question-title">📌 س1: إيجاد حالة التأكد التام للأطفال الذكور بالأسرة (أو احتمال عدم وجود طفل ذكر)؟</div>
<div class="options">
  <span class="option">(أ) 0.015625</span>
  <span class="option">(ب) 0.03125</span>
  <span class="option">(ج) 0.5</span>
  <span class="option">(د) 0.109375</span>
</div>
<div class="correct-answer">
<strong>✅ الإجابة الصحيحة: <span style="color: #27ae60; background: #d5e8d4; padding: 3px 10px; border-radius: 5px;">(أ) 0.015625</span></strong><br><br>
<strong>🔍 الشرح:</strong> "التأكد التام" هنا أو "عدم وجود ذكر" معناها إن الـ 6 أطفال كلهم طلعوا بنات (x=0). بنحسبها إننا نضرب (نص × نص × نص...) 6 مرات، يعني <strong>0.5⁶ = 0.015625</strong>.
</div>
</div>

<hr>

<div class="question-box">
<div class="question-title">📌 س2: بيان نوع الالتواء لتوزيع الأطفال الذكور بيانياً؟</div>
<div class="options">
  <span class="option">(أ) ملتو لليسار</span>
  <span class="option">(ب) ملتو لليمين</span>
  <span class="option">(ج) متماثل تماماً</span>
  <span class="option">(د) متعدد القمم</span>
</div>
<div class="correct-answer">
<strong>✅ الإجابة الصحيحة: <span style="color: #27ae60; background: #d5e8d4; padding: 3px 10px; border-radius: 5px;">(ج) متماثل تماماً</span></strong><br><br>
<strong>🔍 الشرح:</strong> طالما احتمال النجاح (p) بيساوي 0.5، يبقى التوزيع "مراية" لبعضه وموزون في النص، فبنقول عليه <strong>متماثل</strong>.
</div>
</div>

<hr>

<div class="question-box">
<div class="question-title">📌 س3: ما هو احتمال وجود (5) أطفال ذكور على الأقل بالأسرة؟</div>
<div class="options">
  <span class="option">(أ) 0.015625</span>
  <span class="option">(ب) 0.09375</span>
  <span class="option">(ج) 0.109375</span>
  <span class="option">(د) 0.1094</span>
</div>
<div class="correct-answer">
<strong>✅ الإجابة الصحيحة: <span style="color: #27ae60; background: #d5e8d4; padding: 3px 10px; border-radius: 5px;">(د) 0.1094</span></strong><br><br>
<strong>🔍 الشرح:</strong> كلمة "على الأقل 5" معناها يا إما 5 ولاد أو 6 ولاد. بنحسب احتمال الـ 5 والـ 6 ونجمعهم.
</div>
</div>

<hr>

<div class="question-box">
<div class="question-title">📌 س4: ما هو احتمال وجود أقل من طفلين من الذكور بالأسرة؟</div>
<div class="options">
  <span class="option">(أ) 0.015625</span>
  <span class="option">(ب) 0.109375</span>
  <span class="option">(ج) 0.09375</span>
  <span class="option">(د) 0.5</span>
</div>
<div class="correct-answer">
<strong>✅ الإجابة الصحيحة: <span style="color: #27ae60; background: #d5e8d4; padding: 3px 10px; border-radius: 5px;">(ب) 0.109375</span></strong><br><br>
<strong>🔍 الشرح:</strong> "أقل من طفلين" يعني يا إما (0 ولد) أو (1 ولد فقط). بنحسب الحالتين ونجمعهم.
</div>
</div>

<hr>

<div class="question-box">
<div class="question-title">📌 س5: ما هو احتمال أن يكون عدد الإناث أكثر من عدد الذكور بالأسرة؟</div>
<div class="options">
  <span class="option">(أ) 0.5</span>
  <span class="option">(ب) 0.65625</span>
  <span class="option">(ج) 0.34375</span>
  <span class="option">(د) 0.109375</span>
</div>
<div class="correct-answer">
<strong>✅ الإجابة الصحيحة: <span style="color: #27ae60; background: #d5e8d4; padding: 3px 10px; border-radius: 5px;">(ج) 0.34375</span></strong><br><br>
<strong>🔍 الشرح:</strong> عشان البنات يبقوا أكتر من الولاد في أسرة من 6، لازم يكونوا (4 بنات أو 5 أو 6). مجموع احتمالات الحالات دي = 0.34375.
</div>
</div>

<hr>

<div class="question-box">
<div class="question-title">📌 س6: قيمة المتوسط للأطفال الذكور بالأسرة؟</div>
<div class="options">
  <span class="option">(أ) 3</span>
  <span class="option">(ب) 2.5</span>
  <span class="option">(ج) 1.5</span>
  <span class="option">(د) 6</span>
</div>
<div class="correct-answer">
<strong>✅ الإجابة الصحيحة: <span style="color: #27ae60; background: #d5e8d4; padding: 3px 10px; border-radius: 5px;">(أ) 3</span></strong><br><br>
<strong>🔍 الشرح:</strong> قانون المتوسط = n × p = <strong>6 × 0.5 = 3</strong>.
</div>
</div>

<hr>

<div class="question-box">
<div class="question-title">📌 س7: قيمة التباين للأطفال الذكور بالأسرة؟</div>
<div class="options">
  <span class="option">(أ) 6</span>
  <span class="option">(ب) 0.5</span>
  <span class="option">(ج) 3</span>
  <span class="option">(د) 1.5</span>
</div>
<div class="correct-answer">
<strong>✅ الإجابة الصحيحة: <span style="color: #27ae60; background: #d5e8d4; padding: 3px 10px; border-radius: 5px;">(د) 1.5</span></strong><br><br>
<strong>🔍 الشرح:</strong> قانون التباين = n × p × q = <strong>6 × 0.5 × 0.5 = 1.5</strong>.
</div>
</div>

<hr>

<div class="question-box">
<div class="question-title">📌 س8: قيمة معامل الاختلاف للأطفال الإناث بالأسرة؟</div>
<div class="options">
  <span class="option">(أ) 50%</span>
  <span class="option">(ب) 30.5%</span>
  <span class="option">(ج) 40.82%</span>
  <span class="option">(د) 100%</span>
</div>
<div class="correct-answer">
<strong>✅ الإجابة الصحيحة: <span style="color: #27ae60; background: #d5e8d4; padding: 3px 10px; border-radius: 5px;">(ج) 40.82%</span></strong><br><br>
<strong>🔍 الشرح:</strong> معامل الاختلاف = (الانحراف المعياري ÷ المتوسط) × 100 = (√1.5 ÷ 3) × 100 = (1.225 ÷ 3) × 100 = <strong>40.82%</strong>.
</div>
</div>

<!-- ============================================== -->
<!-- خطوات على الآلة -->
<!-- ============================================== -->

<div class="steps-box">
<div class="step-title">
<h3>🧮 خطوات على الآلة</h3>
<p style="margin-bottom: 20px; font-size: 16px;">
📌 <strong>المطلوب:</strong> حساب احتمال وجود ولدين فقط في أسرة من 6 أطفال<br>
( n = 6 , p = 0.5 , q = 0.5 , x = 2 )
</p>
</div>
<div class="step-item">
1️⃣ n = <strong>6</strong>
</div>
<div class="step-item">
2️⃣ Shift + ÷  →  حرف C على الشاشة
</div>
<div class="step-item">
3️⃣ x = <strong>2</strong>
</div>
<div class="step-item">
4️⃣ ×
</div>
<div class="step-item">
5️⃣ p = <strong>0.5</strong>
</div>
<div class="step-item">
6️⃣ x^□  ثم  <strong>2</strong>
</div>
<div class="step-item">
7️⃣ ×
</div>
<div class="step-item">
8️⃣ q = <strong>0.5</strong>
</div>
<div class="step-item">
9️⃣ x^□  ثم  (n−x) = <strong>4</strong>
</div>
<div class="step-item">
🔟 =
</div>
<div class="result-box">
📱 6C2 × 0.5² × 0.5⁴ = 15 × 0.25 × 0.0625 = 0.234375
</div>
</div>

<!-- ============================================== -->
<!-- مسائل لحل بالآلة (مهم جداً) -->
<!-- ============================================== -->

<div class="warning">
🚨 مهم جداً: تأكد من تطبيق خطوات الآلة بالترتيب:
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