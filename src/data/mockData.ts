import { Book, Student, ReadingProgress } from "@/types";

export const mockBooks: Book[] = [
  {
    id: "1",
    title: "حديث الصباح",
    author: " أدهم شرقاوي",
    totalPages: 280,
    coverUrl: "https://th.bing.com/th/id/OIP.L1tMI-7P27eoH-z_lr_C0QHaK9?w=205&h=304&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    genre: "ديني "
  },
  {
    id: "2",
    title: "الداء والدواء",
    author:" ابن القيم الجوزيه",
    totalPages: 320,
    coverUrl: "https://th.bing.com/th/id/OIP.eVYys5mkteQXiGKbbbfedgHaKd?w=208&h=294&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    genre: "ديني "
  },
  {
    id: "3",
    title: "العادات الذرية",
    author: "جيمس كلير",
    totalPages: 240,
    coverUrl: "https://th.bing.com/th/id/OIP.ql4QYV6rm3kgO9ME964A_AHaLX?w=121&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    genre: "تطوير ذاتي"
  },
  {
    id: "4",
    title: "سيكولوجية المال ",
    author: " مورجان هاوسل",
    totalPages: 232,
    coverUrl: "https://ketabpedia.com/wp-content/uploads/2025/03/%D8%AA%D8%AD%D9%85%D9%8A%D9%84-%D9%83%D8%AA%D8%A7%D8%A8-%D8%B3%D9%8A%D9%83%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A9-%D8%A7%D9%84%D9%85%D8%A7%D9%84-PDF.jpg",
    genre: "رواية"
  },
  {
    id: "5",
    title: "100 من عظماء الاسلام",
    author: "جهاد الترباني" ,
    totalPages: 200,
    coverUrl: "https://th.bing.com/th/id/OIP.8QzKHvQWvxToUpm_VvZRJAHaHa?w=187&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    genre: "سيرة ذاتية"
  },
  {
    id: "6",
    title: "حقوق الإنسان في الإسلام",
    author: "مجموعة من المختصين في العلوم الشرعية ",
    totalPages: 161,
    coverUrl: "https://media.zid.store/266058de-f9db-4f4a-874d-5bff2b8b1f5f/27cc1c8b-5e5f-430e-86cf-55d122cd9529.jpg",
    genre: "ديني"
  }
];

export const mockStudents: Student[] = [];

export const mockReadingProgress: ReadingProgress[] = [
  { bookId: "1", studentId: "2", currentPage: 180, lastUpdated: new Date() },
  { bookId: "1", studentId: "5", currentPage: 95, lastUpdated: new Date() },
  { bookId: "2", studentId: "1", currentPage: 240, lastUpdated: new Date() },
  { bookId: "2", studentId: "4", currentPage: 320, lastUpdated: new Date() },
  { bookId: "2", studentId: "3", currentPage: 150, lastUpdated: new Date() },
  { bookId: "3", studentId: "2", currentPage: 200, lastUpdated: new Date() },
  { bookId: "3", studentId: "7", currentPage: 120, lastUpdated: new Date() },
  { bookId: "4", studentId: "4", currentPage: 180, lastUpdated: new Date() },
  { bookId: "4", studentId: "6", currentPage: 80, lastUpdated: new Date() },
  { bookId: "5", studentId: "5", currentPage: 150, lastUpdated: new Date() },
  { bookId: "6", studentId: "3", currentPage: 100, lastUpdated: new Date() },
];
