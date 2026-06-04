document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile Menu Drawer Controller
    const toggleBtn = document.getElementById("mobile-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener("click", () => {
            toggleBtn.classList.toggle("open");
            navMenu.classList.toggle("open");
        });
    }

    // 2. Slow Scroll Entry Observer Loop
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.05, rootMargin: "0px 0px -20px 0px" });
    
    revealElements.forEach(el => observer.observe(el));

    setTimeout(() => {
        revealElements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight) {
                el.classList.add("active");
            }
        });
    }, 100);

    // 3. Dynamic Scroll-Guided Ambient Background
    window.addEventListener("scroll", () => {
        const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        
        // Morphs seamlessly from dark navy into deep indigo accents as you travel down pages
        let r = Math.round(11 + (scrollPercent * 14));  
        let g = Math.round(15 + (scrollPercent * 8));   
        let b = Math.round(25 + (scrollPercent * 15));  

        document.body.style.background = `radial-gradient(circle at 50% 30%, rgb(${r}, ${g}, ${b}), #0b0f19 70%)`;
    });
    
    window.dispatchEvent(new Event('scroll'));
});