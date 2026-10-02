export const portfolioData = {
  identity: {
    name: "David Ibnu Harris",
    role: "Developer & AI/ML Enthusiast",
    headlines: [
      "Building systems.",
      "Exploring AI.",
      "Securing the web."
    ],
    about: "Informatics Engineering student with a strong focus on Software Development, Artificial Intelligence/Machine Learning, and Cybersecurity. I build pragmatic systems, explore data through AI models, and prioritize secure web development practices.",
    contact: {
      email: "davidibnuharris53@gmail.com",
      github: "https://github.com/DavidIbnuHarris",
      linkedin: "https://www.linkedin.com/in/david-ibnu-harris-4288a82a6",
    }
  },
  skills: {
    frontend: ["HTML", "CSS", "JavaScript"],
    backend: ["PHP", "Laravel", "REST API"],
    database: ["MySQL", "PostgreSQL", "MongoDB"],
    ai_ml: ["Python", "OCR", "NLP", , "IndoBERT"],
    tools: ["Git", "GitHub", "Linux"],
    cybersecurity: ["Web Security", "Vulnerability Awareness", "Secure Web Development"]
  },
  projects: [
    {
      id: "Verdantop",
      title: "The Digital Palm Oil Supply Chain Ecosystem",
      description: "Digitalisasi proses pencatatan dan pengelolaan aktivitas operasional peron sawit. Mencakup eksperimen fitur OCR sebagai tambahan untuk digitalisasi data timbangan.",
      stack: ["Laravel", "PHP", "MySQL", "JavaScript"],
      status: "COMPLETED",
      githubUrl: "https://github.com/YOUR_GITHUB_USERNAME/TODO_REPO_NAME",
      demoUrl: "", // Kosongkan jika belum ada demo live
    },
    {
      id: "monitoring-konten-negatif",
      title: "SIMOKEN - Monitoring Konten Negatif Berbasis Web Crawling",
      description: " Aplikasi berbasis web untuk memantau konten negatif di media sosial dan platform online lainnya. Menggunakan teknik web crawling untuk mengumpulkan data dan menganalisisnya.",
      stack: ["Python", "Computer Vision", "OCR", "Deep Learning", "Web Crawling", "FassTAPI", "FasText"],
      status: "COMPLETED",
      githubUrl: "https://github.com/YOUR_GITHUB_USERNAME/TODO_REPO_NAME",
      demoUrl: "",
    },
    // {
    //   id: "analisis-konten-negatif",
    //   title: "Analisis Sentimen Konten Negatif Berbasis OCR dan NudeNet",
    //   description: "Aplikasi berbasis web untuk menganalisis konten negatif menggunakan teknik OCR, NLP, dan Deep Learning. Menggunakan model NudeNet untuk mendeteksi konten yang tidak pantas.",
    //   stack: ["Python", "NLP", "Nudenet", "OCR", "Deep Learning", "FassTAPI", "FasText"],
    //   status: "IN DEVELOPMENT",
    //   githubUrl: "https://github.com/YOUR_GITHUB_USERNAME/TODO_REPO_NAME",
    //   demoUrl: "",
    // }
  ],
  // ... (kode identity, skills, dan projects yang sudah ada sebelumnya)

  experience: [
    {
      id: "diskominfo",
      role: "e-Government Intern",
      company: "Diskominfo Kampar",
      duration: "Juli 2025 — Agustus 2025",
      description: "Terlibat dalam divisi e-Government. Membantu pengelolaan sistem pemerintahan digital, monitoring operasional, dan pemeliharaan infrastruktur teknologi informasi.",
    },
    {
      id: "hackathon",
      role: " Digdaya x Hackathon",
      company: "Hackathon BI 2026 / Bank Indonesia",
      duration: "Maret 2026 - September 2026",
      description: "Berpartisipasi dalam kompetisi pengembangan teknologi. Merancang dan mengimplementasikan prototipe sistem secara kolaboratif dalam batasan waktu yang ketat.",
    }
  ],
  education: [
    {
      id: "s1-ti",
      degree: "S1 Teknik Informatika",
      institution: "Universitas Pahlawan Tuanku Tambusai",
      duration: "2023 - Sekarang",
      description: "Mempelajari fundamental ilmu komputer, rekayasa perangkat lunak, algoritma sistem cerdas, dan praktik keamanan web.",
    }
  ]
};

export const navRoutes = [
  { method: "GET", path: "/about", label: "About", href: "#about" },
  { method: "GET", path: "/skills", label: "Skills", href: "#skills" },
  { method: "GET", path: "/projects", label: "Projects", href: "#projects" },
  { method: "GET", path: "/experience", label: "Experience", href: "#experience" },
  { method: "GET", path: "/education", label: "Education", href: "#education" },
  { method: "POST", path: "/contact", label: "Contact", href: "#contact" },
];