//chef navbar-background color change when the page is active
function setActive() {
    aObj = document.getElementById('sidenav').getElementsByClassName('navlink');
    for (i = 0; i < aObj.length; i++) {
        if (document.location.href.indexOf(aObj[i].href) >= 0) {
            aObj[i].className = 'active';
        }
    }
}
window.onload = setActive();


//Contact page- form submit
const handle_form_submission = () => {
    alert('Message sent it.');
    return false; //do not submit the form
}


//AOS animation call
AOS.init({
    duration: 1200,
})