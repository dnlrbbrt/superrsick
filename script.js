// SUPERRSICK - Interactive Elements

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive elements
    initTypingEffect();
    initSmoothScrolling();
    initGlitchEffects();
    initMatrixBackground();
    initFormHandling();
    initLoadingEffect();
    initTerminalEffects();
});

// Typing Effect for Hero Title
function initTypingEffect() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    const text = typingElement.getAttribute('data-text') || 'SUPERRSICK';
    typingElement.textContent = '';
    
    let i = 0;
    const typeSpeed = 100;
    
    function typeWriter() {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, typeSpeed);
        }
    }
    
    // Start typing after a small delay
    setTimeout(typeWriter, 500);
}

// Smooth Scrolling for Navigation
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // If it's an external link (like contact.html), don't prevent default
            if (href.includes('.html')) {
                return; // Let the browser handle the navigation
            }
            
            e.preventDefault();
            const targetSection = document.querySelector(href);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 120; // Account for fixed header
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Add active effect
                link.style.background = 'rgba(0, 255, 65, 0.2)';
                setTimeout(() => {
                    link.style.background = '';
                }, 300);
            }
        });
    });
}

// Enhanced Glitch Effects
function initGlitchEffects() {
    const glitchElements = document.querySelectorAll('.glitch');
    
    glitchElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.animation = 'none';
            this.style.animation = 'glitch-hover 0.3s ease-in-out';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
    });
    
    // Random glitch effects
    setInterval(() => {
        const randomGlitch = glitchElements[Math.floor(Math.random() * glitchElements.length)];
        if (randomGlitch && Math.random() < 0.1) { // 10% chance
            randomGlitch.style.animation = 'glitch-random 0.2s ease-in-out';
            setTimeout(() => {
                randomGlitch.style.animation = '';
            }, 200);
        }
    }, 2000);
}

// Matrix-style Background Animation
function initMatrixBackground() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Create floating code snippets
    const codeSnippets = [
        '01001000', '01100001', '01100011', '01101011',
        'function()', 'var superrsick', 'if(bayarea)', 'while(true)',
        './superrsick.exe', '[ENCRYPTED]', '<script>', '</html>',
        'sudo rm -rf', 'access granted', 'connection established'
    ];
    
    function createFloatingCode() {
        const code = document.createElement('div');
        code.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        code.style.cssText = `
            position: absolute;
            color: rgba(0, 255, 65, 0.1);
            font-family: 'Share Tech Mono', monospace;
            font-size: 0.8rem;
            pointer-events: none;
            z-index: 1;
            left: ${Math.random() * 100}%;
            top: 100%;
            animation: float-up 15s linear infinite;
        `;
        
        hero.appendChild(code);
        
        // Remove element after animation
        setTimeout(() => {
            if (code.parentNode) {
                code.parentNode.removeChild(code);
            }
        }, 15000);
    }
    
    // Create floating code periodically
    setInterval(createFloatingCode, 3000);
    
    // Add CSS for floating animation
    if (!document.querySelector('#floating-animation-styles')) {
        const style = document.createElement('style');
        style.id = 'floating-animation-styles';
        style.textContent = `
            @keyframes float-up {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100vh) rotate(360deg);
                    opacity: 0;
                }
            }
            
            @keyframes glitch-hover {
                0%, 100% { transform: translate(0); }
                20% { transform: translate(-2px, 2px); }
                40% { transform: translate(-2px, -2px); }
                60% { transform: translate(2px, 2px); }
                80% { transform: translate(2px, -2px); }
            }
            
            @keyframes glitch-random {
                0%, 100% { transform: translate(0); }
                25% { transform: translate(-1px, 1px); }
                50% { transform: translate(1px, -1px); }
                75% { transform: translate(-1px, -1px); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Form Handling with Hacker-style Feedback
function initFormHandling() {
    const form = document.querySelector('.hack-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const button = form.querySelector('.btn-hack');
        const originalText = button.textContent;
        
        // Simulate hacking sequence
        const hackingSequence = [
            'INITIATING...',
            'ENCRYPTING...',
            'TRANSMITTING...',
            'BYPASSING_FIREWALL...',
            'CONNECTION_SECURE...',
            'MESSAGE_SENT!'
        ];
        
        let sequenceIndex = 0;
        button.disabled = true;
        button.style.borderColor = '#ffaa00';
        button.style.color = '#ffaa00';
        
        const sequenceInterval = setInterval(() => {
            button.textContent = hackingSequence[sequenceIndex];
            sequenceIndex++;
            
            if (sequenceIndex >= hackingSequence.length) {
                clearInterval(sequenceInterval);
                
                // Success state
                button.style.borderColor = '#00ff41';
                button.style.color = '#00ff41';
                button.style.background = 'rgba(0, 255, 65, 0.1)';
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.disabled = false;
                    button.style.borderColor = '';
                    button.style.color = '';
                    button.style.background = '';
                    form.reset();
                }, 2000);
            }
        }, 800);
    });
    
    // Add focus effects to form inputs
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.background = 'rgba(0, 255, 65, 0.05)';
        });
        
        input.addEventListener('blur', function() {
            this.style.background = '';
        });
        
        input.addEventListener('input', function() {
            if (this.value.length > 0) {
                this.style.borderColor = '#00ff41';
            } else {
                this.style.borderColor = '';
            }
        });
    });
}

// Loading Effect for Products
function initLoadingEffect() {
    const loadingText = document.querySelector('.loading-text');
    if (!loadingText) return;
    
    // Add some random loading messages
    const loadingMessages = [
        '> Scanning inventory files...',
        '> Decrypting product data...',
        '> Validating stock levels...',
        '> Synchronizing with servers...',
        '> Establishing secure connection...',
        '> Processing catalog entries...'
    ];
    
    // Randomly update loading messages
    setInterval(() => {
        const paragraphs = loadingText.querySelectorAll('p');
        if (paragraphs.length >= 2 && Math.random() < 0.3) {
            const randomMessage = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
            paragraphs[1].textContent = randomMessage;
        }
    }, 3000);
    
    // Randomly update progress percentage
    let progress = 67;
    const statusLine = loadingText.querySelector('.status-line');
    if (statusLine) {
        setInterval(() => {
            if (Math.random() < 0.4) {
                progress = Math.min(99, progress + Math.floor(Math.random() * 5));
                statusLine.textContent = `[STATUS: LOADING] [PROGRESS: ${progress}%]`;
            }
        }, 4000);
    }
}

// Terminal-style Effects
function initTerminalEffects() {
    // Add blinking cursor to status elements
    const statusElements = document.querySelectorAll('.status-line, .status-green');
    statusElements.forEach(element => {
        if (!element.querySelector('.cursor-blink')) {
            const cursor = document.createElement('span');
            cursor.className = 'cursor-blink';
            cursor.textContent = '_';
            cursor.style.marginLeft = '5px';
            element.appendChild(cursor);
        }
    });
    

}

function animateTerminalText(element) {
    const paragraphs = element.querySelectorAll('p');
    let delay = 0;
    
    paragraphs.forEach((p, index) => {
        const originalText = p.textContent;
        p.textContent = '';
        p.style.opacity = '0';
        
        setTimeout(() => {
            p.style.opacity = '1';
            typeText(p, originalText, 50);
        }, delay);
        
        delay += originalText.length * 50 + 500; // Delay based on text length
    });
}

function typeText(element, text, speed) {
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

// Button Click Effects
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-hack')) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = e.target.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(0, 255, 65, 0.3);
            border-radius: 50%;
            pointer-events: none;
            animation: ripple 0.6s ease-out;
        `;
        
        e.target.style.position = 'relative';
        e.target.style.overflow = 'hidden';
        e.target.appendChild(ripple);
        
        // Add ripple animation if not exists
        if (!document.querySelector('#ripple-animation')) {
            const style = document.createElement('style');
            style.id = 'ripple-animation';
            style.textContent = `
                @keyframes ripple {
                    0% {
                        transform: scale(0);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(2);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
            }
        }, 600);
    }
});

// Keyboard shortcuts for hacker feel
document.addEventListener('keydown', function(e) {
    // Ctrl + Shift + S for "superrsick mode"
    if (e.ctrlKey && e.shiftKey && e.key === 'S') {
        e.preventDefault();
        toggleSuperrsickMode();
    }
    
    // Escape key effects
    if (e.key === 'Escape') {
        const glitchElements = document.querySelectorAll('.glitch');
        glitchElements.forEach(element => {
            element.style.animation = 'glitch-random 0.1s ease-in-out';
            setTimeout(() => {
                element.style.animation = '';
            }, 100);
        });
    }
});

function toggleSuperrsickMode() {
    document.body.classList.toggle('superrsick-mode');
    
    if (!document.querySelector('#superrsick-mode-styles')) {
        const style = document.createElement('style');
        style.id = 'superrsick-mode-styles';
        style.textContent = `
            .superrsick-mode {
                filter: hue-rotate(120deg) contrast(1.3);
                animation: screen-flicker 0.1s infinite;
            }
            
            @keyframes screen-flicker {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.98; }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Auto-disable after 10 seconds
    setTimeout(() => {
        document.body.classList.remove('superrsick-mode');
    }, 10000);
}

// Console Easter Egg
console.log(`
╔══════════════════════════════════════════════════════════════╗
║                      SUPERRSICK v1.0                        ║
║                  [SYSTEM ACCESS GRANTED]                    ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  Welcome to the bay area underground, fashion rebel.        ║
║                                                              ║
║  Available commands:                                         ║
║  • Ctrl+Shift+S: Toggle superrsick mode                    ║
║  • ESC: Trigger glitch effect                              ║
║                                                              ║
║  Stay underground. Stay authentic. Stay superrsick.         ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
`);