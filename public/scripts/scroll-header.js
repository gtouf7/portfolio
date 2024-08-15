window.addEventListener('scroll', function(){
    const header = document.getElementById('header');

    if(window.scrollY > 0) {
        header.classList.add('header-shadow');
    } else {
        header.classList.remove('header-shadow');
    }
});