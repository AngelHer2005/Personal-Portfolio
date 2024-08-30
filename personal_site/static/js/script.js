console.clear();

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
        markers: false,
      }
    })
    .to(".image-inicio", {
      scale: 2,
      z: 350,
      transformOrigin: "center center",
      ease: "power1.inOut"
    })
    .to(
      ".section.hero",
      {
        scale: 1.1,
        transformOrigin: "center center",
        ease: "power1.inOut"
      },
      "<"
    )
    .to(".element", {
      scrollTrigger: {
        trigger: ".element",
        start: "top center",
        end: "bottom center",
        markers: false,
      },
    })
});

function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".cancel")
    navbar.style.transform = "translateY(-500px)"
}

const texts = [
    "SOFTWARE ENGINEER",
    "AI DEVELOPER",
    "WEB DEVELOPER",
    "BACKEND DEVELOPER",
    "FULLSTACK DEVELOPER"
]

const speed = 100;
const textElements = document.querySelector(".typewriter-text")

let textIndex = 0,
    characterIndex = 0;

function typeWriter(){
    if(characterIndex <texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    }else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    }else{
        textIndex = (textIndex + 1)%texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter;

// Scroll automático
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const startPosition = window.pageYOffset;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 1000;
            let startTime = null;

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const progress = Math.min(timeElapsed / duration, 1); 
                const easing = 0.5 - Math.cos(progress * Math.PI) / 2;

                window.scrollTo(0, startPosition + (distance * easing));

                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                } else {
                    window.scrollTo(0, targetPosition);
                }
            }

            requestAnimationFrame(animation);
        }
    });
});

