
// var contactFan = document.querySelector(".contact.fan");
// var aboutFan = document.querySelector(".about.fan");
var planet = document.querySelectorAll(".planet");

planet.forEach(function(p){
    p.addEventListener("mouseenter", function(event){
        var flip = event.target.parentNode;
        flip.style.transform = "rotate(180deg)";
    });
});

planet.forEach(function(p){
    p.addEventListener("mouseout", function(event){
        var flip = event.target.parentNode;
        flip.style.transform = "rotate(0deg)";
    });
});