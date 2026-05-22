// stats_lec1_part3_part2.js
const lectureData = {
  title: "📊 الفصل الاول : مقدمة في الاحتمالات - الجزء  الرابع",

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

    <div class="box">
        <h2>📐 الاحتمال الشرطي (Conditional Probability)</h2>
        <p>الكتاب بيحط لك القانون الرسمي اللي بيمشي عليه العالم كله. لو عندنا حدثين A و B، وعايزين نحسب احتمال حدوث B بشرط إن A حصل خلاص، بنكتبها كدة: P(B|A).</p>
        <p><strong>القانون:</strong> الاحتمال الشرطي بيساوي احتمال تقاطعهم (حدوثهم معاً) مقسوم على احتمال الحدث اللي حصل الأول (الشرط):<br>
        P(B|A) = P(A ∩ B) / P(A)</p>
        <p>ومن القانون ده، بنطلع قاعدة الضرب للتقاطع المشهور:<br>
        P(A ∩ B) = P(A) × P(B|A)</p>
        
        <div class="insight">💡 علامة الخط الواقف | في القوانين P(B|A) تتنطق "بشرط أن". والقانون بتاعها: اقسمي التقاطع على احتمال اللي بعد الشرط علطول!</div>
        
        <p><strong>خاصية مهمة:</strong> P(B|A) + P(~B|A) = 1</p>
    </div>

    <div class="box">
        <h2>🧮 نظرية بييز (Bayes Theorem)</h2>
        <p>العالم الإنجليزي "توماس بييز" عمل أسلوب مبتكر لحل المشاكل اللي بنحتاج فيها نرجع بظهرنا لورا (نعرف السبب لما نشوف النتيجة).</p>
        
        <h3>مسألة أجهزة تكييف السيارات</h3>
        <p>شركة بتستورد أجهزة تكييف من شركتين:</p>
        <ul>
            <li>X: 70% من الأجهزة، نسبة العيوب 0.5%</li>
            <li>Y: 30% من الأجهزة، نسبة العيوب 1%</li>
        </ul>
        <p><strong>المطلوب:</strong> اخترنا عربية عشوائياً ولقينا التكييف بايظ. إيه احتمال إن الجهاز البايظ ده يكون من شركة X؟ (P(A₁|D))</p>
        
        <p><strong>الحل بقانون بييز:</strong><br>
        P(A₁|D) = (0.7 × 0.005) / (0.7×0.005 + 0.3×0.010)<br>
        = 0.0035 / 0.0065 = 0.54 = 54%</p>
        
        <h3>طريقة الجدول (أسهل حاجة 🎯)</h3>
        
        <table class="desktop-table">
            <tr style="background-color: #2196F3; color: white;">
                <th>الحدث</th><th>الاحتمال القبلي P(A)</th><th>الاحتمال الشرطي P(D|A)</th><th>الاحتمال المشترك</th><th>الاحتمال البعدي</th>
             </tr>
             <tr><td style="text-align: center;">X</td><td style="text-align: center;">0.70</td><td style="text-align: center;">0.005</td><td style="text-align: center;">0.0035</td><td style="text-align: center;">0.54</td></tr>
             <tr><td style="text-align: center;">Y</td><td style="text-align: center;">0.30</td><td style="text-align: center;">0.010</td><td style="text-align: center;">0.0030</td><td style="text-align: center;">0.46</td></tr>
             <tr><td style="text-align: center;"><strong>المجموع</strong></td><td style="text-align: center;">1.00</td><td style="text-align: center;"></td><td style="text-align: center;">0.0065</td><td style="text-align: center;">1.00</td></tr>
        </table>

        <div class="mobile-cards">
            <div class="data-card">
                <div class="data-card-header">الحدث X</div>
                <div class="data-card-row"><div class="data-icon">⚙️</div><div class="data-label">الاحتمال القبلي P(A)</div><div class="data-value">0.70</div></div>
                <div class="data-card-row"><div class="data-icon">⊟</div><div class="data-label">الاحتمال الشرطي P(D|A)</div><div class="data-value">0.005</div></div>
                <div class="data-card-row"><div class="data-icon">⊟⊟</div><div class="data-label">الاحتمال المشترك</div><div class="data-value">0.0035</div></div>
                <div class="data-card-row"><div class="data-icon">÷</div><div class="data-label">الاحتمال البعدي</div><div class="data-value">0.54</div></div>
            </div>

            <div class="data-card">
                <div class="data-card-header">الحدث Y</div>
                <div class="data-card-row"><div class="data-icon">⚙️</div><div class="data-label">الاحتمال القبلي P(A)</div><div class="data-value">0.30</div></div>
                <div class="data-card-row"><div class="data-icon">⊟</div><div class="data-label">الاحتمال الشرطي P(D|A)</div><div class="data-value">0.010</div></div>
                <div class="data-card-row"><div class="data-icon">⊟⊟</div><div class="data-label">الاحتمال المشترك</div><div class="data-value">0.0030</div></div>
                <div class="data-card-row"><div class="data-icon">÷</div><div class="data-label">الاحتمال البعدي</div><div class="data-value">0.46</div></div>
            </div>

            <div class="card-subtotal">
                <div class="card-total"><span>المجموع</span><span class="data-value">1.00</span></div>
                <div class="card-subtotal-row"><span>الاحتمال المشترك الكلي</span><span class="data-value">0.0065</span></div>
            </div>
        </div>
        
        <div class="insight">💡 تريكة: أول ما تلمحي مسألة فيها نسب إنتاج لشركات (أو مصانع) وفيها نسبة تالف أو عيوب، ويطلب منكِ احتمال إن الجهاز التالف ده من الشركة الأولى → اعملي الجدول المكون من 5 أعمدة علطول؛ اضربي النسب في بعض، واجمعي النواتج، واقسمي جزء الشركة الأولى على المجموع الكلي، هتطير معاكي المسألة في ثواني!</div>
    </div>

    <div class="box">
        <h2>🎲 مثال الصناديق التلاتة والكرة البيضاء</h2>
        <p>هنا عندنا 3 صناديق متشابهة تماماً من بره، بس محتواهم من جوه مختلف:</p>
        <ul>
            <li>الصندوق الأول (A₁): جواه كرتين؛ واحدة بيضاء (W) وواحدة سوداء (B)</li>
            <li>الصندوق الثاني (A₂): جواه كرتين؛ برضه واحدة بيضاء (W) وواحدة سوداء (B)</li>
            <li>الصندوق الثالث (A₃): جواه كرتين؛ الاتنين سوداء (B, B)</li>
        </ul>
        <p><strong>التجربة والمطلوب 🎯:</strong><br>
        احنا هنجيب شخص مغمي عينيه، ونقوله اختار صندوق عشوائي واسحب منه كورة. الشخص ده سحب كورة وفتح عينه لقاها بيضاء فعلاً (W).<br>
        السؤال: إيه احتمال إن الكورة البيضاء دي تكون طلعت من الصندوق الثاني (A₂) بالذات؟ يعني مطلوب حساب الاحتمال البعدي: P(A₂|W).</p>
        
        <p><strong>خطوات الحل بالشجرة:</strong><br>
        <strong>الخطوة الأولى (اختيار الصندوق):</strong> بما إنهم 3 صناديق، فاحتمال اختيار أي واحد منهم هو الثُلث بالتساوي: P(A₁) = P(A₂) = P(A₃) = 1/3<br>
        <strong>الخطوة الثانية (الاحتمالات الشرطية جوه كل صندوق):</strong><br>
        - من الصندوق الأول A₁: فيه كورة بيضاء من أصل 2، يبقى احتمال البيضاء بشرط الصندوق الأول P(W|A₁) = 1/2<br>
        - من الصندوق الثاني A₂: نفس الكلام، احتمال البيضاء بشرط الصندوق الثاني P(W|A₂) = 1/2<br>
        - من الصندوق الثالث A₃: مفيش فيه أي كورة بيضاء (كلهم سود)، يبقى احتمال البيضاء بشرط الصندوق الثالث P(W|A₃) = 0</p>
        
        <p><strong>حساب المطلوب P(A₂|W):</strong><br>
        بناخد فرع الصندوق التاني اللي طلع كورة بيضاء، ونقسمه على مجموع كل الفروع اللي بتطلع كورة بيضاء في الشجرة كلها:<br>
        P(A₂|W) = [P(A₂) × P(W|A₂)] / [P(A₁)×P(W|A₁) + P(A₂)×P(W|A₂) + P(A₃)×P(W|A₃)]<br>
        = (1/3 × 1/2) / (1/3×1/2 + 1/3×1/2 + 1/3×0)<br>
        = (1/6) / (1/6 + 1/6 + 0) = (1/6) / (2/6) = 1/2<br>
        ⭐ فيه احتمال 50% (1/2) إن الكورة البيضاء تكون جاية من الصندوق التاني.</p>
    </div>

    <div class="box">
        <h2>💡 مثال مصنع اللمبات الكهربائية (أربع شركات)</h2>
        <p>مصنع بيشتري لمبات كهربائية من 4 شركات توردية مختلفة، والجدول مديكِ نسب التوريد ونسب اللمبات المعيبة (البايظة) كالتالي:</p>
        
        <table class="desktop-table">
            <tr style="background-color: #2196F3; color: white;">
                <th>الشركة الموردة</th><th>نسبة التوريد P(A)</th><th>نسبة المعيب P(W|A)</th>
             </tr>
             <tr><td style="text-align: center;">A₁</td><td style="text-align: center;">30% (0.30)</td><td style="text-align: center;">2% (0.02)</td></tr>
             <tr><td style="text-align: center;">A₂</td><td style="text-align: center;">40% (0.40)</td><td style="text-align: center;">3% (0.03)</td></tr>
             <tr><td style="text-align: center;">A₃</td><td style="text-align: center;">10% (0.10)</td><td style="text-align: center;">1% (0.01)</td></tr>
             <tr><td style="text-align: center;">A₄</td><td style="text-align: center;">20% (0.20)</td><td style="text-align: center;">2% (0.02)</td></tr>
        </table>

        <div class="mobile-cards">
            <div class="data-card">
                <div class="data-card-header">الشركة A₁</div>
                <div class="data-card-row"><div class="data-icon">📦</div><div class="data-label">نسبة التوريد P(A)</div><div class="data-value">30% (0.30)</div></div>
                <div class="data-card-row"><div class="data-icon">⚠️</div><div class="data-label">نسبة المعيب P(W|A)</div><div class="data-value">2% (0.02)</div></div>
            </div>
            <div class="data-card">
                <div class="data-card-header">الشركة A₂</div>
                <div class="data-card-row"><div class="data-icon">📦</div><div class="data-label">نسبة التوريد P(A)</div><div class="data-value">40% (0.40)</div></div>
                <div class="data-card-row"><div class="data-icon">⚠️</div><div class="data-label">نسبة المعيب P(W|A)</div><div class="data-value">3% (0.03)</div></div>
            </div>
            <div class="data-card">
                <div class="data-card-header">الشركة A₃</div>
                <div class="data-card-row"><div class="data-icon">📦</div><div class="data-label">نسبة التوريد P(A)</div><div class="data-value">10% (0.10)</div></div>
                <div class="data-card-row"><div class="data-icon">⚠️</div><div class="data-label">نسبة المعيب P(W|A)</div><div class="data-value">1% (0.01)</div></div>
            </div>
            <div class="data-card">
                <div class="data-card-header">الشركة A₄</div>
                <div class="data-card-row"><div class="data-icon">📦</div><div class="data-label">نسبة التوريد P(A)</div><div class="data-value">20% (0.20)</div></div>
                <div class="data-card-row"><div class="data-icon">⚠️</div><div class="data-label">نسبة المعيب P(W|A)</div><div class="data-value">2% (0.02)</div></div>
            </div>
        </div>
        
        <p><strong>المطلوب 🎯:</strong> سحبنا لمبة عشوائياً ولقيناها بايظة (W). إيه احتمال إنها تكون من إنتاج الشركة الثالثة (A₃)؟ يعني عايزين: P(A₃|W).</p>
        
        <p><strong>التعويض والحل:</strong><br>
        عشان نجيب احتمال إن اللمبة البايظة دي من الشركة التالتة، بنطبق قانون بييز:<br>
        <strong>البسط:</strong> نضرب (نسبة توريد الشركة التالتة × نسبة عيوبها) → 0.10 × 0.01 = 0.001<br>
        <strong>المقام (المجموع الكلي للمعيب):</strong> بنضرب نسبة كل شركة في نسبة عيوبها ونجمعهم كلهم:<br>
        المقام = (0.30 × 0.02) + (0.40 × 0.03) + (0.10 × 0.01) + (0.20 × 0.02)<br>
        = 0.006 + 0.012 + 0.001 + 0.004 = 0.023<br>
        <strong>القسمة النهائية:</strong> P(A₃|D) = 0.001 / 0.023 = 1/23</p>
        
        <div class="insight">💡 مسائل بييز قانونها ثابت مبيتغيرش: (احتمال الشئ اللي بيسأل عنه × شرطه) مقسوم على (مجموع ضرب كل الاحتمالات في شروطها).</div>
    </div>

    <div class="box">
        <h2>⚽ مثال ملعب مباراة نادي الزمالك ونادي الزهور</h2>
        <p>المثال ده ظريف جداً وبيشرح برضه فكرة بييز بس على ماتشات الكورة!</p>
        <p><strong>المعطيات:</strong><br>
        لما بيلعب الفريقين مع بعض، الماتش ممكن يتلعب على ملعبين:<br>
        - ملعب نادي الجزيرة (L): باحتمال 70% (0.70)<br>
        - ملعب نادي الزمالك (Z): باحتمال 30% (0.30)</p>
        <p><strong>نسب الفوز والخيارات الشرطية:</strong><br>
        - لو لعبوا على ملعب الجزيرة (L): احتمال إن فريق نادي الزهور يفوز (W) هو 60%، واحتمال إنه يتهزم (D) هو 40%<br>
        - لو لعبوا على ملعب الزمالك (Z): احتمال إن فريق نادي الزهور يفوز (W) هو 50%، واحتمال إنه يتهزم (D) هو 50%</p>
        <p><strong>المطلوب 🎯:</strong><br>
        عِرفنا من الأخبار إن فريق نادي الزهور فاز بالمباراة فعلاً (W). إيه احتمال بقى إن المباراة دي كانت بتتعلب على ملعب نادي الزمالك (Z)؟ يعني عايزين: P(Z|W).</p>
        
        <p><strong>الحل:</strong><br>
        بنقسم فرع (ملعب الزمالك وفوز الزهور) على (كل فروع الفوز في الشجرة):<br>
        P(Z|W) = [P(Z) × P(W|Z)] / [P(L)×P(W|L) + P(Z)×P(W|Z)]<br>
        = (0.30 × 0.50) / (0.70 × 0.60 + 0.30 × 0.50)<br>
        = 0.15 / (0.42 + 0.15) = 0.15 / 0.57 = 5/19</p>
    </div>

    <div class="box">
        <h2>⚡ المتغير العشوائي (Random Variable)</h2>
        <p><strong>يعني إيه متغير عشوائي؟</strong><br>
        في الباب الأول، كنا بنطلع نواتج فضاء العينة في شكل رموز أو كلمات (زي: صورة وكتابة H, T، أو كورة بيضاء وحمراء W, R). في الباب ده، إحنا عايزين نحول الكلمات والرموز دي لـ "أرقام حقيقية" عشان نعرف نعمل عليها عمليات حسابية وقوانين.</p>
        <p><strong>التعريف بالبلدي:</strong> المتغير العشوائي هو "دالة" (قاعدة) بتاخد النتيجة اللي بتطلع من التجربة العشوائية، وتحولها لرقم حقيقي. وبنرمز له عادة بحرف كبير زي (X أو Y).</p>
        
        <h3>أنواع المتغيرات العشوائية (مهم جداً للامتحان 🎯)</h3>
        <p><strong>أ. المتغير العشوائي المتقطع / المنفصل (Discrete Random Variable):</strong><br>
        معناه: هو المتغير اللي الأرقام بتاعته بتكون محدودة أو قابلة للعد (ينفع نعدها على صوابعنا 1، 2، 3...). الأرقام هنا بتكون قفزات ومفيش فيها كسور مستمرة.<br>
        أمثلة: عدد الأفراد في الأسرة، عدد الحوادث على الطريق، عدد اللمبات البايظة في شحنة. (ما ينفعش تقول عدد أفراد الأسرة 3 ونص!).</p>
        <p><strong>ب. المتغير العشوائي المتصل / المستمر (Continuous Random Variable):</strong><br>
        معناه: هو المتغير اللي الأرقام بتاعته بتاخد أي قيمة جوه فترة معينة، وبتكون غير قابلة للعد لأنها بتشمل كسور لانهائية.<br>
        أمثلة: الطول، الوزن، العمر، درجات الحرارة، الوقت المستغرق في الامتحان. (ينفع الوزن يكون 70.5 كيلو، وينفع الحرارة تكون 37.2).</p>
    </div>

    <div class="box">
        <h2>📈 التوزيع الاحتمالي المتقطع ودالة الكتلة</h2>
        <p><strong>دالة الكتلة الاحتمالية (Probability Mass Function - PMF)</strong><br>
        لما يكون عندنا متغير متقطع X، كل رقم بيطلع ليه احتمال معبر عنه بـ P(X = x) أو بنكتبها f(x).</p>
        <p><strong>شروط دالة الكتلة الاحتمالية (يجي عليها مسائل صح وغلط واختياري 🎯):</strong><br>
        عشان نقول إن الجدول أو الدالة دي "دالة احتمال" صحيحة، لازم يتحقق شرطين:<br>
        <strong>الشرط الأول:</strong> احتمال أي رقم لازم يكون موجب ومحصور بين الصفر والواحد (مفيش احتمال بالسالب ومفيش احتمال أكبر من 1): 0 ≤ f(x) ≤ 1<br>
        <strong>الشرط الثاني:</strong> مجموع كل الاحتمالات اللي في الجدول لازم يساوي 1 صحيح بالظبط (يقفل 100%): Σ f(x) = 1</p>
        
        <h3>مثال تطبيقي: رمي قطعتين عملة مع بعض</h3>
        <p>فضاء العينة للتجربة: عندنا 4 حالات ممكنة: S = {HH, HT, TH, TT} (العدد الكلي = 4)</p>
        <p><strong>تعريف المتغير العشوائي X في المسألة:</strong> "ليكن X متغير عشوائي يمثل عدد الصور (H) التي تظهر".</p>
        <p>تعالي نعد الصور في كل حالة ونشوف الـ X هتاخد أرقام إيه:<br>
        - في الحالة TT: عدد الصور = 0<br>
        - في الحالتين HT, TH: عدد الصور = 1<br>
        - في الحالة HH: عدد الصور = 2<br>
        إذن، قيم المتغير العشوائي الممكنة هي: X = {0, 1, 2}</p>
        <p><strong>حساب الاحتمالات f(x):</strong><br>
        - احتمال ظهور 0 صور f(0): مفيش غير حالة واحدة (TT) من أصل 4 → الاحتمال = 1/4<br>
        - احتمال ظهور صورة واحدة f(1): عندنا حالتين (HT, TH) من أصل 4 → الاحتمال = 2/4 = 1/2<br>
        - احتمال ظهور صورتين f(2): مفيش غير حالة واحدة (HH) من أصل 4 → الاحتمال = 1/4</p>
        
        <p><strong>جدول التوزيع الاحتمالي النهائي:</strong></p>
        
        <table class="desktop-table">
            <tr style="background-color: #2196F3; color: white;">
                <th>x</th><th>0</th><th>1</th><th>2</th><th>المجموع</th>
             </tr>
             <tr><td style="text-align: center;">f(x)</td><td style="text-align: center;">1/4</td><td style="text-align: center;">2/4 = 1/2</td><td style="text-align: center;">1/4</td><td style="text-align: center;">1</td></tr>
        </table>

        <div class="mobile-cards">
            <div class="data-card">
                <div class="data-card-header">توزيع الاحتمالات</div>
                <div class="data-card-row"><div class="data-icon">🔢</div><div class="data-label">P(X=0)</div><div class="data-value">1/4</div></div>
                <div class="data-card-row"><div class="data-icon">🔢</div><div class="data-label">P(X=1)</div><div class="data-value">2/4 = 1/2</div></div>
                <div class="data-card-row"><div class="data-icon">🔢</div><div class="data-label">P(X=2)</div><div class="data-value">1/4</div></div>
                <div class="card-total"><span>المجموع</span><span class="data-value">1</span></div>
            </div>
        </div>
        <p>(تأكدنا إن المجموع طلع 1 صحيح، يبقى حلنا مظبوط جداً).</p>
    </div>

    <div class="box">
        <h2>📊 دالة التوزيع التراكمي (التجميعية)</h2>
        <p><strong>دالة التوزيع التراكمية (Cumulative Distribution Function)</strong> وبنرمز لها بالرمز F(x) (حرف F كبير Capital).</p>
        <p><strong>معناه بالبلدي:</strong><br>
        الاسم شارح نفسه "تراكمية" أو "تجميعية"، يعني لما أقولك هاتي F(1)، معناها اجمعي لي احتمال الـ 1 وكل اللي قبله!<br>
        F(x) = P(X ≤ x)</p>
        
        <p><strong>تطبيق على نفس مسألة العملات:</strong><br>
        تعالي نحسب الدالة التجميعية للجدول اللي لسه عاملينه:<br>
        - عند x = 0: F(0) = f(0) = 1/4<br>
        - عند x = 1: نجمع الـ 1 واللي قبله → F(1) = f(0) + f(1) = 1/4 + 2/4 = 3/4<br>
        - عند x = 2: نجمع الـ 2 وكل اللي قبله → F(2) = f(0) + f(1) + f(2) = 1/4 + 2/4 + 1/4 = 1</p>
        
        <p><strong>كتابة الدالة التراكمية (الشكل المتفرع):</strong><br>
        F(x) = 0 for x < 0<br>
        F(x) = 1/4 for 0 ≤ x < 1<br>
        F(x) = 3/4 for 1 ≤ x < 2<br>
        F(x) = 1 for x ≥ 2</p>
        
        <div class="insight">💡 ملخص خالص: المتغير المتقطع أرقامه صحيحة ونعدها (أفراد، حوادث). المتغير المتصل أرقامها فيها فترات وكسور مستمرة (وزن، طول، وقت). أي جدول احتمالات لازم خانة الاحتمالات اللي تحت لما تتجمع تطلع 1 صحيح. الدالة التراكمية F(x) بتبدأ دايماً من الصفر وتفضل تجمع لحد ما تقفل وتختم عند الواحد الصحيح في النهاية.</div>
    </div>
  `,

   exam: {
    trueFalse: [
      { question: "إذا كان P(B|A) = 0.40، فإن احتمال الحدث المكمل له بشرط ثبوت نفس الشرط P(~B|A) يساوي 0.60.", answer: "true" },
      { question: "في قانون الاحتمال الشرطي P(B|A)، نقوم دائماً بقسمة احتمال التقاطع على احتمال الحدث الذي يقع بعد علامة الشرط مباشرة وهو P(A).", answer: "true" },
      { question: "تُستخدم نظرية بييز (Bayes Theorem) بشكل أساسي لحساب الاحتمالات القبلية قبل ظهور نتائج التجربة العشوائية.", answer: "false" },
      { question: "يُعد 'عدد الحوادث اليومية على طريق سريع' مثالاً نموذجياً للمتغير العشوائي المتصل (المستمر).", answer: "false" },
      { question: "المتغير العشوائي هو في الأصل دالة تحول نواتج فضاء العينة الوصفية أو الرمزية إلى قيم وأرقام حقيقية.", answer: "true" },
      { question: "من شروط دالة الكتلة الاحتمالية f(x) للمتغير المتقطع أن يكون مجموع قيم الاحتمالات Σ f(x) مساوياً للصفر.", answer: "false" },
      { question: "قيمة دالة التوزيع التراكمية F(x) عند آخر قيمة ممكنة للمتغير العشوائي المتقطع يجب أن تختم وتساوي دائماً 1 صحيح.", answer: "true" },
      { question: "إذا كان وزن الطالب يمثل متغيراً عشوائياً، فإنه يُصنف كمتغير عشوائي متقطع لأن الأوزان لا تحتوي على كسور.", answer: "false" },
      { question: "في تجربة رمي قطعتين عملة، إذا كان المتغير العشوائي X يعبر عن عدد الصور، فإن القيم الممكنة للمتغير هي {1, 2, 3}.", answer: "false" },
      { question: "الاحتمال الشرطي لحدثين متنافيين (أي لا يمكن حدوثهما معاً) يساوي دائماً صفراً؛ لأن تقاطعهما يساوي صفراً.", answer: "true" }
    ],
    multipleChoice: [
      { question: "إذا كان P(A) = 0.5 و P(A ∩ B) = 0.2، فإن الاحتمال الشرطي P(B|A) يساوي:", options: ["0.10", "0.40", "0.70", "2.50"], correctIndex: "1" },
      { question: "أي من المتغيرات التالية يُعد مثالاً على متغير عشوائي متقطع (منفصل)؟", options: ["الوقت المستغرق لحل امتحان الإحصاء", "درجات الحرارة المسجلة خلال اليوم", "عدد الأفراد داخل الأسرة الواحدة", "طول قامة طلاب الجامعة"], correctIndex: "2" },
      { question: "إذا كان لدينا جدول توزيع احتمالي لمتغير عشوائي متقطع يحتوي على الاحتمالات التالية: f(1) = 0.2، f(2) = 0.5، f(3) = k. فإن قيمة الثابت k التي تجعل الدالة صحيحة هي:", options: ["0.7", "0.3", "0.1", "1.0"], correctIndex: "1" },
      { question: "في مسألة الصناديق الثلاثة، إذا كان احتمال اختيار الصندوق الأول هو 1/3، وكان احتمال سحب كرة بيضاء من داخل هذا الصندوق هو 1/2، فإن الاحتمال المشترك (التقاطع) بين اختيار الصندوق الأول وسحب كرة بيضاء يساوي:", options: ["5/6", "2/3", "1/6", "1/5"], correctIndex: "2" },
      { question: "إذا كانت دالة التوزيع التراكمي لمتغير عشوائي هي F(x)، وطُلِب منكِ حساب F(1) بناءً على جدول احتمالاته، فإن هذا يعني رياضياً:", options: ["احتمال أن المتغير X يساوي 1 فقط", "مجموع احتمالات قيم المتغير X التي هي أقل من أو تساوي 1", "احتمال قيم المتغير X الأكبر من 1 فقط", "قسمة احتمال الرقم 1 على العدد الكلي لقيم X"], correctIndex: "1" },
      { question: "ينتج مصنع أجهزة من خطين؛ الخط الأول ينتج 60% من الإنتاج ونسبة معيبه 1%، والخط الثاني ينتج 40% ونسبة معيبه 2%. إذا سُحبت قطعة ووُجدت معيبة، فإن مجموع الاحتمالات المشتركة للمعيب (المقام في قانون بييز) يساوي:", options: ["0.014", "0.030", "0.006", "0.008"], correctIndex: "0" },
      { question: "في مسألة مباراة نادي الزمالك ونادي الزهور، إذا كان P(Z) = 0.30 (احتمال اللعب على ملعب الزمالك) و P(W|Z) = 0.50 (احتمال فوز الزهور على ملعب الزمالك)، فإن قيمة بسط قانون بييز لحساب احتمال أن المباراة لُعبت في ملعب الزمالك علماً بأن الزهور قد فاز، تساوي:", options: ["0.80", "0.15", "0.20", "0.45"], correctIndex: "1" },
      { question: "من الشروط الأساسية لقيم دالة الكتلة الاحتمالية المفردة f(x) لأي متغير عشوائي متقطع أن تكون دائماً:", options: ["أكبر من الواحد الصحيح", "سالبة أو محصورة بين -1 و 0", "موجبة ومحصورة في الفترة من 0 إلى 1 (بما فيها الصفر والواحد)", "مساوية دائماً لمتوسط قيم المتغير العشوائي"], correctIndex: "2" },
      { question: "إذا كان المتغير العشوائي المتصل (المستمر) يتميز بأن قيمه تأخذ أي قيمة داخل فترة معينة، فإن طريقة التعبير عن احتمالاته تكون عبر:", options: ["نقاط منفصلة ومحدودة يمكن عَدُّها", "فترات مستمرة تحتوي على كسور لانهائية", "أعداد صحيحة موجبة فقط بدون أي كسور", "قيمة ثابتة واحدة دائماً لجميع الظواهر"], correctIndex: "1" },
      { question: "إذا كان P(A) = 0.60 و P(B|A) = 0.30، فإن احتمال حدوثهما معاً P(A ∩ B) يساوي:", options: ["0.90", "0.20", "0.18", "0.50"], correctIndex: "2" }
    ],
    essay: [],
  },
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = lectureDataPart2;
}