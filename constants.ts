import type { SkillLevel } from './types';

export const CAREER_PATH_DATA: SkillLevel[] = [
  {
    level: 1,
    title: "Junior Developer I (کف جذب)",
    experience: "۰-۶",
    hardSkills: [
      "پروژه‌های پایه با React و Next.js",
      "آشنایی با MUI برای UI",
      "آشنایی با تست End-to-End (مثل Cypress)",
      "آشنایی با مهندسی نرم‌افزار (پایه‌های Agile)",
      "کار با TypeScript در پروژه‌های ساده",
      "درک Event Loop و متدهای آرایه JS",
      "ریسپانسیو با CSS و MUI",
      "تجربه پایه با Charts (مثل Chart.js)",
    ],
    softSkills: [
      "همکاری در تیم کوچک",
      "آشنایی با Scrum",
    ],
    responsibilities: [
      "کمک در توسعه ویژگی‌های ساده UI",
      "رفع باگ‌های پایه تحت نظارت",
      "مشارکت در جلسات تیمی",
    ]
  },
  {
    level: 2,
    title: "Junior Developer II",
    experience: "۶-۱۲",
    hardSkills: [
        "چندین پروژه جدی با React/Next.js",
        "مسلط به MUI و کاستومایزیشن",
        "تست End-to-End با تجربه عملی",
        "دانش مهندسی نرم‌افزار (الگوهای طراحی پایه)",
        "TypeScript پیشرفته (Interfaces, Generics)",
        "درک عمیق Event Loop و Async JS",
        "متدهای آرایه + Functional Programming پایه",
        "ریسپانسیو پیشرفته + Media Queries",
        "کار با Charts پیچیده‌تر (مثل Recharts)",
    ],
    softSkills: [
        "تجربه در تیم‌های بزرگ",
        "مدیریت تسک‌های شخصی در Scrum",
    ],
    responsibilities: [
        "توسعه مستقل ویژگی‌های متوسط",
        "کد ریویو پایه",
        "کمک به آنبوردینگ تازه‌واردان",
    ]
  },
  {
    level: 3,
    title: "Mid-Level Developer I",
    experience: "۱۲-۱۸",
    hardSkills: [
        "بهینه‌سازی عملکرد در React (Memoization)",
        "ادغام APIها با Next.js",
        "تست Unit/Integration علاوه بر E2E",
        "الگوهای طراحی نرم‌افزار (مثل MVC)",
        "TypeScript با Strict Mode",
        "مدیریت State ساده (Context API)",
        "CSS-in-JS (Styled Components)",
        "Charts با دیتای دینامیک",
    ],
    softSkills: [
        "حل مسئله تیمی",
        "فیدبک دادن در جلسات",
    ],
    responsibilities: [
        "رهبری ویژگی‌های کوچک",
        "همکاری با بک‌اند",
        "بهبود UI/UX پایه",
    ]
  },
  {
    level: 4,
    title: "Mid-Level Developer II",
    experience: "۱۸-۲۴",
    hardSkills: [
        "SSR/SSG در Next.js",
        "State Management پیشرفته (Redux/Zustand)",
        "تست اتوماتیک با CI/CD",
        "اصول SOLID در کد",
        "TypeScript با Utility Types",
        "درک Browser Rendering",
        "انیمیشن با CSS/Framer Motion",
        "مقدماتی Data Viz (D3.js پایه)",
    ],
    softSkills: [
        "مدیریت زمان پروژه",
        "مربی‌گری جونیورها",
    ],
    responsibilities: [
        "طراحی کامپوننت‌های reusable",
        "بهینه‌سازی سرعت صفحات",
        "مشارکت در طراحی سیستم",
    ]
  },
  {
    level: 5,
    title: "Mid-Level Developer III",
    experience: "۲۴-۳۰",
    hardSkills: [
        "میکروفرانت‌اندز یا Monorepo",
        "ادغام GraphQL با React",
        "تست Performance",
        "اصول Clean Code (Refactoring)",
        "TypeScript با Advanced Patterns",
        "مدیریت Error و Debugging پیشرفته",
        "ریسپانسیو برای دستگاه‌های متنوع",
        "Data Viz عملی (SVG Manipulation)",
    ],
    softSkills: [
        "رهبری جلسات کوچک",
        "حل تعارضات تیمی",
    ],
    responsibilities: [
        "توسعه ویژگی‌های پیچیده",
        "کد ریویو منظم",
        "کمک به roadmap پروژه",
    ]
  },
  {
    level: 6,
    title: "Senior Developer I",
    experience: "۳۰-۳۶",
    hardSkills: [
        "معماری فرانت‌اند (Design Systems)",
        "ادغام WebSockets",
        "امنیت فرانت‌اند (OAuth, JWT)",
        "Clean Code پیشرفته (TDD/DDD)",
        "TypeScript در مقیاس بزرگ",
        "بهینه‌سازی Bundle Size",
        "انیمیشن 3D پایه (Three.js مقدماتی)",
        "Charts سفارشی با D3.js",
    ],
    softSkills: [
        "تصمیم‌گیری فنی",
        "مربی‌گری مید-لول",
    ],
    responsibilities: [
        "رهبری فنی پروژه‌ها",
        "ارزیابی ابزارها",
        "بهبود فرآیندها",
    ]
  },
  {
    level: 7,
    title: "Senior Developer II",
    experience: "۳۶-۴۲",
    hardSkills: [
        "PWA و Offline Support",
        "State Management سفارشی",
        "تست E2E پیشرفته (Playwright)",
        "اصول Architecture (Microservices Front)",
        "TypeScript با Generics پیچیده",
        "درک V8 Engine",
        "Three.js برای Viz ساده",
        "Data Viz با Performance Optimization",
    ],
    softSkills: [
        "مدیریت تیم کوچک (۳-۵ نفر)",
        "ارائه فنی",
    ],
    responsibilities: [
        "طراحی سیستم‌های مقیاس‌پذیر",
        "حل مسائل پیچیده",
        "همکاری با مدیریت",
    ]
  },
  {
    level: 8,
    title: "Senior Developer III",
    experience: "۴۲-۴۸",
    hardSkills: [
        "Serverless Front-End (Vercel/AWS)",
        "لایبرری‌های کوچک ساخت (NPM Publish)",
        "امنیت پیشرفته (CSP, XSS Prevention)",
        "صاحب‌نظر در Clean Code (کتاب/مقالات)",
        "TypeScript در Enterprise Level",
        "WebGL پایه",
        "Three.js عملی برای پروژه‌ها",
        "Viz با Big Data",
    ],
    softSkills: [
        "رهبری فنی تیم",
        "استراتژی پروژه",
    ],
    responsibilities: [
        "معماری کل فرانت‌اند",
        "کد ریویو高级",
        "نوآوری در ابزارها",
    ]
  },
  {
    level: 9,
    title: "Lead Developer",
    experience: "۴۸-۵۴",
    hardSkills: [
        "مدیریت تیم فنی (۵-۱۰ نفر)",
        "لایبرری با ستاره‌های متوسط (۵۰+)",
        "ادغام AI در UI (مثل Chat Interfaces)",
        "استانداردهای Clean Code در تیم",
        "TypeScript Architecture",
        "بهینه‌سازی برای Scale",
        "Three.js پیشرفته (3D Models)",
        "Viz کامل (از داده تا رندر)",
    ],
    softSkills: [
        "مدیریت تیم کامل",
        "بودجه و منابع",
    ],
    responsibilities: [
        "رهبری تیم توسعه",
        "تصمیم‌گیری استراتژیک",
        "جذب و ارزیابی نیرو",
    ]
  },
  {
    level: 10,
    title: "Principal Engineer",
    experience: "۵۴-۶۰",
    hardSkills: [
        "ساخت لایبرری‌های پیچیده (State Mgmt)",
        "تجربه مدیریت تیم ۱۰ نفره",
        "همه جوانب Data Viz (Three.js عملی)",
        "صاحب‌نظر Clean Code (کنفرانس/کتاب)",
        "TypeScript در سیستم‌های بزرگ",
        "WebAssembly پایه",
        "Viz با ML Integration",
        "حداقل سابقه معادل ۵ سال (با پیشرفت سریع)",
    ],
    softSkills: [
        "رهبری سازمانی",
        "مربی‌گری رهبران",
    ],
    responsibilities: [
        "طراحی معماری سازمانی",
        "نوآوری محصول",
        "مشاوره به مدیریت",
    ]
  },
  {
    level: 11,
    title: "Front-End Expert",
    experience: "۶۰-۶۶",
    hardSkills: [
        "لایبرری با ۱۰۰+ ستاره",
        "چندین لایبرری ساخته (State, UI)",
        "مسلط به همه Viz (Three.js + WebGL)",
        "مدیریت تیم‌های بزرگ",
        "صاحب‌نظر جهانی Clean Code",
        "سابقه معادل ۵.۵ سال+",
    ],
    softSkills: [
        "ویژن سازمانی",
        "شبکه‌سازی صنعت",
    ],
    responsibilities: [
        "رهبری نوآوری",
        "استانداردسازی صنعت",
        "مشاوره خارجی",
    ]
  },
  {
    level: 12,
    title: "Front-End Architect (خدای فرانت)",
    experience: "۶۶-۷۲+",
    hardSkills: [
        "لایبرری با ۲۰۰+ ستاره",
        "چندین لایبرری پیچیده (State Mgmt سفارشی)",
        "تسلط کامل Data Viz (Three.js عملی پیشرفته)",
        "مدیریت تیم ۱۰+ نفره",
        "صاحب‌نظر برجسته Clean Code (مقالات/کتاب)",
        "حداقل سابقه معادل ۶ سال (با تمرکز روی نوآوری)",
    ],
    softSkills: [
        "رهبری استراتژیک کل شرکت",
        "تأثیرگذاری صنعت",
    ],
    responsibilities: [
        "معماری کل اکوسیستم",
        "هدایت تحول دیجیتال",
        "جذب استعدادهای برتر",
    ]
  },
];