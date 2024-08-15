const hiddenAreas = document.getElementById('hidden-areas');
const scrollDownArrow = document.getElementById('scroll-down-arrow');

function handleScroll() {
    hiddenAreas.style.display = "block";
    hiddenAreas.scrollIntoView({ behavior: 'smooth' });
}

scrollDownArrow.addEventListener('click', handleScroll);

window.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
        handleScroll();
        scrollDownArrow.style.display = "none";
    }
})