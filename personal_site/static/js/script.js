document.addEventListener('DOMContentLoaded', () => {
    function hamburg() {
        const navbar = document.querySelector(".dropdown");
        navbar.style.transform = "translateX(0)";
    }

    function cancel() {
        const navbar = document.querySelector(".dropdown");
        navbar.style.transform = "translateX(-500px)";
    }

    const dropdownLinks = document.querySelectorAll('.dropdown .links a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function () {
            cancel();
        });
    });

    document.querySelector('.hamburg').addEventListener('click', hamburg);
    document.querySelector('.cancel').addEventListener('click', cancel);

    const navLinks = document.querySelectorAll('nav a');
    const allLinks = [...navLinks, ...dropdownLinks];

    allLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.closest('.dropdown')) {
                cancel();
            }
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

    // Función para actualizar la clase activa
    function updateActiveLink() {
        const scrollPosition = window.pageYOffset;
        allLinks.forEach(link => {
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const targetHeight = targetElement.offsetHeight;

                if (scrollPosition >= targetPosition - 50 && scrollPosition < targetPosition + targetHeight - 50) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    window.addEventListener('load', updateActiveLink); // Actualiza el estado activo al cargar la página

    function efectoHabilidades(){
        var skills = document.getElementById("skills");
        var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
        if(distancia_skills >= 300){
            let habilidades = document.getElementsByClassName("progreso");
            habilidades[0].classList.add("javascript");
            habilidades[1].classList.add("htmlcss");
            habilidades[2].classList.add("photoshop");
            habilidades[3].classList.add("wordpress");
            habilidades[4].classList.add("drupal");
            habilidades[5].classList.add("comunicacion");
            habilidades[6].classList.add("trabajo");
            habilidades[7].classList.add("creatividad");
            habilidades[8].classList.add("dedicacion");
            habilidades[9].classList.add("javascript");
        }
    }

    document.getElementById("downloadCV").addEventListener("click", function() {
            var pdfUrl = "https://github.com/AngelHer2005/Personal-Portfolio/tree/main/personal_site/static/img/CV_ANGEL_PATRICIO.pdf";
            
            if (pdfUrl) {
                window.open(pdfUrl, '_blank');
            } else {
                console.error("La URL del PDF no es válida.");
            }
        }
    );

    window.onscroll = function(){
        efectoHabilidades();
    } 
});