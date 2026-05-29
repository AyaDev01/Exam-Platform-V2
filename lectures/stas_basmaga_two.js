const lectureData = {
  title: "📊 نظرية بييز - السلع المعيبة (الماكينات الثلاثة)",
  isSolvedDocument: true,
  exam: {
    essay: [
      {
        question: "أولاً: جدول نظرية بييز (السلع المعيبة) كما ورد في المصدر",
        modelAnswer: `<style>
.table-container {
  overflow-x: auto;
  margin: 20px 0;
}
.bayes-table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  font-family: Arial, sans-serif;
}
.bayes-table th {
  background-color: #34495e;
  color: white;
  border: 2px solid #2c3e50;
  padding: 12px;
  font-weight: bold;
}
.bayes-table td {
  border: 1px solid #ccc;
  padding: 10px;
}
.bayes-table tr:nth-child(even) {
  background-color: #f9f9f9;
}
.bayes-table tr:nth-child(odd) {
  background-color: #eef2f5;
}
.empty-cell {
  background-color: #fff3e0;
  font-weight: bold;
}
.sum-row {
  background-color: #d5e8d4 !important;
  font-weight: bold;
}
</style>

<div class="table-container">
  <table class="bayes-table">
    <thead>
      <tr>
        <th>الأحداث</th>
        <th>P(M)</th>
        <th>P(F/M)</th>
        <th>P(M)⋅P(F/M)</th>
        <th>P(M/F)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>M₁</strong></td>
        <td>0.8</td>
        <td>0.2</td>
        <td class="empty-cell">P(f⋅m₁)</td>
        <td class="empty-cell">P(M₁/F)</td>
      </tr>
      <tr>
        <td><strong>M₂</strong></td>
        <td>0.15</td>
        <td class="empty-cell">P(f/m₂)</td>
        <td>0.06</td>
        <td class="empty-cell">P(M₂/F)</td>
      </tr>
      <tr>
        <td><strong>M₃</strong></td>
        <td>0.05</td>
        <td>0.6</td>
        <td class="empty-cell">P(f⋅m₃)</td>
        <td class="empty-cell">P(M₃/F)</td>
      </tr>
      <tr class="sum-row">
        <td><strong>المجموع (Σ)</strong></td>
        <td><strong>1</strong></td>
        <td><strong>---</strong></td>
        <td><strong>0.25</strong></td>
        <td><strong>---</strong></td>
      </tr>
    </tbody>
   </table>
</div>

<p style="background: #fff3e0; padding: 10px; border-radius: 8px; margin-top: 15px;">
<strong>📌 ملحوظة:</strong> المجموع النهائي لـ P(M/F) يجب أن يساوي 1 بعد الحل.
</p>`
      },
      {
        question: " P(F/M₂) = ……………؟",
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
</style>

<strong>📌 الاختيارات:</strong>
<div class="options">
  <span class="option">(0.2)</span>
  <span class="option">(0.6)</span>
  <span class="option">(0.4) ✅</span>
  <span class="option">(0.03)</span>
</div>

<div class="correct-answer">
<strong>✅ الإجابة الصحيحة: 0.4</strong><br><br>
 إحنا عارفين إن "الضربية" (الاحتمال المشترك) لـ M₂ هي 0.06، ونصيب إنتاجها 0.15. عشان نعرف نسبة العيوب فيها (P(F/M₂)) بنقسم الناتج على الأصل:<br>
<strong>0.06 ÷ 0.15 = 0.4</strong>
</div>`
      },
      {
        question: "2- P(M₃/F) = ……………؟",
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
</style>

<strong>📌 الاختيارات:</strong>
<div class="options">
  <span class="option">(0.03)</span>
  <span class="option">(0.12) ✅</span>
  <span class="option">(0.24)</span>
  <span class="option">(0.33)</span>
</div>

<div class="correct-answer">
<strong>✅ الإجابة الصحيحة: 0.12</strong><br><br>
 دي "الخلاصة" أو الاحتمال البعدي لـ M₃. بنجيب "ضربيتها" اللي هي (0.05 × 0.6 = 0.03) ونقسمها على "مجموع الضريبات" كله (0.25):<br>
<strong>0.03 ÷ 0.25 = 0.12</strong>
</div>`
      },
      {
        question: "3- P(F⋅M₁) = ……………؟ (الاحتمال المشترك لـ M₁)",
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
</style>

<strong>📌 الاختيارات:</strong>
<div class="options">
  <span class="option">(0.03)</span>
  <span class="option">(0.16) ✅</span>
  <span class="option">(0.4)</span>
  <span class="option">(0.06)</span>
</div>

<div class="correct-answer">
<strong>✅ الإجابة الصحيحة: 0.16</strong><br><br>
 دي سهلة، بنضرب نصيب الماكينة الأولى في الإنتاج (0.8) في نسبة عيوبها (0.2):<br>
<strong>0.8 × 0.2 = 0.16</strong>
</div>`
      },
      {
        question: "4- P(F⋅M₃) = ……………؟ (الاحتمال المشترك لـ M₃)",
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
</style>

<strong>📌 الاختيارات:</strong>
<div class="options">
  <span class="option">(0.03) ✅</span>
  <span class="option">(0.16)</span>
  <span class="option">(0.4)</span>
  <span class="option">(0.06)</span>
</div>

<div class="correct-answer">
<strong>✅ الإجابة الصحيحة: 0.03</strong><br><br>
 زي اللي قبلها، بنضرب نصيب الماكينة الثالثة (0.05) في نسبة عيوبها (0.6):<br>
<strong>0.05 × 0.6 = 0.03</strong>
</div>`
      },
      {
        question: "5- P(M₁/F) = ……………؟",
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
</style>

<strong>📌 الاختيارات:</strong>
<div class="options">
  <span class="option">(0.03)</span>
  <span class="option">(0.12)</span>
  <span class="option">(0.64) ✅</span>
  <span class="option">(0.33)</span>
</div>

<div class="correct-answer">
<strong>✅ الإجابة الصحيحة: 0.64</strong><br><br>
 دي "الخلاصة" للماكينة الأولى. بناخد "ضربيتها" اللي حسبناها في سؤال 3 (0.16) ونقسمها على المجموع الكلي (0.25):<br>
<strong>0.16 ÷ 0.25 = 0.64</strong>
</div>`
      },
      {
        question: "6- P(M₂/F) = ……………؟",
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
</style>

<strong>📌 الاختيارات:</strong>
<div class="options">
  <span class="option">(0.03)</span>
  <span class="option">(0.12)</span>
  <span class="option">(0.24) ✅</span>
  <span class="option">(0.64)</span>
</div>

<div class="correct-answer">
<strong>✅ الإجابة الصحيحة: 0.24</strong><br><br>
 "خلاصة" الماكينة الثانية. بناخد "ضربيتها" الجاهزة في الجدول (0.06) ونقسمها على المجموع (0.25):<br>
<strong>0.06 ÷ 0.25 = 0.24</strong>
</div>`
      },
      {
        question: "7- Sum P(M/F) = ……………؟",
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
</style>

<strong>📌 الاختيارات:</strong>
<div class="options">
  <span class="option">(0.03)</span>
  <span class="option">(0.12)</span>
  <span class="option">(0.24)</span>
  <span class="option">(1) ✅</span>
</div>

<div class="correct-answer">
<strong>✅ الإجابة الصحيحة: 1</strong><br><br>
 دي قاعدة ثابتة في الإحصاء؛ لازم مجموع الاحتمالات البعدية (الخلاصات) في الآخر يقفل معاك 1 صحيح. لو جمعت (0.64 + 0.24 + 0.12) هتلاقيهم بالضبط <strong>1</strong>.
</div>`
      }
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = lectureData;
}