const boton = document.getElementById("abrirCarta");
const inicio = document.getElementById("inicio");
const carta = document.getElementById("carta");
const mensaje = document.getElementById("mensaje");
const firma = document.getElementById("firma");
const youtubePlayer = document.getElementById("youtubePlayer");

const texto = `Feliz cumple Brooo.

Te quiero, hermano. Un montón.

Quería que el resto de los días sean especiales.

Cada vez que nos saludamos luego de no vernos se siente como un "wuaaaaauh".

No sé... una sensación fresca.

Esta carta simplemente es para recordarte que tenés a alguien a quien contarle todo lo que quieras y siempre voy a ser sincero.

Para darte de mí, lo mejor.

Así no creces solo.

Tu hermano siempre va a estar.`;

let posicion = 0;

boton.addEventListener("click", () => {
    inicio.classList.add("oculto");
    carta.classList.remove("oculto");

    // La carga del reproductor ocurre después del click,
    // lo que ayuda con las políticas de reproducción del navegador.
    youtubePlayer.src =
        "https://www.youtube.com/embed/YxIiPLVR6NA?autoplay=1&loop=1&playlist=YxIiPLVR6NA&rel=0";

    escribirTexto();
    crearCorazones();
});

function escribirTexto() {
    if (posicion < texto.length) {
        mensaje.textContent += texto.charAt(posicion);
        posicion++;
        setTimeout(escribirTexto, 32);
    } else {
        firma.classList.remove("oculto-firma");
    }
}

function crearCorazones() {
    setInterval(() => {
        const corazon = document.createElement("div");
        corazon.className = "corazon";
        corazon.textContent = Math.random() > 0.25 ? "❤️" : "✨";
        corazon.style.left = `${Math.random() * 100}vw`;
        corazon.style.fontSize = `${14 + Math.random() * 18}px`;
        document.body.appendChild(corazon);

        setTimeout(() => corazon.remove(), 5600);
    }, 650);
}
