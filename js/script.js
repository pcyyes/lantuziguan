// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = '#fff';
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }
});

// 业务领域卡片悬停效果
const businessItems = document.querySelectorAll('.business-item');
businessItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
    });
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
    });
});

// 服务内容卡片悬停效果
const serviceItems = document.querySelectorAll('.service-item');
serviceItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#e6f0ff';
        this.style.transform = 'translateY(-5px)';
    });
    item.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#f9f9f9';
        this.style.transform = 'translateY(0)';
    });
});

// 成功案例卡片悬停效果
const caseItems = document.querySelectorAll('.case-item');
caseItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
    });
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
    });
});

// 团队成员卡片悬停效果
const teamMembers = document.querySelectorAll('.team-member');
teamMembers.forEach(member => {
    member.addEventListener('mouseenter', function() {
        const img = this.querySelector('img');
        img.style.transform = 'scale(1.05)';
        img.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.15)';
    });
    member.addEventListener('mouseleave', function() {
        const img = this.querySelector('img');
        img.style.transform = 'scale(1)';
        img.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    });
});

// 表单提交处理
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取表单数据
        const name = this.querySelector('input[type="text"]').value;
        const phone = this.querySelector('input[type="tel"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // 简单验证
        if (!name || !phone || !email || !message) {
            alert('请填写所有必填字段');
            return;
        }
        
        // 模拟表单提交
        alert('表单提交成功！我们将尽快与您联系。');
        this.reset();
    });
}

// 页面加载动画
window.addEventListener('load', function() {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        heroContent.style.transition = 'all 1s ease-in-out';
        
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
});

// 滚动动画
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.about-content, .business-grid, .services-grid, .cases-grid, .team-grid, .contact-content');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// 初始化滚动动画
window.addEventListener('load', function() {
    const elements = document.querySelectorAll('.about-content, .business-grid, .services-grid, .cases-grid, .team-grid, .contact-content');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'all 0.8s ease-out';
    });
    
    handleScrollAnimation();
});

window.addEventListener('scroll', handleScrollAnimation);