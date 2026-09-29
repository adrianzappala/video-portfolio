```javascript
// ========================================
// JAVASCRIPT DEL PORTFOLIO
// ========================================



// ========================================
// NAVEGACIÓN
// ========================================

// Seleccionamos todos los enlaces del menú.

const enlaces = document.querySelectorAll("nav a");


enlaces.forEach(function(enlace) {

    enlace.addEventListener("click", function() {

        console.log(
            "Navegando a:",
            enlace.textContent.trim()
        );

    });

});



// ========================================
// MENSAJE DE CONTACTO
// ========================================

// Seleccionamos el enlace del email.

const email = document.querySelector(".contact-email");


if (email) {

    email.addEventListener("click", function() {

        console.log(
            "El usuario hizo clic en el email."
        );

    });

}



// ========================================
// EFECTO AL HACER SCROLL
// ========================================

// Seleccionamos el navbar.

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", function() {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});
```
