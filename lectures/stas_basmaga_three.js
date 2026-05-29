const lectureData = {
  title: "📊 نظرية بييز - مسألة الشجرة الاحتمالية (المسارات Z, L, W, D)",
  isSolvedDocument: true,
  exam: {
    essay: [
      {
        question: "أولاً: الشجرة الاحتمالية كما وردت في المسألة",
        modelAnswer: `<style>
/* باقي الستايلات */
.tree-container {
  overflow-x: auto;
  margin: 20px 0;
  text-align: center;
}
.prob-tree {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  font-family: monospace;
  font-size: 16px;
}
.prob-tree th, .prob-tree td {
  border: 1px solid #ccc;
  padding: 10px;
}
.prob-tree th {
  background-color: #34495e;
  color: white;
}
.category-cell {
  background-color: #e8f4f8;
  font-weight: bold;
}
.value-cell {
  background-color: #fff3e0;
}
</style>

<!-- 🔽 الصورة دي هتظهر في كل الأجهزة 🔽 -->
<div style="text-align: center; margin: 20px 0;">
  <img 
    src="Gemini_Generated_Image_5ne7de5ne7de5ne7.png" 
    alt="الشجرة الاحتمالية - المسارات Z, L, W, D"
    style="max-width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);"
  />
  <p style="font-size: 12px; color: #666; margin-top: 5px;">📊 الشجرة الاحتمالية للمسارات (Z, L, W, D)</p>
</div>

<!-- 🔽 الجدول المرسوم تحت الصورة (كخيار إضافي للتوضيح) 🔽 -->
<div style="overflow-x: auto; margin: 20px 0;">
  
   <p style="margin-top: 10px; text-align: center;">📍 Z = 60% | L = 40% | W = 36% | D = 64%</p>
</div>

<p style="background: #fff3e0; padding: 10px; border-radius: 8px; margin-top: 15px;">
<strong>📌 ملحوظة:</strong> مجموع الاحتمالات الكلي يجب أن يساوي 1 (أو 100%).
</p>`
      },
      {
        question: "ثانياً: حل الأسئلة مع الشرح المبسط\n\n1- P(D|L) = ……………؟",
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
  <span class="option">(0.60)</span>
  <span class="option">(0.40) ✅</span>
  <span class="option">(0.80)</span>
  <span class="option">(0.20)</span>
</div>

<div class="correct-answer">
<strong>✅ الإجابة الصحيحة: 0.40</strong><br><br>
السؤال بيقولك: "لو إحنا في طريق L، إيه احتمال نروح لـ D؟". بص على فرع L، الـ W واخدة 60% يبقى الـ D هي اللي فاضلة عشان نكمل الـ 100%، يعني <strong>0.40</strong>.
</div>`
      },
      {
        question: "2- P(Z|W) = ……………؟",
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
  <span class="option">(0.20)</span>
  <span class="option">(0.33) ✅</span>
  <span class="option">(0.50)</span>
  <span class="option">(0.67)</span>
</div>

<div class="correct-answer">
<strong>✅ الإجابة الصحيحة: 0.33 (أو 33.3%)</strong><br><br>
هنا بيعكس السؤال (بييز): "لو عرفنا إننا وصلنا لـ W، يا ترى إيه احتمال نكون جينا من طريق Z؟". بنحسب طريق (Z مع W) وهو 0.6 × 0.2 = 0.12، ونقسمه على كل اللي بيوصل لـ W في الشجرة (0.36). تطلع النسبة ثلث (0.33).
</div>`
      },
      {
        question: "3- P(Z∩D) = ……………؟",
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
  <span class="option">(0.12)</span>
  <span class="option">(0.24)</span>
  <span class="option">(0.48) ✅</span>
  <span class="option">(0.60)</span>
</div>

<div class="correct-answer">
<strong>✅ الإجابة الصحيحة: 0.48</strong><br><br>
علامة ∩ يعني "تقاطع" أو "و". يعني عايزك تمشي المشوار من الأول: تروح لـ Z وبعدين تروح لـ D. اضرب الرقمين في بعض وأنت ماشي على الخط: 0.6 × 0.8 = <strong>0.48</strong>.
</div>`
      },
      {
        question: "4- P(Z) = ……………؟",
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
  <span class="option">(40%)</span>
  <span class="option">(60%) ✅</span>
  <span class="option">(80%)</span>
  <span class="option">(20%)</span>
</div>

<div class="correct-answer">
<strong>✅ الإجابة الصحيحة: 60% (أو 0.60)</strong><br><br>
دي أول تقسيمة في الشجرة من ناحية الشمال. لو الـ L خدت 40% من الناس، يبقى أكيد الـ Z هتاخد الباقي اللي هو <strong>60%</strong>.
</div>`
      },
      {
        question: "5- P(L|W) = ……………؟",
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
  <span class="option">(33.3%)</span>
  <span class="option">(50%)</span>
  <span class="option">(66.6%) ✅</span>
  <span class="option">(75%)</span>
</div>

<div class="correct-answer">
<strong>✅ الإجابة الصحيحة: 66.6% (أو 0.666)</strong><br><br>
زي سؤال 2، "لو إحنا عند W، إيه احتمال نكون جايين من L؟". بنجيب طريق (L مع W) وهو 0.4 × 0.6 = 0.24، ونقسمه على إجمالي الـ W اللي هو 0.36. تطلع النسبة ثلثين (66.6%).
</div>`
      },
      {
        question: "6- P(L|D) = ……………؟",
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
  <span class="option">(15%)</span>
  <span class="option">(20%)</span>
  <span class="option">(25%) ✅</span>
  <span class="option">(30%)</span>
</div>

<div class="correct-answer">
<strong>✅ الإجابة الصحيحة: 25% (أو 0.25)</strong><br><br>
"لو وصلنا لـ D، إيه احتمال نكون جينا من طريق L؟". بنجيب طريق (L مع D) وهو 0.4 × 0.4 = 0.16، ونقسمه على إجمالي الـ D في الشجرة كلها (0.64). تطلع النسبة الربع (25%).
</div>`
      },
      {
        question: "7- P(Z|D) = ……………؟",
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
  <span class="option">(50%)</span>
  <span class="option">(65%)</span>
  <span class="option">(70%)</span>
  <span class="option">(75%) ✅</span>
</div>

<div class="correct-answer">
<strong>✅ الإجابة الصحيحة: 75% (أو 0.75)</strong><br><br>
دي بقية السؤال اللي فات. لو الـ L خدت 25% من اللي راحوا لـ D، يبقى الـ Z هتاخد الباقي اللي هو <strong>75%</strong>.
</div>`
      },
      {
        question: "8- P(W|Z) = ……………؟",
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
  <span class="option">(0.20) ✅</span>
  <span class="option">(0.40)</span>
  <span class="option">(0.60)</span>
  <span class="option">(0.80)</span>
</div>

<div class="correct-answer">
<strong>✅ الإجابة الصحيحة: 0.20</strong><br><br>
السؤال: "لو إحنا في طريق Z، إيه احتمال نروح لـ W؟". بص على فرع Z في الرسمة، الـ D واخدة 80% يبقى الـ W هي التكملة بتاعتها <strong>20%</strong>.
</div>`
      },
      {
        question: "9- P(Z∩W) = ……………؟",
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
  <span class="option">(0.08)</span>
  <span class="option">(0.12) ✅</span>
  <span class="option">(0.16)</span>
  <span class="option">(0.24)</span>
</div>

<div class="correct-answer">
<strong>✅ الإجابة الصحيحة: 0.12</strong><br><br>
هنمشي المشوار "و" يعني ضرب. نروح لـ Z (0.6) وبعدين ندخل لـ W (0.2). نضربهم: 0.6 × 0.2 = <strong>0.12</strong>.
</div>`
      }
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = lectureData;
}