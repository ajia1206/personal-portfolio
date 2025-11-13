// Contact Module
class ContactModule {
    constructor() {
        this.form = null;
        this.contactMethods = null;
        this.init();
    }

    init() {
        this.renderContactMethods();
        this.setupFormValidation();
        this.setupFormSubmission();
    }

    renderContactMethods() {
        const container = document.querySelector('.contact-methods');
        if (!container) return;

        const contactData = [
            {
                type: 'email',
                icon: 'fas fa-envelope',
                title: '邮箱',
                value: 'your.email@example.com',
                link: 'mailto:your.email@example.com'
            },
            {
                type: 'phone',
                icon: 'fas fa-phone',
                title: '电话',
                value: '+86 138 0000 0000',
                link: 'tel:+8613800000000'
            },
            {
                type: 'github',
                icon: 'fab fa-github',
                title: 'GitHub',
                value: 'github.com/yourusername',
                link: 'https://github.com/yourusername'
            },
            {
                type: 'linkedin',
                icon: 'fab fa-linkedin',
                title: 'LinkedIn',
                value: 'linkedin.com/in/yourusername',
                link: 'https://linkedin.com/in/yourusername'
            },
            {
                type: 'wechat',
                icon: 'fab fa-weixin',
                title: '微信',
                value: 'your_wechat_id',
                link: '#'
            },
            {
                type: 'location',
                icon: 'fas fa-map-marker-alt',
                title: '位置',
                value: '中国 北京',
                link: '#'
            }
        ];

        container.innerHTML = contactData.map(method => `
            <div class="contact-method" data-type="${method.type}">
                <div class="contact-icon">
                    <i class="${method.icon}"></i>
                </div>
                <div class="contact-info">
                    <h4>${method.title}</h4>
                    <a href="${method.link}" ${method.type !== 'wechat' && method.type !== 'location' ? 'target="_blank"' : ''}>
                        ${method.value}
                    </a>
                </div>
            </div>
        `).join('');

        // Add click handlers for special cases
        this.setupContactMethodHandlers();
    }

    setupContactMethodHandlers() {
        const wechatMethod = document.querySelector('[data-type="wechat"]');
        if (wechatMethod) {
            wechatMethod.addEventListener('click', (e) => {
                e.preventDefault();
                this.showWechatQR();
            });
        }
    }

    showWechatQR() {
        // Create modal for WeChat QR code
        const modal = document.createElement('div');
        modal.className = 'modal wechat-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h3>微信二维码</h3>
                <div class="qr-placeholder">
                    <p>请在此处添加您的微信二维码图片</p>
                    <div class="qr-code"></div>
                </div>
                <p>扫描二维码添加微信好友</p>
            </div>
        `;

        document.body.appendChild(modal);
        modal.style.display = 'block';

        // Close modal handlers
        const closeBtn = modal.querySelector('.close');
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    }

    setupFormValidation() {
        this.form = document.getElementById('contact-form');
        if (!this.form) return;

        const inputs = this.form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearFieldError(input));
        });

        // Real-time validation
        this.form.addEventListener('input', (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                this.validateField(e.target);
            }
        });
    }

    validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        let isValid = true;
        let errorMessage = '';

        // Remove previous error
        this.clearFieldError(field);

        switch (fieldName) {
            case 'name':
                if (!value) {
                    isValid = false;
                    errorMessage = '请输入您的姓名';
                } else if (value.length < 2) {
                    isValid = false;
                    errorMessage = '姓名至少需要2个字符';
                }
                break;

            case 'email':
                if (!value) {
                    isValid = false;
                    errorMessage = '请输入您的邮箱';
                } else if (!this.isValidEmail(value)) {
                    isValid = false;
                    errorMessage = '请输入有效的邮箱地址';
                }
                break;

            case 'subject':
                if (!value) {
                    isValid = false;
                    errorMessage = '请输入邮件主题';
                } else if (value.length < 5) {
                    isValid = false;
                    errorMessage = '主题至少需要5个字符';
                }
                break;

            case 'message':
                if (!value) {
                    isValid = false;
                    errorMessage = '请输入消息内容';
                } else if (value.length < 10) {
                    isValid = false;
                    errorMessage = '消息内容至少需要10个字符';
                }
                break;
        }

        if (!isValid) {
            this.showFieldError(field, errorMessage);
        }

        return isValid;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showFieldError(field, message) {
        field.classList.add('error');
        
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        
        field.parentNode.appendChild(errorElement);
    }

    clearFieldError(field) {
        field.classList.remove('error');
        const errorElement = field.parentNode.querySelector('.field-error');
        if (errorElement) {
            field.parentNode.removeChild(errorElement);
        }
    }

    setupFormSubmission() {
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (this.validateForm()) {
                this.submitForm();
            }
        });
    }

    validateForm() {
        const inputs = this.form.querySelectorAll('input, textarea');
        let isFormValid = true;

        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isFormValid = false;
            }
        });

        return isFormValid;
    }

    submitForm() {
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData.entries());
        
        // Show loading state
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '发送中...';
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Success state
            this.showMessage('success', '消息发送成功！我会尽快回复您。');
            this.form.reset();
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);

        // In a real application, you would send the data to your backend:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data)
        // })
        // .then(response => response.json())
        // .then(result => {
        //     this.showMessage('success', '消息发送成功！');
        //     this.form.reset();
        // })
        // .catch(error => {
        //     this.showMessage('error', '发送失败，请稍后重试。');
        // })
        // .finally(() => {
        //     submitBtn.textContent = originalText;
        //     submitBtn.disabled = false;
        // });
    }

    showMessage(type, message) {
        // Remove existing message
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create new message
        const messageElement = document.createElement('div');
        messageElement.className = `form-message ${type}`;
        messageElement.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        `;

        this.form.parentNode.insertBefore(messageElement, this.form);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (messageElement.parentNode) {
                messageElement.parentNode.removeChild(messageElement);
            }
        }, 5000);

        // Smooth scroll to message
        messageElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Utility method to update contact methods data
    updateContactMethods(newMethods) {
        this.contactMethods = newMethods;
        this.renderContactMethods();
    }

    // Method to handle form reset
    resetForm() {
        if (this.form) {
            this.form.reset();
            // Clear all error states
            const inputs = this.form.querySelectorAll('input, textarea');
            inputs.forEach(input => this.clearFieldError(input));
            
            // Remove any messages
            const message = document.querySelector('.form-message');
            if (message) {
                message.remove();
            }
        }
    }
}