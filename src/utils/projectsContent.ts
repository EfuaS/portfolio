export type ExperienceDTO = {
  id: string;
  role: string;
  name: string;
  about: string;
  duration: string;
  tools: string[];
  businessImpact: string;
  developerPride: string;
  teamSize: string;
  challengeFaced: string;
  link?: string;
  image?: string;
};

export const experienceData: ExperienceDTO[] = [
  {
    id: "mcmarine",
    name: "MC Marine Services",
    role: "Sole Frontend Engineer",
    about: `MC Marine Services Website is a marketing platform built for a Ghana-based company providing marine and cargo surveying services across the maritime industry. The website was designed to establish a stronger digital presence for the business, communicate its services clearly, 
    and provide a modern, responsive experience for prospective clients and partners`,
    duration: "NOV 2025",
    businessImpact: `The website provided the client with a more professional and modern online presence, helping communicate their services more clearly to potential customers and partners. By combining AI-assisted UI generation with manual refinement and code cleanup, the project accelerated delivery while still producing a polished and maintainable final product.`,
    challengeFaced: `An inconvenience was that Rocket.new generated a React application with additional features and dependencies that were not needed for the project. To address this, I carefully trimmed the generated codebase, removed unnecessary complexity, updated outdated packages, and refactored the structure so it was leaner, more maintainable, and easier to customize with the client’s feedback.`,
    developerPride: `I take pride in this project because it was the first time I intentionally integrated AI into my frontend development workflow from the design stage through implementation. It showed me how to use AI as a productivity accelerator while still applying engineering judgment, customization, and refactoring to deliver a result that met real client expectations.`,
    teamSize: "1",
    tools: [
      "React",
      "Tailwind",
      "TypeScript",
      "Intersection Observer API",
      "WebP",
      "Hostinger",
    ],
    link: `https://mcmarineservices.com/`,
    image:
      "https://firebasestorage.googleapis.com/v0/b/efuas-portfolio-website.firebasestorage.app/o/assets%2Fmcmarine.webp?alt=media&token=90e717f7-904e-4c21-af27-792a11abd7d0",
  },
  {
    id: "grantspace",
    name: "GrantSpace",
    role: "Frontend Engineer",
    about: `AI-powered grant discovery and proposal support platform`,
    duration: "OCT - SEPT 2025",
    businessImpact: `The AI-powered features improved the usability and value of the platform by helping users discover relevant grants more efficiently and strengthen their proposal-writing workflows. The addition of editor intelligence and version history made the drafting experience more structured, interactive, and user-friendly.`,
    challengeFaced: `A key challenge was presenting analytics dynamically for different user roles and data types without creating duplicated UI logic. I solved this by using reusable React components and configuration-driven rendering, which kept the codebase lean while supporting tailored metric views.`,
    developerPride: `I am proud of independently driving frontend delivery for a high-workflow product and turning complex event operations into a cleaner, more intuitive experience for both organizers and participants`,
    teamSize: "10",
    tools: ["React", "Tailwind", "TypeScript", "TipTap", "ChatGPT", "Axios"],
  },
  {
    id: "piver",
    name: "Piver Global Freight Logistics Platform",
    role: "Frontend Engineer",
    about: `Piver is a digital logistics platform that connects consignors, brokers, and   logistics partners in one seamless network. The platform supports logistics coordination through dedicated user dashboards, guided workflows, and management interfaces designed to streamline shipping-related operations`,
    duration: "JAN - SEPT 2025",
    businessImpact: `The product improvements contributed to a smoother and more scalable logistics experience by supporting better user navigation, stronger shipping-management workflows, and more reliable frontend integration patterns. The responsive marketing site also helped strengthen the platform’s digital presentation and first impression.`,
    challengeFaced: `One of the key challenges was implementing advanced scroll-triggered animations, especially video-based interactions in the hero section, despite it being my first deep exposure to animation-heavy frontend work. I overcame this by intentionally studying GSAP, experimenting with its capabilities, and applying what I learned to build smooth, engaging interactions that fit the product’s design goals.`,
    developerPride: `I take pride in this project because it pushed me into a new area of frontend engineering — implementing complex animation. Learning and successfully applying GSAP to build high-quality scroll interactions gave me more confidence in creating visually engaging experiences without losing sight of usability and performance.`,
    teamSize: "12",
    tools: [
      "React",
      "Tailwind",
      "TypeScript",
      "TanStack Query",
      "GSAP",
      "OpenAPI-ts",
      "Generouted",
    ],
  },
  {
    id: "ncd-church-app",
    role: "Sole Frontend Engineer",
    name: "NCD Church Event Management App",
    about: `A mobile-first web platform designed to streamline the planning, registration, coordination, and execution of church events for organizers, workers, volunteers, and participants.`,
    duration: "JUN 2024 - DEC 2024",
    tools: [
      "React",
      "Vite",
      "SWR",
      "Zustand",
      " React QR Scanner",
      "Material UI",
      "Tailwind",
      "Bitbucket",
      "Orval",
      "Axios",
    ],
    businessImpact: `By bringing multiple event workflows into one digital platform, we completely eliminated the headache of manual coordination. Organizers instantly got better visibility into logistics and attendance, making decision-making a breeze. Plus, adding reporting tools and QR-enabled event processing made check-ins and operations incredibly fast. It took the stress out of event day and completely modernized how they run things!`,
    developerPride: `As the sole frontend engineer on this project, I independently drove the delivery of a mobile-first platform designed to streamline church event planning, registration, and coordination. Taking on my very first freelance gig completely solo was a huge milestone. I'm incredibly proud of how I took massive, chaotic event workflows and transformed them into a clean, intuitive experience that makes life easier for organizers, volunteers, and participants alike!`,
    teamSize: `2`,
    challengeFaced: `A key challenge was presenting analytics dynamically for different user roles and data types without creating duplicated UI logic. I solved this by using reusable React components and user-specific rendering, which kept the codebase lean while supporting tailored metric views.`,
  },
  {
    id: "trybz",
    role: "Frontend Engineer",
    name: "Trybz - Estate Management App",
    about: `Trybz is a web and mobile solution for estate management, designed for use by both residents and management teams. It includes but is not limited to access control, visitor management, billing & payment and facility management.
`,
    duration: "FEB 2023 - SEPT 2024",
    tools: [
      "React",
      "TypeScript",
      "React Query",
      "Zustand",
      "Apex Charts",
      "Chart js",
      "Tailwind",
      "Github",
      "Axios",
    ],
    developerPride: `I take immense pride in developing the Trybz estate management platform, a feature-rich solution that seamlessly addresses diverse use cases. Building such a comprehensive application allowed me to incorporate a wide range of libraries and tools, from data visualization for analytics to WYSIWYG editors for communication and advanced billing configurations. This experience not only showcased my technical versatility but also reinforced my ability to deliver impactful solutions that enhance operational efficiency and user satisfaction`,
    teamSize: `12`,
    challengeFaced: `One of the key challenges during development was managing frequent UI flow changes, which disrupted the development process. Despite this, I adapted quickly, ensuring that the right features were prioritized and implemented. In the end, the final product met the client’s expectations, and they were highly satisfied with the outcome.`,
    businessImpact: `The features implemented in the Trybz estate management app significantly improved operational efficiency and user engagement. Role-based dashboards streamlined functionality, while Estate CRUD and management tools enhanced administrative workflows. Advanced email communication features facilitated seamless collaboration within the community. Comprehensive billing and payment management optimized financial processes and ensured transparency. The user impersonation feature improved support and troubleshooting, and analytics with data visualization empowered informed decision-making, boosting platform effectiveness.`,
  },
  {
    id: "not-forgotten",
    role: "Frontend Engineer",
    name: "Not Forgotten Memorial Tribute Book.",
    about: `The Tribute Book allows users to create a digital tribute book by compiling a collection of images and text content about a loved one. The app generates a personalized album that serves as a lasting keepsake, celebrating and honoring the people who are important to the user. By combining visuals and narratives, it offers a meaningful way to preserve memories and create a tribute that can be shared and cherished.
`,
    duration: "SEPT 2023 - OCT 2023",
    tools: [
      "React",
      "TypeScript",
      "Turn js",
      "QR Code Scanner",
      "Tailwind",
      "Bitbucket",
      "Axios",
    ],
    developerPride: `Building a platform that helps people cherish and preserve memories of their loved ones—including their beloved pets—was incredibly fulfilling. Beyond validating my frontend skills, this project allowed me to code something with genuine emotional value. I take immense pride in knowing that the UI I built helped people celebrate important relationships and stay connected to the memories that matter most.`,
    teamSize: `2`,
    challengeFaced: `One of the key challenges during this project was ensuring the responsive design of the digital tribute book. On larger screens, the book was displayed as a two-page spread, while on smaller devices, it seamlessly transitioned to a single-page format. Another challenge involved managing the dynamic positioning of collage photos within the book, ensuring they were consistently displayed correctly across various screen sizes and devices.`,
    businessImpact: `The Tribute Book app allows users to compile images and stories into a personalized, digital keepsake honoring a loved one. To make the experience truly special, I integrated Turn.js for a realistic, beautiful page-turning UI. Because the books were so meaningful and visually stunning, users naturally loved sharing them with friends and family.`,
  },
  {
    id: "kacha",
    role: "Frontend Engineer",
    name: "Kacha - FinTech App",
    about: `Kacha is a versatile financial application that facilitates seamless transactions, including money transfers, bill payments, airtime purchases, remittances, digital lending, and withdrawals. It offers a secure and efficient platform for managing everyday financial needs, empowering users with convenient access to a range of financial services for the Ethiopian market.
`,
    duration: "AUG 2022 - MAR 2023",
    tools: [
      "React",
      "Nextjs",
      "TypeScript",
      "Redux",
      "TankStack Query",
      "Tailwind",
      "Github",
      "Axios",
    ],
    developerPride: `I’m incredibly proud of the sheer velocity I maintained on this project. In just one month, I cranked out 22+ UI screens and integrated 15+ APIs to get Kacha market-ready.

Tackling essential features like secure authentication, transfers, and bill payments under a tight timeline proved that I can ship high-quality code at lightning speed when the pressure is on.`,
    teamSize: `6`,
    link: `https://www.kacha.et/`,
    image:
      "https://firebasestorage.googleapis.com/v0/b/efuas-portfolio-website.firebasestorage.app/o/assets%2Fkacha.webp?alt=media&token=d46ef3de-7cfd-4744-a8d1-5859ddff338d",
    challengeFaced: `Nothing teaches you how to build software quite like a tight deadline on a large-scale project. I was tasked with helping launch three distinct app portals, requiring me to crank out five user stories a week. As a junior dev, this meant balancing a massive delivery schedule with a steep learning curve as I mastered React on the job. By focusing on rapid adaptation and clean coding practices, I didn't just help hit our launch date—I built a rock-solid foundation for my frontend career.`,
    businessImpact: `Shipping the Kacha financial app at lightning speed meant we got it into users' hands right when they needed it most. I got to build core features like secure transactions, quick money transfers, and digital lending—tools that genuinely make a difference in people's daily financial lives.

Because we moved quickly without sacrificing quality, the app immediately started gaining traction and gave the platform a massive competitive edge. It was incredibly rewarding to see my code directly drive early user growth and set the business up for some really exciting expansion down the road!`,
  },
  {
    id: "lovenotes",
    role: "Frontend Engineer",
    name: "Love Notes Around The World",
    about: `A volunteer-driven web platform by the American Cancer Society that enables users and groups to create, share, and send messages of encouragement to cancer patients, caregivers, and care providers.`,
    duration: "OCT 2022 - DEC 2023",
    tools: [
      "React",
      "Redux",
      "SyncFusion",
      "Zustand",
      "Fabric JS",
      "Material UI",
      "Tailwind",
      "Bitbucket",
      "Axios",
    ],
    developerPride: `My biggest point of pride with this project was knowing my code directly helped spread kindness and bring people closer together. It’s incredibly rewarding to build software that moves beyond just tech stacks and actually leaves a positive, meaningful impact on real lives.`,
    teamSize: `2`,
    challengeFaced: `A major challenge was building a customizable "love note card" feature where users could dynamically type text or drag clip art directly onto a background image canvas. To pull this off smoothly, a teammate and I teamed up and leveraged Fabric.js. Using the library allowed us to manage complex canvas interactions seamlessly, making element manipulation intuitive and fun for the user. The client absolutely loved the final result, and it ended up being a standout feature for the entire platform!`,
    businessImpact: `My work on the Love Notes Around The World web application significantly contributed to enhancing user engagement and streamlining user interactions. By developing essential features such as login and registration functionality, user account management, and love note creation, I helped create a seamless and engaging experience that encouraged repeat visits and active participation. The public landing page effectively increased outreach, presenting the platform’s mission and purpose to a wider audience, which likely resulted in higher user acquisition.`,
  },
];
