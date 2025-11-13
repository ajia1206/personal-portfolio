// 个人信息数据
const personalData = {
    name: "张三",
    title: "全栈开发工程师",
    description: "热爱技术创新，专注于用户体验优化，具备丰富的前后端开发经验。",
    avatar: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20developer%20avatar%20portrait%2C%20modern%20minimalist%20style%2C%20clean%20background%2C%20confident%20expression&image_size=square"
};

// 关于我数据
const aboutData = {
    description: [
        "我是一名充满激情的全栈开发工程师，拥有5年的开发经验。专注于构建高性能、用户友好的Web应用程序。",
        "我热爱学习新技术，善于解决复杂的技术问题，并且具有良好的团队协作能力。"
    ],
    stats: [
        { number: "50+", label: "完成项目" },
        { number: "5年", label: "开发经验" },
        { number: "20+", label: "技术栈" }
    ]
};

// 技能数据
const skillsData = [
    {
        category: "前端开发",
        skills: [
            { name: "HTML5/CSS3", level: 95 },
            { name: "JavaScript/ES6+", level: 90 },
            { name: "React/Vue.js", level: 85 },
            { name: "TypeScript", level: 80 },
            { name: "Webpack/Vite", level: 75 }
        ]
    },
    {
        category: "后端开发",
        skills: [
            { name: "Node.js", level: 90 },
            { name: "Python", level: 85 },
            { name: "Express.js", level: 85 },
            { name: "Django", level: 75 },
            { name: "RESTful API", level: 90 }
        ]
    },
    {
        category: "数据库",
        skills: [
            { name: "MySQL", level: 85 },
            { name: "PostgreSQL", level: 80 },
            { name: "MongoDB", level: 75 },
            { name: "Redis", level: 70 },
            { name: "SQLite", level: 80 }
        ]
    },
    {
        category: "其他技能",
        skills: [
            { name: "Git/GitHub", level: 90 },
            { name: "Docker", level: 75 },
            { name: "AWS/阿里云", level: 70 },
            { name: "Linux", level: 80 },
            { name: "Agile/Scrum", level: 85 }
        ]
    }
];

// 教育背景数据
const educationData = [
    {
        date: "2016 - 2020",
        title: "计算机科学与技术学士",
        institution: "某某大学",
        description: "主修课程：数据结构、算法设计、软件工程、数据库系统、计算机网络等。获得优秀毕业生称号。"
    },
    {
        date: "2020 - 2022",
        title: "软件工程硕士",
        institution: "某某理工大学",
        description: "研究方向：Web应用开发、用户体验设计。参与多个科研项目，发表相关论文2篇。"
    }
];

// 工作经历数据
const experienceData = [
    {
        date: "2022 - 至今",
        title: "高级全栈开发工程师",
        company: "某某科技有限公司",
        description: "负责公司核心产品的前后端开发，带领团队完成多个重要项目。优化系统性能，提升用户体验。"
    },
    {
        date: "2020 - 2022",
        title: "前端开发工程师",
        company: "某某互联网公司",
        description: "负责Web应用前端开发，使用React和Vue.js构建用户界面。参与产品需求分析和技术方案设计。"
    },
    {
        date: "2019 - 2020",
        title: "初级开发工程师",
        company: "某某软件公司",
        description: "参与Web应用开发和维护，学习现代前端框架和后端技术，积累项目经验。"
    }
];

// 项目经验数据
const projectsData = [
    {
        title: "企业级管理系统",
        description: "开发了一套完整的企业管理系统，包含用户管理、权限控制、数据分析等模块。",
        image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Modern%20enterprise%20management%20system%20dashboard%2C%20clean%20UI%2C%20professional%20design%2C%20charts%20and%20graphs&image_size=landscape_16_9",
        tech: ["React", "Node.js", "MySQL", "Ant Design"],
        links: {
            demo: "#",
            github: "#"
        }
    },
    {
        title: "电商平台",
        description: "构建了一个功能完善的电商平台，支持商品管理、订单处理、支付集成等功能。",
        image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=E-commerce%20platform%20interface%2C%20product%20listings%2C%20shopping%20cart%2C%20modern%20design&image_size=landscape_16_9",
        tech: ["Vue.js", "Express.js", "MongoDB", "Stripe"],
        links: {
            demo: "#",
            github: "#"
        }
    },
    {
        title: "移动应用",
        description: "开发了一款跨平台移动应用，提供实时通讯、位置服务、社交功能等。",
        image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Mobile%20app%20interface%2C%20chat%20application%2C%20modern%20UI%2C%20smartphone%20screen&image_size=portrait_16_9",
        tech: ["React Native", "Firebase", "Redux", "Socket.io"],
        links: {
            demo: "#",
            github: "#"
        }
    }
];

// 作品集数据
const portfolioData = [
    {
        id: 1,
        title: "现代博客系统",
        description: "一个功能完整的博客系统，支持文章管理、评论系统、标签分类等功能。",
        category: "web",
        image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Modern%20blog%20system%20interface%2C%20article%20list%2C%20clean%20design%2C%20reading%20experience&image_size=landscape_16_9",
        images: [
            "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Blog%20homepage%20design%2C%20article%20cards%2C%20modern%20layout&image_size=landscape_16_9",
            "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Blog%20article%20page%2C%20reading%20interface%2C%20clean%20typography&image_size=landscape_16_9",
            "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Blog%20admin%20panel%2C%20content%20management%2C%20dashboard&image_size=landscape_16_9"
        ],
        tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
        demo: "#",
        github: "https://github.com/example/blog-system"
    },
    {
        id: 2,
        title: "任务管理应用",
        description: "一个直观的任务管理应用，支持项目协作、进度跟踪、团队沟通等功能。",
        category: "web",
        image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Task%20management%20application%2C%20kanban%20board%2C%20project%20management%2C%20clean%20UI&image_size=landscape_16_9",
        images: [
            "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Kanban%20board%20interface%2C%20task%20cards%2C%20drag%20and%20drop&image_size=landscape_16_9",
            "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Task%20details%20modal%2C%20project%20view%2C%20collaboration%20tools&image_size=landscape_16_9"
        ],
        tech: ["React", "Node.js", "Socket.io", "MongoDB"],
        demo: "#",
        github: "https://github.com/example/task-manager"
    },
    {
        id: 3,
        title: "天气预报App",
        description: "一个美观的天气预报应用，提供实时天气信息、未来预报、地图集成等功能。",
        category: "mobile",
        image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Weather%20forecast%20mobile%20app%2C%20clean%20interface%2C%20weather%20icons%2C%20modern%20design&image_size=portrait_16_9",
        images: [
            "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Weather%20app%20main%20screen%2C%20temperature%20display%2C%20weather%20conditions&image_size=portrait_16_9",
            "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Weather%20forecast%20weekly%20view%2C%20charts%20and%20graphs&image_size=portrait_16_9"
        ],
        tech: ["Flutter", "Dart", "OpenWeather API", "Google Maps"],
        demo: "#",
        github: "https://github.com/example/weather-app"
    },
    {
        id: 4,
        title: "音乐播放器",
        description: "一个功能丰富的音乐播放器，支持在线播放、播放列表、歌词显示等功能。",
        category: "mobile",
        image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Music%20player%20app%20interface%2C%20album%20cover%2C%20playback%20controls%2C%20modern%20design&image_size=portrait_16_9",
        images: [
            "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Music%20player%20main%20screen%2C%20now%20playing%2C%20equalizer%20visualization&image_size=portrait_16_9",
            "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Music%20playlist%20view%2C%20song%20list%2C%20album%20artwork&image_size=portrait_16_9"
        ],
        tech: ["React Native", "Redux", "Spotify API", "Node.js"],
        demo: "#",
        github: "https://github.com/example/music-player"
    },
    {
        id: 5,
        title: "品牌设计系统",
        description: "为初创公司设计的完整品牌视觉系统，包含Logo、色彩方案、字体规范等。",
        category: "design",
        image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Brand%20design%20system%2C%20logo%20variations%2C%20color%20palette%2C%20typography%20samples&image_size=square",
        images: [
            "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Logo%20design%20concepts%2C%20modern%20minimalist%20style%2C%20vector%20graphics&image_size=square",
            "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Brand%20guidelines%20document%2C%20color%20scheme%2C%20font%20hierarchy&image_size=landscape_16_9",
            "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Business%20card%20design%2C%20letterhead%2C%20brand%20applications&image_size=landscape_16_9"
        ],
        tech: ["Figma", "Adobe Illustrator", "Photoshop"],
        demo: "#",
        github: "#"
    },
    {
        id: 6,
        title: "UI组件库",
        description: "一套完整的UI组件库设计，包含按钮、表单、导航等各类组件的规范设计。",
        category: "design",
        image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=UI%20component%20library%2C%20button%20variations%2C%20form%20elements%2C%20design%20system&image_size=landscape_16_9",
        images: [
            "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Button%20component%20designs%2C%20different%20states%2C%20modern%20UI&image_size=square",
            "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Form%20components%2C%20input%20fields%2C%20dropdown%20menus%2C%20checkboxes&image_size=landscape_16_9"
        ],
        tech: ["Sketch", "Figma", "Principle"],
        demo: "#",
        github: "#"
    },
    {
        id: 7,
        title: "数据可视化平台",
        description: "一个强大的数据可视化平台，支持多种图表类型、实时数据更新、交互式探索。",
        category: "web",
        image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20visualization%20dashboard%2C%20charts%20and%20graphs%2C%20analytics%20platform&image_size=landscape_16_9",
        images: [
            "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Interactive%20charts%2C%20bar%20charts%2C%20pie%20charts%2C%20line%20graphs&image_size=landscape_16_9",
            "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Data%20analytics%20dashboard%2C%20real-time%20updates%2C%20filtering%20options&image_size=landscape_16_9"
        ],
        tech: ["D3.js", "React", "Python", "PostgreSQL"],
        demo: "#",
        github: "https://github.com/example/data-viz"
    },
    {
        id: 8,
        title: "在线教育平台",
        description: "一个综合性的在线教育平台，提供课程管理、视频播放、作业提交等功能。",
        category: "web",
        image: "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Online%20education%20platform%2C%20course%20interface%2C%20video%20player%2C%20learning%20management&image_size=landscape_16_9",
        images: [
            "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Course%20catalog%20page%2C%20video%20thumbnails%2C%20progress%20tracking&image_size=landscape_16_9",
            "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Video%20player%20interface%2C%20course%20content%2C%20note-taking%20feature&image_size=landscape_16_9"
        ],
        tech: ["Vue.js", "Django", "Redis", "AWS"],
        demo: "#",
        github: "https://github.com/example/edu-platform"
    }
];

// 联系方式数据
const contactData = {
    methods: [
        {
            type: "email",
            icon: "fas fa-envelope",
            title: "邮箱",
            value: "zhangsan@example.com",
            link: "mailto:zhangsan@example.com"
        },
        {
            type: "phone",
            icon: "fas fa-phone",
            title: "电话",
            value: "+86 138 0000 0000",
            link: "tel:+8613800000000"
        },
        {
            type: "location",
            icon: "fas fa-map-marker-alt",
            title: "位置",
            value: "中国 北京",
            link: "#"
        },
        {
            type: "website",
            icon: "fas fa-globe",
            title: "个人网站",
            value: "www.example.com",
            link: "https://www.example.com"
        }
    ],
    social: [
        {
            name: "GitHub",
            icon: "fab fa-github",
            link: "https://github.com/zhangsan"
        },
        {
            name: "LinkedIn",
            icon: "fab fa-linkedin",
            link: "https://linkedin.com/in/zhangsan"
        },
        {
            name: "Twitter",
            icon: "fab fa-twitter",
            link: "https://twitter.com/zhangsan"
        },
        {
            name: "微信",
            icon: "fab fa-weixin",
            link: "#"
        }
    ]
};