// 作品集模块
class PortfolioModule {
    constructor() {
        this.currentFilter = 'all';
        this.currentGalleryItem = null;
        this.currentImageIndex = 0;
        
        this.init();
    }

    init() {
        this.renderPortfolio();
        this.setupFilters();
        this.setupGallery();
        this.setupKeyboardNavigation();
    }

    // 渲染作品集
    renderPortfolio() {
        const portfolioGrid = document.getElementById('portfolio-grid');
        if (!portfolioGrid || !portfolioData) return;

        const portfolioHTML = portfolioData.map(item => `
            <div class="portfolio-item fade-in" data-category="${item.category}" data-id="${item.id}">
                <div class="portfolio-image" onclick="portfolioModule.openGallery(${item.id})">
                    <img src="${item.image}" alt="${item.title}" loading="lazy">
                    <div class="portfolio-overlay">
                        <div class="overlay-content">
                            <h4>${item.title}</h4>
                            <p>${item.tech.slice(0, 3).join(', ')}</p>
                            <span class="view-project">查看详情</span>
                        </div>
                    </div>
                </div>
                <div class="portfolio-content">
                    <h3 class="portfolio-title">${item.title}</h3>
                    <p class="portfolio-description">${item.description}</p>
                    <div class="portfolio-tech">
                        ${item.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="portfolio-links">
                        ${item.demo ? `<a href="${item.demo}" class="project-link" target="_blank">在线演示</a>` : ''}
                        ${item.github ? `<a href="${item.github}" class="project-link" target="_blank">源代码</a>` : ''}
                    </div>
                </div>
            </div>
        `).join('');

        portfolioGrid.innerHTML = portfolioHTML;
        
        // 添加延迟动画
        setTimeout(() => {
            this.animatePortfolioItems();
        }, 100);
    }

    // 动画化作品集项目
    animatePortfolioItems() {
        const items = document.querySelectorAll('.portfolio-item');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    // 设置筛选器
    setupFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                this.filterPortfolio(filter);
                
                // 更新按钮状态
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
    }

    // 筛选作品集
    filterPortfolio(filter) {
        this.currentFilter = filter;
        const items = document.querySelectorAll('.portfolio-item');
        
        items.forEach(item => {
            const category = item.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 50);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    }

    // 设置画廊
    setupGallery() {
        const modal = document.getElementById('gallery-modal');
        const closeBtn = document.querySelector('.gallery-close');
        const prevBtn = document.getElementById('gallery-prev');
        const nextBtn = document.getElementById('gallery-next');

        // 关闭画廊
        closeBtn.addEventListener('click', () => this.closeGallery());
        
        // 点击模态框背景关闭
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeGallery();
            }
        });

        // 导航按钮
        prevBtn.addEventListener('click', () => this.prevImage());
        nextBtn.addEventListener('click', () => this.nextImage());

        // 触摸滑动支持
        let touchStartX = 0;
        let touchEndX = 0;

        modal.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        modal.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        });
    }

    // 打开画廊
    openGallery(itemId) {
        const item = portfolioData.find(p => p.id === itemId);
        if (!item || !item.images || item.images.length === 0) return;

        this.currentGalleryItem = item;
        this.currentImageIndex = 0;
        
        this.updateGalleryImage();
        
        const modal = document.getElementById('gallery-modal');
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // 添加淡入动画
        setTimeout(() => {
            modal.style.opacity = '1';
        }, 10);
    }

    // 关闭画廊
    closeGallery() {
        const modal = document.getElementById('gallery-modal');
        modal.style.opacity = '0';
        
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            this.currentGalleryItem = null;
            this.currentImageIndex = 0;
        }, 300);
    }

    // 更新画廊图片
    updateGalleryImage() {
        if (!this.currentGalleryItem) return;

        const galleryImage = document.getElementById('gallery-image');
        const galleryTitle = document.getElementById('gallery-title');
        const galleryDescription = document.getElementById('gallery-description');

        const currentImage = this.currentGalleryItem.images[this.currentImageIndex];
        
        galleryImage.src = currentImage;
        galleryTitle.textContent = this.currentGalleryItem.title;
        galleryDescription.textContent = `${this.currentImageIndex + 1} / ${this.currentGalleryItem.images.length}`;

        // 更新导航按钮状态
        const prevBtn = document.getElementById('gallery-prev');
        const nextBtn = document.getElementById('gallery-next');
        
        prevBtn.style.display = this.currentImageIndex > 0 ? 'block' : 'none';
        nextBtn.style.display = this.currentImageIndex < this.currentGalleryItem.images.length - 1 ? 'block' : 'none';
    }

    // 上一张图片
    prevImage() {
        if (this.currentImageIndex > 0) {
            this.currentImageIndex--;
            this.updateGalleryImage();
        }
    }

    // 下一张图片
    nextImage() {
        if (this.currentGalleryItem && this.currentImageIndex < this.currentGalleryItem.images.length - 1) {
            this.currentImageIndex++;
            this.updateGalleryImage();
        }
    }

    // 处理滑动
    handleSwipe(startX, endX) {
        const swipeThreshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // 向左滑动 - 下一张
                this.nextImage();
            } else {
                // 向右滑动 - 上一张
                this.prevImage();
            }
        }
    }

    // 设置键盘导航
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            const modal = document.getElementById('gallery-modal');
            if (modal.style.display === 'block') {
                switch (e.key) {
                    case 'Escape':
                        this.closeGallery();
                        break;
                    case 'ArrowLeft':
                        this.prevImage();
                        break;
                    case 'ArrowRight':
                        this.nextImage();
                        break;
                }
            }
        });
    }
}

// 创建全局实例
let portfolioModule;

// 页面加载完成后初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        portfolioModule = new PortfolioModule();
    });
} else {
    portfolioModule = new PortfolioModule();
}

// 添加作品集模块的CSS样式
const portfolioStyle = document.createElement('style');
portfolioStyle.textContent = `
    .portfolio-item {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.5s ease;
        margin-bottom: 2rem;
    }
    
    .portfolio-image {
        position: relative;
        overflow: hidden;
        border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0;
        cursor: pointer;
    }
    
    .portfolio-image img {
        width: 100%;
        height: 250px;
        object-fit: cover;
        transition: transform 0.3s ease;
    }
    
    .portfolio-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(37, 99, 235, 0.9);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.3s ease;
        color: white;
        text-align: center;
        padding: 1rem;
    }
    
    .portfolio-image:hover .portfolio-overlay {
        opacity: 1;
    }
    
    .portfolio-image:hover img {
        transform: scale(1.1);
    }
    
    .overlay-content h4 {
        font-size: 1.3rem;
        margin-bottom: 0.5rem;
        font-weight: 600;
    }
    
    .overlay-content p {
        margin-bottom: 1rem;
        opacity: 0.9;
    }
    
    .view-project {
        background: white;
        color: var(--primary-color);
        padding: 0.5rem 1rem;
        border-radius: var(--border-radius);
        font-weight: 600;
        transition: all 0.2s ease;
    }
    
    .view-project:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    
    .portfolio-content {
        padding: 1.5rem;
        background: var(--surface-elevated);
        border-radius: 0 0 var(--border-radius-lg) var(--border-radius-lg);
    }
    
    .portfolio-title {
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: var(--text-primary);
    }
    
    .portfolio-description {
        color: var(--text-secondary);
        margin-bottom: 1rem;
        line-height: 1.6;
    }
    
    .portfolio-tech {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 1rem;
    }
    
    .portfolio-links {
        display: flex;
        gap: 1rem;
    }
    
    .portfolio-links .project-link {
        color: var(--primary-color);
        text-decoration: none;
        font-weight: 500;
        transition: all 0.2s ease;
        position: relative;
    }
    
    .portfolio-links .project-link:hover {
        color: var(--primary-dark);
        transform: translateY(-2px);
    }
    
    .portfolio-links .project-link::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        background: var(--primary-color);
        transition: width 0.3s ease;
    }
    
    .portfolio-links .project-link:hover::after {
        width: 100%;
    }
    
    /* 画廊模态框样式 */
    .gallery-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        z-index: 2000;
        opacity: 0;
        transition: opacity 0.3s ease;
        backdrop-filter: blur(10px);
    }
    
    .gallery-content {
        position: relative;
        width: 90%;
        max-width: 1000px;
        margin: 5% auto;
        background: var(--surface-elevated);
        border-radius: var(--border-radius-lg);
        overflow: hidden;
        box-shadow: var(--shadow-lg);
        transform: scale(0.9);
        transition: transform 0.3s ease;
    }
    
    .gallery-modal[style*="block"] .gallery-content {
        transform: scale(1);
    }
    
    .gallery-close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: 2rem;
        color: var(--text-primary);
        cursor: pointer;
        z-index: 2001;
        background: rgba(255, 255, 255, 0.9);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
    }
    
    .gallery-close:hover {
        background: var(--primary-color);
        color: white;
        transform: rotate(90deg);
    }
    
    .gallery-container {
        position: relative;
        width: 100%;
        height: 500px;
        background: var(--background);
    }
    
    .gallery-image {
        width: 100%;
        height: 100%;
        object-fit: contain;
        padding: 2rem;
    }
    
    .gallery-nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0 1rem;
        pointer-events: none;
    }
    
    .gallery-prev,
    .gallery-next {
        background: rgba(0, 0, 0, 0.7);
        color: white;
        border: none;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.5rem;
        transition: all 0.2s ease;
        pointer-events: all;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .gallery-prev:hover,
    .gallery-next:hover {
        background: rgba(0, 0, 0, 0.9);
        transform: scale(1.1);
    }
    
    .gallery-info {
        padding: 1.5rem;
        text-align: center;
        background: var(--surface);
        border-top: 1px solid var(--border);
    }
    
    .gallery-title {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: var(--text-primary);
    }
    
    .gallery-description {
        color: var(--text-secondary);
        line-height: 1.6;
    }
    
    /* 筛选按钮样式 */
    .portfolio-filters {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-bottom: 3rem;
        flex-wrap: wrap;
    }
    
    .filter-btn {
        padding: 0.75rem 1.5rem;
        border: 2px solid var(--border);
        background: transparent;
        color: var(--text-secondary);
        border-radius: var(--border-radius);
        cursor: pointer;
        transition: all 0.3s ease;
        font-weight: 500;
        position: relative;
        overflow: hidden;
    }
    
    .filter-btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: var(--primary-color);
        transition: left 0.3s ease;
        z-index: -1;
    }
    
    .filter-btn:hover::before,
    .filter-btn.active::before {
        left: 0;
    }
    
    .filter-btn:hover,
    .filter-btn.active {
        color: white;
        border-color: var(--primary-color);
        transform: translateY(-2px);
        box-shadow: var(--shadow);
    }
    
    /* 响应式设计 */
    @media (max-width: 768px) {
        .portfolio-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }
        
        .portfolio-image img {
            height: 200px;
        }
        
        .gallery-container {
            height: 400px;
        }
        
        .gallery-content {
            width: 95%;
            margin: 10% auto;
        }
        
        .portfolio-filters {
            gap: 0.5rem;
            margin-bottom: 2rem;
        }
        
        .filter-btn {
            padding: 0.6rem 1rem;
            font-size: 0.9rem;
        }
    }
    
    @media (max-width: 480px) {
        .portfolio-image img {
            height: 150px;
        }
        
        .gallery-container {
            height: 300px;
        }
        
        .gallery-prev,
        .gallery-next {
            width: 40px;
            height: 40px;
            font-size: 1.2rem;
        }
        
        .portfolio-content {
            padding: 1rem;
        }
        
        .portfolio-title {
            font-size: 1.1rem;
        }
        
        .portfolio-tech {
            gap: 0.3rem;
        }
        
        .tech-tag {
            font-size: 0.75rem;
            padding: 0.2rem 0.6rem;
        }
    }
`;
document.head.appendChild(portfolioStyle);