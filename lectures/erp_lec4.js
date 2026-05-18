const lectureData = {
    title: "اسئلة محلولة لمحاضرة ERP - اختيار من متعدد",
    isSolvedDocument: true,
    exam: {
        multipleChoice: [

            // ========== موديول المحاسبة (Accounting Module) ==========
            {
                question: "إذا كنت تريد إضافة حساب مجمع في دليل الحسابات يحتوى على حسابات أخرى يكون من خلال خيار:",
                options: [
                    "Is Group",
                    "ledger",
                    "Is account",
                    "لا شيء مما سبق"
                ],
                correctIndex: "0"
            },
            {
                question: "يستخدم حساب ....... لتقريب الفروق الناتجة عن التقريب في المبلغ النهائي:",
                options: [
                    "Chargeable",
                    "Payable",
                    "Round Off",
                    "لا شيء مما سبق"
                ],
                correctIndex: "2"
            },
            {
                question: "تتمثل أهمية شجرة الحسابات في:",
                options: [
                    "تحسين دقة المعلومات المالية",
                    "سهولة الوصول إلى الحساب",
                    "تنظيم الحسابات",
                    "كل ما سبق صحيح"
                ],
                correctIndex: "3"
            },
            {
                question: "عند الضغط على أي حساب (ledger) من دليل الحسابات يظهر مجموعة من الخيارات ألا وهي:",
                options: [
                    "Add child & close",
                    "New & View",
                    "Edit & Delete",
                    "كل ما سبق"
                ],
                correctIndex: "3"
            },
            {
                question: "يتم تنفيذ العمليات المحاسبية على:",
                options: [
                    "ledgers الدفاتر",
                    "المجموعات groups",
                    "كلاهما صحيح",
                    "لا شيء مما سبق"
                ],
                correctIndex: "0"
            },
            {
                question: "يمثل هذا النوع من الحسابات المبالغ المستحقة للشركة من مدينيها (العملاء):",
                options: [
                    "stock adjustment",
                    "receivable",
                    "payable",
                    "cost of goods sold"
                ],
                correctIndex: "1"
            },
            {
                question: "تخزن الحسابات من هذا النوع رسوماً إضافية تطبق على العناصر مثل رسوم النقل والتفريغ:",
                options: [
                    "depreciation",
                    "stock",
                    "tax",
                    "chargeable"
                ],
                correctIndex: "3"
            },
            {
                question: "لعمل حسابات فرعية تحت تصنيف الأصول والتي تبدأ برقم 2000 يتم اختيار:",
                options: [
                    "حسابات نقدية 2100",
                    "حسابات القبض 1200",
                    "البنك 3200",
                    "أ ، ب معاً"
                ],
                correctIndex: "3"
            },
            {
                question: "إذا بدت جميع التفاصيل صحيحة في المعاينة الخاصة بإدخال أداة استيراد دليل الحسابات يتم الضغط على زر لإنشاء دليل الحسابات:",
                options: [
                    "Save as",
                    "Import",
                    "Preview",
                    "Attach"
                ],
                correctIndex: "1"
            },
            {
                question: "كل مما يلي يعتبر من خطوات إدخال أداة استيراد دليل الحسابات ما عدا:",
                options: [
                    "Download template",
                    "Import",
                    "Add child",
                    "Chart preview"
                ],
                correctIndex: "2"
            },
            {
                question: "مجموعة الحسابات التي يتم تحتها إنشاء حسابات المخازن:",
                options: [
                    "Tax",
                    "Stock",
                    "Cost of goods sold",
                    "Income account"
                ],
                correctIndex: "1"
            },

            // ========== موديول المخزون (Stock Module) ==========
            {
                question: "ما الذي يمكن لنظام ERPNext إدارته ضمن مفهوم 'العنصر'؟",
                options: [
                    "المواد الخام فقط",
                    "المنتجات النهائية فقط",
                    "المواد الخام والمنتجات النهائية والخدمات",
                    "المنتجات التي تم بيعها فقط"
                ],
                correctIndex: "2"
            },
            {
                question: "عند إنشاء عنصر جديد في نظام ERPNext، متى يتم توليد اسم العنصر (Item Name) تلقائياً؟",
                options: [
                    "بمجرد حفظ العنصر بالكامل",
                    "بمجرد الضغط على زر جديد (New)",
                    "عند ملء رمز العنصر (Item code)",
                    "عند اختيار وحدة القياس من القائمة"
                ],
                correctIndex: "2"
            },
            {
                question: "إكمال '..........' أمر ضروري لتنفيذ نظام ERPNext بنجاح.",
                options: [
                    "إعداد وحدة القياس (Unit of Measure)",
                    "تفعيل المستخدم الرئيسي (Main User)",
                    "إكمال سجل العنصر (Item Master)",
                    "إدخال السعر الافتراضي (Default Pricing)"
                ],
                correctIndex: "2"
            },
            {
                question: "ما الفائدة الرئيسية من استخدام 'مجموعة العناصر' (Item Group) في النظام؟",
                options: [
                    "تحديد الكود المحاسبي",
                    "تصنيف العناصر حسب معايير مثل المواد أو الخدمات",
                    "توليد وحدات القياس تلقائياً",
                    "تسعير العناصر بشكل مباشر"
                ],
                correctIndex: "1"
            },
            {
                question: "ما المقصود بخيار 'Allow Alternative Item'؟",
                options: [
                    "ربط وحدة قياس بديلة",
                    "السماح باستبدال عنصر بآخر",
                    "تعطيل العنصر للاستخدام",
                    "تحديد خصائص المخزن"
                ],
                correctIndex: "1"
            },
            {
                question: "ما الخيار الذي يجب تفعيله لتتمكن من استخدام عنصر في أوامر التصنيع؟",
                options: [
                    "Maintain Stock",
                    "Item Valuation",
                    "Include Item in Manufacturing",
                    "Allow Alternative Item"
                ],
                correctIndex: "2"
            },
            {
                question: "ما الذي يحدث عند عدم تفعيل خيار 'Maintain Stock' لعنصر ما؟",
                options: [
                    "يمنع استخدام العنصر في عمليات التصنيع",
                    "يُعامل العنصر كخدمة",
                    "يتم حذفه من النظام",
                    "يُجبر النظام على طلب إدخال وحدة قياس"
                ],
                correctIndex: "1"
            },
            {
                question: "الخيار المسؤول عن تعطيل عنصر مخزني وبالتالي عدم اختياره في أي معاملة:",
                options: [
                    "Maintain Stock",
                    "Disable",
                    "Delete",
                    "لا شيء مما سبق"
                ],
                correctIndex: "1"
            },

            // ========== موديول الشراء (Buying Module) ==========
            {
                question: "من خطوات إنشاء مورد ما يلي:",
                options: [
                    "الذهاب إلى قائمة الموردين واضغط على new",
                    "ادخل اسم المورد واختر مجموعة المورد",
                    "اضغط على save",
                    "كل ما سبق صحيح"
                ],
                correctIndex: "3"
            },
            {
                question: "تتمثل أنواع حظر المورد في:",
                options: [
                    "حظر فواتير الشراء وأوامر الشراء",
                    "حظر إدخال المدفوعات",
                    "أ أو ب",
                    "لا شيء مما سبق"
                ],
                correctIndex: "2"
            },
            {
                question: "للوصول إلى مجموعة الموردين نتبع الآتي:",
                options: [
                    "Home > Supplier > Supplier group > Buying",
                    "Home > Buying > Supplier group > Supplier",
                    "Home > Buying > Supplier > Supplier group",
                    "لا شيء مما سبق"
                ],
                correctIndex: "2"
            },
            {
                question: "هو مستند من مورد محتمل يحدد تكلفة السلع أو الخدمات التي سيقدمها خلال فترة زمنية محددة هو:",
                options: [
                    "Purchase order",
                    "Supplier",
                    "Request for quotation",
                    "Supplier quotation"
                ],
                correctIndex: "3"
            },
            {
                question: "بمجرد تفعيل تعليق الفاتورة وتقديم الفاتورة ستتغير الحالة إلى......",
                options: [
                    "معلق مؤقت",
                    "معلق دائم",
                    "مدفوع جزئياً",
                    "ملغى"
                ],
                correctIndex: "1"
            },
            {
                question: "إذا كانت المصاريف الخاصة بالشراء ستتم فوترتها على مدار الأشهر القادمة بشكل جزئي، يتم تحديد خانة:",
                options: [
                    "Page break",
                    "Additional Discount",
                    "Draft",
                    "Deferred Expense"
                ],
                correctIndex: "3"
            },
            {
                question: "يعتبر كل مما يلي من المتطلبات الإلزامية لإنشاء فاتورة شراء ما عدا:",
                options: [
                    "المورد",
                    "أمر الشراء",
                    "إشعار خصم",
                    "العنصر"
                ],
                correctIndex: "2"
            },
            {
                question: "يمكن إنشاء فاتورة الشراء Purchase invoice من خلال:",
                options: [
                    "Purchase order",
                    "Purchase Receipt",
                    "Payment Entry",
                    "أ ، ب"
                ],
                correctIndex: "3"
            },
            {
                question: "طلب يتم إنشاؤه يدوياً من قبل المستخدم أو تلقائياً من النظام بناءً على مستوى إعادة الطلب أو الكمية المتوقعة في خطة الإنتاج:",
                options: [
                    "Purchase order",
                    "Sales order",
                    "Quotation",
                    "Material request"
                ],
                correctIndex: "3"
            },
            {
                question: "هو مستند ترسله المنظمة إلى مورد واحد أو أكثر لطلب عرض سعر الشراء للسلع والخدمات:",
                options: [
                    "Purchase Order",
                    "Purchase Invoice",
                    "Supplier Quotation",
                    "Request For Quotation"
                ],
                correctIndex: "3"
            },
            {
                question: "يمكن جلب العناصر في طلب عرض السعر من:",
                options: [
                    "طلب المواد Material Request",
                    "الفرصة Opportunity",
                    "المورد المحتمل Possible Supplier",
                    "جميع ما سبق"
                ],
                correctIndex: "3"
            },
            {
                question: "يمكن جلب الموردين في طلب عرض السعر حسب.......",
                options: [
                    "الوسم Tag",
                    "المجموعة Group",
                    "Currency العملة",
                    "أ أو ب معاً"
                ],
                correctIndex: "3"
            },

            // ========== موديول البيع (Selling Module) ==========
            {
                question: "......................... هو تقدير التكلفة للمنتجات أو الخدمات التي تقوم ببيعها لعملائنا المستقبليين أو الحاليين:",
                options: [
                    "Quotation",
                    "supplier quotation",
                    "Purchase order",
                    "Sales order"
                ],
                correctIndex: "0"
            },
            {
                question: "........................ هو مستند يؤكد الشروط الخاصة بتسليم وسعر المنتج أو الخدمة بناءً على طلب العميل وبناءً عليه يتم إنشاء التسليم والفواتير:",
                options: [
                    "Quotation",
                    "supplier quotation",
                    "Purchase order",
                    "Sales order"
                ],
                correctIndex: "3"
            },
            {
                question: "يتم إنشاء فاتورة المبيعات من خلال.......",
                options: [
                    "Sales Invoice",
                    "Sales Order",
                    "Delivery Note",
                    "جميع ما سبق"
                ],
                correctIndex: "3"
            },
            {
                question: "يمكن تعديل السعر والكمية في أمر البيع بعد التقديم باستخدام زر .......",
                options: [
                    "Quotation",
                    "Update Items",
                    "Submit",
                    "Delivery Note"
                ],
                correctIndex: "1"
            }
        ]
    }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = lectureData;
}