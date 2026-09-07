export interface Project {
  id: string;

  title: string;

  subtitle: string;

  category?: string;

  description: string;

  longDescription: string;

  stack: string[];

  tags?: string[];

  live?: string;

  github?: string;

  appLinks?: ProjectAppLinks;

  platforms?: string[];

  involvement?: ProjectInvolvement;

  image?: string;

  gallery?: string[];

  featured: boolean;

  status?: string;

  year?: string;

  duration?: string;

  role?: string;

  client?: string;

  theme?: ProjectTheme;

  metrics?: ProjectMetrics;

  features: string[];

  advancedFeatures?: string[];

  challenges: string[];

  learnings?: string[];

  architecture?: ProjectArchitecture;

  seo?: ProjectSEO;

  highlights?: ProjectHighlight[];

  testimonials?: ProjectTestimonial[];

  futureImprovements?: string[];

  media?: ProjectMedia[];
}

export interface ProjectMedia {
  type: "image" | "video";

  src: string;

  alt: string;

  poster?: string;

  caption?: string;
}

export interface ProjectHighlight {
  title: string;

  description: string;
}

export interface ProjectTestimonial {
  name: string;

  feedback: string;
}

export interface ProjectTheme {
  primary?: string;

  secondary?: string;

  accent?: string;
}

export interface ProjectMetrics {
  pages?: number;

  apiEndpointsIntegrated?: number;

  responsiveBreakpoints?: number;

  lighthousePerformance?: string;
}

export interface ProjectArchitecture {
  frontend?: string;

  backend?: string;

  database?: string;

  api?: string;

  deployment?: string;

  styling?: string;
}

export interface ProjectSEO {
  metaTitle?: string;

  metaDescription?: string;

  keywords?: string[];
}

export interface ProjectAppLinks {
  android?: string;

  ios?: string;

  web?: string;
}

export interface ProjectInvolvement {
  web?: string;

  admin?: string;

  mobile?: string;

  backend?: string;

  design?: string;
}

export const projects: Project[] = [
  {
    id: "smart-booking",

    title: "Smart Booking",

    subtitle: "Booking & Business Management Platform",

    category: "SaaS Platform",

    description:
      "A modern booking and business management platform with customizable business landing pages, booking workflows, admin dashboards, and embeddable booking solutions.",

    longDescription:
      "Smart Booking is a full-stack SaaS booking management platform designed for service-based businesses. The platform enables businesses to manage services, resources, bookings, and customer experiences from a centralized admin dashboard. It includes a customizable business landing page builder powered by a drag-and-drop CMS system, allowing businesses to fully personalize content and sections according to their brand. The system supports responsive booking workflows for customers and includes an embeddable booking widget architecture currently being developed using vanilla JavaScript and Vite, enabling seamless integration into any external website regardless of framework or technology stack.",

    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "Node.js",
      "MongoDB",
      "JavaScript",
      "Vite",
      "Vercel",
    ],

    tags: [
      "Booking Platform",
      "SaaS",
      "CMS Builder",
      "Admin Dashboard",
      "Next.js",
      "Business Management",
      "Widget System",
      "Booking Flow",
      "Responsive UI",
      "React",
    ],

    live: "https://serviceopsq.intellq.cloud",

    github: "",

    image: "/projects/booking/smart-booking(23).png",

    gallery: [
      "/projects/booking/smart-booking(1).png",
      "/projects/booking/smart-booking(2).png",
      "/projects/booking/smart-booking(3).png",
      "/projects/booking/smart-booking(4).png",
      "/projects/booking/smart-booking(5).png",
      "/projects/booking/smart-booking(6).png",
      "/projects/booking/smart-booking(7).png",
      "/projects/booking/smart-booking(8).png",
      "/projects/booking/smart-booking(9).png",
      "/projects/booking/smart-booking(10).png",
      "/projects/booking/smart-booking(11).png",
      "/projects/booking/smart-booking(12).png",
      "/projects/booking/smart-booking(13).png",
      "/projects/booking/smart-booking(14).png",
      "/projects/booking/smart-booking(15).png",
      "/projects/booking/smart-booking(16).png",
      "/projects/booking/smart-booking(17).png",
      "/projects/booking/smart-booking(18).png",
      "/projects/booking/smart-booking(19).png",
      "/projects/booking/smart-booking(20).png",
      "/projects/booking/smart-booking(21).png",
      "/projects/booking/smart-booking(22).png",
    ],

    featured: true,

    status: "Ongoing",

    year: "2026",

    duration:
      "Created base under 20 days, ongoing development for widget system and additional features",

    role: "Frontend Developer",

    client: "Smart Booking",

    theme: {
      primary: "#0f172a",
      secondary: "#111827",
      accent: "#3b82f6",
    },

    metrics: {
      pages: 25,
      apiEndpointsIntegrated: 20,
      responsiveBreakpoints: 4,
      lighthousePerformance: "90+",
    },

    features: [
      "Multi-business booking management system",
      "Centralized admin dashboard",
      "Service and resource management",
      "Custom business landing page builder",
      "Drag-and-drop CMS section management",
      "Responsive booking workflows",
      "Manual booking flow implementation",
      "Business branding and content customization",
      "Embeddable booking widget architecture",
      "Cross-framework booking integration support",
      "Reusable and scalable dashboard components",
      "Protected admin routes and authentication",
    ],

    advancedFeatures: [
      "Dynamic CMS-powered landing page rendering",
      "Drag-and-drop customizable business sections",
      "Reusable booking flow architecture",
      "Widget system using vanilla JavaScript and Vite",
      "Responsive multi-device booking experience",
      "API-driven business and booking management",
      "Scalable SaaS platform structure",
      "Optimized dashboard rendering and component reuse",
    ],

    challenges: [
      "Building scalable multi-business architecture",
      "Creating dynamic CMS rendering system",
      "Managing reusable booking workflows",
      "Handling responsive booking experiences across devices",
      "Designing embeddable widget integration architecture",
      "Maintaining reusable dashboard components and state management",
    ],

    learnings: [
      "Improved scalable SaaS application architecture skills",
      "Learned advanced CMS-driven frontend structuring",
      "Enhanced reusable component and workflow design",
      "Improved responsive dashboard and booking UX implementation",
      "Strengthened API-driven frontend architecture knowledge",
      "Practiced building embeddable widget systems",
    ],

    architecture: {
      frontend: "Next.js + React",
      api: "REST API",
      deployment: "Vercel",
      styling: "Tailwind CSS",
      backend: "API Driven Architecture",
    },

    seo: {
      metaTitle: "Smart Booking - Booking & Business Management Platform",
      metaDescription:
        "Modern SaaS booking platform with admin dashboards, customizable business landing pages, CMS builder, and responsive booking workflows.",
      keywords: [
        "Smart Booking",
        "Booking Platform",
        "SaaS Dashboard",
        "Business Management",
        "CMS Builder",
        "Booking Widget",
        "Next.js SaaS",
        "Admin Dashboard",
      ],
    },

    highlights: [
      {
        title: "Dynamic CMS Builder",
        description:
          "Built a drag-and-drop CMS system for fully customizable business landing pages.",
      },

      {
        title: "Scalable Booking Workflows",
        description:
          "Implemented responsive and reusable booking flows for service-based businesses.",
      },

      {
        title: "Embeddable Widget Architecture",
        description:
          "Designed a widget integration system compatible with external websites and frameworks.",
      },
    ],

    testimonials: [
      {
        name: "Smart Booking Platform Showcase",
        feedback:
          "A scalable booking and business management platform with customizable booking experiences and modern dashboard architecture.",
      },
    ],

    futureImprovements: [
      "Complete AI-assisted booking workflow",
      "Add calendar synchronization integrations",
      "Introduce real-time booking notifications",
      "Implement payment gateway integrations",
      "Expand embeddable widget customization",
      "Add analytics and reporting dashboards",
      "Introduce multilingual support",
      "Launch mobile application integration",
    ],

    media: [
      {
        type: "video",
        src: "/projects/booking/smart-booking.mp4",
        alt: "Smart Booking platform walkthrough",
        caption: "Comprehensive booking and business management platform",
      },

      {
        type: "image",
        src: "/projects/booking/smart-booking(1).png",
        alt: "Smart Booking dashboard preview",
        caption: "Modern admin dashboard interface",
      },

      {
        type: "image",
        src: "/projects/booking/smart-booking(2).png",
        alt: "Business landing page CMS builder",
        caption: "Customizable drag-and-drop landing page builder",
      },

      {
        type: "image",
        src: "/projects/booking/smart-booking(3).png",
        alt: "Responsive booking workflow",
        caption: "Responsive customer booking experience",
      },

      {
        type: "image",
        src: "/projects/booking/smart-booking(4).png",
        alt: "Booking widget integration system",
        caption: "Embeddable booking widget architecture",
      },

      {
        type: "image",
        src: "/projects/booking/smart-booking(5).png",
        alt: "Service and resource management",
        caption: "Service and resource configuration interface",
      },

      {
        type: "image",
        src: "/projects/booking/smart-booking(6).png",
        alt: "Business settings dashboard",
        caption: "Business profile and settings management",
      },

      {
        type: "image",
        src: "/projects/booking/smart-booking(7).png",
        alt: "Booking calendar system",
        caption: "Interactive booking calendar and scheduling system",
      },

      {
        type: "image",
        src: "/projects/booking/smart-booking(8).png",
        alt: "Responsive booking interface",
        caption: "Optimized responsive booking experience",
      },

      {
        type: "image",
        src: "/projects/booking/smart-booking(9).png",
        alt: "CMS section customization",
        caption: "Dynamic CMS section editing and customization",
      },

      {
        type: "image",
        src: "/projects/booking/smart-booking(10).png",
        alt: "Admin analytics dashboard",
        caption: "Analytics and booking management dashboard",
      },

      {
        type: "image",
        src: "/projects/booking/smart-booking(11).png",
        alt: "Business landing page preview",
        caption: "Custom branded business landing page",
      },

      {
        type: "image",
        src: "/projects/booking/smart-booking(12).png",
        alt: "Customer booking flow",
        caption: "Step-by-step customer booking workflow",
      },

      {
        type: "image",
        src: "/projects/booking/smart-booking(13).png",
        alt: "Booking confirmation interface",
        caption: "Booking confirmation and summary screen",
      },

      {
        type: "image",
        src: "/projects/booking/smart-booking(14).png",
        alt: "Resource availability management",
        caption: "Resource allocation and availability management",
      },

      {
        type: "image",
        src: "/projects/booking/smart-booking(15).png",
        alt: "Responsive dashboard layout",
        caption: "Responsive admin dashboard across devices",
      },

      {
        type: "image",
        src: "/projects/booking/smart-booking(16).png",
        alt: "Drag and drop CMS builder",
        caption: "Flexible drag-and-drop content management builder",
      },

      {
        type: "image",
        src: "/projects/booking/smart-booking(17).png",
        alt: "Business customization settings",
        caption: "Advanced business customization controls",
      },

      {
        type: "image",
        src: "/projects/booking/smart-booking(18).png",
        alt: "Booking management interface",
        caption: "Centralized booking and appointment management",
      },

      {
        type: "image",
        src: "/projects/booking/smart-booking(19).png",
        alt: "Embeddable widget preview",
        caption: "Embeddable booking widget interface",
      },

      {
        type: "image",
        src: "/projects/booking/smart-booking(20).png",
        alt: "Customer scheduling interface",
        caption: "Customer-friendly scheduling experience",
      },

      {
        type: "image",
        src: "/projects/booking/smart-booking(21).png",
        alt: "Business management overview",
        caption: "Business management and operational dashboard",
      },

      {
        type: "image",
        src: "/projects/booking/smart-booking(22).png",
        alt: "Full booking platform overview",
        caption: "Complete booking and business management platform",
      },
    ],
  },
  {
    id: "nashamukti",

    title: "Nashamukti",

    subtitle: "De-Addiction Management Platform",

    category: "Healthcare Platform",

    description:
      "A comprehensive de-addiction management platform with admin dashboards, patient workflows, counselor management, analytics, and role-based access systems.",

    longDescription:
      "Nashamukti is a modern healthcare and rehabilitation management platform designed to streamline de-addiction center operations digitally. The platform includes a powerful admin panel, counselor management system, patient workflows, progress tracking, reporting dashboards, and secure role-based access control. Built using Next.js and TypeScript, the application focuses on scalable architecture, optimized data handling, responsive dashboards, and smooth user experiences for administrators, staff, and patients.",

    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "TanStack Query",
      "Tailwind CSS",
      "REST API",
      "JavaScript",
      "Vercel",
    ],

    tags: [
      "Healthcare Platform",
      "Admin Dashboard",
      "Next.js",
      "Role Based Access",
      "Workflow System",
      "Management System",
      "React",
      "Dashboard UI",
    ],

    live: "https://nashamuktis.com/",

    github: "",

    image: "/projects/nashamukti/nashamukti(1).png",

    gallery: [
      "/projects/nashamukti/nashamukti(1).png",
      "/projects/nashamukti/nashamukti(2).png",
      "/projects/nashamukti/nashamukti(3).png",
      "/projects/nashamukti/nashamukti(4).png",
    ],

    featured: true,

    status: "Live",

    year: "2026",

    duration: "1+ Month",

    role: "Frontend Developer",

    client: "Nashamukti",

    theme: {
      primary: "#0f172a",
      secondary: "#1e293b",
      accent: "#22c55e",
    },

    metrics: {
      pages: 20,
      apiEndpointsIntegrated: 15,
      responsiveBreakpoints: 4,
      lighthousePerformance: "92+",
    },

    features: [
      "Comprehensive admin dashboard system",
      "Role-based access control for admins, counselors, and staff",
      "Patient management and rehabilitation workflows",
      "Interactive analytics and reporting dashboards",
      "Complex multi-step forms with validation",
      "Real-time data synchronization and updates",
      "Reusable dashboard and UI components",
      "Optimized API data fetching with caching",
      "Responsive dashboard layouts for all devices",
      "Secure authentication and protected routes",
      "Workflow management for counselors and administrators",
      "Advanced error handling and loading states",
    ],

    advancedFeatures: [
      "Admin panel with centralized management controls",
      "TanStack Query integration for caching and performance",
      "Reusable component-driven frontend architecture",
      "Dynamic role and permission handling",
      "Optimized state management for complex workflows",
      "API-driven dashboard rendering",
      "Lazy loading and route-based optimization",
      "Responsive analytics and reporting UI",
    ],

    challenges: [
      "Managing complex role-based workflows and permissions",
      "Building scalable dashboard architecture",
      "Handling multi-step form states and validations",
      "Optimizing API requests and caching strategies",
      "Maintaining smooth UX for large data-driven dashboards",
      "Creating reusable components across multiple modules",
    ],

    learnings: [
      "Improved dashboard architecture and scalability",
      "Learned advanced TanStack Query optimization techniques",
      "Enhanced TypeScript usage in large-scale applications",
      "Improved workflow-based UI structuring",
      "Strengthened frontend performance optimization skills",
      "Practiced handling complex enterprise-level UI states",
    ],

    architecture: {
      frontend: "Next.js + React",
      api: "REST API",
      deployment: "Vercel",
      styling: "Tailwind CSS",
      backend: "API Driven Architecture",
    },

    seo: {
      metaTitle: "Nashamukti - De-Addiction Management Platform",
      metaDescription:
        "Comprehensive healthcare and rehabilitation platform with admin dashboards, counselor workflows, and patient management systems.",
      keywords: [
        "Nashamukti",
        "Healthcare Dashboard",
        "Admin Panel",
        "Rehabilitation Platform",
        "Next.js Dashboard",
        "Role Based Access",
        "Patient Management",
      ],
    },

    highlights: [
      {
        title: "Advanced Admin Dashboard",
        description:
          "Built a scalable dashboard system with analytics, workflows, and centralized management.",
      },
      {
        title: "Role-Based Workflows",
        description:
          "Implemented secure role-based access and permission management for different user types.",
      },
      {
        title: "Optimized Data Handling",
        description:
          "Used TanStack Query for efficient API caching, synchronization, and performance optimization.",
      },
    ],

    testimonials: [
      {
        name: "Healthcare Platform Showcase",
        feedback:
          "A scalable and well-structured healthcare dashboard platform with optimized workflows and modern UI.",
      },
    ],

    futureImprovements: [
      "Add real-time notifications and alerts",
      "Implement advanced patient analytics",
      "Introduce mobile application integration",
      "Add downloadable reports and exports",
      "Enhance accessibility and compliance standards",
      "Implement AI-based patient progress insights",
      "Add multilingual language support",
      "Integrate video counseling and appointments",
    ],

    media: [
      {
        type: "video",
        src: "/projects/nashamukti/nashamukti.mp4",
        alt: "Nashamukti admin dashboard walkthrough",
        caption: "Comprehensive admin panel and workflow management system",
      },

      {
        type: "image",
        src: "/projects/nashamukti/nashamukti(1).png",
        alt: "Nashamukti dashboard preview",
        caption: "Modern admin dashboard interface",
      },

      {
        type: "image",
        src: "/projects/nashamukti/nashamukti(2).png",
        alt: "Patient workflow management",
        caption: "Patient management and workflow screens",
      },

      {
        type: "image",
        src: "/projects/nashamukti/nashamukti(3).png",
        alt: "Analytics and reporting dashboard",
        caption: "Interactive analytics and reporting system",
      },

      {
        type: "image",
        src: "/projects/nashamukti/nashamukti(4).png",
        alt: "Responsive admin panel UI",
        caption: "Responsive healthcare management dashboard",
      },
    ],
  },
  {
    id: "gloitel",

    title: "Gloitel",

    subtitle: "Modern IT Solutions Company Website",

    category: "Corporate Website",

    description:
      "A modern, responsive company website designed and developed for Gloitel to showcase services, solutions, portfolio, and company branding with high-performance frontend architecture.",

    longDescription:
      "Gloitel is a professional IT solutions and digital services company website built with Next.js and modern frontend technologies. The platform was designed to establish a strong digital presence through clean UI, smooth animations, responsive layouts, and SEO-focused architecture. The website showcases company services, expertise, technologies, portfolio, and contact information while maintaining fast performance and excellent user experience across all devices.",

    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],

    tags: [
      "Corporate Website",
      "Next.js",
      "React",
      "Frontend Development",
      "Responsive Design",
      "SEO",
      "Business Website",
      "Modern UI",
    ],

    live: "https://www.gloitel.in/",

    github: "",

    image: "/projects/gloitel/gloitel(1).png",

    gallery: [
      "/projects/gloitel/gloitel(1).png",
      "/projects/gloitel/gloitel(2).png",
      "/projects/gloitel/gloitel(3).png",
      "/projects/gloitel/gloitel(4).png",
      "/projects/gloitel/gloitel(5).png",
      "/projects/gloitel/gloitel(6).png",
      "/projects/gloitel/gloitel(7).png",
      "/projects/gloitel/gloitel(8).png",
      "/projects/gloitel/gloitel(9).png",
      "/projects/gloitel/gloitel(10).png",
      "/projects/gloitel/gloitel(11).png",
    ],

    featured: true,

    status: "Live",

    year: "2026",

    duration: "2 Weeks",

    role: "Frontend Developer",

    client: "Gloitel",

    theme: {
      primary: "#0f172a",
      secondary: "#111827",
      accent: "#3b82f6",
    },

    metrics: {
      pages: 8,
      responsiveBreakpoints: 4,
      lighthousePerformance: "95+",
    },

    features: [
      "Modern responsive company website",
      "Mobile-first responsive UI design",
      "Smooth scrolling animations and transitions",
      "Professional hero and landing sections",
      "SEO optimized architecture",
      "Fast-loading optimized assets",
      "Dynamic service showcase sections",
      "Interactive portfolio and company sections",
      "Optimized contact and inquiry forms",
      "Cross-browser compatible interface",
      "Reusable component-based architecture",
      "Clean and scalable frontend structure",
    ],

    advancedFeatures: [
      "Framer Motion powered animations",
      "Responsive grid and flex layouts",
      "Optimized image loading and lazy loading",
      "Reusable UI components using React",
      "Server-side rendering with Next.js",
      "SEO-friendly metadata structure",
      "Performance optimization for Core Web Vitals",
      "Smooth section-based navigation",
    ],

    challenges: [
      "Creating a clean corporate UI aligned with brand identity",
      "Implementing smooth and performant animations",
      "Optimizing responsiveness across multiple devices",
      "Maintaining fast page load performance",
      "Structuring scalable frontend architecture",
      "Balancing visual design with SEO optimization",
    ],

    learnings: [
      "Improved expertise in Next.js architecture",
      "Enhanced responsive UI development skills",
      "Learned advanced Framer Motion animations",
      "Improved frontend optimization techniques",
      "Practiced scalable component structuring",
      "Strengthened SEO implementation knowledge",
    ],

    architecture: {
      frontend: "Next.js + React",
      deployment: "Vercel",
      styling: "Tailwind CSS",
      api: "Static + Dynamic Content Rendering",
    },

    seo: {
      metaTitle: "Gloitel - Modern IT Solutions Company",
      metaDescription:
        "Professional IT solutions company website built with Next.js, React, and modern frontend technologies.",
      keywords: [
        "Gloitel",
        "IT Solutions",
        "Next.js Website",
        "Corporate Website",
        "React Development",
        "Frontend Development",
        "SEO Optimized Website",
      ],
    },

    highlights: [
      {
        title: "Modern Corporate UI",
        description:
          "Designed a clean and professional interface focused on branding and user experience.",
      },
      {
        title: "Optimized Performance",
        description:
          "Implemented performance optimizations for fast loading and smooth interactions.",
      },
      {
        title: "Responsive Architecture",
        description:
          "Built fully responsive layouts optimized for desktop, tablet, and mobile devices.",
      },
    ],

    testimonials: [
      {
        name: "Company Showcase",
        feedback:
          "A professional and visually polished company website with smooth user experience and modern design.",
      },
    ],

    futureImprovements: [
      "Add CMS integration for dynamic content management",
      "Implement multilingual support",
      "Add blog and article management system",
      "Introduce advanced analytics dashboard",
      "Enhance accessibility compliance",
      "Add dark mode support",
      "Integrate live chat functionality",
      "Expand portfolio showcase features",
    ],

    media: [
      {
        type: "video",
        src: "/projects/gloitel/gloitel.mp4",
        alt: "Gloitel website walkthrough",
        caption: "Responsive company website walkthrough",
      },

      {
        type: "image",
        src: "/projects/gloitel/gloitel(1).png",
        alt: "Gloitel homepage preview",
        caption: "Modern corporate homepage design",
      },

      {
        type: "image",
        src: "/projects/gloitel/gloitel(2).png",
        alt: "Services section preview",
        caption: "Professional services showcase section",
      },

      {
        type: "image",
        src: "/projects/gloitel/gloitel(3).png",
        alt: "Company overview section",
        caption: "Corporate branding and overview interface",
      },

      {
        type: "image",
        src: "/projects/gloitel/gloitel(4).png",
        alt: "Responsive layout preview",
        caption: "Responsive UI optimized for all devices",
      },

      {
        type: "image",
        src: "/projects/gloitel/gloitel(5).png",
        alt: "Portfolio showcase",
        caption: "Portfolio and project presentation section",
      },

      {
        type: "image",
        src: "/projects/gloitel/gloitel(6).png",
        alt: "Animated website section",
        caption: "Smooth animated transitions and interactions",
      },

      {
        type: "image",
        src: "/projects/gloitel/gloitel(7).png",
        alt: "Company information section",
        caption: "Detailed company and services information",
      },

      {
        type: "image",
        src: "/projects/gloitel/gloitel(8).png",
        alt: "Technology section",
        caption: "Technology stack and expertise showcase",
      },

      {
        type: "image",
        src: "/projects/gloitel/gloitel(9).png",
        alt: "Contact section preview",
        caption: "Optimized contact and inquiry section",
      },

      {
        type: "image",
        src: "/projects/gloitel/gloitel(10).png",
        alt: "Mobile responsive preview",
        caption: "Fully responsive mobile-friendly experience",
      },

      {
        type: "image",
        src: "/projects/gloitel/gloitel(11).png",
        alt: "Complete website overview",
        caption: "Full corporate website experience",
      },
    ],
  },
  {
    id: "fitbattle",

    title: "Fitbattle",

    subtitle: "Fitness Challenge & Gamified Fitness Platform",

    category: "Fitness Platform",

    description:
      "A gamified fitness challenge platform with a modern marketing website, mobile application ecosystem, and admin management system focused on user engagement and fitness competitions.",

    longDescription:
      "Fitbattle is a fitness challenge platform designed to motivate users through competitive fitness activities, challenges, leaderboards, and rewards. The project includes a modern marketing website, mobile application, and admin management system. My primary contribution focused on the frontend web experience, including responsive landing pages, performance optimization, SEO architecture, and conversion-focused UI sections. I also contributed partially to the admin panel workflows and dashboard interfaces.",

    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "REST API",
      "Vercel",
    ],

    tags: [
      "Fitness Platform",
      "Landing Page",
      "Gamification",
      "Next.js",
      "React",
      "SEO Optimization",
      "Admin Dashboard",
      "Responsive UI",
    ],

    live: "https://fitbattle.in/",

    github: "",

    appLinks: {
      android:
        "https://play.google.com/store/apps/details?id=com.fitbattle&hl=en_IN",
    },

    platforms: ["Web Platform", "Admin Dashboard", "Android Application"],

    involvement: {
      web: "Primary Contributor",
      admin: "Partial Contribution",
      mobile: "No Direct Contribution",
    },

    image: "/projects/fitbattle/fitbattle(1).png",

    gallery: [
      "/projects/fitbattle/fitbattle(1).png",
      "/projects/fitbattle/fitbattle(2).png",
      "/projects/fitbattle/fitbattle(3).png",
      "/projects/fitbattle/fitbattle(4).png",
      "/projects/fitbattle/fitbattle(5).png",
    ],

    featured: false,

    status: "Live",

    year: "2026",

    duration: "2+ Months",

    role: "Frontend Web Developer",

    client: "Fitbattle",

    theme: {
      primary: "#0f172a",
      secondary: "#111827",
      accent: "#f97316",
    },

    metrics: {
      pages: 7,
      responsiveBreakpoints: 4,
      lighthousePerformance: "94+",
    },

    features: [
      "Modern fitness-focused landing page",
      "Gamified fitness challenge presentation",
      "Responsive mobile-first website design",
      "High-conversion hero and CTA sections",
      "Interactive feature and challenge showcases",
      "Performance optimized frontend architecture",
      "SEO-friendly page structure and metadata",
      "Admin panel workflow interfaces",
      "Cross-device optimized layouts",
      "Reusable and scalable React components",
      "Fast-loading assets and optimized rendering",
      "Fitness app promotional integration",
    ],

    advancedFeatures: [
      "Conversion-focused landing page architecture",
      "Responsive UI system with Tailwind CSS",
      "SEO optimization for search visibility",
      "Smooth animations and interactive sections",
      "Reusable component-based frontend structure",
      "Optimized loading strategies for better retention",
      "Scalable page sections for future campaigns",
      "Admin workflow UI contribution",
    ],

    challenges: [
      "Designing engaging fitness-focused visual hierarchy",
      "Balancing performance with rich visual UI",
      "Creating conversion-optimized call-to-action sections",
      "Maintaining responsiveness across all screen sizes",
      "Building reusable marketing components",
      "Optimizing SEO and Core Web Vitals performance",
    ],

    learnings: [
      "Improved landing page conversion optimization techniques",
      "Enhanced responsive UI development skills",
      "Practiced scalable frontend component architecture",
      "Improved performance optimization strategies",
      "Learned marketing-focused UI structuring",
      "Gained experience contributing to admin dashboard workflows",
    ],

    architecture: {
      frontend: "Next.js + React",
      api: "REST API",
      deployment: "Vercel",
      styling: "Tailwind CSS",
      backend: "API Driven Platform",
    },

    seo: {
      metaTitle: "Fitbattle - Fitness Challenge Platform",
      metaDescription:
        "Gamified fitness challenge platform with competitions, leaderboards, and fitness engagement experiences.",
      keywords: [
        "Fitbattle",
        "Fitness Challenge",
        "Fitness Platform",
        "Gamified Fitness",
        "Next.js Website",
        "Fitness App",
        "Workout Challenges",
      ],
    },

    highlights: [
      {
        title: "High-Conversion Landing Experience",
        description:
          "Designed engaging and conversion-focused UI sections for fitness user acquisition.",
      },
      {
        title: "Performance Optimized Frontend",
        description:
          "Implemented optimized loading, responsive layouts, and scalable frontend architecture.",
      },
      {
        title: "Multi-Platform Ecosystem",
        description:
          "Contributed to the web platform and partially to admin dashboard workflows within a larger ecosystem.",
      },
    ],

    testimonials: [
      {
        name: "Fitness Platform Showcase",
        feedback:
          "A visually engaging and modern fitness platform with smooth UX and strong responsive design.",
      },
    ],

    futureImprovements: [
      "Add advanced leaderboard analytics",
      "Implement personalized fitness recommendations",
      "Enhance admin dashboard reporting",
      "Add community and social engagement features",
      "Improve accessibility and inclusivity",
      "Introduce dark mode support",
      "Expand challenge customization features",
      "Integrate wearable fitness tracking APIs",
    ],

    media: [
      {
        type: "video",
        src: "/projects/fitbattle/fitbattle.mp4",
        alt: "Fitbattle platform walkthrough",
        caption: "Fitness challenge platform and landing page walkthrough",
      },

      {
        type: "image",
        src: "/projects/fitbattle/fitbattle(1).png",
        alt: "Fitbattle homepage preview",
        caption: "Modern fitness-focused landing page",
      },

      {
        type: "image",
        src: "/projects/fitbattle/fitbattle(2).png",
        alt: "Challenge showcase section",
        caption: "Gamified fitness challenge presentation",
      },

      {
        type: "image",
        src: "/projects/fitbattle/fitbattle(3).png",
        alt: "Responsive landing page layout",
        caption: "Responsive and conversion-focused UI sections",
      },

      {
        type: "image",
        src: "/projects/fitbattle/fitbattle(4).png",
        alt: "Fitness feature highlights",
        caption: "Feature highlights and promotional sections",
      },

      {
        type: "image",
        src: "/projects/fitbattle/fitbattle(5).png",
        alt: "Complete platform overview",
        caption: "Complete fitness platform experience",
      },
    ],
  },
  {
    id: "ai-image-generator",
    title: "AI Image Generator",
    subtitle: "Personal Project",
    description:
      "Generates AI images using prompts. Built complete UI and API handling logic for seamless experience.",
    longDescription:
      "This personal project explores the capabilities of AI image generation using OpenAI's DALL-E API. Users can input text prompts and receive AI-generated images in real-time. The application features a clean, intuitive interface with prompt history and image gallery functionality.",
    stack: ["ReactJS", "OpenAI API", "CSS3", "JavaScript"],
    image: "/placeholder.svg",
    featured: false,
    features: [
      "Text-to-image generation using OpenAI DALL-E",
      "Prompt history and favorites management",
      "Image download and sharing capabilities",
      "Responsive gallery view for generated images",
      "Loading states and error handling",
    ],
    challenges: [
      "Implemented efficient API rate limiting",
      "Built intuitive prompt input with suggestions",
      "Created smooth loading experience during generation",
    ],
    media: [
      {
        type: "image",
        src: "/placeholder.svg",
        alt: "AI Image Generator gallery preview",
        caption: "Prompt input and generated gallery",
      },
    ],
  },
  {
    id: "movie-out",

    title: "Movie Out",

    subtitle: "TMDB Movie Discovery Platform",

    category: "Web Application",

    description:
      "A modern movie exploration platform powered by the TMDB API with trending movies, detailed information, and advanced discovery features.",

    longDescription:
      "Movie Out is a cinematic movie discovery web application built with ReactJS and integrated with the TMDB API. The platform enables users to discover trending, popular, top-rated, and upcoming movies with real-time movie data. Users can search movies instantly, browse genres, explore detailed movie information, and enjoy a smooth responsive experience inspired by modern streaming platforms. The application focuses on performance, UI animations, and clean movie browsing experiences.",

    stack: ["ReactJS", "JavaScript", "TMDB API", "CSS3", "HTML5", "Vercel"],

    tags: [
      "Movie App",
      "TMDB",
      "React",
      "Movie Explorer",
      "Entertainment",
      "API Integration",
      "Responsive Design",
      "Frontend Project",
    ],

    live: "https://movie-out.vercel.app/",

    github: "",

    image: "/projects/movie-out/movie-out(1).png",

    featured: true,

    status: "Completed",

    year: "2026",

    duration: "1 Weeks",

    role: "Frontend Developer",

    client: "Personal Project",

    theme: {
      primary: "#e50914",
      secondary: "#141414",
      accent: "#ffffff",
    },

    metrics: {
      pages: 10,
      apiEndpointsIntegrated: 8,
      responsiveBreakpoints: 4,
      lighthousePerformance: "90+",
    },

    features: [
      "Real-time TMDB movie data integration",
      "Trending movies and popular sections",
      "Top-rated and upcoming movie collections",
      "Dynamic movie search functionality",
      "Detailed movie information pages",
      "Movie genres and category browsing",
      "Responsive design optimized for all devices",
      "Movie posters and backdrop previews",
      "Smooth scrolling and cinematic UI",
      "Dynamic ratings and release date display",
      "Fast-loading movie cards and sections",
      "Modern Netflix-inspired user experience",
    ],

    advancedFeatures: [
      "Dynamic API-based content rendering",
      "Reusable React component architecture",
      "Conditional rendering for loading states",
      "Optimized image loading from TMDB CDN",
      "Responsive grid layouts using CSS",
      "Interactive hover effects and transitions",
      "Search filtering and instant updates",
      "Structured movie detail routing",
    ],

    challenges: [
      "Handling asynchronous TMDB API requests efficiently",
      "Managing dynamic movie data and component states",
      "Optimizing performance for large movie collections",
      "Creating responsive layouts across devices",
      "Building reusable UI components",
      "Maintaining smooth user interactions during API loading",
    ],

    learnings: [
      "Improved React component structuring",
      "Learned advanced API integration techniques",
      "Practiced responsive UI development",
      "Enhanced understanding of asynchronous JavaScript",
      "Improved frontend performance optimization skills",
      "Learned real-world deployment workflows with Vercel",
    ],

    architecture: {
      frontend: "ReactJS SPA",
      api: "TMDB REST API",
      deployment: "Vercel",
      styling: "CSS3",
    },

    seo: {
      metaTitle: "Movie Out - TMDB Movie Discovery Platform",
      metaDescription:
        "Explore trending, top-rated, and popular movies with Movie Out powered by TMDB API.",
      keywords: [
        "TMDB",
        "Movie Explorer",
        "React Movie App",
        "Movie Search",
        "Trending Movies",
        "Movie Database",
      ],
    },

    highlights: [
      {
        title: "Real-Time Data",
        description:
          "Integrated TMDB API to fetch live movie details and trending content.",
      },
      {
        title: "Responsive Experience",
        description:
          "Optimized layouts and movie browsing experiences for desktop, tablet, and mobile.",
      },
      {
        title: "Modern UI",
        description:
          "Built a cinematic streaming-inspired interface with smooth interactions.",
      },
    ],

    testimonials: [
      {
        name: "Frontend Showcase",
        feedback:
          "An impressive movie discovery experience with clean UI and smooth navigation.",
      },
    ],

    futureImprovements: [
      "Add authentication and user profiles",
      "Implement favorite/watchlist functionality",
      "Add trailer playback with YouTube integration",
      "Introduce dark/light theme toggle",
      "Add pagination and infinite scrolling",
      "Implement recommendation engine based on genres",
      "Add TV shows and anime support",
      "Enable movie reviews and ratings system",
    ],

    gallery: [
      "/projects/movie-out/movie-out(1).png",
      "/projects/movie-out/movie-out(2).png",
      "/projects/movie-out/movie-out(3).png",
      "/projects/movie-out/movie-out(4).png",
      "/projects/movie-out/movie-out(5).png",
      "/projects/movie-out/movie-out(6).png",
      "/projects/movie-out/movie-out(7).png",
      "/projects/movie-out/movie-out(8).png",
      "/projects/movie-out/movie-out(9).png",
      "/projects/movie-out/movie-out(10).png",
      "/projects/movie-out/movie-out(11).png",
      "/projects/movie-out/movie-out(12).png",
    ],

    media: [
      {
        type: "video",
        src: "/projects/movie-out/movie-out.mp4",
        alt: "Movie Out app walkthrough",
        caption: "Complete TMDB-powered movie discovery experience",
      },

      {
        type: "image",
        src: "/projects/movie-out/movie-out(1).png",
        alt: "Movie Out homepage preview",
        caption: "Modern cinematic homepage UI",
      },

      {
        type: "image",
        src: "/projects/movie-out/movie-out(2).png",
        alt: "Trending movies section",
        caption: "Trending and popular movies collection",
      },

      {
        type: "image",
        src: "/projects/movie-out/movie-out(3).png",
        alt: "Movie details page",
        caption: "Detailed movie information interface",
      },

      {
        type: "image",
        src: "/projects/movie-out/movie-out(4).png",
        alt: "Movie search functionality",
        caption: "Real-time movie search experience",
      },

      {
        type: "image",
        src: "/projects/movie-out/movie-out(5).png",
        alt: "Movie categories UI",
        caption: "Browse movies by genres and categories",
      },

      {
        type: "image",
        src: "/projects/movie-out/movie-out(6).png",
        alt: "Responsive movie layout",
        caption: "Responsive design for all screen sizes",
      },

      {
        type: "image",
        src: "/projects/movie-out/movie-out(7).png",
        alt: "Popular movies showcase",
        caption: "Popular movies and featured content",
      },

      {
        type: "image",
        src: "/projects/movie-out/movie-out(8).png",
        alt: "Movie cards interface",
        caption: "Interactive movie cards and previews",
      },

      {
        type: "image",
        src: "/projects/movie-out/movie-out(9).png",
        alt: "Search results page",
        caption: "Dynamic search results powered by TMDB",
      },

      {
        type: "image",
        src: "/projects/movie-out/movie-out(10).png",
        alt: "Movie ratings and metadata",
        caption: "Ratings, release dates, and detailed metadata",
      },

      {
        type: "image",
        src: "/projects/movie-out/movie-out(11).png",
        alt: "Movie browsing experience",
        caption: "Smooth browsing and navigation experience",
      },

      {
        type: "image",
        src: "/projects/movie-out/movie-out(12).png",
        alt: "Movie platform overview",
        caption: "Complete TMDB-powered movie platform",
      },
    ],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};
