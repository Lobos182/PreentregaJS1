

const PRODUCTO1 = new Producto("zapas niky", 900, 'zapatillas deportivas');
const PRODUCTO2 = new Producto("zapas adidas", 850, 'zapatillas deportivas');
const PRODUCTO3 = new Producto("zapas puma", 899, 'zapatillas deportivas');
const PRODUCTO4 = new Producto("pantalon niky", 500, 'Ropa deportivas');
const PRODUCTO5 = new Producto("pantalon rebook", 700, 'Ropa deportivas');
const PRODUCTO6 = new Producto("short niky", 580, 'Ropa deportivas');

function Producto(titulo, precio, categoria) {
    this.titulo = titulo;
    this.precio = precio;
    this.categoria = categoria;
    this.agregarAlCarrito = function () { console.log(`Agregaste al Carrito`) }
}


function agregarAlCarrito(producto) {
    console.log(producto);
    const textoAMostrar = `Agregas al carrito ${producto.titulo} - $ ${producto.precio}`;
    console.log(textoAMostrar);
}