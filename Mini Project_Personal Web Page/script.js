document.addEventListener('DOMContentLoaded', function() {
    // Fun facts array
    const funFacts = [
        "I can speak 3 programming languages fluently!",
        "I've built over 10 web projects in the past year!",
        "My favorite programming language is JavaScript!",
        "I once stayed up for 48 hours debugging a single line of code!",
        "I believe that clean code is like a good joke - it needs no explanation!",
        "I started coding when I was just 15 years old!",
        "My dream is to work for a tech company that changes the world!",
        "I collect vintage computer keyboards as a hobby!",
        "I can type at 120 words per minute!",
        "I've contributed to open source projects on GitHub!"
    ];

    // Get DOM elements
    const funFactBtn = document.getElementById('funFactBtn');
    const funFactText = document.getElementById('funFact');

    // Add click event to fun fact button
    if (funFactBtn && funFactText) {
        funFactBtn.addEventListener('click', function() {
            // Get a random fun fact
            const randomIndex = Math.floor(Math.random() * funFacts.length);
            const randomFact = funFacts[randomIndex];
            
            // Display the fun fact with animation
            funFactText.style.opacity = '0';
            
            setTimeout(() => {
                funFactText.textContent = randomFact;
                funFactText.style.opacity = '1';
                funFactText.style.transition = 'opacity 0.5s ease';
            }, 200);
            
            // Add button animation
            funFactBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                funFactBtn.style.transform = 'scale(1)';
            }, 100);
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed header
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
        } else {
            header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });

    // Highlight current section in navigation
    const sections = document.querySelectorAll('section');
    const navMenuItems = document.querySelectorAll('.nav-menu a');

    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navMenuItems.forEach(item => {
            item.style.background = '';
            item.style.borderRadius = '';
            
            if (item.getAttribute('href') === '#' + current) {
                item.style.background = 'rgba(255,255,255,0.3)';
                item.style.borderRadius = '5px';
            }
        });
    });
});