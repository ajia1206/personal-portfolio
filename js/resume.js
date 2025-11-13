// 简历模块
class ResumeModule {
    constructor() {
        this.init();
    }

    init() {
        this.renderSkills();
        this.renderEducation();
        this.renderExperience();
        this.renderProjects();
        this.animateSkills();
    }

    // 渲染技能
    renderSkills() {
        const skillsContainer = document.getElementById('skills-container');
        if (!skillsContainer || !skillsData) return;

        const skillsHTML = skillsData.map(category => `
            <div class="skill-category fade-in">
                <h4>${category.category}</h4>
                ${category.skills.map(skill => `
                    <div class="skill-item">
                        <span class="skill-name">${skill.name}</span>
                        <div class="skill-level">
                            <div class="skill-progress" data-level="${skill.level}"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `).join('');

        skillsContainer.innerHTML = skillsHTML;
    }

    // 动画化技能条
    animateSkills() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const level = entry.target.getAttribute('data-level');
                    entry.target.style.width = `${level}%`;
                    
                    // 添加数字动画
                    const skillItem = entry.target.closest('.skill-item');
                    const skillName = skillItem.querySelector('.skill-name');
                    
                    // 创建百分比显示
                    const percentage = document.createElement('span');
                    percentage.className = 'skill-percentage';
                    percentage.textContent = '0%';
                    skillItem.appendChild(percentage);
                    
                    // 数字动画
                    this.animateNumber(percentage, 0, level, 1000);
                }
            });
        }, {
            threshold: 0.5
        });

        skillBars.forEach(bar => observer.observe(bar));
    }

    // 数字动画
    animateNumber(element, start, end, duration) {
        const startTime = performance.now();
        
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const current = Math.floor(start + (end - start) * this.easeOutQuart(progress));
            element.textContent = `${current}%`;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    }

    // 缓动函数
    easeOutQuart(t) {
        return 1 - Math.pow(1 - t, 4);
    }

    // 渲染教育背景
    renderEducation() {
        const educationTimeline = document.getElementById('education-timeline');
        if (!educationTimeline || !educationData) return;

        const educationHTML = educationData.map(item => `
            <div class="timeline-item fade-in">
                <div class="timeline-date">${item.date}</div>
                <h4 class="timeline-title">${item.title}</h4>
                <div class="timeline-subtitle">${item.institution}</div>
                <p class="timeline-description">${item.description}</p>
            </div>
        `).join('');

        educationTimeline.innerHTML = educationHTML;
    }

    // 渲染工作经历
    renderExperience() {
        const experienceTimeline = document.getElementById('experience-timeline');
        if (!experienceTimeline || !experienceData) return;

        const experienceHTML = experienceData.map(item => `
            <div class="timeline-item fade-in">
                <div class="timeline-date">${item.date}</div>
                <h4 class="timeline-title">${item.title}</h4>
                <div class="timeline-subtitle">${item.company}</div>
                <p class="timeline-description">${item.description}</p>
            </div>
        `).join('');

        experienceTimeline.innerHTML = experienceHTML;
    }

    // 渲染项目经验
    renderProjects() {
        const projectsGrid = document.getElementById('projects-grid');
        if (!projectsGrid || !projectsData) return;

        const projectsHTML = projectsData.map(project => `
            <div class="project-card fade-in">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}" loading="lazy">
                </div>
                <div class="project-content">
                    <h4 class="project-title">${project.title}</h4>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        ${project.links.demo ? `<a href="${project.links.demo}" class="project-link" target="_blank">在线演示</a>` : ''}
                        ${project.links.github ? `<a href="${project.links.github}" class="project-link" target="_blank">源代码</a>` : ''}
                    </div>
                </div>
            </div>
        `).join('');

        projectsGrid.innerHTML = projectsHTML;
    }
}

// 添加简历模块的CSS样式
const resumeStyle = document.createElement('style');
resumeStyle.textContent = `
    .skill-percentage {
        font-size: 0.9rem;
        color: var(--primary-color);
        font-weight: 600;
        margin-left: auto;
        padding-left: 10px;
    }
    
    .skill-item {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 1rem;
    }
    
    .skill-name {
        flex: 1;
        font-weight: 500;
    }
    
    .skill-level {
        width: 100px;
        height: 8px;
        background: var(--border);
        border-radius: 4px;
        overflow: hidden;
        position: relative;
    }
    
    .skill-progress {
        height: 100%;
        background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
        border-radius: 4px;
        width: 0;
        transition: width 1s ease-out;
        position: relative;
    }
    
    .skill-progress::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
        );
        animation: shimmer 2s infinite;
    }
    
    @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
    }
    
    .timeline-item {
        position: relative;
        background: var(--surface-elevated);
        padding: 1.5rem;
        border-radius: var(--border-radius-lg);
        box-shadow: var(--shadow);
        transition: all 0.3s ease;
        margin-bottom: 2rem;
    }
    
    .timeline-item:hover {
        transform: translateX(10px);
        box-shadow: var(--shadow-lg);
    }
    
    .timeline-date {
        font-size: 0.9rem;
        color: var(--primary-color);
        font-weight: 600;
        margin-bottom: 0.5rem;
        display: inline-block;
        background: var(--primary-color);
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
    }
    
    .timeline-title {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: var(--text-primary);
    }
    
    .timeline-subtitle {
        font-size: 1rem;
        color: var(--primary-color);
        font-weight: 500;
        margin-bottom: 1rem;
    }
    
    .timeline-description {
        color: var(--text-secondary);
        line-height: 1.6;
        margin-bottom: 0;
    }
    
    .project-card {
        background: var(--surface-elevated);
        border-radius: var(--border-radius-lg);
        overflow: hidden;
        box-shadow: var(--shadow);
        transition: all 0.3s ease;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    
    .project-card:hover {
        transform: translateY(-10px);
        box-shadow: var(--shadow-lg);
    }
    
    .project-image {
        width: 100%;
        height: 200px;
        overflow: hidden;
        position: relative;
    }
    
    .project-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }
    
    .project-card:hover .project-image img {
        transform: scale(1.1);
    }
    
    .project-content {
        padding: 1.5rem;
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    
    .project-title {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: var(--text-primary);
    }
    
    .project-description {
        color: var(--text-secondary);
        margin-bottom: 1rem;
        line-height: 1.6;
        flex: 1;
    }
    
    .project-tech {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 1rem;
    }
    
    .tech-tag {
        background: var(--primary-color);
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 500;
        transition: all 0.2s ease;
    }
    
    .tech-tag:hover {
        background: var(--primary-dark);
        transform: translateY(-2px);
    }
    
    .project-links {
        display: flex;
        gap: 1rem;
        margin-top: auto;
    }
    
    .project-link {
        color: var(--primary-color);
        text-decoration: none;
        font-weight: 500;
        transition: all 0.2s ease;
        position: relative;
    }
    
    .project-link:hover {
        color: var(--primary-dark);
        transform: translateY(-2px);
    }
    
    .project-link::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        background: var(--primary-color);
        transition: width 0.3s ease;
    }
    
    .project-link:hover::after {
        width: 100%;
    }
    
    @media (max-width: 768px) {
        .timeline {
            padding-left: 1rem;
        }
        
        .timeline::before {
            left: 0;
        }
        
        .timeline-item {
            padding: 1rem;
            margin-bottom: 1.5rem;
        }
        
        .timeline-item::before {
            left: -1.5rem;
            width: 10px;
            height: 10px;
        }
        
        .skill-category {
            padding: 1.5rem;
        }
        
        .project-image {
            height: 180px;
        }
        
        .project-content {
            padding: 1rem;
        }
    }
    
    @media (max-width: 480px) {
        .timeline-item {
            padding: 0.8rem;
        }
        
        .skill-category {
            padding: 1rem;
        }
        
        .project-image {
            height: 150px;
        }
        
        .project-content {
            padding: 0.8rem;
        }
        
        .project-tech {
            gap: 0.3rem;
        }
        
        .tech-tag {
            font-size: 0.75rem;
            padding: 0.2rem 0.6rem;
        }
    }
`;
document.head.appendChild(resumeStyle);