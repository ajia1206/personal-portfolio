// 主JavaScript文件

class PortfolioApp {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.currentSection = 'home';
        this.isScrolling = false;
        
        this.init();
    }

    init() {
        this.setupTheme();
        this.setupNavigation();
        this.setupScrollEffects();
        this.setupBackToTop();
        this.setupIntersectionObserver();
        this.setupMobileMenu();
        this.bindEvents();
        
        // 初始化各个模块
        this.initResume();
        this.initPortfolio();
        this.initContact();
    }

    // 主题设置
    setupTheme() {
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        this.updateThemeToggle();
    }

    updateThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        const sunIcon = themeToggle.querySelector('.fa-sun');
        const moonIcon = themeToggle.querySelector('.fa-moon');
        
        if (this.currentTheme === 'dark') {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
        this.updateThemeToggle();
        
        // 添加切换动画
        document.body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }

    // 导航设置
    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                this.scrollToSection(targetId);
                
                // 移动端关闭菜单
                if (window.innerWidth <= 768) {
                    this.closeMobileMenu();
                }
            });
        });

        // 滚动时更新导航状态
        window.addEventListener('scroll', () => {
            if (this.isScrolling) return;
            
            this.isScrolling = true;
            requestAnimationFrame(() => {
                this.updateNavigationState();
                this.isScrolling = false;
            });
        });
    }

    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const offsetTop = section.offsetTop - 70; // 减去导航栏高度
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    updateNavigationState() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.id;
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    // 移动端菜单
    setupMobileMenu() {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // 点击菜单项关闭菜单
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                this.closeMobileMenu();
            });
        });
        
        // 点击外部关闭菜单
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                this.closeMobileMenu();
            }
        });
    }

    closeMobileMenu() {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }

    // 滚动效果
    setupScrollEffects() {
        const navbar = document.getElementById('navbar');
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            // 导航栏滚动效果
            if (currentScrollY > 100) {
                navbar.style.background = 'var(--surface-elevated)';
                navbar.style.boxShadow = 'var(--shadow)';
            } else {
                navbar.style.background = 'var(--surface-elevated)';
                navbar.style.boxShadow = 'none';
            }
            
            // 隐藏/显示导航栏
            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
            
            lastScrollY = currentScrollY;
        });
    }

    // 返回顶部按钮
    setupBackToTop() {
        const backToTopBtn = document.getElementById('back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 交集观察器（用于动画）
    setupIntersectionObserver() {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            // 观察需要动画的元素
            document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
                observer.observe(el);
            });
        }
    }

    // 绑定事件
    bindEvents() {
        // 主题切换
        const themeToggle = document.getElementById('theme-toggle');
        themeToggle.addEventListener('click', () => this.toggleTheme());
        
        // 窗口大小改变时重新计算
        window.addEventListener('resize', () => {
            this.closeMobileMenu();
        });
        
        // 页面加载完成后的动画
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
        });
    }

    // 初始化简历模块
    initResume() {
        if (typeof ResumeModule !== 'undefined') {
            new ResumeModule();
        }
    }

    // 初始化作品集模块
    initPortfolio() {
        if (typeof PortfolioModule !== 'undefined') {
            new PortfolioModule();
        }
    }

    // 初始化联系模块
    initContact() {
        if (typeof ContactModule !== 'undefined') {
            new ContactModule();
        }
    }

    // 工具方法
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    static throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// 页面加载完成后初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new PortfolioApp();
    });
} else {
    new PortfolioApp();
}

// 添加一些CSS动画类
const style = document.createElement('style');
style.textContent = `
    .loaded .hero-content > * {
        animation: fadeInUp 0.8s ease-out;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .hero-content > *:nth-child(1) { animation-delay: 0.1s; }
    .hero-content > *:nth-child(2) { animation-delay: 0.2s; }
    .hero-content > *:nth-child(3) { animation-delay: 0.3s; }
    .hero-content > *:nth-child(4) { animation-delay: 0.4s; }
`;
document.head.appendChild(style);