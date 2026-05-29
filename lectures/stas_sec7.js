// stas_sec7.js - اختبار Z لمتوسط مجتمع واحد (شرح بالعامية المصرية)
const lectureData = {
    title: "📊 اختبارات الفروض الإحصائية - اختبار متوسط المجتمع (بنفسجية وشياكة)",
    isSolvedDocument: true,

    content: `
        <div class="solution-box">
            <h2>📊 أولاً: تفصيص المعطيات والحسابات الأساسية</h2>
            <p><strong>قبل ما نبدأ الخناقة، بنجهز الأسلحة والأرقام بتاعتنا من المسألة:</strong></p>
            <ul>
                <li><strong>n = 25</strong> عدد الطلاب اللي في العينة بتاعتك.</li>
                <li><strong>x̄ = 60</strong> متوسط درجات الطلاب في العينة بتاعتك إنتِ.</li>
                <li><strong>σ² = 16</strong> التباين بتاع المجتمع كله → σ = √16 = <strong>4</strong></li>
                <li><strong>α = 0.05</strong> مستوى المعنوية (نسبة الشك 5% يعني واثقين 95%)</li>
                <li><strong>μ = 62</strong> المتوسط اللي العميد بيدّعيه وإحنا رايحين نختبره.</li>
            </ul>

            <div class="box">
                <h3>📏 1. الخطأ المعياري (Standard Error)</h3>
                <p style="text-align:center;">σ_x̄ = σ / √n = 4 / √25 = 4 / 5 = <strong>0.8</strong></p>
            </div>

            <div class="box">
                <h3>📏 2. خطأ التقدير (Margin of Error)</h3>
                <p style="text-align:center;">e = Z_(α/2) × (σ/√n) = 1.96 × 0.8 = <strong>1.568</strong></p>
            </div>

            <div class="box">
                <h3>📏 3. فترة الثقة 95% لمتوسط الدرجات</h3>
                <ul>
                    <li>الحد الأدنى: 60 - 1.568 = <strong>58.432</strong></li>
                    <li>الحد الأعلى: 60 + 1.568 = <strong>61.568</strong></li>
                </ul>
                <p style="text-align:center;">[58.432  ≤  μ  ≤  61.568]</p>
                <p>💡 لاحظ إن 62 بتاعة العميد بره الفترة أصلاً → تلميح للّي هيحصل بعدين 😏</p>
            </div>

            <div class="box">
                <h3>📏 4. طول فترة الثقة</h3>
                <p style="text-align:center;">طول الفترة = 61.568 - 58.432 = <strong>3.136</strong></p>
            </div>

            <h2>🎯 ثالثاً: معركة اختبارات الفروض (الخطوات الـ 3)</h2>
            <p style="text-align:center; font-weight:bold;">Z₍المحسوبة₎ = (x̄ - μ) / (σ/√n) = (60 - 62) / 0.8 = -2 / 0.8 = <strong style="color:#e67e22;">-2.5</strong></p>
            <p>الرقم ده (-2.5) ثابت في الـ 3 اختبارات الجايين، وهو اللي هيحدد مصير الفروض.</p>

            <div class="box">
                <h3>📌 اختبار 1: المتوسط "يختلف عن" 62</h3>
                <ul>
                    <li><strong>نوع الاختبار:</strong> طرفين (Two-tailed)</li>
                    <li><strong>H₀:</strong> μ = 62 &nbsp;&nbsp; <strong>H₁:</strong> μ ≠ 62</li>
                    <li><strong>القيمة الجدولية:</strong> ±1.96</li>
                    <li><strong>القرار:</strong> -2.5 < -1.96 → في منطقة الرفض → ❌ نرفض H₀ ونقبل H₁ → المتوسط يختلف عن 62</li>
                </ul>
            </div>

            <div class="box">
                <h3>📌 اختبار 2: المتوسط "يزيد عن" 62</h3>
                <ul>
                    <li><strong>نوع الاختبار:</strong> طرف واحد يمين (Right-tailed)</li>
                    <li><strong>H₀:</strong> μ = 62 &nbsp;&nbsp; <strong>H₁:</strong> μ > 62</li>
                    <li><strong>القيمة الجدولية:</strong> +1.65</li>
                    <li><strong>القرار:</strong> -2.5 < +1.65 → في منطقة القبول → ✅ نقبل H₀ ونرفض H₁ → المتوسط لا يزيد عن 62</li>
                </ul>
            </div>

            <div class="box">
                <h3>📌 اختبار 3: المتوسط "يقل عن" 62</h3>
                <ul>
                    <li><strong>نوع الاختبار:</strong> طرف واحد يسار (Left-tailed)</li>
                    <li><strong>H₀:</strong> μ = 62 &nbsp;&nbsp; <strong>H₁:</strong> μ < 62</li>
                    <li><strong>القيمة الجدولية:</strong> -1.65</li>
                    <li><strong>القرار:</strong> -2.5 < -1.65 → في منطقة الرفض → ❌ نرفض H₀ ونقبل H₁ → المتوسط يقل عن 62</li>
                </ul>
            </div>
        </div>

        <div class="explanation-box">
            <h2>💡 كبسولة الامتحان (المفاتيح الذهبية)</h2>
            <div class="box">
                <ul>
                    <li>🔹 كلمة "يختلف" ← اختبار طرفين ← نقارن |Z| > 1.96</li>
                    <li>🔹 كلمة "يزيد" ← اختبار طرف يمين ← نرفض لو Z₍محسوبة₎ > +1.65</li>
                    <li>🔹 كلمة "يقل" ← اختبار طرف شمال ← نرفض لو Z₍محسوبة₎ < -1.65</li>
                </ul>
                <p style="background: #111010; padding: 10px; border-radius: 8px; text-align:center;">
                    ⚡ خلاصة مثالنا: Z₍محسوبة₎ = -2.5<br>
                    يختلف عن 62 → ✅ نعم<br>
                    يزيد عن 62 → ❌ لأ<br>
                    يقل عن 62 → ✅ أيوه
                </p>
            </div>
        </div>
    `,
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = lectureData;
}