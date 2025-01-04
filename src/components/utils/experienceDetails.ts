type ExperienceDTO = {
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
}

export const experienceData: ExperienceDTO[] = [
    {
        id: "project1",
        role: "Sole Frontend Engineer",
        name: "NCD Church Event Management App",
        about: `This is comprehensive mobile-first web-based church event management system that
aims to streamline the planning, organization, and execution of various church events, catering
to the diverse needs of church leadership, event organizers, workers, volunteers and
participants.
`,
        duration: "JUN 2024 - DEC 2024",
        tools: ["React", "Vite", "SWR", "Zustand", " React QR Scanner", "Material UI", "Tailwind", "Bitbucket", "Orval", "Axios"],
        businessImpact: `By automating key tasks such as user and role management, event registration, and participant tracking, the app reduced manual effort and minimized errors. The integration of real-time QR scanning for event check-ins and meal distribution enhanced the attendee experience, while comprehensive reporting and analytics provided valuable insights for better decision-making. These features collectively contributed to smoother event operations, increased engagement, and data-driven planning, ultimately improving the overall effectiveness and satisfaction of both organizers and participants.`,
        developerPride: `I take pride in being the sole frontend engineer on this project. I got to chose which frameworks and tools to use. At the end of the day the tech-savy client was happy with the outcome of the app.`,
        teamSize: `2`,
        challengeFaced: `A significant challenge during the development of the NCD Church Management App was implementing analytics, as there was a vast amount of data to collect and analyze. Dynamically displaying metrics based on the logged-in user and their respective tables threatened to take considerable time and effort. However, by leveraging React's componentization, I was able to minimize the code required while still providing customized analytics for various types of data and user roles. In the end, this proved to be a valuable commitment, as data analysis played a critical role for event organizers.`
    },
    {
        id: "project2",
        role: "Frontend Engineer",
        name: "Trybz - Estate Management App",
        about: `Trybz is a web and mobile solution for estate management, designed for use by both residents and management teams. It includes but is not limited to access control, visitor management, billing & payment and facility management.
`,
        duration: "FEB 2023 - SEPT 2024",
        tools: ["React", "TypeScript", "React Query", "Zustand", "Apex Charts", "Chart js", "Tailwind", "Github", "Axios"],
        developerPride: `I take immense pride in developing the Trybz estate management platform, a feature-rich solution that seamlessly addresses diverse use cases. Building such a comprehensive application allowed me to incorporate a wide range of libraries and tools, from data visualization for analytics to WYSIWYG editors for communication and advanced billing configurations. This experience not only showcased my technical versatility but also reinforced my ability to deliver impactful solutions that enhance operational efficiency and user satisfaction`,
        teamSize: `12`,
        challengeFaced: `One of the key challenges during development was managing frequent UI flow changes, which disrupted the development process. Despite this, I adapted quickly, ensuring that the right features were prioritized and implemented. In the end, the final product met the client’s expectations, and they were highly satisfied with the outcome.`,
        businessImpact: `The features implemented in the Trybz estate management app significantly improved operational efficiency and user engagement. Role-based dashboards streamlined functionality, while Estate CRUD and management tools enhanced administrative workflows. Advanced email communication features facilitated seamless collaboration within the community. Comprehensive billing and payment management optimized financial processes and ensured transparency. The user impersonation feature improved support and troubleshooting, and analytics with data visualization empowered informed decision-making, boosting platform effectiveness.`
    },
    {
        id: "project3",
        role: "Frontend Engineer",
        name: "Not Forgotten Memorial Tribute Book.",
        about: `The Tribute Book allows users to create a digital tribute book by compiling a collection of images and text content about a loved one. The app generates a personalized album that serves as a lasting keepsake, celebrating and honoring the people who are important to the user. By combining visuals and narratives, it offers a meaningful way to preserve memories and create a tribute that can be shared and cherished.
`,
        duration: "SEPT 2023 - OCT 2023",
        tools: ["React", "TypeScript", "Turn js", "QR Code Scanner", "Tailwind", "Bitbucket", "Axios"],
        developerPride: `Through the development of a platform that allows individuals to cherish, honor, and preserve the memories of their loved ones, including pets, via an innovative virtual book, I gained a strong sense of professional fulfillment. This project not only validated my technical expertise as a developer but also allowed me to contribute meaningfully to enhancing emotional connections. I take pride in knowing that my work has had a positive impact, providing people with a meaningful way to remember and celebrate important relationships.`,
        teamSize: `2`,
        challengeFaced: `One of the key challenges during this project was ensuring the responsive design of the digital tribute book. On larger screens, the book was displayed as a two-page spread, while on smaller devices, it seamlessly transitioned to a single-page format. Another challenge involved managing the dynamic positioning of photos within the book, ensuring they were consistently displayed correctly across various screen sizes and devices.`,
        businessImpact: `The development of the Tribute Book web application provided significant value by offering users a personalized and interactive solution to preserve and honor memories. The integration of Turn.js to deliver a realistic page-turning experience set the application apart, providing a visually engaging and seamless user interface.

By facilitating the creation, sharing, and exporting of tribute books, the application fostered emotional connections and encouraged social sharing, thereby increasing platform visibility and driving user referrals.
`
    },
    {
        id: "project4",
        role: "Frontend Engineer",
        name: "Kacha - FinTech App",
        about: `Kacha is a versatile financial application that facilitates seamless transactions, including money transfers, bill payments, airtime purchases, remittances, digital lending, and withdrawals. It offers a secure and efficient platform for managing everyday financial needs, empowering users with convenient access to a range of financial services for the Ethiopian market.
`,
        duration: "AUG 2022 - MAR 2023",
        tools: ["React", "Nextjs", "TypeScript", "Redux", "sReact Query", "Tailwind", "Github", "Axios"],
        developerPride: `Successfully implemented 22+ UI screens and integrated 15+ API endpoints of the Kacha financial application within a month, delivering key features such as secure login, money transfers, bill payments, contributing to the app's rapid development and launch.`,
        teamSize: `6`,
        challengeFaced: `One of the key challenges during this project was effectively managing time and adapting to the fast-paced development environment, requiring efficient prioritization and rapid execution of tasks to meet project milestones.`,
        businessImpact: `The rapid development and delivery of the Kacha financial application accelerated time-to-market, enabling quick adoption and meeting users' financial needs. By implementing key features like secure transactions, money transfers, and digital lending, the app contributed to early user acquisition and strengthened the platform’s competitive position. This fast-paced development supported the company’s business goals and laid the groundwork for future growth and expansion.`
    },
    {
        id: "project5",
        role: "Frontend Engineer",
        name: "Love Notes Around The World",
        about: `Love Notes Around The World is a volunteer-driven web platform by the American Cancer Society that fosters compassion and connection within the cancer community. Designed for individuals and groups, it provides opportunities to create, share, and send heartfelt messages to cancer patients in treatment, their caretakers, care providers, and others in need of support. This initiative emphasizes the power of kindness and human connection, bringing hope and encouragement to those affected by cancer worldwide.
`,
        duration: "OCT 2022 - DEC 2023",
        tools: ["React", "Redux", "SyncFusion", "Zustand", "Fabric JS", "Material UI", "Tailwind", "Bitbucket", "Axios"],
        developerPride: `Contribution to spreading kindness, fostering human connections, and positively influencing lives.`,
        teamSize: `2`,
        challengeFaced: `One of the key challenges I faced was implementing a customizable love note card feature, where users needed to add text or clip art onto an image canvas. The requirement was to enable dynamic interactions such as drawing text or pasting graphics on top of a background image. To address this, I collaborated closely with a teammate and we chose Fabric.js, a powerful JavaScript library, to manage the canvas and facilitate these interactions. By leveraging Fabric.js, we were able to create a smooth, intuitive user experience that met the client's needs. The solution allowed for easy manipulation of elements on the canvas, enabling users to create personalized, visually appealing love notes. Ultimately, the client was very satisfied with the functionality, and the feature contributed to the overall success of the platform.`,
        businessImpact: `My work on the Love Notes Around The World web application significantly contributed to enhancing user engagement and streamlining user interactions. By developing essential features such as login and registration functionality, user account management, and love note creation, I helped create a seamless and engaging experience that encouraged repeat visits and active participation. The public landing page effectively increased outreach, presenting the platform’s mission and purpose to a wider audience, which likely resulted in higher user acquisition.`
    },
]