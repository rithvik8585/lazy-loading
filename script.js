document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll(".lazy");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute("data-src");
                    img.classList.add("loaded"); // Adds fade-in effect
                    observer.unobserve(img);
                }
            });
        },
        { rootMargin: "100px", threshold: 0.1 } // Triggers lazy loading correctly
    );

    lazyImages.forEach((img) => observer.observe(img));
});
