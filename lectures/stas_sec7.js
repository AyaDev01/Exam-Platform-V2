// stas_sec6.js
const lectureData = {
    title: "📊 شرح مبسط: اختبارات الفروض الإحصائية (Hypothesis Testing) - اختبار متوسط المجتمع",
    isSolvedDocument: true,

    // ═══ شرح المسألة وحلها بالكامل + الشرح المبسط ═══
    content: `
        <div class="solution-box">
            <h2>📊 أولاً: نص المسألة وحلها بالكامل</h2>
            <p><strong>أهلاً بك. هذا الدرس يدور حول "اختبارات الفروض الإحصائية" - حيث لا نقوم بمجرد تقدير أرقام، بل نقوم باختبار ادعاء أو فرضية معينة لنرى هل هي صحيحة أم خاطئة بناءً على البيانات المتوفرة لدينا من العينة.</strong></p>
            
            <div class="box">
                <h3>📊 البيانات المعطاة في المسألة (مفاتيح الحل)</h3>
                <ul>
                    <li><strong>حجم العينة (n):</strong> n = <strong>25</strong> طالب</li>
                    <li><strong>الوسط الحسابي للعينة (x̄):</strong> x̄ = <strong>60</strong> درجة</li>
                    <li><strong>تباين المجتمع (σ²):</strong> σ² = <strong>16</strong> → الانحراف المعياري (σ) = √16 = <strong>4</strong></li>
                    <li><strong>مستوى المعنوية (α):</strong> α = <strong>0.05</strong> (5%)</li>
                    <li><strong>الفرض المراد اختباره:</strong> μ = <strong>62</strong> درجة</li>
                </ul>
            </div>

            <div class="box">
                <h3>🛠️ أولاً: حساب المقاييس الإحصائية الأساسية</h3>
                
                <h4>📏 1. حساب الخطأ المعياري (Standard Error)</h4>
                <p style="text-align:center; font-weight:bold; font-size:1.1rem;">σ<sub>x̄</sub> = σ / √n</p>
                <p style="text-align:center;">σ<sub>x̄</sub> = 4 / √25 = 4 / 5 = <strong style="color:#27ae60;">0.8</strong></p>

                <h4>📏 2. حساب خطأ التقدير (Margin of Error - e)</h4>
                <p style="text-align:center; font-weight:bold; font-size:1.1rem;">e = Z<sub>α/2</sub> × (σ / √n)</p>
                <p style="text-align:center;">e = 1.96 × 0.8 = <strong style="color:#27ae60;">1.568</strong></p>

                <h4>📏 3. تقدير فترة الثقة (95%) لمتوسط درجات الطلاب (μ)</h4>
                <ul>
                    <li><strong>الحد الأدنى (L.C.L):</strong> 60 - 1.568 = <strong>58.432</strong></li>
                    <li><strong>الحد الأعلى (U.C.L):</strong> 60 + 1.568 = <strong>61.568</strong></li>
                </ul>
                <p style="text-align:center; font-weight:bold;">[58.432  ≤  μ  ≤  61.568]</p>

                <h4>📏 4. طول فترة الثقة</h4>
                <p style="text-align:center;">طول الفترة = 61.568 - 58.432 = <strong style="color:#27ae60;">3.136</strong></p>
            </div>

            <div class="box">
                <h3>🎯 ثانياً: اختبارات الفروض الإحصائية (الخطوات الرئيسية)</h3>
                <p><strong>قيمة Z المحسوبة (ثابتة في جميع الاختبارات):</strong></p>
                <p style="text-align:center; font-weight:bold; font-size:1.1rem;">Z<sub>المحسوبة</sub> = (x̄ - μ) / (σ/√n) = (60 - 62) / 0.8 = (-2) / 0.8 = <strong style="color:#e67e22;">-2.5</strong></p>
                
                <p><strong>الفروض الأساسية:</strong></p>
                <ul>
                    <li><strong>فرض العدم (H₀):</strong> الفرض الأساسي المراد اختبار صحته، يقول أن المتوسط = القيمة المدعاة (μ = 62)</li>
                    <li><strong>الفرض البديل (H₁):</strong> نلجأ إليه إذا رفضنا الفرض الأول</li>
                </ul>

                <h4>📌 اختبار 1: متوسط درجات الطلاب "يختلف عن" (62) درجة</h4>
                <p><strong>نوع الاختبار:</strong> اختبار من طرفين (ذيلين) - لأن كلمة "يختلف" تعني أكبر أو أصغر.</p>
                <ul>
                    <li><strong>صياغة الفروض:</strong> H₀: μ = 62  /  H₁: μ ≠ 62</li>
                    <li><strong>القيمة الجدولية:</strong> عند α = 0.05 (طرفين) → Z = <strong>±1.96</strong></li>
                    <li><strong>القرار:</strong> Z<sub>محسوبة</sub> = -2.5 < -1.96 → تقع في <strong>منطقة الرفض</strong></li>
                    <li><strong>النتيجة:</strong> <span style="color:#27ae60;">✅ نرفض H₀ ونقبل H₁ → متوسط الدرجات يختلف عن 62 درجة</span></li>
                </ul>

                <h4>📌 اختبار 2: متوسط درجات الطلاب "يزيد عن" (62) درجة</h4>
                <p><strong>نوع الاختبار:</strong> اختبار من طرف واحد جهة اليمين (موجب).</p>
                <ul>
                    <li><strong>صياغة الفروض:</strong> H₀: μ = 62  /  H₁: μ > 62</li>
                    <li><strong>القيمة الجدولية:</strong> عند α = 0.05 (طرف واحد) → Z = <strong>+1.65</strong></li>
                    <li><strong>القرار:</strong> Z<sub>محسوبة</sub> = -2.5 < +1.65 → تقع في <strong>منطقة القبول</strong></li>
                    <li><strong>النتيجة:</strong> <span style="color:#27ae60;">✅ نقبل H₀ ونرفض H₁ → متوسط الدرجات لا يزيد عن 62 درجة</span></li>
                </ul>

                <h4>📌 اختبار 3: متوسط درجات الطلاب "يقل عن" (62) درجة</h4>
                <p><strong>نوع الاختبار:</strong> اختبار من طرف واحد جهة اليسار (سالب).</p>
                <ul>
                    <li><strong>صياغة الفروض:</strong> H₀: μ = 62  /  H₁: μ < 62</li>
                    <li><strong>القيمة الجدولية:</strong> عند α = 0.05 (طرف واحد) → Z = <strong>-1.65</strong></li>
                    <li><strong>القرار:</strong> Z<sub>محسوبة</sub> = -2.5 < -1.65 → تقع في <strong>منطقة الرفض</strong></li>
                    <li><strong>النتيجة:</strong> <span style="color:#27ae60;">✅ نرفض H₀ ونقبل H₁ → متوسط الدرجات يقل عن 62 درجة</span></li>
                </ul>
            </div>
        </div>

        <div class="explanation-box">
            <h2>💡 ثانياً: الشرح المبسط (تبسيط الفكرة الكلية)</h2>
            
            <div class="box">
                <h3>🎈 ما هي اختبارات الفروض الإحصائية؟</h3>
                <p>اختبار الفرض هو طريقة إحصائية نستخدمها لاتخاذ قرار بشأن ادعاء معين (مثل "متوسط درجات الطلاب هو 62") باستخدام بيانات من عينة صغيرة. السؤال الأساسي: هل الاختلاف بين متوسط العينة (60) والادعاء (62) حقيقي أم مجرد صدفة عشوائية؟</p>
                <p><strong>مثال توضيحي:</strong> لو قال أحدهم "متوسط طول الطلاب في الجامعة 170 سم"، وأخذت عينة ووجدت متوسطها 165 سم. هل هذا يعني أن الادعاء خاطئ؟ أم أن عينتي كانت غير محظوظة فقط؟ اختبارات الفروض تجيب على هذا السؤال علمياً.</p>
            </div>

            <div class="box">
                <h3>🔑 المفاتيح الذهبية لاختبارات الفروض</h3>
                <ul>
                    <li><strong>فرض العدم (H₀):</strong> هو الفرض الذي نفترض صحته أولاً، وعادة ما يحتوي على علامة (=).</li>
                    <li><strong>الفرض البديل (H₁):</strong> هو عكس فرض العدم، ويمكن أن يكون:
                        <ul>
                            <li><strong>≠ (يختلف):</strong> اختبار من طرفين (Two-tailed)</li>
                            <li><strong>> (يزيد):</strong> اختبار من طرف واحد جهة اليمين (Right-tailed)</li>
                            <li><strong>< (يقل):</strong> اختبار من طرف واحد جهة اليسار (Left-tailed)</li>
                        </ul>
                    </li>
                    <li><strong>مستوى المعنوية (α):</strong> احتمال رفض فرض العدم بالخطأ، وعادة يكون 0.05 أو 0.01.</li>
                    <li><strong>القيمة المحسوبة:</strong> تحسب من بيانات العينة (هنا كانت -2.5).</li>
                    <li><strong>القيمة الجدولية:</strong> قيمة ثابتة نحددها من جداول التوزيع الطبيعي حسب α ونوع الاختبار.</li>
                </ul>
            </div>

            <div class="box">
                <h3>📌 قاعدة القرار (كيف نحكم؟)</h3>
                <ul>
                    <li><strong>اختبار من طرفين:</strong> نرفض H₀ إذا كانت |Z<sub>محسوبة</sub>| > Z<sub>جدولية</sub></li>
                    <li><strong>اختبار من طرف واحد (أكبر):</strong> نرفض H₀ إذا كانت Z<sub>محسوبة</sub> > Z<sub>جدولية</sub></li>
                    <li><strong>اختبار من طرف واحد (أصغر):</strong> نرفض H₀ إذا كانت Z<sub>محسوبة</sub> < -Z<sub>جدولية</sub></li>
                </ul>
                <p style="background-color:white; color:black; padding:10px; border-radius:8px; text-align:center;">
                    <strong>📝 خلاصة مثالنا:</strong> Z<sub>محسوبة</sub> = -2.5<br>
                    عند اختبار "يختلف" → -2.5 < -1.96 → نرفض H₀<br>
                    عند اختبار "يزيد" → -2.5 < +1.65 → نقبل H₀<br>
                    عند اختبار "يقل" → -2.5 < -1.65 → نرفض H₀
                </p>
            </div>

            <div class="box">
                <h3>📝 ملاحظة هامة جداً</h3>
                <p>القيم الجدولية المعروفة في التوزيع الطبيعي القياسي:</p>
                <ul>
                    <li>عند α = 0.05 (طرفين) → Z = <strong>±1.96</strong></li>
                    <li>عند α = 0.05 (طرف واحد) → Z = <strong>±1.65</strong></li>
                    <li>عند α = 0.01 (طرفين) → Z = <strong>±2.58</strong></li>
                    <li>عند α = 0.01 (طرف واحد) → Z = <strong>±2.33</strong></li>
                </ul>
            </div>
        </div>
    `,
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = lectureData;
}