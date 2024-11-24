import { DeveloperMode, SupportAgent, School } from "@mui/icons-material";

export const projects = [
    {   
        title: 'Personal Finance Management App', 
        description: `  Allows users to register transactions, attach receipts, and edit entries. 
                        It features a dynamic table with filtering and sorting options and users can visualize their finances with pie charts and graphs. 
                        Budgeting and tracking monthly limits are also supported.        
                    `,
        image: '/finance_app_photo.jpg',
        github: 'https://github.com/todor-savov/Expense-Tracker',
        liveSite: 'https://expense-tracking-app-33495.web.app/',
        techStack: ['React', 'TypeScript', 'JavaScript', 'MaterialUI', 'CSS', 'HTML5', 'Firebase']
    },
    {   
        title: 'Dynamic Event Scheduling Web App', 
        description: `  A feature-rich event calendar web app for managing and organizing personal events daily, weekly, and monthly. 
                        The app enables event creation, invitations, and seamless collaboration, with admin functionality for managing users and events.        
                    `,         
        image: '/event_calendar_app_photo.jpg',
        github: 'https://github.com/React-Duo/Event-Calendar',
        liveSite: 'https://event-calendar-c74a9.web.app/',
        techStack: ['React', 'JavaScript', 'HTML5', 'CSS', 'Firebase']
    },
    {
        title: 'Online Discussion Forum for React Enthusiasts',
        description:`   A dynamic and responsive forum application with an intuitive user interface, 
                        real-time data synchronisation and secure user authentication with Firebase.
                    `,
        image: '/react_forum_photo.jpg',
        github: 'https://github.com/React-Duo/Forum-Project',
        liveSite: 'https://reactduo-forumproject.web.app/',
        techStack: ['React', 'JavaScript', 'HTML5', 'CSS', 'Firebase']
    },
    {
        title: 'GIF Search and Browse Site',
        description: `  Developed a Giphy website using vanilla JavaScript and the Giphy API to showcase trending GIFs. 
                        The site allows users to upload and favorite their own GIFs, with local storage functionality to manage favorites and enhance the user experience.
                     `,
        image: '/no_preview_image.jpg',
        github: 'https://github.com/Cyber-Creators/WebProject_1',
        techStack: ['JavaScript', 'HTML5', 'CSS', 'WebStorageAPI']
    },    
    {
        title: 'Remote Resource Monitoring Desktop App',
        description: `  Created a client-server network app for admins to monitor CPU, RAM, and disk usage of remote Windows computers via a platform-independent UI. 
                        It helps with decision-making for upgrading or replacing LAN resources.
                     `,
        image: '/no_preview_image.jpg',
        techStack: ['JavaSwing', 'JDBC', 'MySQL', 'WMI']
    }    
];

export const experience = [    
    {
        date: "January - June 2024",
        title: "Alpha JavaScript Program at Telerik Software Academy",
        icon: DeveloperMode,
        description:
          "Completed an intensive JavaScript program, gaining hands-on experience in modern front-end technologies like React, TypeScript, and ES6 standards.",
    },
    {
        date: "2013 - 2023",
        title: "Technical Support Specialist at SiteGround",
        icon: SupportAgent,
        description:
          "Provided world-class hosting support, resolved complex CMS and website issues, and implemented process improvements, enhancing the team's efficiency and customer satisfaction.",
    },
    {
        date: "2015 - 2017",
        title: "Master's Degree in Computer Networks and Programming",
        icon: School,
        description:
          "Earned a Master's degree at Sofia University, focusing on distributed systems, mobile technologies, and programming. This program ignited my passion for software development.",
    },   
];