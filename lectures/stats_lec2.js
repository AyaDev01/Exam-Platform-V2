// stats_lec2.js
const lectureData = {
  title: "📊 المحاضرة 2: المتغيرات العشوائية المنفصلة والتوزيعات الاحتمالية",
  // الزتونة النظرية (أنواع المتغيرات وشروط التوزيع)
  
  theorySummary: `
    <div class="summary-box" style="background: linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.2)); border-radius: 16px; padding: 20px; margin-bottom: 25px; border: 1px solid rgba(255,217,61,0.3);">
      <h3 style="color: #ffd93d; margin-bottom: 15px;">📌 الزتونة النظرية (أنواع المتغيرات وشروط التوزيع)</h3>
      
      <div style="background: rgba(107,203,255,0.1); border-right: 3px solid #6bcbff; padding: 15px; margin: 15px 0; border-radius: 10px;">
        <h4 style="color: #6bcbff; margin: 0 0 10px 0;">🎯 المتغير العشوائي المنفصل (Discrete)</h4>
        <p><strong>بياخد أرقام صحيحة وقابلة للعد (مفيش كسور)</strong></p>
        <p><strong>أمثلة:</strong> عدد الأطفال، عدد اللمبات التالفة، عدد مرات رمي العملة</p>
      </div>

      <div style="background: rgba(107,203,255,0.1); border-right: 3px solid #6bcbff; padding: 15px; margin: 15px 0; border-radius: 10px;">
        <h4 style="color: #6bcbff; margin: 0 0 10px 0;">📏 المتغير العشوائي المتصل (Continuous)</h4>
        <p><strong>بياخد أي قيمة في فترة (فيها كسور عادي) وبتقيس كميات</strong></p>
        <p><strong>أمثلة:</strong> الأطوال، الأوزان، درجات الحرارة، الدخل السنوي</p>
      </div>

      <div style="background: rgba(168,230,207,0.1); border-right: 3px solid #a8e6cf; padding: 15px; margin: 15px 0; border-radius: 10px;">
        <h4 style="color: #a8e6cf; margin: 0 0 10px 0;">✅ شرطي الدالة الاحتمالية (مهم جداً للنظري والمسائل)</h4>
        <ul style="margin: 0; padding-right: 20px;">
          <li>احتمال أي قيمة لازم يكون بين الصفر والواحد: <strong>0 ≤ P(X) ≤ 1</strong></li>
          <li>مجموع كل الاحتمالات في الجدول لازم يساوي واحد صحيح: <strong>∑ P(X) = 1</strong></li>
        </ul>
      </div>
    </div>
  `,

  // القوانين الأساسية (كروت المقارنة بين التوزيعات)
  formulasTable: `
    <div class="formulas-box" style="background: linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.2)); border-radius: 16px; padding: 20px; margin-bottom: 25px; border: 1px solid rgba(255,217,61,0.3);">
      <h3 style="color: #ffd93d; margin-bottom: 15px;">📐 القوانين الأساسية (المحرك الرئيسي للمسائل)</h3>

      <style>
        .dist-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 15px; margin: 20px 0; }
        .dist-card { 
          background: rgba(0,0,0,0.25); 
          border-radius: 14px; 
          padding: 18px; 
          border: 1px solid rgba(255,255,255,0.08);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .dist-card:hover { transform: translateY(-3px); box-shadow: 0 8px 25px rgba(0,0,0,0.3); }
        .dist-card h4 { margin: 0 0 14px 0; font-size: 1.05em; padding-bottom: 10px; border-bottom: 2px solid; text-align: center; }
        .dist-card .row { display: flex; justify-content: space-between; padding: 7px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 0.92em; align-items: center; }
        .dist-card .row:last-child { border-bottom: none; }
        .dist-card .label { color: #aaa; flex-shrink: 0; margin-left: 10px; }
        .dist-card .value { font-weight: 600; direction: ltr; text-align: left; color: #fff; }

        /* ألوان متناسقة مع الصفحة */
        .bernoulli { border-top: 3px solid #6bcbff; }
        .bernoulli h4 { color: #6bcbff; border-color: rgba(107,203,255,0.3); }
        .bernoulli .value { color: #6bcbff; }

        .binomial { border-top: 3px solid #ffd93d; }
        .binomial h4 { color: #ffd93d; border-color: rgba(255,217,61,0.3); }
        .binomial .value { color: #ffd93d; }

        .poisson { border-top: 3px solid #a8e6cf; }
        .poisson h4 { color: #a8e6cf; border-color: rgba(168,230,207,0.3); }
        .poisson .value { color: #a8e6cf; }

        @media (max-width: 400px) {
          .dist-cards { grid-template-columns: 1fr; gap: 12px; }
          .dist-card { padding: 14px; }
          .dist-card .row { font-size: 0.88em; }
        }
      </style>

      <div class="dist-cards">
        <!-- كارت بيرنولي -->
        <div class="dist-card bernoulli">
          <h4>🎲 محاولة بيرنولي</h4>
          <div class="row"><span class="label">طبيعة الاستخدام</span><span class="value">تجربة واحدة بناتجين</span></div>
          <div class="row"><span class="label">المعالم</span><span class="value">p</span></div>
          <div class="row"><span class="label">القانون</span><span class="value">P(X)=pˣ·q^(1-x)</span></div>
          <div class="row"><span class="label">المتوسط μ</span><span class="value">p</span></div>
          <div class="row"><span class="label">التباين σ²</span><span class="value">p·q</span></div>
          <div class="row"><span class="label">الانحراف σ</span><span class="value">√(p·q)</span></div>
        </div>

        <!-- كارت ذو الحدين -->
        <div class="dist-card binomial">
          <h4>📈 توزيع ذو الحدين</h4>
          <div class="row"><span class="label">طبيعة الاستخدام</span><span class="value">تكرار بيرنولي n مرة</span></div>
          <div class="row"><span class="label">المعالم</span><span class="value">n , p</span></div>
          <div class="row"><span class="label">القانون</span><span class="value">P(x)=C(n,x)·pˣ·q^(n-x)</span></div>
          <div class="row"><span class="label">المتوسط μ</span><span class="value">n·p</span></div>
          <div class="row"><span class="label">التباين σ²</span><span class="value">n·p·q</span></div>
          <div class="row"><span class="label">الانحراف σ</span><span class="value">√(n·p·q)</span></div>
        </div>

        <!-- كارت بواسون -->
        <div class="dist-card poisson">
          <h4>📞 توزيع بواسون</h4>
          <div class="row"><span class="label">طبيعة الاستخدام</span><span class="value">أحداث نادرة (زمن/مكان)</span></div>
          <div class="row"><span class="label">المعالم</span><span class="value">λ</span></div>
          <div class="row"><span class="label">القانون</span><span class="value">P(X)=e⁻λ·λ^X/X!</span></div>
          <div class="row"><span class="label">المتوسط μ</span><span class="value">λ</span></div>
          <div class="row"><span class="label">التباين σ²</span><span class="value">λ</span></div>
          <div class="row"><span class="label">الانحراف σ</span><span class="value">√λ</span></div>
        </div>
      </div>

      <div class="warning" style="margin-top: 15px; background: rgba(255,107,107,0.1); border-right: 3px solid #ff6b6b; padding: 10px 15px; border-radius: 10px;">
        <p style="margin: 0;">💡 <strong>ملحوظة دايماً:</strong> q = 1 - p (احتمال الفشل = 1 - احتمال النجاح)</p>
      </div>
    </div>
  `,

  // زتونة أشكال المنحنيات
  shapesSummary: `
    <div class="shapes-box" style="background: linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.2)); border-radius: 16px; padding: 20px; margin-bottom: 25px; border: 1px solid rgba(255,217,61,0.3);">
      <h3 style="color: #ffd93d; margin-bottom: 15px;">📉 زتونة أشكال المنحنيات (توزيع ذو الحدين)</h3>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px;">
        <div style="background: rgba(107,203,255,0.1); border-radius: 12px; padding: 15px; text-align: center;">
          <div style="font-size: 2em;">🔷</div>
          <h4 style="color: #6bcbff; margin: 10px 0;">p = 0.5</h4>
          <p><strong>تماثل تام</strong><br>المنحنى متماثل شبه الجرس</p>
        </div>
        <div style="background: rgba(255,107,107,0.1); border-radius: 12px; padding: 15px; text-align: center;">
          <div style="font-size: 2em;">📈</div>
          <h4 style="color: #ff6b6b; margin: 10px 0;">p < 0.5</h4>
          <p><strong>التواء جهة اليمين (موجب)</strong><br>الاحتمال صغير، الديل مسحوب لليمين</p>
        </div>
        <div style="background: rgba(255,107,107,0.1); border-radius: 12px; padding: 15px; text-align: center;">
          <div style="font-size: 2em;">📉</div>
          <h4 style="color: #ff6b6b; margin: 10px 0;">p > 0.5</h4>
          <p><strong>التواء جهة اليسار (سالب)</strong><br>الاحتمال كبير، الديل مسحوب لليسار</p>
        </div>
      </div>
      
      <div class="success" style="margin-top: 15px; background: rgba(168,230,207,0.1); border-right: 3px solid #a8e6cf; padding: 10px 15px; border-radius: 10px;">
        <p style="margin: 0;">🎯 <strong>قاعدة n الكبيرة:</strong> كل ما عدد المحاولات (n) يكبر، المنحنى بيقرب من التماثل والاعتدال (المنحنى الطبيعي) حتى لو كانت p ≠ 0.5.</p>
      </div>
    </div>
  `,

  // تريكات الامتحانات
  examTips: `
    <div class="tips-box" style="background: linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.2)); border-radius: 16px; padding: 20px; margin-bottom: 25px; border: 1px solid rgba(255,217,61,0.3);">
      <h3 style="color: #ffd93d; margin-bottom: 15px;">⚡ تريكات الامتحانات والسقطات الشهيرة</h3>
      
      <div style="background: rgba(255,107,107,0.15); border-right: 4px solid #ff6b6b; padding: 12px 15px; margin: 12px 0; border-radius: 10px;">
        <p style="margin: 0; font-weight: bold;">⚠️ فخ الـ n في ذو الحدين:</p>
        <p style="margin: 5px 0 0 0;">الـ n هي دايماً حجم العينة المسحوبة أو عدد المحاولات الفعلي، ملهاش دعوة بحجم الصندوق أو المجتمع الكلي!</p>
      </div>
      
      <div style="background: rgba(168,230,207,0.1); border-right: 4px solid #a8e6cf; padding: 12px 15px; margin: 12px 0; border-radius: 10px;">
        <p style="margin: 0; font-weight: bold;">🎯 تريكة "على الأكثر" و"على الأقل":</p>
        <p style="margin: 5px 0 0 0;"><strong>على الأكثر (≤) :</strong> ننزل تنازلي ونجمع من الصفر لحد الرقم → P(0)+P(1)+P(2)</p>
        <p style="margin: 5px 0 0 0;"><strong>على الأقل (≥) :</strong> نطلع تصاعدي لفوق، والأسهل نستخدم قانون المكمل → 1 - [P(0)+P(1)]</p>
      </div>
      
      <div style="background: rgba(107,203,255,0.1); border-right: 4px solid #6bcbff; padding: 12px 15px; margin: 12px 0; border-radius: 10px;">
        <p style="margin: 0; font-weight: bold;">🔄 تريكة تحويل زمن اللامدا (λ) في بواسون:</p>
        <p style="margin: 5px 0 0 0;">اللامدا مرتبطة بالزمن، لو المسألة غيرت وحدة الزمن لازم تغير اللامدا بالضرب أو القسمة قبل ما تعوضي في القانون.</p>
      </div>
      
      <div style="background: rgba(255,217,61,0.1); border-right: 4px solid #ffd93d; padding: 12px 15px; margin: 12px 0; border-radius: 10px;">
        <p style="margin: 0; font-weight: bold;">🤝 شرط تقريب ذو الحدين بواسطة بواسون:</p>
        <p style="margin: 5px 0 0 0;">n ≥ 30 و p ≤ 0.05 → نستخدم λ = n·p ونحل بقانون بواسون</p>
      </div>
    </div>
  `,

  content: `
    <style>
        .lec-content li {
            margin-bottom: 12px;
            line-height: 1.8;
            text-align: justify;
        }
        .lec-content ul, .lec-content ol {
            padding-right: 25px;
            margin-bottom: 18px;
        }
        .lec-content p {
            line-height: 1.8;
            margin-bottom: 14px;
            text-align: justify;
        }
        .lec-content h2 {
            margin-top: 25px;
            margin-bottom: 18px;
            font-size: 1.4em;
            color: #ffd93d;
            border-right: 4px solid #ff6b6b;
            padding-right: 15px;
        }
        .lec-content h3 {
            margin-top: 22px;
            margin-bottom: 12px;
            font-size: 1.2em;
            color: #6bcbff;
        }
        .lec-content h4 {
            margin-top: 18px;
            margin-bottom: 10px;
            font-size: 1.05em;
            color: #ffd93d;
        }
        .lec-content .formula {
            background: rgba(0,0,0,0.3);
            padding: 12px 18px;
            border-radius: 12px;
            font-family: monospace;
            font-size: 1.1em;
            text-align: center;
            margin: 15px 0;
            direction: ltr;
            color: #a8e6cf;
        }
        .lec-content .example-box {
            background: rgba(255,107,107,0.1);
            border-right: 3px solid #ff6b6b;
            padding: 15px 20px;
            margin: 15px 0;
            border-radius: 12px;
        }
        .lec-content .image-container {
            text-align: center;
            margin: 25px 0;
            padding: 15px;
            background: rgba(255,255,255,0.03);
            border-radius: 14px;
            border: 1px solid rgba(255,255,255,0.08);
        }
        .lec-content .image-container img {
            max-width: 100%;
            height: auto;
            border-radius: 10px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        }
        .lec-content .image-caption {
            margin-top: 12px;
            font-size: 0.95em;
            color: #aaa;
            font-style: italic;
        }
        .lec-content .highlight {
            background: rgba(255,217,61,0.2);
            padding: 2px 8px;
            border-radius: 6px;
            color: #ffd93d;
            font-weight: 600;
        }
        .lec-content .warning {
            background: rgba(255,107,107,0.15);
            border-right: 4px solid #ff6b6b;
            padding: 15px 20px;
            border-radius: 12px;
            margin: 15px 0;
        }
        .lec-content .success {
            background: rgba(168,230,207,0.15);
            border-right: 4px solid #a8e6cf;
            padding: 15px 20px;
            border-radius: 12px;
            margin: 15px 0;
        }
        .lec-content .info-box {
            background: rgba(107,203,255,0.15);
            border-right: 4px solid #6bcbff;
            padding: 15px 20px;
            border-radius: 12px;
            margin: 15px 0;
        }
        .lec-content .page-badge {
            display: inline-block;
            background: linear-gradient(135deg, #ff6b6b, #ffd93d);
            color: #1a1a2e;
            padding: 3px 10px;
            border-radius: 12px;
            font-size: 0.8em;
            font-weight: 700;
            margin-left: 8px;
        }
        .lec-content table {
            width: 100%;
            border-collapse: collapse;
            background: rgba(0,0,0,0.2);
            margin: 15px 0;
        }
        .lec-content th, .lec-content td {
            padding: 10px 12px;
            text-align: center;
            border: 1px solid rgba(255,255,255,0.1);
        }
        .lec-content th {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: #fff;
            font-weight: 700;
        }
        .lec-content tr:nth-child(even) {
            background: rgba(255,255,255,0.03);
        }
        .summary-box, .formulas-box, .shapes-box, .tips-box {
          scroll-margin-top: 20px;
        }
    </style>

    <!-- الزتونة النظرية -->
    <div class="box" id="theory">
        <h2>📚 الزتونة النظرية (أنواع المتغيرات وشروط التوزيع)</h2>
        
        <div style="background: rgba(107,203,255,0.1); border-right: 3px solid #6bcbff; padding: 15px; margin: 15px 0; border-radius: 10px;">
          <h4 style="color: #6bcbff; margin: 0 0 10px 0;">🎯 المتغير العشوائي المنفصل (Discrete)</h4>
          <p><strong>بياخد أرقام صحيحة وقابلة للعد (مفيش كسور)</strong></p>
          <p><strong>أمثلة:</strong> عدد الأطفال، عدد اللمبات التالفة، عدد مرات رمي العملة</p>
        </div>

        <div style="background: rgba(107,203,255,0.1); border-right: 3px solid #6bcbff; padding: 15px; margin: 15px 0; border-radius: 10px;">
          <h4 style="color: #6bcbff; margin: 0 0 10px 0;">📏 المتغير العشوائي المتصل (Continuous)</h4>
          <p><strong>بياخد أي قيمة في فترة (فيها كسور عادي) وبتقيس كميات</strong></p>
          <p><strong>أمثلة:</strong> الأطوال، الأوزان، درجات الحرارة، الدخل السنوي</p>
        </div>

        <div style="background: rgba(168,230,207,0.1); border-right: 3px solid #a8e6cf; padding: 15px; margin: 15px 0; border-radius: 10px;">
          <h4 style="color: #a8e6cf; margin: 0 0 10px 0;">✅ شرطي الدالة الاحتمالية (مهم جداً للنظري والمسائل)</h4>
          <ul style="margin: 0; padding-right: 20px;">
            <li>احتمال أي قيمة لازم يكون بين الصفر والواحد: <strong>0 ≤ P(X) ≤ 1</strong></li>
            <li>مجموع كل الاحتمالات في الجدول لازم يساوي واحد صحيح: <strong>∑ P(X) = 1</strong></li>
          </ul>
        </div>
    </div>

    <!-- القوانين الأساسية -->
    <div class="box" id="formulas">
        <h2>📐 القوانين الأساسية (المحرك الرئيسي للمسائل)</h2>

        <style>
          .dist-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 15px; margin: 20px 0; }
          .dist-card { 
            background: rgba(0,0,0,0.25); 
            border-radius: 14px; 
            padding: 18px; 
            border: 1px solid rgba(255,255,255,0.08);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }
          .dist-card:hover { transform: translateY(-3px); box-shadow: 0 8px 25px rgba(0,0,0,0.3); }
          .dist-card h4 { margin: 0 0 14px 0; font-size: 1.05em; padding-bottom: 10px; border-bottom: 2px solid; text-align: center; }
          .dist-card .row { display: flex; justify-content: space-between; padding: 7px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 0.92em; align-items: center; }
          .dist-card .row:last-child { border-bottom: none; }
          .dist-card .label { color: #aaa; flex-shrink: 0; margin-left: 10px; }
          .dist-card .value { font-weight: 600; direction: ltr; text-align: left; color: #fff; }
          .bernoulli { border-top: 3px solid #6bcbff; }
          .bernoulli h4 { color: #6bcbff; border-color: rgba(107,203,255,0.3); }
          .bernoulli .value { color: #6bcbff; }
          .binomial { border-top: 3px solid #ffd93d; }
          .binomial h4 { color: #ffd93d; border-color: rgba(255,217,61,0.3); }
          .binomial .value { color: #ffd93d; }
          .poisson { border-top: 3px solid #a8e6cf; }
          .poisson h4 { color: #a8e6cf; border-color: rgba(168,230,207,0.3); }
          .poisson .value { color: #a8e6cf; }
          @media (max-width: 400px) {
            .dist-cards { grid-template-columns: 1fr; gap: 12px; }
            .dist-card { padding: 14px; }
            .dist-card .row { font-size: 0.88em; }
          }
        </style>

        <div class="dist-cards">
          <div class="dist-card bernoulli">
            <h4>🎲 محاولة بيرنولي</h4>
            <div class="row"><span class="label">طبيعة الاستخدام</span><span class="value">تجربة واحدة بناتجين</span></div>
            <div class="row"><span class="label">المعالم</span><span class="value">p</span></div>
            <div class="row"><span class="label">القانون</span><span class="value">P(X)=pˣ·q^(1-x)</span></div>
            <div class="row"><span class="label">المتوسط μ</span><span class="value">p</span></div>
            <div class="row"><span class="label">التباين σ²</span><span class="value">p·q</span></div>
            <div class="row"><span class="label">الانحراف σ</span><span class="value">√(p·q)</span></div>
          </div>
          <div class="dist-card binomial">
            <h4>📈 توزيع ذو الحدين</h4>
            <div class="row"><span class="label">طبيعة الاستخدام</span><span class="value">تكرار بيرنولي n مرة</span></div>
            <div class="row"><span class="label">المعالم</span><span class="value">n , p</span></div>
            <div class="row"><span class="label">القانون</span><span class="value">P(x)=C(n,x)·pˣ·q^(n-x)</span></div>
            <div class="row"><span class="label">المتوسط μ</span><span class="value">n·p</span></div>
            <div class="row"><span class="label">التباين σ²</span><span class="value">n·p·q</span></div>
            <div class="row"><span class="label">الانحراف σ</span><span class="value">√(n·p·q)</span></div>
          </div>
          <div class="dist-card poisson">
            <h4>📞 توزيع بواسون</h4>
            <div class="row"><span class="label">طبيعة الاستخدام</span><span class="value">أحداث نادرة (زمن/مكان)</span></div>
            <div class="row"><span class="label">المعالم</span><span class="value">λ</span></div>
            <div class="row"><span class="label">القانون</span><span class="value">P(X)=e⁻λ·λ^X/X!</span></div>
            <div class="row"><span class="label">المتوسط μ</span><span class="value">λ</span></div>
            <div class="row"><span class="label">التباين σ²</span><span class="value">λ</span></div>
            <div class="row"><span class="label">الانحراف σ</span><span class="value">√λ</span></div>
          </div>
        </div>

        <div class="warning">
          <p>💡 <strong>ملحوظة دايماً:</strong> q = 1 - p (احتمال الفشل = 1 - احتمال النجاح)</p>
        </div>
    </div>

    <!-- أشكال المنحنيات -->
    <div class="box" id="shapes">
        <h2>📉 أشكال المنحنيات (توزيع ذو الحدين)</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; margin-bottom: 20px;">
          <div style="background: rgba(107,203,255,0.1); border-radius: 12px; padding: 15px; text-align: center;">
          <img src="Gemini_Generated_Image_7ujz9w7ujz9w7ujz.png" style= "width:300px;  border-radius: 12px; max-width:100%"></div>
          
          </div>
          <div style="background: rgba(36, 148, 170, 0.1); border-radius: 12px; padding: 15px; text-align: center;">
            <div style="font-size: 2em;">  <img src="Gemini_Generated_Image_jhyy3ljhyy3ljhyy (1).png" style= "width:300px;  border-radius: 12px; max-width:100%"></div>
           
          </div>
          <div style="background: rgba(36, 148, 170, 0.1); border-radius: 12px; padding: 15px; text-align: center;">
            <div style="font-size: 2em;"> <img src="Gemini_Generated_Image_jhyy3ljhyy3ljhyy.png" style= "width:300px;  border-radius: 12px; max-width:100%"></div>
           
          </div>
        </div>
        
        <div class="success">
          <p>🎯 <strong>قاعدة n الكبيرة:</strong> كل ما عدد المحاولات (n) يكبر، المنحنى بيقرب من التماثل والاعتدال (المنحنى الطبيعي) حتى لو كانت p ≠ 0.5.</p>
        </div>
    </div>

    <!-- تريكات الامتحانات -->
    <div class="box" id="tips">
        <h2>⚡ تريكات الامتحانات والسقطات الشهيرة</h2>
        
        <div class="warning">
          <p><strong>⚠️ فخ الـ n في ذو الحدين:</strong><br>الـ n هي دايماً حجم العينة المسحوبة أو عدد المحاولات الفعلي، ملهاش دعوة بحجم الصندوق أو المجتمع الكلي!</p>
        </div>
        
        <div class="success">
          <p><strong>🎯 تريكة "على الأكثر" و"على الأقل":</strong><br>
          <strong>على الأكثر (≤) :</strong> ننزل تنازلي ونجمع من الصفر لحد الرقم → P(0)+P(1)+P(2)<br>
          <strong>على الأقل (≥) :</strong> نطلع تصاعدي لفوق، والأسهل نستخدم قانون المكمل → 1 - [P(0)+P(1)]</p>
        </div>
        
        <div class="info-box">
          <p><strong>🔄 تريكة تحويل زمن اللامدا (λ) في بواسون:</strong><br>اللامدا مرتبطة بالزمن، لو المسألة غيرت وحدة الزمن لازم تغير اللامدا بالضرب أو القسمة قبل ما تعوضي في القانون.</p>
        </div>
        
        <div class="info-box" style="border-right-color: #ffd93d;">
          <p><strong>🤝 شرط تقريب ذو الحدين بواسطة بواسون:</strong><br>n ≥ 30 و p ≤ 0.05 → نستخدم λ = n·p ونحل بقانون بواسون</p>
        </div>
    </div>

   

        <div class="example-box">
            <h3>📌 مثال (5): ماكينة الصرف الآلي (بواسون) <span class="page-badge">صفحة 54</span></h3>
            <p><strong>المسألة:</strong> إذا كان متوسط عدد العملاء (ATM) في إحدى البيئات هو 3 في الساعة. احسبي احتمال أن يستخدم الماكينة في ساعة معينة:</p>

            <div class="info-box">
                <p><strong>المفتاح السحري:</strong></p>
                <ul>
                    <li>λ = 3 (المتوسط في الساعة - لاحظي كلمة "متوسط" ومرتبطة بـ "وحدة زمنية" يبقى دي مسألة بواسون)</li>
                    <li>e = 2.718 (ثابت في الالة الحاسبة)</li>
                    <li>e^(-3) = 0.0498 (احفظي الرقم ده أو سيبيه على الالة علطول عشان بيضرب في كل المطاليب)</li>
                </ul>
            </div>

            <p><strong>القانون:</strong> P(X) = (e^(-λ) · λ^X) / X!</p>

          <img src="Gemini_Generated_Image_dexf7jdexf7jdexf.png " style="max-width:100%; width:600px;self-align:center;">

            <div class="success">
                <p>💡 ملحوظة: في توزيع بواسون في بعض الأرقام بتلاقي ناتجين زي بعض بالظبط! 3 عملاء طلعوا نفس احتمال عميلين (0.2241). ده عادي جدًا في توزيع بواسون.</p>
            </div>
        </div>

        <div class="example-box">
            <h3>📌 مثال (6): السنترال - تحويل الزمن <span class="page-badge">صفحة 57</span></h3>
            <p><strong>المسألة:</strong> السنترال بيستقبل في المتوسط 150 مكالمة في الساعة. احتمال استقبال 3 مكالمات "على الأقل" في دقيقة واحدة.</p>

            <div class="info-box">
                <p><strong>الحل:</strong></p>
                <ol>
                    <li>تحويل المعدل: 150 ÷ 60 دقيقة = <strong>λ = 2.5</strong> مكالمة/دقيقة</li>
                    <li>"على الأقل 3" يعني P(X ≥ 3) = 1 - P(X < 3) = 1 - [P(0) + P(1) + P(2)]</li>
                    <li>نعوض في قانون بواسون ونطرح من 1</li>
                </ol>
            </div>
        </div>

        <div class="example-box">
            <h3>📌 مثال (7): وصول السفن <span class="page-badge">صفحة 58</span></h3>
            <p><strong>المسألة:</strong> متوسط وصول السفن للمينا هو سفينتين في اليوم (λ = 2). احتمال وصول 3 سفن في يوم معين.</p>

            <div class="formula">
                P(3) = (e⁻² · 2³) / 3! = (0.1353 × 8) / 6 = 0.1804
            </div>
            <p>يعني احتمال بنسبة 18% إن يوصل 3 سفن في اليوم.</p>
        </div>
    </div>

    <div class="box">
        <h2>📝 سادساً: ملاحظات إضافية</h2>
        <ul>
            <li>توجد توزيعات أخرى للمتغيرات المنفصلة والمتصلة مثل التوزيع الطبيعي، والتوزيع الهندسي الزائد، وتوزيع F.</li>
            <li>يمكن استخدام الجداول الجاهزة (ملحق التوزيع الاحتمالي) لإيجاد احتمالات ذو الحدين وبواسون بدلاً من التعويض المباشر في القوانين لتسهيل الحل في المسائل التجميعية.</li>
            <li><strong>العملي كله بيلف حوالين توزيعين أساسيين: ذو الحدين (Binomial) وبواسون (Poisson).</strong></li>
        </ul>
    </div>
  `,

  exam: {
    trueFalse: [
      {
        question:
          "المتغير العشوائي المنفصل هو الذي يأخذ مجموعة محدودة أو قابلة للعد من القيم.",
        answer: "true",
        explanation: "ده تعريفه بالظبط!",
      },
      {
        question:
          "تعتبر الأوزان والأطوال أمثلة على المتغيرات العشوائية المنفصلة.",
        answer: "false",
        explanation: "دي أمثلة على المتغير المتصل (فيها كسور)، مش المنفصل.",
      },
      {
        question: "في محاولة بيرنولي، توجد ثلاث نتائج ممكنة للتجربة.",
        answer: "false",
        explanation: "في بيرنولي ناتجين فقط (نجاح/فشل)، مفيش ثالث.",
      },
      {
        question:
          "يشترط في محاولات بيرنولي أن يكون احتمال النجاح (P) ثابتاً من محاولة لأخرى.",
        answer: "true",
        explanation: "ده شرط 'ثبات الاحتمال' الأساسي.",
      },
      {
        question: "نتائج محاولات بيرنولي المتكررة هي نتائج مستقلة تماماً.",
        answer: "true",
        explanation: "'الاستقلال التام' ده شرط أساسي.",
      },
      {
        question: "المتوسط الحسابي لمحاولة بيرنولي الواحدة يساوي P·q.",
        answer: "false",
        explanation: "المتوسط بيساوي p بس. التباين هو اللي بيساوي p·q.",
      },
      {
        question:
          "توزيع ذو الحدين يستخدم لرصد عدد مرات النجاح (X) في (n) من المحاولات المستقلة.",
        answer: "true",
        explanation: "ده تعريف التوزيع بالظبط.",
      },
      {
        question:
          "إذا كانت P=0.5 في توزيع ذو الحدين، يكون التوزيع متماثلاً تماماً.",
        answer: "true",
        explanation: "p=0.5 يعني النجاح = الفشل = التماثل التام.",
      },
      {
        question:
          "يكون توزيع ذو الحدين ملتوياً جهة اليمين إذا كانت قيمة P أكبر من 0.5.",
        answer: "false",
        explanation:
          "لما p > 0.5 الالتواء بيكون جهة اليسار (سالب). اليمين بيكون لما p < 0.5.",
      },
      {
        question:
          "يقترب توزيع ذو الحدين من التماثل كلما زاد عدد المحاولات (n).",
        answer: "true",
        explanation: "القاعدة الذهبية: كلما n كبر، التوزيع بيقرب من التماثل.",
      },
      {
        question: "في توزيع ذو الحدين، التباين يساوي n·P·q.",
        answer: "true",
        explanation: "ده قانون التباين الصحيح.",
      },
      {
        question:
          "توزيع بواسون يستخدم لحساب احتمالات حوادث تقع في وحدة زمنية أو مكانية محددة.",
        answer: "true",
        explanation: "ده تعريف توزيع بواسون بالظبط.",
      },
      {
        question: "في توزيع بواسون، المتوسط الحسابي يساوي التباين ويساوي λ.",
        answer: "true",
        explanation: "الخاصية السحرية: μ = σ² = λ",
      },
      {
        question:
          "يمكن استخدام توزيع بواسون كتقريب لذي الحدين عندما تكون n صغيرة جداً.",
        answer: "false",
        explanation: "لازم n تكون كبيرة (≥30) و p صغيرة (≤0.05).",
      },
      {
        question:
          "يشترط في توزيع بواسون أن يكون احتمال وقوع الحدث ثابتاً في أي وحدة زمنية.",
        answer: "true",
        explanation: "ده شرط أساسي لبواسون.",
      },
      {
        question:
          "قيمة الثابت الطبيعي e المستخدم في قانون بواسون هي تقريباً 2.71828.",
        answer: "true",
        explanation: "e ≈ 2.71828",
      },
      {
        question:
          "مجموع الاحتمالات في أي توزيع احتمالي يجب أن يساوي الواحد الصحيح.",
        answer: "true",
        explanation: "ده شرط نظري أساسي: ∑P(X) = 1",
      },
      {
        question: "التباين هو جذر الانحراف المعياري.",
        answer: "false",
        explanation: "العكس! الانحراف المعياري هو جذر التباين (σ = √σ²).",
      },
      {
        question: "معالم توزيع ذو الحدين هي n و P.",
        answer: "true",
        explanation: "n (عدد المحاولات) و p (احتمال النجاح) هما معالم التوزيع.",
      },
      {
        question: "يسمى التوزيع الاحتمالي أحياناً بـ الدالة الاحتمالية.",
        answer: "true",
        explanation:
          "'التوزيع الاحتمالي' = 'دالة الكتلة الاحتمالية' = 'الدالة الاحتمالية'.",
      },
    ],
    multipleChoice: [
      {
        question: "أي مما يلي يعد متغيراً عشوائياً منفصلاً؟",
        options: ["الدخل السنوي", "درجات الحرارة", "عدد أطفال الأسرة", "الطول"],
        correctIndex: "2",
        explanation: "عدد الأطفال قيمة صحيحة منفصلة، الباقي متصل (كسور).",
      },
      {
        question:
          "في قانون بيرنولي، إذا كان احتمال النجاح 0.7، فإن احتمال الفشل (q) يساوي:",
        options: ["0.7", "0.3", "1.0", "0.5"],
        correctIndex: "1",
        explanation: "q = 1 - p = 1 - 0.7 = 0.3",
      },
      {
        question: "قانون المتوسط الحسابي لتوزيع ذو الحدين هو:",
        options: ["P·q", "n·P·q", "n·P", "λ"],
        correctIndex: "2",
        explanation: "μ = n·p",
      },
      {
        question: "يُستخدم توزيع بواسون بشكل أساسي في:",
        options: [
          "رمي العملة",
          "اختيار طلاب",
          "عدد العملاء الواصلين للبنك",
          "قياس الأوزان",
        ],
        correctIndex: "2",
        explanation: "بواسون للحداث النادرة في وحدة زمنية/مكانية.",
      },
      {
        question: "إذا كانت n=10 و P=0.5 في ذو الحدين، فإن التوزيع يكون:",
        options: ["متماثلاً", "ملتوياً لليمين", "ملتوياً لليسار", "غير محدد"],
        correctIndex: "0",
        explanation: "p=0.5 يعني تماثل تام.",
      },
      {
        question: "في توزيع بواسون، إذا كان λ=4، فإن الانحراف المعياري يساوي:",
        options: ["4", "2", "16", "1"],
        correctIndex: "1",
        explanation: "σ = √λ = √4 = 2",
      },
      {
        question: "الشرط الضروري لاعتبار بواسون تقريباً لذي الحدين هو:",
        options: ["n<30", "P<0.05", "P>0.5", "n=1"],
        correctIndex: "1",
        explanation: "لازم p صغير (≤0.05) و n كبير (≥30).",
      },
      {
        question: "معادلة التباين في محاولة بيرنولي الواحدة هي:",
        options: ["nPq", "Pq", "P", "λ"],
        correctIndex: "1",
        explanation: "σ² = p·q لمحاولة بيرنولي واحدة.",
      },
      {
        question:
          "إذا سحبنا 3 مصابيح وكان احتمال الصالح 0.8، فإن احتمال أن تكون كلها تالفة هو:",
        options: ["0.512", "0.8", "0.008", "0.104"],
        correctIndex: "2",
        explanation: "P(0) = C(3,0)·(0.8)⁰·(0.2)³ = 1·1·0.008 = 0.008",
      },
      {
        question: "المتوسط في توزيع بواسون يعبر عن:",
        options: [
          "معدل حدوث الحدث",
          "عدد المحاولات",
          "احتمال الفشل",
          "حجم العينة",
        ],
        correctIndex: "0",
        explanation: "λ = متوسط معدل حدوث الحدث.",
      },
      {
        question: "في ذو الحدين، إذا زادت قيمة n جداً، فإن شكل التوزيع:",
        options: [
          "يزداد التواءً",
          "يقترب من التماثل",
          "يصبح خطاً مستقيماً",
          "لا يتغير",
        ],
        correctIndex: "1",
        explanation: "قاعدة n الكبيرة: كلما n زاد، التوزيع بيقرب من التماثل.",
      },
      {
        question: "أي من القيم التالية لا يمكن أن تكون احتمالاً؟",
        options: ["0", "1", "0.5", "1.5"],
        correctIndex: "3",
        explanation: "الاحتمال لازم يكون بين 0 و 1.",
      },
      {
        question:
          "في مسألة السفن، إذا كان المتوسط 2 يومياً، فإن احتمال وصول 3 سفن يُحسب بـ:",
        options: ["ذو الحدين", "بواسون", "بيرنولي", "التوزيع الطبيعي"],
        correctIndex: "1",
        explanation: "مسألة بواسون لأنها حدث نادر في وحدة زمنية.",
      },
      {
        question: "معلمة توزيع بواسون الوحيدة هي:",
        options: ["n", "P", "λ", "q"],
        correctIndex: "2",
        explanation: "بواسون ليه معلمة واحدة بس: λ",
      },
      {
        question:
          "إذا كان الانحراف المعياري لتوزيع ذو حدين هو 3، فإن التباين هو:",
        options: ["√3", "9", "1.5", "3"],
        correctIndex: "1",
        explanation: "σ² = σ × σ = 3 × 3 = 9",
      },
      {
        question: "استقلال المحاولات يعني أن نتيجة محاولة:",
        options: [
          "تؤثر في المحاولة التالية",
          "لا علاقة لها بالمحاولات الأخرى",
          "تساوي دائماً P",
          "تساوي دائماً q",
        ],
        correctIndex: "1",
        explanation: "استقلال يعني مفيش تأثير بين المحاولات.",
      },
      {
        question:
          "توزيع ذو الحدين يعتبر عائلة كاملة من التوزيعات لأن شكله يعتمد على:",
        options: ["n و P", "X فقط", "متوسط بواسون", "حجم المجتمع"],
        correctIndex: "0",
        explanation: "لكل n و p يوجد توزيع مختلف.",
      },
      {
        question: "في قانون بواسون، الرمز X! يعني:",
        options: ["جذر X", "تربيع X", "مضروب X", "لوغاريتم X"],
        correctIndex: "2",
        explanation: "X! = مضروب X (factorial)",
      },
      {
        question:
          "إذا كان احتمال الإصابة بمرض 0.6، فإن احتمال عدم الإصابة (q) هو:",
        options: ["0.6", "0.4", "0", "1"],
        correctIndex: "1",
        explanation: "q = 1 - 0.6 = 0.4",
      },
      {
        question: "دراسة المتغيرات العشوائية تفيد في:",
        options: [
          "وصف البيانات فقط",
          "اتخاذ القرارات العلمية",
          "العد فقط",
          "الرسم البياني",
        ],
        correctIndex: "1",
        explanation: "الهدف النهائي هو اتخاذ قرارات علمية صحيحة.",
      },
    ],
    essay: [
      {
        question:
          "اشرح شروط تجربة 'بيرنولي' وكيف ننتقل منها إلى 'توزيع ذو الحدين'؟",
        modelAnswer:
          "شروط بيرنولي هي: (1) وجود ناتجين فقط (نجاح/فشل)، (2) احتمال النجاح (P) ثابت، (3) المحاولات مستقلة. ننتقل لتوزيع ذو الحدين عندما نقوم بتكرار محاولة بيرنولي هذه عدداً من المرات (n)، حيث نهتم بحساب احتمال الحصول على عدد (X) من النجاحات في تلك المرات الكلية.",
      },
      {
        question:
          "وضح أثر قيمة احتمال النجاح (P) على شكل تماثل أو التواء توزيع ذو الحدين.",
        modelAnswer:
          "يعتمد شكل التوزيع على P كالتالي: (1) إذا كانت P = 0.5 يكون التوزيع متماثلاً تماماً، (2) إذا كانت P < 0.5 يكون التوزيع ملتوياً جهة اليمين (التواء موجب)، (3) إذا كانت P > 0.5 يكون التوزيع ملتوياً جهة اليسار (التواء سالب). كما أن التوزيع يقترب من التماثل أكثر كلما كبرت قيمة n.",
      },
      {
        question:
          "متى نستخدم توزيع بواسون كبديل لتوزيع ذو الحدين؟ وما هي الصيغة الرياضية له؟",
        modelAnswer:
          "نستخدمه كتقريب لذي الحدين عندما يكون عدد المحاولات (n) كبيراً جداً (أكبر من 30) واحتمال النجاح (P) صغيراً جداً (أقل من 0.05). الصيغة الرياضية هي: P(X) = (e^(-λ) · λ^X) / X! حيث λ هو المتوسط ويساوي n·P في حالة التقريب.",
      },
    ],
  },
};

// Export for module usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = lectureData;
}