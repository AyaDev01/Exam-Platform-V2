
const lectureData = {
    title: "📊 اختبار الفروض الإحصائية: مقارنة متوسطي مجموعتين مستقلتين ",
    isSolvedDocument: true,

    content: `
        <div class="solution-box">
            <h2>📊 أولاً: تفصيص المعطيات (بيانات المجموعتين)</h2>
            <p><strong>الورقة متلخبطة شوية في الحروف المكتوبة، بس الحل مطلع البيانات الصح ومجهزها كالتالي:</strong></p>
            
            <div class="box">
                <h3>📌 المجموعة الأولى (طلاب الأستاذ A)</h3>
                <ul>
                    <li>عدد الطلاب: <strong>n₁ = 12</strong> طالب</li>
                    <li>متوسط درجاتهم: <strong>X̄₁ = 85</strong> درجة</li>
                    <li>الانحراف المعياري: <strong>S₁ = 4</strong> درجات</li>
                </ul>
            </div>

            <div class="box">
                <h3>📌 المجموعة الثانية (طلاب الأستاذ B)</h3>
                <ul>
                    <li>عدد الطلاب: <strong>n₂ = 10</strong> طلاب</li>
                    <li>متوسط درجاتهم: <strong>X̄₂ = 81</strong> درجة (مكتوبة في السؤال فوق غلط 21 بس تحت في الحل مكتوبة صح 81)</li>
                    <li>الانحراف المعياري: <strong>S₂ = 5</strong> درجات</li>
                </ul>
            </div>

            <div class="box">
                <h3>📌 القيمة الجدولية (اللي بنقارن بيها في الآخر)</h3>
                <p>قيمة t الجدولية عند مستوى معنوية 0.05 ودرجة حرية 20 هي <strong>t = 2.101</strong></p>
            </div>

            <h2>🎯 ثانياً: تحديد الفروض (Hypotheses)</h2>
            <div class="box">
                <ul>
                    <li><strong>فرض العدم (H₀):</strong> μ₁ = μ₂ → مفيش أي اختلاف في مستوى التدريس بين الأستاذين، والفرق البسيط في الدرجات ده مجرد صدفة.</li>
                    <li><strong>الفرض البديل (H₁):</strong> μ₁ ≠ μ₂ → لأ، فيه اختلاف حقيقي في مستوى التدريس بينهم.</li>
                </ul>
            </div>

            <h2>📐 ثالثاً: حساب التباين المشترك (Sₚ²)</h2>
            <div class="box">
                <p>بما إن العينات صغيرة (أقل من 30 طالب)، فما ينفعش نشتغل بكل انحراف معياري لوحده، لازم ندمجهم ونجيب حاجة اسمها التباين المشترك:</p>
                <p style="text-align:center; font-weight:bold;">Sₚ² = [(n₁-1)S₁² + (n₂-1)S₂²] / (n₁ + n₂ - 2)</p>
                <ul>
                    <li><strong>البسط:</strong> (11 × 16) + (9 × 25) = 176 + 225 = 401</li>
                    <li><strong>المقام (درجات الحرية):</strong> 12 + 10 - 2 = 20</li>
                    <li><strong>النتيجة:</strong> Sₚ² = 401 / 20 = <strong>20.05</strong></li>
                </ul>
            </div>

            <h2>⚡ رابعاً: حساب قيمة t المحسوبة</h2>
            <div class="box">
                <p style="text-align:center; font-weight:bold;">t = (X̄₁ - X̄₂) / √[ Sₚ² × (1/n₁ + 1/n₂) ]</p>
                <ul>
                    <li><strong>البسط:</strong> 85 - 81 = 4</li>
                    <li><strong>المقام (الخطأ المعياري Sₑ):</strong> √[ 20.05 × (1/12 + 1/10) ] = √[20.05 × 0.18333] = √3.675 = <strong>1.917</strong></li>
                    <li><strong>t المحسوبة:</strong> 4 / 1.917 = <strong>2.087</strong></li>
                </ul>
            </div>

            <h2>📌 خامساً: اتخاذ القرار</h2>
            <div class="box">
                <p>الحل راسم رسمة "المنحنى"، وحاطط حدود القيمة الجدولية اللي هي <strong>±2.101</strong>.</p>
                <p>أي رقم يقع بين -2.101 و +2.101 يبقى في <strong>منطقة القبول</strong> (بنيجي في السليم ونقبل فرض العدم).</p>
                <p>بما إن t المحسوبة طلعت <strong>2.087</strong>، وهي أصغر من القيمة الجدولية 2.101 (يعني واقعة جوة منطقة القبول قبل الخط بشوية صغيرة):</p>
                <p style="background: #0c0c0c; padding: 10px; border-radius: 8px;">✅ <strong>القرار:</strong> نقبل فرض العدم (H₀) → لا يوجد اختلاف جوهري في مستوى التدريس بين الأستاذين عند مستوى معنوية 0.05.</p>
            </div>

            <h2>📏 سادساً: تقدير فترة الثقة للفرق بين المتوسطين (95%)</h2>
            <div class="box">
                <p style="text-align:center; font-weight:bold;">(X̄₁ - X̄₂) ± (t × Sₑ)</p>
                <ul>
                    <li><strong>الحد الأعلى:</strong> 4 + (2.101 × 1.917) = 4 + 4.028 = <strong>8.028</strong></li>
                    <li><strong>الحد الأدنى:</strong> 4 - (2.101 × 1.917) = 4 - 4.028 = <strong>-0.028</strong></li>
                </ul>
                <p style="text-align:center;">فترة الثقة: <strong>[-0.028 , 8.028]</strong></p>
                <p>💡 بما إن الفترة دي بتمر بالصفر (من السوالب للموجب)، ده بيمشي جداً مع قرارنا فوق إن مفيش فرق حقيقي بينهم.</p>
            </div>

            <h2>📐 سابعاً: خطأ التقدير وطول فترة الثقة</h2>
            <div class="box">
                <ul>
                    <li><strong>خطأ التقدير (E):</strong> t × Sₑ = 2.101 × 1.917 = <strong>4.028</strong></li>
                    <li><strong>طول فترة الثقة:</strong> الحد الأعلى - الحد الأدنى = 8.028 - (-0.028) = <strong>8.056</strong></li>
                    <li>أو طول الفترة = 2 × E = 2 × 4.028 = <strong>8.056</strong> ✅</li>
                </ul>
            </div>
        </div>

        <div class="explanation-box">
            <h2>💡 كبسولة الامتحان (المفاتيح الذهبية)</h2>
            <div class="box">
                <ul>
                    <li>🔹 <strong>اختبار t لعينتين مستقلتين</strong> بنستخدمه لما العينات صغيرة (n < 30) والتباين مش معروف.</li>
                    <li>🔹 <strong>التباين المشترك Sₚ²</strong> بندمج فيه التباينين عشان نزيد دقة التقدير.</li>
                    <li>🔹 <strong>درجات الحرية</strong> = n₁ + n₂ - 2</li>
                    <li>🔹 <strong>قاعدة القرار:</strong> لو |t₍محسوبة₎| > t₍جدولية₎ نرفض H₀، ولو أصغر نقبل H₀.</li>
                    <li>🔹 <strong>فترة الثقة</strong> لو عدت بالصفر → معناه إن مفيش فرق حقيقي بين المجموعتين.</li>
                </ul>
                <p style="background: #0c0c0c; padding: 10px; border-radius: 8px; text-align:center;">
                    ⚡ <strong>خلاصة مثالنا:</strong><br>
                    t₍محسوبة₎ = 2.087 &nbsp;&nbsp; | &nbsp;&nbsp; t₍جدولية₎ = 2.101<br>
                    2.087 < 2.101 → نقبل H₀ → مفيش فرق بين الأستاذين 🎓
                </p>
            </div>
        </div>
    `,
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = lectureData;
}