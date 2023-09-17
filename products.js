document.addEventListener("DOMContentLoaded", function () {
    const botonesComprar = document.querySelectorAll(".boton-comprar");
    const listaCarrito = document.getElementById("lista-carrito");
    const totalCarrito = document.getElementById("total-carrito");
 
    let carrito = [];
 
    // Función para actualizar el carrito
    function actualizarCarrito() {
        listaCarrito.innerHTML = "";
        let total = 0;
        carrito.forEach((producto) => {
            const itemCarrito = document.createElement("li");
            itemCarrito.innerHTML = `
                ${producto.nombre} - $${producto.precio}
                <button class="boton-quitar" data-producto="${producto.nombre}">Quitar</button>
            `;
            listaCarrito.appendChild(itemCarrito);
            total += producto.precio;
        });
        totalCarrito.textContent = total;
    }
 
    // Función para agregar producto al carrito
    function agregarProductoAlCarrito(nombre, precio) {
        carrito.push({ nombre, precio });
        actualizarCarrito();
    }
 
    // Evento de clic en botones de compra
    botonesComprar.forEach((boton) => {
        boton.addEventListener("click", () => {
            const producto = boton.getAttribute("data-producto");
            let precio = 0;
 
            if (producto === "remera") {
                precio = 20;
            } else if (producto === "taza") {
                precio = 10;
            }
 
            agregarProductoAlCarrito(producto, precio);
        });
    });
 
    // Evento de clic en botones para quitar productos del carrito (opcional)
    listaCarrito.addEventListener("click", (event) => {
        if (event.target.classList.contains("boton-quitar")) {
            const producto = event.target.getAttribute("data-producto");
            carrito = carrito.filter((item) => item.nombre !== producto);
            actualizarCarrito();
        }
    });
 });
 