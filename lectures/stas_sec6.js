// stas_sec5.js
const lectureData = {
    title: "📊 شرح مبسط: التقديرات الإحصائية (Statistical Estimation) - فترة الثقة لمتوسط المجتمع",
    isSolvedDocument: true,

    // ═══ شرح المسألة وحلها بالكامل + الشرح المبسط ═══
    content: `
        <div class="solution-box">
            <h2>📊 أولاً: نص المسألة وحلها بالكامل</h2>
            <p><strong>أهلاً بك. هذا الدرس يدور حول كيفية تقدير "متوسط المجتمع الكلي" الذي لا نعرفه، بناءً على معلومات نأخذها من "عينة صغيرة".</strong></p>
            
            <div class="box">
                <h3>📊 البيانات المعطاة في المسألة (المفاتيح)</h3>
                <ul>
                    <li><strong>حجم العينة (n):</strong> n = <strong>25</strong> مفردة</li>
                    <li><strong>الوسط الحسابي للعينة (x̄):</strong> x̄ = <strong>80</strong></li>
                    <li><strong>الانحراف المعياري للمجتمع (σ):</strong> σ = <strong>30</strong></li>
                    <li><strong>درجة الثقة المطلوبة:</strong> <strong>95%</strong></li>
                    <li><strong>القيمة الحرجة (Z<sub>α/2</sub>):</strong> عند ثقة 95%، Z = <strong>1.96</strong></li>
                </ul>
            </div>

            <div class="box">
                <h3>📏 1. حساب الخطأ المعياري (Standard Error)</h3>
                <p><strong>المفهوم:</strong> هو مقياس لمدى دقة وسط العينة في تمثيل وسط المجتمع الكلي.</p>
                <p style="text-align:center; font-weight:bold; font-size:1.1rem;">σ<sub>x̄</sub> = σ / √n</p>
                <p style="text-align:center;">σ<sub>x̄</sub> = 30 / √25 = 30 / 5 = <strong style="color:#27ae60;">6</strong></p>
                <p><strong>النتيجة: الخطأ المعياري = 6</strong></p>
            </div>

            <div class="box">
                <h3>📏 2. حساب خطأ التقدير (Margin of Error - e)</h3>
                <p><strong>المفهوم:</strong> هو أقصى قيمة مسموح بها للخطأ بين متوسط العينة ومتوسط المجتمع عند درجة ثقة معينة.</p>
                <p style="text-align:center; font-weight:bold; font-size:1.1rem;">e = Z<sub>α/2</sub> × (σ / √n)</p>
                <p style="text-align:center;">e = 1.96 × 6 = <strong style="color:#27ae60;">11.76</strong></p>
                <p><strong>النتيجة: خطأ التقدير = 11.76</strong></p>
            </div>

            <div class="box">
                <h3>📏 3. تقدير فترة الثقة (95%) لمتوسط المجتمع (μ)</h3>
                <p><strong>المفهوم:</strong> بناء فترة (مدى رقمي) نثق بنسبة 95% أن متوسط المجتمع الكلي (μ) يقع بداخلها.</p>
                <p style="text-align:center; font-weight:bold; font-size:1.1rem;">[x̄ - e  ≤  μ  ≤  x̄ + e]</p>
                
                <h4>أ) الحد الأعلى لفترة الثقة (U.C.L)</h4>
                <p style="text-align:center;">U.C.L = x̄ + e = 80 + 11.76 = <strong style="color:#27ae60;">91.76</strong></p>
                
                <h4>ب) الحد الأدنى لفترة الثقة (L.C.L)</h4>
                <p style="text-align:center;">L.C.L = x̄ - e = 80 - 11.76 = <strong style="color:#27ae60;">68.24</strong></p>
                
                <h4>📝 كتابة فترة الثقة النهائية:</h4>
                <p style="text-align:center; font-weight:bold; font-size:1.1rem;">[68.24  ≤  μ  ≤  91.76]</p>
                <p><strong>التعليق الإحصائي:</strong> نحن نثق بنسبة 95% أن متوسط المجتمع الحقيقي (μ) يقع بين 68.24 و 91.76.</p>
            </div>

            <div class="box">
                <h3>📏 4. حساب طول فترة الثقة (Width of Confidence Interval)</h3>
                <p><strong>المفهوم:</strong> هو المسافة الإجمالية بين الحدين الأعلى والأدنى.</p>
                <p><strong>القانون الأول (بالطرح):</strong></p>
                <p style="text-align:center;">طول الفترة = U.C.L - L.C.L = 91.76 - 68.24 = <strong style="color:#27ae60;">23.52</strong></p>
                <p><strong>القانون الثاني البديل (للتأكيد):</strong></p>
                <p style="text-align:center;">طول الفترة = 2 × e = 2 × 11.76 = <strong style="color:#27ae60;">23.52</strong></p>
                <p><strong>النتيجة: طول فترة الثقة = 23.52</strong></p>
            </div>
        </div>

        <div class="explanation-box">
            <h2>💡 ثانياً: الشرح المبسط (تبسيط الفكرة الكلية)</h2>
            
            <div class="box">
                <h3>🎈 ما هي التقديرات الإحصائية؟</h3>
                <p>التقديرات الإحصائية هي طريقة نستخدمها لمعرفة قيمة شيء لا يمكننا قياسه بالكامل (مثل متوسط درجات كل طلاب مصر في مادة معينة) باستخدام معلومات من عينة صغيرة فقط.</p>
                <p><strong>مثال توضيحي:</strong> لو أردت معرفة متوسط دخل جميع سكان مدينة، لا يمكنك مقابلة كل شخص! لكن يمكنك أخذ عينة عشوائية وحساب متوسطهم، ثم بناء "فترة ثقة" تقول: "أنا واثق بنسبة 95% أن متوسط الدخل الحقيقي يقع بين رقمين معينين".</p>
            </div>

            <div class="box">
                <h3>🔑 المفاتيح الذهبية لحل مسائل التقديرات</h3>
                <ul>
                    <li><strong>الخطأ المعياري (σ/√n):</strong> كلما زاد حجم العينة (n)، قل الخطأ المعياري، وزادت دقة التقدير.</li>
                    <li><strong>خطأ التقدير (e = Z × σ/√n):</strong> يعتمد على:
                        <ul>
                            <li>درجة الثقة (Z): ثقة أعلى → Z أكبر → خطأ تقدير أكبر → فترة أوسع</li>
                            <li>حجم العينة (n): عينة أكبر → خطأ تقدير أصغر → فترة أضيق</li>
                            <li>تباين المجتمع (σ): تشتت أكبر → خطأ تقدير أكبر → فترة أوسع</li>
                        </ul>
                    </li>
                    <li><strong>القيم الحرجة (Z) المعروفة:</strong>
                        <ul>
                            <li>عند ثقة 90% → Z = 1.645</li>
                            <li>عند ثقة 95% → Z = 1.96</li>
                            <li>عند ثقة 99% → Z = 2.576</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div class="box">
                <h3>📌 قوانين سريعة للحل</h3>
                <ul>
                    <li><strong>الخطأ المعياري:</strong> σ<sub>x̄</sub> = σ / √n</li>
                    <li><strong>خطأ التقدير:</strong> e = Z × (σ / √n)</li>
                    <li><strong>الحد الأدنى:</strong> L.C.L = x̄ - e</li>
                    <li><strong>الحد الأعلى:</strong> U.C.L = x̄ + e</li>
                    <li><strong>طول الفترة:</strong> U.C.L - L.C.L = 2 × e</li>
                </ul>
            </div>

            <div class="box">
                <h3>📝 ملاحظة هامة جداً</h3>
                <p>في التوزيع الطبيعي، درجة الثقة 95% تقابلها دائماً قيمة معيارية محفوظة لـ Z (القيمة الحرجة Z<sub>α/2</sub>) وتساوي تماماً <strong>1.96</strong>.</p>
            </div>
        </div>
    `,
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = lectureData;
}