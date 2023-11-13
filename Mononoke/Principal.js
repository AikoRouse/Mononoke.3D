import tienda from "./catalogo.js"

const contenedor = document.getElementById("contendor")

contenedor.innerHTML="Hola Tienda"

let contenidoHTML = '' ;

tienda.articulos.array.forEach((articulo) => {

    contenidoHTML += ' <article>
    <Img src="$(articulo.imagen)" alt="">
    <h2>$(articulo.titulo)</h2>
    <span>$ $(articulo.precio)</span>
    </article> '

})

contenedor.innerHTML =  contenidoHTML