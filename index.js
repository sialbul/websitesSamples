function setActive() {
    aObj = document.getElementById('sidenav').getElementsByClassName('navlink');
    for (i = 0; i < aObj.length; i++) {
        if (document.location.href.indexOf(aObj[i].href) >= 0) {
            aObj[i].className = 'active';
        }
    }
}

window.onload = setActive();


const handle_form_submission = () => {
    alert('Message sent it.');
    return false; //do not submit the form
}

showSlides();

const showSlides = () => {
    let i;
    let slideshow = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slideshow.length; i++) {
        slideshow[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slideshow.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideshow[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}