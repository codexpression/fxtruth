// Wrap every letter in a span
var heroTxt = document.querySelector('.ml2');
heroTxt.innerHTML = heroTxt.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 2950,
    delay: (el, i) => 70*i
  })
