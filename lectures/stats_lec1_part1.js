// stats_lec1_part1.js
const lectureData = {
  title: "📊 الفصل الاول : مقدمة في الاحتمالات - الجزء الأول",

  content: `
           <style>
    .lec-content li {
        margin-bottom: 12px;
        line-height: 1.7;
        text-align: justify;
    }
    .lec-content li strong:first-child {
        display: inline;
    }
    .lec-content ul, .lec-content ol {
        padding-right: 18px;
        margin-bottom: 15px;
    }
    .lec-content p {
        line-height: 1.7;
        margin-bottom: 12px;
        text-align: justify;
    }
    .lec-content h2 {
        margin-top: 25px;
        margin-bottom: 15px;
        font-size: 1.3em;
    }
    .lec-content h3 {
        margin-top: 20px;
        margin-bottom: 12px;
        font-size: 1.1em;
    }
    .lec-content h4 {
        margin-top: 15px;
        margin-bottom: 10px;
        font-size: 1em;
    }
    .lec-content .box {
        margin-bottom: 15px;
        padding: 15px;
    }
    .lec-content .highlight {
        background-color: #f0f8ff;
        border-right: 4px solid #2196F3;
        padding: 10px 15px;
        margin: 10px 0;
    }
    .lec-content .insight {
        background-color: #141414;
        border-right: 4px solid #045a46;
        padding: 10px 15px;
        margin: 10px 0;
        font-style: italic;
    }
    .tree-img {
        display: flex;
        justify-content: center;
        margin: 20px 0;
    }
    .tree-img img {
        max-width: 100%;
        height: auto;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    
    /* ═══ تنسيق الجداول المُحسَّن ═══ */
    .lec-content table {
        border-collapse: collapse;
        width: 100%;
        margin: 15px 0;
        font-size: 0.95em;
        direction: rtl;
    }
    .lec-content th, 
    .lec-content td {
        border: 1px solid #444;
        padding: 10px 8px;
        text-align: center;
        white-space: nowrap;
        min-width: 80px;
    }
    .lec-content th {
        background-color: #2196F3;
        color: white;
        font-weight: 600;
        font-size: 0.9em;
    }
    .lec-content td {
        background-color: #1a1a1a;
    }
    .lec-content tr:nth-child(even) td {
        background-color: #222;
    }
    
    /* ═══ تصميم الكروت للموبايل ═══ */
    .mobile-cards {
        display: none;
    }
    .data-card {
        background: #1a2332;
        border-radius: 16px;
        margin-bottom: 20px;
        overflow: hidden;
        border: 1px solid #2a3a4a;
    }
    .data-card-header {
        background: #2196F3;
        color: white;
        text-align: center;
        padding: 12px;
        font-size: 1.1em;
        font-weight: 600;
    }
    .data-card-row {
        display: flex;
        align-items: center;
        padding: 12px 16px;
        border-bottom: 1px solid #2a3a4a;
    }
    .data-card-row:last-child {
        border-bottom: none;
    }
    .data-icon {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 12px;
        font-size: 1.1em;
        flex-shrink: 0;
        background: #1e3a4f;
    }
    .data-label {
        flex: 1;
        color: #ccc;
        font-size: 0.9em;
    }
    .data-value {
        color: white;
        font-size: 1.1em;
        font-weight: 600;
        font-family: 'Courier New', monospace;
    }
    .card-total {
        background: #2196F3;
        color: white;
        display: flex;
        justify-content: space-between;
        padding: 14px 16px;
        font-weight: 600;
    }
    .card-subtotal {
        background: #1a2332;
        border-radius: 16px;
        margin-top: 15px;
        overflow: hidden;
        border: 1px solid #2a3a4a;
    }
    .card-subtotal-row {
        display: flex;
        justify-content: space-between;
        padding: 14px 16px;
        color: white;
    }

    /* Responsive للموبايل */
    @media (max-width: 768px) {
        .desktop-table {
            display: none;
        }
        .mobile-cards {
            display: block;
        }
    }

    @media (max-width: 600px) {
        .lec-content table:not(.desktop-table) {
            font-size: 0.8em;
        }
        .lec-content th:not(.desktop-table th), 
        .lec-content td:not(.desktop-table td) {
            padding: 8px 4px;
            min-width: 60px;
        }
    }
</style>

<div class="box video-box">
                <h2>🎬 فيديو تعليمي: شرح الاحتمالات - كلية تجارة جامعة حلوان</h2>
                <p><strong>القناة:</strong> Bilal Riad | <strong>المدة:</strong> ~60 دقيقة</p>
                <div class="video-wrapper" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px; margin: 15px 0;">
                    <iframe 
                        src="https://www.youtube.com/embed/V0FbTBiE4YI" 
                        title="شرح الإحتمالات - مبادئ الاحصاء كلية تجارة جامعة حلوان"
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 12px;">
                    </iframe>
                </div>
                <p style="text-align: center; color: #666; font-style: italic;">💡 شوف الفيديو الأول قبل ما تقرأ الشرح عشان تفهم الأساسيات بشكل أسرع!</p>
            </div>

<div class="box">
                <h2>📖 لمحة تاريخية</h2>
                <p>العلم ده بدأ من زمان (القرن الـ 17) عشان يحلوا مشاكل كانت بتواجههم في "ألعاب الحظ" والملاحظات الفعلية، وعلماء كتير زي "باسكال" و"بيرنولي" ساهموا فيه لحد ما بقى علم كبير بيدخل في كل حاجة.</p>
            </div>

<div class="box">
                <h2>🎯 الاحتمالات في حياتنا اليومية</h2>
                <p>إحنا بنستخدم الاحتمالات طول الوقت من غير ما نحس، زي لما بنقول:</p>
                <ul>
                    <li>"أنا أعتقد إني هجيب تقدير امتياز."</li>
                    <li>"غالباً هقضي الإجازة في الغردقة."</li>
                    <li>"فيه فرصة كبيرة الدنيا تمطر بكرة."</li>
                </ul>
                <p>كل الكلمات دي (أعتقد، غالباً، فرصة، إمكانية) هي تعبير "كمي" عن إحساسنا بوقوع حاجة معينة، بس العلم بيحول الكلمات دي لأرقام عشان يقدر يحسبها بدقة.</p>
            </div>

<div class="box">
                <h2>📚 أساسيات لازم تعرفها</h2>
                <ul>
                    <li><strong>مقياس الاحتمال:</strong> الاحتمال ده رقم بيبدأ من صفر (مستحيل يحصل) لحد 100% أو 1 (مؤكد يحصل). كل ما الرقم يقرب من 100%، يعني إحنا واثقين أكتر إن الحاجة دي هتحصل.</li>
                    <li><strong>التجربة الاحتمالية:</strong> هي أي فعل إنت بتعمله ومش عارف نتيجته بالظبط هتكون إيه، زي إنك ترمي "زهر نردة" أو "عملة ملك وكتابة".</li>
                    <li><strong>الناتج (Outcome):</strong> هي النتيجة الواحدة اللي بتطلع من التجربة، يعني لو رميت عملة، "الملك" ده يعتبر ناتج.</li>
                    <li><strong>الحدث (Event):</strong> هو "مجموعة" من النتائج اللي بتهمنا. يعني مثلاً لو رمينا زهر النرد، إن يطلع لنا "رقم فردي" (1 أو 3 أو 5) ده بنسميه "حدث".</li>
                </ul>
            </div>

<div class="box">
                <h2>🔗 أنواع الأحداث</h2>
                <ul>
                    <li><strong>أحداث متنافية (Mutually Exclusive):</strong> يعني "يا أنا يا أنت". مستحيل يحصلوا مع بعض في نفس الوقت. زي لما ترمي عملة؛ مستحيل تطلع "ملك" و"كتابة" في نفس الرمية. لو واحدة حصلت، التانية مستحيل تحصل.</li>
                    <li><strong>أحداث مستقلة (Independent):</strong> يعني "كل واحد في حاله ..توجع في الارياف دي"  وقوع حدث معين ملوش أي تأثير على التاني. زي لو رميت زهرتي نرد؛ نتيجة الزهرة الأولى مش هتأثر أبداً على اللي هيطلع في الزهرة التانية.</li>
                    <li><strong>أحداث غير مستقلة (Dependent):</strong> دي بقى اللي "بيأثروا في بعض". يعني لو عرفت إن فيه حاجة حصلت، ده بيغير رأيك أو توقعك في الحاجة اللي بعدها. ودي أساس "الاحتمال الشرطي".</li>
                </ul>
                <p><strong>ملخص سريع:</strong> الاحتمال هو طريقة بنقيس بيها "الحيرة" بتاعتنا تجاه المستقبل بأرقام، وبنفهم منها هل الحاجات اللي بتحصل دي بتأثر على بعض ولا لأ.</p>
            </div>

<div class="box">
                <h2>🧠 الاحتمال الذاتي (بالإحساس والخبرة)</h2>
                <p>ده بقى نوع مختلف خالص عن الحسابات التقليدية، ملوش معادلة ثابتة أو جامدة تحكمه، لأنه ببساطة قايم على دماغ وتقدير الشخص اللي بيحسبه.</p>
                <p><strong>التقدير الشخصي وعلاقته بالشك:</strong> إحنا بنلجأ للنوع ده لما بنكون قدام مواقف فيها نسبة شك عالية، ومواقف فريدة من نوعها مش بتتكرر كتير بنفس التفاصيل. يعني مش حاجة ينفع نعملها في معمل مية مرة عشان نطلع بنسبة، زي مثلاً لما تيجي تقول: "احتمال فوز فريق كورة معين في الماتش الجاي".</p>
                <p><strong>العوامل المتغيرة:</strong> عشان الشخص يحدد النسبة دي، بيبدأ يجمع معلومات تانية مالهاش علاقة بالرياضيات المباشرة، زي: حالة اللعيبة النفسية والبدنية، الماتش هيتلعب في أرض مين، الجو وقت الماتش هيكون إيه، وحتى خطة المدرب.</p>
                <p><strong>اختلاف وجهات النظر:</strong> بناءً على العوامل دي، طبيعي جداً تلاقي كل شخص بيدي "رقم" مختلف تماماً للاحتمال بناءً على وجهة نظره، رؤيته، وخبرته في المجال. يعني لو خبير كورة طلع في التلفزيون وقال لك: "احتمال فوز الفريق (أ) هو 90%"، الرقم ده عبارة عن تقدير ذاتي نابع من خبرته وتحليله للموقف، مش ناتج عن تجربة معملية أو قانون رياضي ثابت.</p>
            </div>
        `,

  exam: {
    trueFalse: [
      { question: "بدأ علم الاحتمالات في القرن الـ 17 ميلادياً بدافع أساسي وهو حل المشاكل المتعلقة بـ 'ألعاب الحظ' والملاحظات الفعلية.", answer: "true" },
      { question: "الكلمات اليومية اللي بنستخدمها زي (أعتقد، غالباً، فرصة) بتعتبر تعبير 'كمي' بالقرائن والأرقام عن إحساسنا بالمستقبل.", answer: "false" },
      { question: "الاحتمال اللي بيساوي 'صفر' معناه إن الحدث مستحيل يحصل، واللي بيساوي '1' معناه إن الحدث مؤكد يحصل.", answer: "true" },
      { question: "الناتج (Outcome) هو مجموعة من النتائج التي تهمنا في التجربة الاحتمالية.", answer: "false" },
      { question: "شعار الأحداث المتنافية (Mutually Exclusive) هو 'يا أنا يا أنت'، يعني مستحيل الحدثين يحصلوا مع بعض في نفس الوقت.", answer: "true" },
      { question: "الأحداث المستقلة تعني إن وقوع حدث معين بيأثر بشكل مباشر على فرصة وقوع الحدث التاني.", answer: "false" },
      { question: "الأحداث غير المستقلة (Dependent) هي الأحداث اللي 'بيأثروا في بعض' وهي الأساس اللي قايم عليه 'الاحتمال الشرطي'.", answer: "true" },
      { question: "الاحتمال الذاتي ليه معادلة ثابتة وجامدة بتحكمه وبتخلي كل الناس تطلع نفس الرقم للحدث.", answer: "false" },
      { question: "عشان الشخص يحدد نسبة الاحتمال الذاتي، بيعتمد فقط على القوانين الرياضية المباشرة وبيتجاهل العوامل الخارجية زي الجو أو الحالة النفسية.", answer: "false" },
      { question: "في الاحتمال الذاتي، طبيعي جداً نلاقي كل شخص بيدي 'رقم' مختلف لنفس الحدث بناءً على وجهة نظره وخبرته.", answer: "true" },
    ],

    multipleChoice: [
     
      { question: "لما بنقول 'فيه فرصة كبيرة الدنيا تمطر بكرة'، التعبير ده في حياتنا اليومية بيمثل:", options: ["استخدام للاحتمالات في الحياة اليومية بناءً على الإحساس", "حدث مؤكد نسبته 100%", "تجربة معملية معقدة", "حدث مستحيل حدوثه"], correctIndex: "0" },
      { question: "أي فعل إنت بتعمله وتكون مش عارف نتيجته بالظبط مسبقاً (زي رمي زهر الطاولة)، ده بنسميه في الإحصاء بـ:", options: ["التجربة الاحتمالية", "الناتج (Outcome)", "الحدث الذاتي", "المقياس المؤكد"], correctIndex: "0" },
      { question: "لو رمينا زهر النرد، وإن يطلع لنا (رقم فردي) اللي هو ممكن يكون 1 أو 3 أو 5، الموقف ده بنسميه علمياً بـ:", options: ["الحدث (Event)", "الناتج (Outcome)", "التجربة", "الاحتمال المستحيل"], correctIndex: "0" },
      { question: "لما ترمي عملة معدنية وتطلع 'ملك'، فده بيمنع تماماً إنها تطلع 'كتابة' في نفس الرمية. الأحداث دي نوعها إيه؟", options: ["أحداث متنافية", "أحداث مستقلة", "أحداث غير مستقلة", "أحداث ذاتية"], correctIndex: "0" },
      { question: "لو رميت زهرتين نرد، نتيجة الزهرة الأولى طلعت 6، ده مش هيأثر أبداً على النتيجة اللي هتطلع في الزهرة التانية. ده مثال لـ:", options: ["أحداث مستقلة (Independent)", "أحداث غير مستقلة", "أحداث متنافية", "احتمال ذاتي"], correctIndex: "0" },
      { question: "علم الاحتمالات بيقيس 'الحيرة' بتاعتنا تجاه المستقبل وبنحول الحيرة دي لـ:", options: ["أرقام دقيقة نحسبها", "كلمات وصفية فقط", "ألعاب حظ ممتعة", "تجارب مستحيلة"], correctIndex: "0" },
      { question: "إحنا بنلجأ لـ 'الاحتمال الذاتي' لما نكون بنتعامل مع مواقف:", options: ["فيها نسبة شك عالية ومواقف فريدة مش بتتكرر كتير بنفس التفاصيل", "تجارب معملية نقدر نكررها مية مرة بنفس الظروف", "مؤكدة بنسبة 100% ومش محتاجة تفكير", "قائمة على رمي زهر النرد والعملات المعدنية"], correctIndex: "0" },
      { question: "لما خبير كورة يقول في التلفزيون: 'احتمال فوز الفريق (أ) هو 90%'، الرقم ده عبارة عن:", options: ["تقدير ذاتي نابع من خبرته وتحليله للموقف", "ناتج عن تجربة معملية دقيقة", "حقيقة كونية مطلقة ومؤكدة", "حدث مستحيل حدوثه"], correctIndex: "0" },
      { question: "كل ما رقم الاحتمال يقرب من الـ 100% أو الواحد الصحيح، ده معناه إننا:", options: ["واثقين أكتر إن الحاجة دي هتحصل", "متأكدين إن الحاجة دي مستحيل تحصل", "بنلجأ للاحتمال الشرطي فقط", "بنحسب تجربة مالهاش نواتج"], correctIndex: "0" },
    ],

    essay: [],
  },
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = lectureDataPart1;
}