// hr_sources.js
const lectureData = {
  title: "📚 مصادر ومراجع الاحصاء",
  isSources: true, // هذا العلم يخّبر الصفحة بأن هذا ملف مصادر وليس محاضرة عادية
  content: `
        <div class="box">
            <p>هذه هي ملفات PDF الخاصة بمحاضرات مادةالاحصاااء التطبيقي. اضغط على أي مصدر لفتحه مباشرة.</p>
        </div>
    `,
  sources: [
    {
      order: 1,
      name: "سكشن 2",
      title: "سكشن 2",
      filePath: "pdfs/stas/السيكشن (٢) توزيع ذو الحدين (1).pdf",
    },
    {
      order: 2,
      name: "سكشن3",
      title:"سكشن 3",
      filePath: "pdfs/stas/السيكشن(٣) توزيع بواسون.pdf",
    },
    {
      order: 3,
      name: "سكشن 4",
      title: "سكشن 4",
      filePath: "pdfs/stas/السيكشن(4) التوزيع الطبيعي.pdf",
    },
   {
    order:4,
    name :"سكشن 5",
    title:"سكشن 5",
    filePath:"pdfs/stas/سيكشن(5) التوزيع الطبيعي..pdf",
   },
   
   {
    order:5,
    name :" سكشن 6",
    title:"سكشن 6",
    filePath:"pdfs/stas/السيكشن (6) التقديرات الاحصائية.pdf",
   },
   {
    order:6,
    name:"سكشن 7",
    title:"سكشن 7",
    filePath:"pdfs/stas/سيكشن (7 ) اختبارات الفروض الاحصائيه.pdf",
   },
   {
    order:7,
    name:"تابع الاختبارات الاحصائية",
    title:"تابع الاختبارات الاحصائية",
    filePath:"pdfs/stas/سيكشن ( ٨ ) تابع اختبارات الفروض الاحصائ.pdf",
   },
   {
    order:8,
    name:"تابع  التقدير الاحصائي",
    title:"تابع  التقدير الاحصائي",
    filePath:"pdfs/stas/سيكشن( ٨ ) تابع التقدير الإحصائي.pdf",
   },
   
  ],
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = lectureData;
}
