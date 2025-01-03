type ExperienceDTO = {
    id: number;
    role: string;
    name: string;
    about: string;
    duration: string;
    tools: string[];
}

export const experienceData: ExperienceDTO[] = [
    {
        id: 1,
        role: "Sole Frontend Engineer",
        name: "NCD Church Event Management App",
        about: `This is comprehensive mobile-first web-based church event management system that
aims to streamline the planning, organization, and execution of various church events, catering
to the diverse needs of church leadership, event organizers, workers, volunteers and
participants.
`,
        duration: "jun 2024 - dec 2024",
        tools: ["React", "Vite", "SWR", "Zustand", " React QR Scanner", "Material UI", "Tailwind", "Bitbucket", "Orval", "Axios"]
    },
    {
        id: 2,
        role: "Frontend Engineer",
        name: "Trybz - Estate Management App",
        about: `Trybz is a web and mobile solution for estate management, designed for use by both residents and management teams. It includes but is not limited to access control, visitor management, billing & payment and facility management.
`,
        duration: "feb 2023 - sept 2024",
        tools: ["React", "TypeScript", "React Query", "Zustand", "Apex Charts", "Chart js", "Tailwind", "Github", "Axios"]
    },
    {
        id: 3,
        role: "Frontend Engineer",
        name: "Not Forgotten Memorial Tribute Book.",
        about: `The Tribute Book allows users to create a digital tribute book by compiling a collection of images and text content about a loved one. The app generates a personalized album that serves as a lasting keepsake, celebrating and honoring the people who are important to the user. By combining visuals and narratives, it offers a meaningful way to preserve memories and create a tribute that can be shared and cherished.
`,
        duration: "sept 2023 - oct 2023",
        tools: ["React", "TypeScript", "Turn js", "QR Code Scanner", "Tailwind", "Bitbucket", "Axios"]
    },
    {
        id: 4,
        role: "Frontend Engineer",
        name: "Kacha - FinTech App",
        about: `Kacha is a versatile financial application that facilitates seamless transactions, including money transfers, bill payments, airtime purchases, remittances, digital lending, and withdrawals. It offers a secure and efficient platform for managing everyday financial needs, empowering users with convenient access to a range of financial services for the Ethiopian market.
`,
        duration: "aug 2022 - mar 2023",
        tools: ["React", "Nextjs", "TypeScript", "Redux", "sReact Query", "Tailwind", "Github", "Axios"]
    },
    {
        id: 5,
        role: "Frontend Engineer",
        name: "Love Notes Around The World",
        about: `Love Notes Around The World is a volunteer-driven web platform by the American Cancer Society that fosters compassion and connection within the cancer community. Designed for individuals and groups, it provides opportunities to create, share, and send heartfelt messages to cancer patients in treatment, their caretakers, care providers, and others in need of support. This initiative emphasizes the power of kindness and human connection, bringing hope and encouragement to those affected by cancer worldwide.
`,
        duration: "Oct 2022 - Dec 2023",
        tools: ["React", "Redux", "SyncFusion", "Zustand", "Fabric JS", "Material UI", "Tailwind", "Bitbucket", "Axios"]
    },
    {
        id: 4,
        role: "Sole Frontend Engineer",
        name: "Church Event Management App",
        about: `This is comprehensive mobile-first web-based church event management system that
aims to streamline the planning, organization, and execution of various church events, catering
to the diverse needs of church leadership, event organizers, workers, volunteers and
participants.
`,
        duration: "jun 2024 - dec 2024",
        tools: ["React", "Vite", "SWR", "Zustand", " React QR Scanner", "Material UI", "Tailwind", "Bitbucket", "Orval", "Axios"]
    },
]