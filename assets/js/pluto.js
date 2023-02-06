const ScrollScene = document.querySelector(".ScrollVideo");
const videoScroller = ScrollScene.querySelector("#VideoScroller");
/*
const ScrollBtn = ScrollScene.querySelector("ring_Content");
const btn = document.querySelector(".btnCont");
*/
//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 24000,
  triggerElement: ScrollScene,
  triggerHook: 0
})
  .setPin(ScrollScene)
  .addTo(controller);
/*
//btn Animation
const BtnAnim = TweenMax.fromTo(ScrollBtn, 3, { opacity: 1 }, { opacity: 0 });

let scene1 = new ScrollMagic.Scene({
  duration: 100,
  triggerElement: btn,
  triggerHook: 0
})
  .addIndicators()
  .setTween(BtnAnim)
  .addTo(controller);
*/
//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;

  videoScroller.currentTime = delay;
}, 41.6);