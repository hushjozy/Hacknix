var reveals = document.querySelector(".higher-ind");
var reveals2 = document.querySelector(".higher-ind2");
var vidPlay = document.getElementById("vid-play");
var landTwoS = document.getElementById("landTwo");
var onVids = document.getElementById("onVid");
var overlayVid= document.getElementById("overlay-vid");
var togBg= document.getElementById("tog-bg");


let zoom = 1;
const zoomSpeed= 1;
vidPlay.style.display = "none";
onVids.style.display = "none";

// function reveal2() {
//   if(e.deltaY > 0){
//     reveals2.style.transform =`scale(${zoom + zoomSpeed})`;
//     reveals2.style.opacity=0;
//   }else{
//         reveals2.style.transform =`scale(${zoom -zoomSpeed})`;
//         reveals2.style.opacity=1;
//         reveals2.style.marginRight="1vw";
//         reveals2.style.marginTop="-31vh";
//
//   }
// }

async function reveal(event) {
  var y= event.deltaY;
var rectTop = reveals.getBoundingClientRect().top;
var rectTop2 = reveals2.getBoundingClientRect().top;
console.log();
  if( y > 0){
    reveals.style.transform =`scale(${zoom + zoomSpeed})`;
    reveals.style.opacity=0;
    reveals2.style.transform =`scale(${zoom + zoomSpeed})`;
    reveals2.style.opacity=0;
  }else{
        reveals.style.transform =`scale(${zoom -zoomSpeed})`;
        reveals.style.opacity=1;
        reveals.style.marginLeft="25vw";
        reveals.style.marginTop="-31vh";
        reveals2.style.transform =`scale(${zoom -zoomSpeed})`;
        reveals2.style.opacity=1;
        reveals2.style.marginLeft="25vw";
        reveals2.style.marginTop="-31vh";
  }
setTimeout(function(){

  vidPlay.play()
  overlayVid.style.display = "block";
  vidPlay.style.display = "block";
    if (onVids.style.display == "none"){
         onVids.style.display = "block";
         onVids.style.opacity = 0;
         onVids.style.transform = "scale(0)";
         window.setTimeout(function(){
           onVids.style.opacity = 1;
           onVids.style.transform = "scale(1)";
         }, 700)

    }
   }, 4000)
   setTimeout(function(){

     togBg.style.display = "block";
        vidPlay.style.display = "none";
          if (landTwoS.style.display = "none") {

            landTwoS.style.display = "block";

            landTwoS.style.opacity = 0;
            window.setTimeout(function(){
              document.querySelector('#landTwo').scrollIntoView();

              landTwoS.style.opacity = 1;
            },1)
          }

      }, 10500)
};
// elementTop < windowHeight - elementVisible
