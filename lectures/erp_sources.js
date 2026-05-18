// hr_sources.js
const lectureData = {
  title: "📚 مصادر ومراجع نظم المعلومات المحاسبية",
  isSources: true, // هذا العلم يخّبر الصفحة بأن هذا ملف مصادر وليس محاضرة عادية
  content: `
        <div class="box">
            <p>هذه هي ملفات PDF الخاصة بمحاضرات مادة نظم المعلومات المحاسبية. اضغط على أي مصدر لفتحه مباشرة.</p>
        </div>
    `,
  sources: [
    {
      order: 1,
      name: "بنك أسئلة الفصل الأول",
      title: "بنك أسئلة الفصل الأول",
      filePath: "pdfs/ERP/بنك أسئلة الفصل الأول (1).pdf",
    },
    {
      order: 2,
      name: "الجزء الاول عملي",
      title: "الجزء الاول عملي",
      filePath: "pdfs/ERP/الجزء الاول عملي نظم المعلومات المحاسبية.pdf",
    },
    {
      order: 3,
      name: "اسئلة الجزء العملي",
      title: "اسئلة الجزء العملي",
      filePath: "pdfs/ERP/اسئلة الجزء العملي ERPNext (2).pdf",
    },
   {
    order:4,
    name :" امتحاان نظم المعلومات",
    title:"امتحان نظم المعلومات",
    filePath:"pdfs/ERP/امتحان نظم المعلومات المحاسبية 2025.pdf",
   },
   
   {
    order:5,
    name :" امتحاان نظم المعلومات شامل",
    title:"امتحان نظم المعلومات شامل",
    filePath:"pdfs/ERP/امتحان نظم المعلومات المحاسبية 2025شامل.pdf",
   },

   
  ],
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = lectureData;
}
