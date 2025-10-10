import type { SkillLevel } from './types';

export const CAREER_PATH_DATA: SkillLevel[] = [
  {
    level: 1,
    title: "Junior I",
    hardSkills: [
      "تسلط پایه به HTML, CSS, JavaScript (ES6+)",
      "درک ابتدایی از React (Component, Props, State)",
      "توانایی پیاده‌سازی UI از روی Figma",
      "آشنایی مقدماتی با Git",
      "درک مفاهیم پایه Responsive Design",
    ],
    softSkills: [
      "پذیرش بازخورد و تمایل به یادگیری",
      "دقت بالا در اجرای تسک‌ها",
      "روحیه همکاری در تیم",
      "مدیریت زمان برای تسک‌های ساده",
    ],
  },
  {
    level: 2,
    title: "Junior II",
    hardSkills: [
        "آشنایی با MUI یا Tailwind",
        "درک مفاهیم Component-driven development",
        "آشنایی مقدماتی با TypeScript",
        "درک اولیه از اصول Clean Code",
        "کار با Scrum tools (Jira, Trello)",
    ],
    softSkills: [
        "ارتباط مؤثر با اعضای تیم",
        "گزارش دقیق خطاها و مشکلات",
        "رعایت فرآیندهای تیمی (Standup, Review)",
        "مسئولیت‌پذیری در انجام تسک‌های محول‌شده",
    ]
  },
  {
    level: 3,
    title: "Junior III",
    hardSkills: [
        "تجربه در پروژه واقعی با React یا Next.js",
        "تسلط به Hooks و Context",
        "تجربه تست‌نویسی E2E با Cypress یا Playwright",
        "رعایت ESLint, Prettier, Clean Code",
        "همکاری مؤثر با بک‌اند و طراح",
    ],
    softSkills: [
        "ارائه و دریافت بازخورد فنی محترمانه",
        "همکاری فعال با طراحان و دولوپرها",
        "شروع به کمک به Juniorهای جدید",
        "انعطاف در پذیرش تغییرات",
    ]
  },
  {
    level: 4,
    title: "Mid I",
    hardSkills: [
        "تسلط کامل به TypeScript",
        "کار با Redux, Zustand, Recoil",
        "درک Event Loop و async behavior",
        "تسلط به Responsive Design و MUI Theme",
        "تجربه همکاری در تیم متوسط (۵–۷ نفر)",
    ],
    softSkills: [
        "مدیریت زمان برای Featureهای مستقل",
        "پاسخ‌گویی کامل به تسک‌های شخصی",
        "مستندسازی کارها برای سایر اعضا",
        "مشارکت در جلسات Planning",
    ]
  },
  {
    level: 5,
    title: "Mid II",
    hardSkills: [
        "درک SSR و SSG در Next.js",
        "بهینه‌سازی Performance (Lazy load, Memoization)",
        "Unit testing با Jest یا Vitest",
        "تعامل با REST APIها",
        "Mentor کردن Juniorها",
    ],
    softSkills: [
        "ارتباط مؤثر با QA و بک‌اند",
        "ارائه پیشنهاد بهبود فرآیندها",
        "دفاع منطقی از تصمیم‌های فنی",
        "مدیریت استرس در ددلاین‌ها",
    ]
  },
  {
    level: 6,
    title: "Mid III",
    hardSkills: [
        "طراحی و پیاده‌سازی internal library",
        "درک Design Patternهای رایج در React",
        "Data Visualization (Chart.js, D3.js)",
        "مستندسازی فنی در سطح تیم",
        "درک CI/CD و فرآیند Deploy",
    ],
    softSkills: [
        "تفکر سیستمی نسبت به کل پروژه",
        "مذاکره محترمانه در Code Review",
        "مدیریت زمان بین چند Feature",
        "آموزش داوطلبانه به تیم",
    ]
  },
  {
    level: 7,
    title: "Senior I",
    hardSkills: [
        "معماری Next.js در سطح پروژه‌های بزرگ",
        "طراحی State Management اختصاصی",
        "Code Review تخصصی",
        "Security & Performance Optimization",
        "تصمیم‌گیری فنی برای Featureهای کلیدی",
    ],
    softSkills: [
        "Mentor فعال برای Midها و Juniorها",
        "توضیح شفاف دلایل تصمیم‌های فنی",
        "ایجاد حس اعتماد در تیم",
        "حفظ تمرکز تیم در بحران‌ها",
    ]
  },
  {
    level: 8,
    title: "Senior II",
    hardSkills: [
        "طراحی ساختار Front-end در مقیاس سازمانی",
        "نوشتن تست‌های Integration و E2E پیشرفته",
        "ارتباط مؤثر با تیم‌های Product و UX",
        "معماری reusable componentها",
        "مدیریت چند پروژه هم‌زمان",
    ],
    softSkills: [
        "هدایت جلسات فنی و تصمیم‌گیری گروهی",
        "چالش محترمانه تصمیم‌های اشتباه",
        "Mentor چند عضو از تیم",
        "هم‌راستاسازی اهداف فنی و بیزنسی",
    ]
  },
  {
    level: 9,
    title: "Senior III",
    hardSkills: [
        "طراحی Design System و Component Library سازمانی",
        "معماری ماژولار و scalable",
        "مالکیت فنی چند پروژه هم‌زمان",
        "مشارکت در roadmap فنی شرکت",
        "درک کامل از CI/CD, Monitoring, Logging",
    ],
    softSkills: [
        "هدایت چند تیم هم‌زمان",
        "ارتباط مؤثر با Product Manager و DevOps",
        "توانایی تشخیص و اولویت‌بندی واقعی نیازها",
        "رفتار سازمانی حرفه‌ای و الهام‌بخش",
    ]
  },
  {
    level: 10,
    title: "Principal I",
    hardSkills: [
        "طراحی معماری کل Front-end شرکت",
        "انتخاب تکنولوژی و Stack مناسب",
        "تجربه مدیریت تیم ۸–۱۰ نفره",
        "ساخت ابزارها یا لایبرری‌های reusable",
        "طراحی Micro Front-end structure",
    ],
    softSkills: [
        "هدایت تصمیمات استراتژیک فنی",
        "ارتباط حرفه‌ای با مدیران ارشد (CTO, PM)",
        "مدیریت چند تیم در سطوح مختلف",
        "حمایت از فرهنگ شفافیت فنی",
        "مهارت بالا در ارائه و مذاکره",
    ]
  },
  {
    level: 11,
    title: "Principal II",
    hardSkills: [
        "طراحی معماری Micro-frontend در سطح enterprise",
        "انتشار ابزارها یا لایبرری‌های open-source موفق",
        "آموزش فنی در سطح سازمان",
        "هدایت فنی چند تیم مختلف",
        "تجربه در طراحی Design System چندبرندی",
    ],
    softSkills: [
        "مربی‌گری برای لیدهای فنی",
        "ترویج فرهنگ Clean Code در سازمان",
        "تصمیم‌سازی در سطح کلان",
        "الهام‌بخشی در جهت رشد فرهنگی و فنی",
    ]
  },
  {
    level: 12,
    title: "Front-end Architect / Evangelist",
    hardSkills: [
        "سابقه حداقل ۱۰ سال در فرانت‌اند",
        "تسلط کامل بر معماری Front-end enterprise-level",
        "طراحی سیستم‌های UI و Design System پیشرفته",
        "انتشار مقالات فنی یا ابزارهای جهانی",
        "رهبری فنی چند تیم و تعریف Vision سازمانی",
    ],
    softSkills: [
        "رهبری الهام‌بخش در سطح صنعت",
        "Mentorship برای سایر مدیران فنی",
        "ارتباط مستقیم با C-level مدیران",
        "خلق فرهنگ یادگیری مداوم",
        "هدایت مسیر تکنولوژی سازمان در بلندمدت",
    ]
  },
];