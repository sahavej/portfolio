// Mobile Menu
document.getElementById("menuToggle").onclick = function() {
    document.getElementById("navLinks").classList.toggle("show");
};

// Dark Mode
document.getElementById("darkBtn").onclick = function() {
    document.body.classList.toggle("dark");
};

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message Sent Successfully!");
});

// Scroll Animation
window.addEventListener("scroll", function() {
    document.querySelectorAll("section").forEach(sec => {
        let position = sec.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            sec.classList.add("show");
        }
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
