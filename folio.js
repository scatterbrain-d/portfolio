var container = document.querySelector(".container");
var planet = document.querySelectorAll(".planet");
var blurb = document.querySelector("#blurb");
var left = true;

planet.forEach(function(p){
    p.addEventListener("mouseenter", function(event){
        var flip = event.target.parentNode;
        flip.style.transform = "rotate(180deg)";
        if (event.target.id.includes("sun")) return;
        else {
            var flag = event.target.offsetParent.nextElementSibling;
            flag.style.transform = "translateY(-65%)";
        }
    });
});

planet.forEach(function(p){
    p.addEventListener("mouseout", function(event){
        var flip = event.target.parentNode;
        flip.style.transform = "rotate(0deg)";
        if (event.target.id.includes("sun")) return;
        else {
            var flag = event.target.offsetParent.nextElementSibling;
            flag.style.transform = "translateY(0%)";
        }
    });
});

planet.forEach(function(p){
    p.addEventListener("click", function(event){
        if (event.target.id.includes("sun")) {
            if (left)
                if (window.innerWidth < window.innerHeight)
                    container.style.transform = "translateX(-80%)";
                else
                    container.style.transform = "translateX(-50%)";
            else
                container.style.transform = "translateX(0%)";
            left = !left;
        } else {
            
            if (blurb.firstChild)
                blurb.removeChild(blurb.firstChild);
            var content = event.target.firstElementChild.cloneNode(true);
            blurb.appendChild(content);
            blurb.style.zIndex = 1;
        }
    });
});

blurb.addEventListener("click", close);

function scroll(distance){
                    var frameStep = distance/4000;
                    var tally = window.scrollX;
                    function step(){
                        tally += frameStep;
                        window.scrollTo(tally, 0);
                        if (tally <= Math.abs(distance))
                        window.requestAnimationFrame(step);
                    }
                    window.requestAnimationFrame(step);
                    console.log("scroll");
                }
                
function close(event){
    if (event.target.className.includes("close")){
        blurb.removeChild(blurb.firstChild);
        blurb.style.zIndex = -1;
    }
}