(function() {
const header = document.querySelector('.page-header');
let lastScroll = 0;

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
    // Scrolling down → hide header
    header.style.transform = 'translateY(-100%)';
    } else {
    // Scrolling up → show header
    header.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
});
})();