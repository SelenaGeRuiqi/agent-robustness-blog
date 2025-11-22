// Smooth scrolling for navigation links
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

// Reading progress indicator
function updateReadingProgress() {
  const content = document.querySelector('.content');
  if (!content) return;
  
  const windowHeight = window.innerHeight;
  const fullHeight = content.offsetHeight;
  const scrolled = window.pageYOffset;
  
  const progress = (scrolled / (fullHeight - windowHeight)) * 100;
  const progressBar = document.getElementById('reading-progress');
  
  if (progressBar) {
    progressBar.style.width = Math.min(progress, 100) + '%';
  }
}

window.addEventListener('scroll', updateReadingProgress);
window.addEventListener('load', updateReadingProgress);

// Active navigation highlighting
function updateActiveNavigation() {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.sidebar-nav a');
  
  let currentSection = '';
  const scrollPos = window.pageYOffset + 100;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    
    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + currentSection) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNavigation);
window.addEventListener('load', updateActiveNavigation);

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe animated elements
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.rq-card, .result-card, .figure, .table-wrapper');
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

// Copy code blocks to clipboard
document.addEventListener('DOMContentLoaded', () => {
  const codeBlocks = document.querySelectorAll('pre code');
  
  codeBlocks.forEach(block => {
    const button = document.createElement('button');
    button.className = 'copy-button';
    button.textContent = 'Copy';
    button.style.cssText = `
      position: absolute;
      top: 8px;
      right: 8px;
      padding: 4px 12px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 4px;
      color: white;
      cursor: pointer;
      font-size: 0.875rem;
      transition: all 0.3s;
    `;
    
    const pre = block.parentElement;
    pre.style.position = 'relative';
    pre.appendChild(button);
    
    button.addEventListener('click', () => {
      navigator.clipboard.writeText(block.textContent).then(() => {
        button.textContent = 'Copied!';
        setTimeout(() => {
          button.textContent = 'Copy';
        }, 2000);
      });
    });
  });
});

// External links open in new tab
document.addEventListener('DOMContentLoaded', () => {
  const externalLinks = document.querySelectorAll('a[href^="http"]');
  externalLinks.forEach(link => {
    if (!link.getAttribute('target')) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
});
