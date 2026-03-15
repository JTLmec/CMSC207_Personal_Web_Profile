document.addEventListener('DOMContentLoaded', function() {
    // Fun facts array
    const funFacts = [
        "I have been playing drums in church since I was 16 years old! up to now",
        "I've been to Taiwan 3 times but Everytime I visit Taiwan I go to different provinces!",
        "The best Ramen for me in PH is Yushoken Ramen",
        "I don't know how to swim",
        "I learned to crochet only during the pandemic",
        "I'm not yet fully transitioned in tech space but slowly after DCS maybe I'll have my shot",
        "My dream is to work for a tech company that changes the world! - well I think I'm already employed at it now",
        "I collect my broken drumsticks and plan to create a resin table out of it",
        "I have 2 pomeranians named Rocket and Bisket and 2 cats named Garfield and Oreo",
        "I stopped listening to loud music when I reached my 30s.",
        "The best Ramen I tried in Japan was blue bucket Ramen a small shop in Fukuoka but ohhh the broth and noodles! It was heavenly!",
        "I spent 3 weeks in Japan going to different prefectures, I've been to Fukuoka, Hiroshima, Osaka, Kyoto, Tokyo, and Okinawa, I can't wait to go back!"
    ];

    // Get DOM elements
    const funFactBtn = document.getElementById('funFactBtn');
    const funFactText = document.getElementById('funFact');

    // Add click event to fun fact button
    if (funFactBtn && funFactText) {
        funFactBtn.addEventListener('click', function() {
            console.log('Button clicked!');
            
            // Add click animation class
            funFactBtn.classList.add('clicked');
            
            // Simple glitter effect (without complex particles)
            funFactBtn.style.boxShadow = '0 0 30px rgba(255, 105, 180, 0.8)';
            
            // Get a random fun fact
            const randomIndex = Math.floor(Math.random() * funFacts.length);
            const randomFact = funFacts[randomIndex];
            
            console.log('Random fact:', randomFact);
            
            // Hide current text
            funFactText.style.opacity = '0';
            
            // Show new fact with animation
            setTimeout(() => {
                funFactText.textContent = randomFact;
                funFactText.style.opacity = '1';
                funFactText.style.transition = 'opacity 0.5s ease';
            }, 300);
            
            // Remove click animation class
            setTimeout(() => {
                funFactBtn.classList.remove('clicked');
                funFactBtn.style.boxShadow = '0 5px 15px rgba(255, 105, 180, 0.3)';
            }, 600);
        });
    } else {
        console.error('Fun fact elements not found!');
        console.error('Button:', funFactBtn);
        console.error('Text:', funFactText);
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                
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