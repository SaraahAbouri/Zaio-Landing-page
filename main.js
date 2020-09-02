$(function(){
    $(index.html).scroll(function(){
        var $nav = $("nav-fixed-top");
        $nav.toggleClass('scrolled', $("nav-fixed-top").scrollTop() > $nav.height());
    });
});

function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "nav-bar" ) {
        x.className += " responsive";
    } else {
        x.className = "nav-bar"
    }

}