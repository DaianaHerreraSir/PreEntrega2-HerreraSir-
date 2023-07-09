const listaDeProductos =[
    {nombre: "Anillo Circulo Micropave", precio: 1240},
    
    {nombre: "Anillo Circulos Fucsia",   precio: 1340},
    
    {nombre: "Anillo Circulos Rosa",     precio: 1250},
    
    {nombre: "Anillo Circulos Verde",    precio: 1490},

    {nombre: "Anillo Corazón Calado",    precio: 1600}
]

let carrito = [];

let seleccion = prompt ("Desea comprar algun producto? si o no?")

while( seleccion !== "si" && seleccion !== "no"){
    alert("Por favor ingrese si o no")
    seleccion = prompt ("Desea comprar algun producto? si o no?")
}

if(seleccion === "si"){
    alert( "Esta es nuestra lista de productos")
    let LosProductos = listaDeProductos.map((producto)=> producto.nombre + " " + "$" + producto.precio  
    );
alert(LosProductos.join( "\n"))}
else {
    alert ("Gracias por su compra")
}

while(seleccion !== "no"){
    let producto = prompt("Que producto desea agregar a tu carrito?")
    let precio = 0

if( producto === "Anillo Circulo Micropave" || producto === "Anillo Circulos Fucsia" ||
producto === "Anillo Circulos Rosa" || producto === "Anillo Circulos Verde" ||
producto === "Anillo Corazón Calado" ){
switch(producto){
    case "Anillo Circulo Micropave":
        precio = 1240;
        break;
    case "Anillo Circulos Fucsia":
        precio = 1340;
        break;
    case "Anillo Circulos Rosa":
        precio = 1250;
        break;
    case "Anillo Circulos Verde":
        precio = 1490;
        break;
    case "Anillo Corazón Calado":
        precio = 1600;
        break;
    default: 
        break;
}
let cantidades = Number(prompt ("Cuantas cantidades desea comprar?"))

carrito.push ({producto, cantidades, precio})

} else {
    alert( "Ese producto no esta en la tienda")
}
seleccion = prompt("Desea seguir comprando?")

    if (seleccion === "no"){
        alert ("Gracias por su compra. Aqui el detalle de su compra:")
        const detalleCompra = carrito.map((ProductoTotal) => {
            const totalPagar = ProductoTotal.cantidades *ProductoTotal.precio;
            return `Producto: ${ProductoTotal.producto},
                    Cantidades: ${ProductoTotal.cantidades}, 
                    Total a pagar: ${totalPagar}\n`;
        });
        alert(detalleCompra);
        break;
    }
}

const costoTotal = carrito.reduce((total, ProductoTotal) => total + ProductoTotal.cantidades * ProductoTotal.precio, 0);
alert(`El total final de su compra es: $${costoTotal}`);

