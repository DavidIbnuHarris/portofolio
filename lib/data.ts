import {
  HackathonEntry,
  Project,
  SkillGroup,
  SocialLink,
  Certificate,
} from "@/types";

export const profile = {
  name: "Jitanshu",
  fullTitle: "Full Stack Developer",
  subTitle: "Full Stack Web Developer",
  tagline:
    "Building scalable web applications with the full stack, while continuously learning modern backend, AI, and cloud technologies.",
  bio: "I'm a BCA graduate working toward becoming a professional full Stack Developer. I enjoy building full-stack web applications that solve real-world problems using React, Node.js, Express, and MongoDB. Alongside web development, I'm continuously exploring AI-powered applications, cloud technologies, and modern software engineering practices to build production-ready products.",
  location: "India",
  email: "jitanshu.dev27@gmail.com",
  phone: "+91 8750179495",
  resumeUrl: "/resume.pdf",
  status: "available", // shown as a JSON field in the hero response card
  availableFor: "SDE-1 / Full-Stack roles",
};

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    url: "https://github.com/jitanshu-27",
    handle: "@jitanshu-27",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/devwithjitanshu/",
    handle: "devwithjitanshu",
  },
  {
    label: "Twitter",
    url: "https://x.com/devwithjitanshu",
    handle: "@devwithjitanshu",
  },
];

// Nav is modeled as API routes — GET for read-only sections, POST for the
// one section that actually submits data (Contact). This is the site's
// signature device, so keep the verbs semantically correct if you add pages.
export const navRoutes = [
  { method: "GET", path: "/about", label: "About", href: "#about" },
  { method: "GET", path: "/skills", label: "Skills", href: "#skills" },
  { method: "GET", path: "/projects", label: "Projects", href: "#projects" },
  { method: "GET", path: "/hackathons", label: "Hackathons", href: "#hackathons" },
  { method: "GET", path: "/education", label: "Education", href: "#education" },
  { method: "POST", path: "/contact", label: "Contact", href: "#contact" },
] as const;

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    label: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Vite"],
  },
  {
    label: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "Socket.IO",
      "Multer",
      "bcrypt.js",
    ],
  },
  {
    label: "Databases",
    skills: ["MongoDB", "Mongoose", "PostgreSQL", "Firebase Firestore"],
  },
  {
    label: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "Vercel",
      "Render",
      "Linux (Fedora)",
      "NPM",
    ],
  },
  {
    label: "Currently Exploring",
    skills: ["AWS", "DevOps", "AI Agents", "LangChain", "OpenAI API"],
  },
];

export const projects: Project[] = [
  {
    id: "swiftnodechat",
    name: "SwiftNodeChat",
    description:
      "A real-time chat application with instant room creation via shareable codes, requiring no sign-up. Structured as a Turborepo monorepo with client deployed on Vercel and server on Render.",
    tech: ["Next.js", "TypeScript", "Node.js", "Socket.IO", "MongoDB", "Cloudinary"],
    highlights: [
      "Live messaging & typing indicators",
      "Message history in MongoDB",
      "Graceful reconnect handling",
      "Image/file sharing via Cloudinary",
      "Dark/light theming",
      "Turborepo monorepo",
    ],
    status: "live",
     liveUrl: "https://swift-node-chat-client.vercel.app/",
     githubUrl: "https://github.com/jitanshu-27/SwiftNodeChat",
  },
  {
    id: "roomvexo",
    name: "RoomVexo",
    description:
      "A full-stack hotel booking platform with role-based access for guests and hotel owners, Clerk-based authentication, and Razorpay payments.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Clerk", "Razorpay", "Cloudinary"],
    highlights: [
      "Clerk auth with webhook user sync",
      "Razorpay payments with verified webhooks",
      "Dynamic room search & filtering",
      "Owner dashboard with revenue analytics",
      "Image uploads via Multer & Cloudinary",
      "Independent client/server deploys on Vercel",
    ],
    status: "live",
    liveUrl: "https://roomvexo-hotel-booking.vercel.app/",
    githubUrl: "https://github.com/jitanshu-27/roomvexo-hotel-booking",
    
  },
];

export const hackathons: HackathonEntry[] = [
  {
    name: "Code--Manipal",
    year: "Mar 2025",
    summary:
      "Participated as a Backend Developer, organized by LearnIT and the IT Department of Manipal University Jaipur in collaboration with Geekroom.",
    result: "Participated",
  },
  {
    name: "Graph-e-Thon 2.0",
    year: "2025",
    summary:
      "Participated as a Frontend Developer with Team Straw Hat, organized by the Technology Business Incubator, Graphic Era (Deemed to be University).",
    result: "Participated",
  },
];

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  institution: "GL Bajaj Institute of Management, Greater Noida",
  year: "In Progress",
};

export const achievements: string[] = [
  "Built and shipped two full-stack production applications (SwiftNodeChat, RoomVexo)",
  "Integrated real-time systems with Socket.IO and payment flows with Razorpay",
  "Participated in Code--Manipal and Graph-e-Thon 2.0 hackathons",
  "Experienced with Git/GitHub workflow and Turborepo monorepos",
  "Comfortable working in Linux development environments",
];

export const certificates: Certificate[] = [];