import type { SkillLevel } from './types';

export const CAREER_PATH_DATA: SkillLevel[] = [
  {
    level: 1,
    title: "Junior Developer I",
    experience: "۰-۶",
    hardSkills: [
      "درک مفاهیم پایه وب (HTTP/HTTPS, DNS)",
      "تسلط کامل بر HTML معنایی (Semantic HTML)",
      "تسلط بر مبانی CSS (Flexbox, Grid, Selectors, Box Model)",
      "آشنایی با Git و دستورات پایه (commit, push, pull, clone)",
      "توانایی ساخت کامپوننت‌های پایه در React با هوک‌های اصلی (useState, useEffect)",
      "تجربه کار با یک کتابخانه UI (مانند MUI یا TailwindCSS)",
      "آشنایی اولیه با مفاهیم تست و نوشتن تست‌های ساده End-to-End (مثل Cypress)",
      "توانایی استفاده از TypeScript برای تعریف Type های پایه",
      "درک Event Loop و تسلط بر متدهای پرکاربرد آرایه در JS",
      "توانایی مدیریت State ساده با Context API و هوک useReducer",
      "تجربه پایه با کتابخانه‌های چارت (مثل Chart.js)",
    ],
    softSkills: [
      "یادگیری همکاری در تیم‌های کوچک",
      "آشنایی با فرآیندهای Agile و Scrum",
    ],
    responsibilities: [
      "کمک در توسعه ویژگی‌های ساده UI تحت نظارت",
      "رفع باگ‌های مشخص شده",
      "مشارکت فعال در جلسات روزانه تیم",
    ]
  },
  {
    level: 2,
    title: "Junior Developer II",
    experience: "۶-۱۲",
    hardSkills: [
        "کار با Branch ها در Git (ایجاد، merge و بررسی feature branches)",
        "تجربه ساخت چندین پروژه جدی با React",
        "تسلط بر استایلینگ و کاستومایزیشن کامپوننت‌ها (MUI, Styled Components, etc.)",
        "تجربه عملی در نوشتن تست‌های End-to-End",
        "آشنایی با الگوهای طراحی (Design Patterns) پایه در فرانت‌اند",
        "استفاده پیشرفته از TypeScript (Interfaces, Generics, Enums)",
        "درک عمیق مفاهیم Asynchronous در JS (Promises, async/await)",
        "برنامه‌نویسی تابعی (Functional Programming) پایه در JS",
        "کار با چارت‌های پیچیده‌تر و سفارشی‌سازی آن‌ها (مثل Recharts)",
    ],
    softSkills: [
        "تجربه کار موثر در تیم‌های بزرگتر",
        "مدیریت تسک‌های شخصی در اسپرینت‌های Scrum",
    ],
    responsibilities: [
        "توسعه مستقل ویژگی‌های با پیچیدگی متوسط",
        "انجام Code Review های پایه برای هم‌تیمی‌ها",
        "کمک به فرآیند آنبوردینگ نیروهای جدیدتر",
    ]
  },
  {
    level: 3,
    title: "Mid-Level Developer I",
    experience: "۱۲-۱۸",
    hardSkills: [
        "توانایی حل Conflict و استفاده از Rebase در Git",
        "توانایی بهینه‌سازی پرفورمنس در React (memo, useMemo, useCallback)",
        "تجربه عملی با ابزارهای State Management پیشرفته (Redux Toolkit یا Zustand)",
        "نوشتن تست‌های Unit و Integration (با Jest/RTL)",
        "پیاده‌سازی الگوهای طراحی نرم‌افزار در عمل",
        "پیکربندی و استفاده از TypeScript در حالت Strict Mode",
        "پیاده‌سازی ریسپانسیو پیشرفته با Media Queries",
        "آشنایی با Web Components و کاربردهای آن",
        "تجربه عملی کار با Storybook برای توسعه و مستندسازی کامپوننت‌ها",
    ],
    softSkills: [
        "مشارکت فعال در حل مسائل تیمی",
        "ارائه فیدبک‌های سازنده در جلسات فنی",
    ],
    responsibilities: [
        "رهبری فنی در توسعه ویژگی‌های کوچک",
        "همکاری نزدیک با تیم بک‌اند برای طراحی API",
        "مشارکت در بهبود تجربه کاربری (UI/UX)",
    ]
  },
  {
    level: 4,
    title: "Mid-Level Developer II",
    experience: "۱۸-۲۴",
    hardSkills: [
        "آشنایی با ورک‌فلوهای Git (مانند Git Flow)",
        "تسلط بر Next.js و مفاهیم کلیدی آن (SSR, SSG, API Routes, Image Optimization)",
        "تجربه کار با کتابخانه‌های Fetching و Caching دیتا (مانند React Query / TanStack Query)",
        "آشنایی با پایپ‌لاین‌های CI/CD و اجرای خودکار تست‌ها",
        "درک و به‌کارگیری اصول SOLID در توسعه نرم‌افزار",
        "درک عمیق نحوه رندر شدن صفحات در مرورگر (Critical Rendering Path)",
        "توانایی پیاده‌سازی انیمیشن‌های روان با CSS و کتابخانه‌های مرتبط (مثل Framer Motion)",
        "تجربه کار با WebSockets برای ارتباطات Real-time",
        "آشنایی با مبانی Data Visualization (کار با D3.js پایه)",
    ],
    softSkills: [
        "مدیریت زمان و اولویت‌بندی تسک‌ها در پروژه",
        "مربی‌گری (Mentoring) توسعه‌دهندگان جونیور",
    ],
    responsibilities: [
        "طراحی و توسعه کامپوننت‌های قابل استفاده مجدد (Reusable)",
        "بهینه‌سازی سرعت بارگذاری صفحات (Page Speed)",
        "مشارکت در جلسات طراحی سیستم (System Design)",
    ]
  },
  {
    level: 5,
    title: "Mid-Level Developer III",
    experience: "۲۴-۳۰",
    hardSkills: [
        "آشنایی با معماری Micro-Frontends و تجربه کار با Monorepo (مثل Turborepo)",
        "تجربه ادغام GraphQL با React (با Apollo Client یا urql)",
        "آشنایی با ابزارهای تست پرفورمنس (Lighthouse, WebPageTest)",
        "تسلط بر اصول Clean Code و توانایی Refactor کردن کدهای پیچیده",
        "استفاده از الگوهای پیشرفته در TypeScript",
        "مهارت در Debugging پیشرفته و مدیریت خطاها در سطح اپلیکیشن",
        "طراحی ریسپانسیو برای انواع دستگاه‌ها و پلتفرم‌ها",
        "تجربه عملی در Data Visualization (کار با SVG و Canvas)",
    ],
    softSkills: [
        "توانایی رهبری جلسات فنی کوچک",
        "مهارت در حل تعارضات فنی در تیم",
    ],
    responsibilities: [
        "توسعه ویژگی‌های پیچیده و چالش‌برانگیز",
        "انجام Code Review های دقیق و منظم",
        "کمک به تعریف Roadmap فنی پروژه",
    ]
  },
  {
    level: 6,
    title: "Senior Developer I",
    experience: "۳۰-۳۶",
    hardSkills: [
        "استفاده از دستورات پیشرفته Git (cherry-pick, git hooks)",
        "توانایی طراحی و پیاده‌سازی یک Design System پایه",
        "طراحی و پیاده‌سازی سیستم‌های Real-time پیچیده با WebSockets",
        "آشنایی عمیق با مسائل امنیتی فرانت‌اند (XSS, CSRF) و پروتکل‌های احراز هویت (OAuth, JWT)",
        "آشنایی با مفاهیم TDD/DDD و کاربرد آن‌ها در فرانت‌اند",
        "توانایی تحلیل و بهینه‌سازی Bundle Size (Code Splitting, Tree Shaking)",
        "آشنایی با گرافیک سه‌بعدی در وب (Three.js مقدماتی)",
        "ساخت چارت‌های کاملاً سفارشی با D3.js",
    ],
    softSkills: [
        "توانایی تصمیم‌گیری‌های فنی مهم",
        "مربی‌گری توسعه‌دهندگان Mid-level",
    ],
    responsibilities: [
        "رهبری فنی در پروژه‌های متوسط تا بزرگ",
        "تحقیق و ارزیابی ابزارها و تکنولوژی‌های جدید",
        "بهبود فرآیندهای توسعه در تیم",
        "مشارکت در فرآیند جذب و مصاحبه فنی",
    ]
  },
  {
    level: 7,
    title: "Senior Developer II",
    experience: "۳۶-۴۲",
    hardSkills: [
        "توانایی ساخت Progressive Web Apps (PWA) با پشتیبانی آفلاین (Service Workers)",
        "توانایی طراحی و بهینه‌سازی ساختار State Management در اپلیکیشن‌های بزرگ",
        "تسلط بر ابزارهای تست E2E پیشرفته (مانند Playwright)",
        "درک عمیق اصول معماری نرم‌افزار و پیاده‌سازی معماری Micro-Frontends",
        "آشنایی با نحوه کارکرد موتورهای جاوااسکریپت (مانند V8)",
        "پیاده‌سازی ویژوال‌سازی‌های سه‌بعدی ساده با Three.js",
        "بهینه‌سازی پرفورمنس در Data Visualization",
    ],
    softSkills: [
        "توانایی مدیریت یک تیم فنی کوچک (۳-۵ نفر)",
        "مهارت در ارائه مباحث فنی به مخاطبان مختلف",
    ],
    responsibilities: [
        "طراحی معماری سیستم‌های مقیاس‌پذیر",
        "حل مسائل فنی پیچیده و چندوجهی",
        "همکاری با مدیران محصول و پروژه برای تعریف استراتژی",
    ]
  },
  {
    level: 8,
    title: "Senior Developer III",
    experience: "۴۲-۴۸",
    hardSkills: [
        "تسلط بر بهینه‌سازی تاریخچه Git (squash, fixup, interactive rebase)",
        "تجربه کار با پلتفرم‌های Serverless برای فرانت‌اند (Vercel, AWS Amplify)",
        "توانایی ساخت و انتشار پکیج‌های NPM",
        "تسلط بر مفاهیم امنیتی پیشرفته و پیاده‌سازی راهکارهای دفاعی (CSP, XSS Prevention)",
        "صاحب‌نظر در اصول Clean Code و توانایی منتورینگ دیگران",
        "آشنایی با مبانی WebGL برای گرافیک دوبعدی و سه‌بعدی",
        "تجربه عملی در پروژه‌هایی با Three.js",
        "تجربه کار با ویژوال‌سازی داده‌های حجیم (Big Data)",
    ],
    softSkills: [
        "رهبری فنی تیم و هدایت مسیر تکنولوژی",
        "مشارکت در تدوین استراتژی فنی پروژه",
    ],
    responsibilities: [
        "معماری کلی لایه فرانت‌اند اپلیکیشن",
        "نوآوری و معرفی ابزارها و فرآیندهای جدید",
    ]
  },
  {
    level: 9,
    title: "Lead Developer",
    experience: "۴۸-۵۴",
    hardSkills: [
        "مدیریت فنی تیم (۵-۱۰ نفر)",
        "تجربه ساخت و نگهداری کتابخانه‌های پراستفاده (۵۰+ ستاره)",
        "تجربه ادغام مدل‌های AI در UI (مثل ساخت رابط‌های کاربری چت)",
        "پیاده‌سازی و نظارت بر استانداردهای Clean Code در تیم",
        "طراحی معماری TypeScript در پروژه‌های بزرگ",
        "بهینه‌سازی‌های عمیق برای مقیاس‌پذیری (Scalability)",
        "تجربه کار با مدل‌های سه‌بعدی در Three.js",
        "تسلط بر کل فرآیند Data Visualization (از دریافت داده تا رندر)",
    ],
    softSkills: [
        "مدیریت کامل تیم و توسعه فردی اعضا",
    ],
    responsibilities: [
        "رهبری تیم توسعه و نظارت بر عملکرد فنی",
        "تصمیم‌گیری‌های کلان و استراتژیک فنی",
    ]
  },
  {
    level: 10,
    title: "Principal Engineer",
    experience: "۵۴-۶۰",
    hardSkills: [
        "توانایی ساخت کتابخانه‌های پیچیده (مانند ابزار State Management)",
        "تجربه مدیریت فنی تیم‌های بزرگ (بیش از ۱۰ نفر)",
        "تسلط بر جنبه‌های مختلف Data Visualization و Three.js",
        "آشنایی با WebAssembly و کاربردهای آن",
        "تجربه ادغام ویژوال‌سازی با مدل‌های Machine Learning",
    ],
    softSkills: [
        "رهبری فنی در سطح سازمان",
        "مربی‌گری رهبران فنی دیگر (Mentoring Leaders)",
    ],
    responsibilities: [
        "طراحی معماری فنی در سطح سازمان",
        "ارائه مشاوره فنی به مدیران ارشد",
    ]
  },
  {
    level: 11,
    title: "Front-End Expert",
    experience: "۶۰-۶۶",
    hardSkills: [
        "ساخت و نگهداری کتابخانه‌های متن-باز موفق (بیش از ۱۰۰ ستاره)",
        "تسلط کامل بر اکوسیستم ویژوال‌سازی (Three.js + WebGL)",
        "تجربه مدیریت چندین تیم فنی",
    ],
    softSkills: [
        "توانایی تدوین چشم‌انداز (Vision) فنی سازمان",
        "شبکه‌سازی و حضور فعال در جامعه فنی",
    ],
    responsibilities: [
        "رهبری نوآوری‌های فنی در سطح شرکت",
        "تعیین استانداردهای فنی در صنعت",
    ]
  },
  {
    level: 12,
    title: "Front-End Architect (خدای فرانت)",
    experience: "۶۶-۷۲+",
    hardSkills: [
        "ساخت و نگهداری کتابخانه‌های بسیار موفق (بیش از ۲۰۰ ستاره)",
        "طراحی و ساخت چندین کتابخانه پیچیده (State Mgmt سفارشی, UI Framework)",
        "تسلط کامل و عمیق بر Data Visualization و گرافیک سه‌بعدی",
        "تجربه مدیریت سازمان‌های فنی بزرگ",
    ],
    softSkills: [
        "رهبری استراتژیک فنی در سطح کل شرکت",
        "تأثیرگذاری گسترده بر صنعت نرم‌افزار",
    ],
    responsibilities: [
        "معماری کل اکوسیستم فنی شرکت",
        "هدایت تحول دیجیتال و تکنولوژیک",
        "جذب و پرورش استعدادهای برتر در سطح جهانی",
    ]
  },
];
