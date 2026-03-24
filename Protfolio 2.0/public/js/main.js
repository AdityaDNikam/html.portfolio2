document.addEventListener('DOMContentLoaded', () => {
    // 1. Typewriter Effect Setup
    const typewriterElement = document.getElementById('typewriter-text');
    if (typewriterElement) {
        const phrases = [
            "MERN Stack Developer.",
            "Backend Engineer.",
            "Creative Problem Solver.",
            "AI/ML Enthusiast."
        ];

        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentPhrase = phrases[phraseIndex];

            if (isDeleting) {
                typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentPhrase.length) {
                typeSpeed = 2000; // Pause at end of word
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typeSpeed = 500; // Pause before typing new word
            }

            setTimeout(type, typeSpeed);
        }

        // Start typing effect
        setTimeout(type, 1000);
    }

    // 2. Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    document.querySelectorAll('.fade-up, .fade-in').forEach(element => {
        observer.observe(element);
    });

    // 3. Navbar Scrolled State
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
            navbar.classList.replace('py-4', 'py-2');
        } else {
            navbar.classList.remove('shadow-lg');
            navbar.classList.replace('py-2', 'py-4');
        }
    });
});
