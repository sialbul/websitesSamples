//Contact page- form submit
const handle_form_submission = () => {
    alert('Message sent it.');
}

//AOS animation call
AOS.init({
    duration: 1200,
})

//change the font size
$("#fader").on("input", function() {
    $('#content').css("font-size", $(this).val() + "px");
});

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