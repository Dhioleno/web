var eventWhell = document.querySelector("# carousel-inner")

if (eventWhell) {
    eventWhell.addEventListener("wheel", event => {
        if (evento.deltaY > 0) {
            console.log(evento.deltaY)
            evento.alvo.scrollBy(800, 0)
        } else {
            console.log(evento.deltaY)
            evento.alvo.scrollBy(-800, 0)
        }
    })
}