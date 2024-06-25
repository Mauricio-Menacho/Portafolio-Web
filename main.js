const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container img", {
  duration: 1000,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".rainbow-text", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content h3", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__card", {
  ...scrollRevealOption,
  delay: 1000,
});


ScrollReveal().reveal('.about__btns', {
  ...scrollRevealOption,
  delay: 1500,
});



ScrollReveal().reveal(".project__nav", {
  ...scrollRevealOption,
  delay: 350,
});

ScrollReveal().reveal(".technologies", {
  ...scrollRevealOption,
  delay: 600,
});


ScrollReveal().reveal(".swiper", {
  ...scrollRevealOption,
  delay: 950,
});

ScrollReveal().reveal(".project__nav2", {
  ...scrollRevealOption,
  delay: 300,
});


ScrollReveal().reveal(".testimonios-swiper", {
  ...scrollRevealOption,
  delay: 700,
});


ScrollReveal().reveal(".section__header2", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".section__subheader2", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".section__header", {
  ...scrollRevealOption,
  delay: 10,
});

ScrollReveal().reveal(".section__subheader", {
  ...scrollRevealOption,
  delay: 150,
});

ScrollReveal().reveal(".hola1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".hola2", {
  ...scrollRevealOption,
  delay: 900,
});

ScrollReveal().reveal(".hola3", {
  ...scrollRevealOption,
  delay: 1300,
});

ScrollReveal().reveal(".hola4", {
  ...scrollRevealOption,
  delay: 1700,
});

ScrollReveal().reveal(".hola5", {
  ...scrollRevealOption,
  delay: 2100,
});

ScrollReveal().reveal(".hola6", {
  ...scrollRevealOption,
  delay: 2490,
});


// contact container
ScrollReveal().reveal(".contact__image img", {
  ...scrollRevealOption,
  origin: "left",
});

// Inicializa ScrollReveal
ScrollReveal().reveal('.service__grid, .service__card, .service__card4, .service__card5, .service__card6, .service__card7, .service__card8, .service__card9', {
  distance: '100px',
  duration: 1000,
  easing: 'ease-in-out',
  origin: 'bottom',
  interval: 300
});


ScrollReveal().reveal(".testimonios-indicadores", {
  ...scrollRevealOption,
  delay: 1050,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
});


document.querySelector('.project__nav .ri-arrow-left-line').parentNode.addEventListener('click', function() {
  swiper.slidePrev();
});

document.querySelector('.project__nav .ri-arrow-right-line').parentNode.addEventListener('click', function() {
  swiper.slideNext();
});



//Titulo multicolor//

// Función para aplicar el efecto de cambio de color a un elemento
function applyColorChangeEffect(element) {
  const text = element.textContent;
  element.innerHTML = text.split("").map(char => `<span>${char}</span>`).join("");
}


const title1 = document.getElementById("color-changing-title");
const title2 = document.getElementById("color-changing-title2");

applyColorChangeEffect(title1);
applyColorChangeEffect(title2);



//Musica para el gato//

var audio = document.getElementById("miAudio");
var imagen = document.getElementById("imagenClickeable");

imagen.addEventListener("click", function() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

document.addEventListener("DOMContentLoaded", function() {
  var menuBtn = document.getElementById("menu-btn");
  var navLinks = document.querySelector(".nav__links");


  menuBtn.addEventListener("click", function() {

    if (navLinks.style.display === "none" || navLinks.style.display === "") {
      navLinks.style.display = "block"; 
    } else {
      navLinks.style.display = "none"; 
    }
  });


  window.addEventListener("resize", function() {
    if (window.innerWidth >= 768) {
      navLinks.style.display = "block"; // Muestra la lista de enlaces en pantallas grandes
    } else {
      navLinks.style.display = "none"; // Oculta la lista de enlaces en pantallas pequeñas
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Obtén referencias a elementos HTML
  var menuBtn = document.getElementById("check");
  var navLinks = document.querySelector("ul");

  // Agrega un evento de clic al botón de menú (checkbox)
  menuBtn.addEventListener("click", function() {
    if (menuBtn.checked) {
      // Si el menú está abierto y se hace clic en un enlace, ciérralo.
      navLinks.addEventListener("click", function() {
        menuBtn.checked = false;
      });
    }
  });
});



// Inicializa el swiper para testimonios
var testimoniosSwiper = new Swiper('.testimonios-swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Obtén los círculos indicadores
const indicadores = document.querySelectorAll(".testimonios-indicadores li");

// Agrega un evento clic a cada indicador
indicadores.forEach((indicador, index) => {
  indicador.addEventListener("click", () => {
    // Cambia el testimonio activo al hacer clic en un indicador
    testimoniosSwiper.slideTo(index);
  });
});

// Observa el cambio de diapositiva en el swiper de testimonios
testimoniosSwiper.on("slideChange", () => {
  const currentIndex = testimoniosSwiper.activeIndex;
  // Activa el indicador correspondiente
  indicadores.forEach((indicador, index) => {
    if (index === currentIndex) {
      indicador.classList.add("activo");
    } else {
      indicador.classList.remove("activo");
    }
  });
});



//MODO OSCURO


const iconElement = document.getElementById('modo-icono');

iconElement.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    // Cambiar a modo oscuro
    iconElement.classList.remove('ri-moon-line');
    iconElement.classList.add('ri-sun-line');
    iconElement.setAttribute('title', 'Modo Claro');
    localStorage.setItem('theme', 'dark');
  } else {
    // Cambiar a modo claro
    iconElement.classList.remove('ri-sun-line');
    iconElement.classList.add('ri-moon-line');
    iconElement.setAttribute('title', 'Modo Oscuro');
    localStorage.setItem('theme', 'light');
  }
});

// Al cargar la página, ajustar el tema y el título del ícono según el localStorage
window.onload = function() {
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme === 'dark') {
    // Si está en modo oscuro
    document.body.classList.add('dark-mode');
    iconElement.classList.remove('ri-moon-line');
    iconElement.classList.add('ri-sun-line');
    iconElement.setAttribute('title', 'Modo Claro');
  } else {
    // Si está en modo claro (o no hay tema guardado)
    document.body.classList.remove('dark-mode');
    iconElement.classList.remove('ri-sun-line');
    iconElement.classList.add('ri-moon-line');
    iconElement.setAttribute('title', 'Modo Oscuro');
  }
};





const image = document.querySelector('.image-3d');

image.addEventListener('mousemove', e => {
  const rect = image.getBoundingClientRect();
  const xPosition = (e.clientX - rect.left) / rect.width - 0.5;
  const yPosition = (e.clientY - rect.top) / rect.height - 0.5;

  image.style.transform = `
    perspective(1000px)
    rotateX(${yPosition * 10}deg)
    rotateY(${xPosition * 10}deg)
  `;
});

image.addEventListener('mouseleave', () => {
  image.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
});







document.addEventListener("DOMContentLoaded", function() {
  var imagen = document.getElementById("imagenClickeable");
  var rotated = false; // Estado inicial de la rotación

  // Evento
  imagen.addEventListener("click", function() {
    // Alternar la rotación de la imagen
    if (!rotated) {
      imagen.style.transform = "rotate(0deg)";
    } else {
      imagen.style.transform = "rotate(180deg)";
    }
    rotated = !rotated; // Invertir el estado de la rotación
  });
});



const words = ['Mauricio', 'developer'];
    let currentWordIndex = 0;
    let letterIndex = 0;
    const typedText = document.getElementById('typed-text');
    let isDeleting = false;

    function type() {
      const currentWord = words[currentWordIndex];
      if (!isDeleting && letterIndex <= currentWord.length) {
        const nextLetter = document.createElement('span');
        nextLetter.textContent = currentWord.charAt(letterIndex);
        typedText.appendChild(nextLetter);
        letterIndex++;
      } else if (!isDeleting && letterIndex > currentWord.length) {
        isDeleting = true;
        letterIndex = currentWord.length;
      } else if (isDeleting && letterIndex >= 0) {
        typedText.removeChild(typedText.lastChild);
        letterIndex--;
      } else {
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length;
        letterIndex = 0;
        // Elimina todos los elementos span para la próxima palabra
        while (typedText.firstChild) {
          typedText.removeChild(typedText.firstChild);
        }
      }
      setTimeout(type, 240); // Tiempo entre cada letra escrita
    }

    window.onload = function() {
      type(); // Inicia la animación de máquina de escribir al cargar la página
    };


    const titulo = document.getElementById('titulo');

    titulo.addEventListener('click', () => {
      titulo.classList.add('disappear'); // Añade la clase para desaparecer el título

      // Después de un tiempo (por ejemplo, 300 milisegundos), restablece el título
      setTimeout(() => {
        titulo.classList.remove('disappear');
        // Añade la clase para hacer aparecer el título
        titulo.classList.add('appear');
      }, 800);

      // Después de otro tiempo, quita la clase para hacer aparecer el título
      setTimeout(() => {
        titulo.classList.remove('appear');
      }, 1000);
    });


const icons = document.querySelectorAll('.icon');

// Añade event listeners a cada ícono para los eventos 'mouseover' y 'mouseout'
icons.forEach(icon => {
  icon.addEventListener('mouseover', () => {
    icon.style.transform = 'scale(1.2)';
  });

  icon.addEventListener('mouseout', () => {
    icon.style.transform = 'scale(1)';
  });
});

const icons2 = document.querySelectorAll('.icon2');

// Añade event listeners a cada ícono para los eventos 'mouseover' y 'mouseout'
icons2.forEach(icon => {
  icon.addEventListener('mouseover', () => {
    icon.style.transform = 'scale(1.2)';
  });

  icon.addEventListener('mouseout', () => {
    icon.style.transform = 'scale(1)';
  });
});

// Selecciona todos los enlaces del menú de navegación
const navLinks = document.querySelectorAll('nav ul li a');

// Añade event listeners a cada enlace para los eventos 'mouseover' y 'mouseout'
navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.transform = 'scale(1.1)';
  });

  link.addEventListener('mouseout', () => {
    link.style.transform = 'scale(1)';
  });
});


