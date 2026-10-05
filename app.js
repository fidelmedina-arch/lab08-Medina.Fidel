class Producto {
    constructor(nombre, precio, descuento, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.descuento = descuento; // se toma el valor x como x%
        this.imagen = imagen;
    }

    calcularPrecioFinal() {
        const montoDescuento = (this.precio * this.descuento) / 100;
        return this.precio - montoDescuento;
    }
}

const producto1 = new Producto("PC de Escritorio", 900, 10, "img/PC de Escritorio.jpg");
const producto2 = new Producto("Auriculares Bluetooth", 80, 15, "img/Auriculares Bluetooth.jpg");
const producto3 = new Producto("Teclado Mecánico", 120, 15, "img/Teclado Mecánico.jpg");

const catalogo = [producto1, producto2, producto3];

const contenedor = document.getElementById("contenedor-productos");

catalogo.forEach((producto) => {
    
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-producto");

    tarjeta.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p class="precio-texto">Precio: $${producto.precio}</p>
        <button class="btn-descuento">Aplicar Descuento</button>
    `;

    const botonDescuento = tarjeta.querySelector(".btn-descuento");
    const textoPrecio = tarjeta.querySelector(".precio-texto");

    botonDescuento.addEventListener("click", () => {
        const precioRebajado = producto.calcularPrecioFinal();

        textoPrecio.innerHTML = `
            <span style="text-decoration: line-through; color: #888;">Antes: $${producto.precio}</span><br>
            <strong style="color: #28a745;">¡Oferta: $${precioRebajado}! (${producto.descuento}% OFF)</strong>
        `;


        
        botonDescuento.disabled = true;
        botonDescuento.innerText = "Descuento Aplicado";
        botonDescuento.style.backgroundColor = "#6c757d"; 
    });



    contenedor.appendChild(tarjeta);
});
