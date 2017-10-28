var planet = document.querySelectorAll(".planet");
var blurb = document.querySelector("#blurb");
var jump = window.innerWidth*45;

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

planet.forEach(function(p){
    p.addEventListener("click", function(event){
        if (event.target.id.includes("sun")) {
            if (window.scrollX == 0) {
                scroll(jump);
                console.log(event);
            } else {
                scroll(-jump);
            }
        } else {
            
            if (blurb.firstChild)
                blurb.removeChild(blurb.firstChild);
            var content = event.target.firstElementChild.cloneNode(true);
            blurb.appendChild(content);
            blurb.style.zIndex = 1;
        }
    });
});

function close(event){
    console.log(event);
    blurb.removeChild(blurb.firstChild);
    blurb.style.zIndex = -1;
}

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
    console.log(event);
    if (event.target.nodeName === "BUTTON"){
        blurb.removeChild(blurb.firstChild);
        blurb.style.zIndex = -1;
    }
}