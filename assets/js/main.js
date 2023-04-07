let btnOpen = document.querySelector('.btnOpen');
let btnClose = document.querySelector(".btnClose");



/*============menu animation======================*/

let tlAnimation = gsap.timeline({paused: true});


tlAnimation.to(".nav-responsive", {
  y: 0,
  ease: "power1.easeInOut",
  duration: 0.5
})

tlAnimation.from(".btnClose",{
  opacity: 0,
  ease: "power1.out",
  duration: 0.8
})

tlAnimation.from(".links-cta-container ul li a", {
  y: 50,
  ease: "power1.inout",
  duration: 0.5,
  stagger: 0.1
})


tlAnimation.from(".footer-nav", {
  opacity: 0,
  ease: "power1.easeInout",
  duration: 1
})

function OpenMenuF (){
  tlAnimation.play();
}

function CloseMenuF (){
  tlAnimation.reverse();
}




var texto = document.getElementById("ti1");
var contenido = texto.textContent;
var nuevoContenido = "";
for (var i = 0; i < contenido.length; i++) {
  nuevoContenido += "<span>" + contenido.charAt(i) + "</span>";
}


texto.innerHTML = nuevoContenido;

var texto2 = document.getElementById("ti2");
var contenido2 = texto2.textContent;
var nuevoContenido2 = "";

for (var i2 = 0; i2 < contenido2.length; i2++) {
  nuevoContenido2 += "<span>" + contenido2.charAt(i2) + "</span>";
}

texto2.innerHTML = nuevoContenido2;



let tl = gsap.timeline();


gsap.from(".logo span, .info-header p span, .link a", {
  y: "100%",
  ease: "power3.easeInOut",
  duration: 1,
  stagger: 0.05
})

gsap.from("#ti1 span, #ti2 span", 0.8, {
  y: "100%",
  ease: Power3.easeInOut,
  duration: 1,
  stagger: 0.05,
  delay: 0.4
});

gsap.to(".wrapper-img", {
  y: "-100%",
  ease: Power2.easeIn,
  duration: 1,
  delay: 1
})

/*tl.from("#ti2 span", {
  y: "100%",
  ease: Expo.easeInOut,
  duration: 1,
  stagger: 0.05,
});*/
