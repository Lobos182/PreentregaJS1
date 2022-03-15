


const agregarAlCarrito = (nuevoListadoProductos) => {
    carrito.push(nuevoListadoProductos);
};

const carrito = [];

const productos = [
    { id: 1, titulo: "Zapa niky", precio: 900,categoria:"zapatillas deportivas", stock:0 },
    { id: 2, titulo: "zapas adidas", precio: 850,categoria:"zapatillas deportivas", stock:10 },
    { id: 3, titulo: "zapas puma", precio: 700,categoria:"zapatillas deportivas", stock:5},
    { id: 4, titulo: "pantalon niky", precio: 600,categoria:"ropa deportiva", stock:56 },
    { id: 5, titulo: "pantalon rebook", precio: 500,categoria:"ropa deportiva", stock:0 },
    { id: 6, titulo: "short niky", precio: 450,categoria:"ropa deportiva", stock:12 },
];
//mostrando el array completo con todo

productos.forEach((producto)=>{console.log(producto)});


//crear nuevo array sin los productos que no tienen stock
const nuevoListadoProductos = productos.filter((producto)=>producto.stock!=0)
console.log(nuevoListadoProductos);


// Sumar total del carrito solo con los productos con stock
const totalDelCarrito = nuevoListadoProductos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
console.log("Total del carrito:" + totalDelCarrito);







