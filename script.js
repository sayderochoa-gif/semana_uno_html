document.addEventListener("DOMContentLoaded", function () {

    const banner = document.getElementById("bienvenida");
    if (banner) {
        banner.classList.remove("oculto");
    }


    const btnCerrar = document.getElementById("btn-cerrar-bienvenida");
    if (btnCerrar) {
        btnCerrar.addEventListener("click", function () {
            banner.classList.add("oculto");
        });
    }

    const btnCambiarTexto = document.getElementById("btn-cambiar-texto");
    const parrafoBio = document.getElementById("parrafo-bio");

    const textoOriginal = parrafoBio ? parrafoBio.textContent : "";
    const textoAlternativo =
        "Me apasiona construir soluciones digitales que tengan impacto real. " +
        "Estoy aprendiendo desarrollo web con HTML, CSS y JavaScript, y disfruto " +
        "cada reto que me acerca más a ser un desarrollador completo. " +
        "¡Gracias por visitar mi portafolio!";

    let textoExtendido = false;

    if (btnCambiarTexto && parrafoBio) {
        btnCambiarTexto.addEventListener("click", function () {
            if (!textoExtendido) {
                parrafoBio.textContent = textoAlternativo;
                btnCambiarTexto.textContent = "Volver al texto original";
            } else {
                parrafoBio.textContent = textoOriginal;
                btnCambiarTexto.textContent = "Leer más sobre mí";
            }
            textoExtendido = !textoExtendido;
        });
    }


    const btnToggle = document.getElementById("btn-toggle-proyectos");
    const contenedorProyectos = document.getElementById("contenedor-proyectos");

    if (btnToggle && contenedorProyectos) {
        btnToggle.addEventListener("click", function () {
            const estaOculto = contenedorProyectos.classList.toggle("oculto");
            btnToggle.textContent = estaOculto ? "Mostrar proyectos" : "Ocultar proyectos";
        });
    }

});

