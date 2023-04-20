// Declarar el id en 0
let id= 0


//creamos la clase producto con el id que ira en aumento (Queria aclarar que mi idea seria cargar una url valida para la img pero para que no se haga tan pesado a la hora de subir decidi dejar sin una imagen)
class Producto{
     constructor(articulo, nombre, precio,img){
        this.id= id++;
        this.articulo= articulo;
        this.nombre= nombre;
        this.precio= precio;
        this.img= img;
     }
}


// definimos algunos productos en stock (es una url ficticia)
let productoEnStock= [
    new Producto(
        "Procesador",
        "Intel i3",
        "50000",
        "url_de_la_imagen1.jpg",
    ),
    new Producto(
        "Procesador",
        "Ryzen 3",
        "45000",
        "url_de_la_imagen2.jpg",
    ),
    new Producto(
        "Mother",
        "Msi Tomahawk",
        "450000",
        "url_de_la_imagen3.jpg",
    ),
    new Producto(
        "Mother",
        "Gigabyte Aorus",
        "550000",
        "url_de_la_imagen4.jpg",
    ),
    new Producto(
        "Memoria RAM",
        "ddr4 3200mhz",
        "30000",
        "url_de_la_imagen5.jpg",
    ),
    new Producto(
        "Memoria RAM",
        "ddr4 3600mhz",
        "34000",
        "url_de_la_imagen6.jpg",
    )

]
// controlamos en el log que esten todos
console.log(productoEnStock)



let mostrarProductos = document.getElementById("mostrarProductos")

//Creamos un for of para que recorra (como aclare mas arriba solo cargo el alt del nombre del producto para que se entienda que es)
for (const info of productoEnStock) { 
    let li = document.createElement("li")
    li.innerHTML = `<b>${info.articulo}</b><br>
                    <b>Modelo:</b> ${info.nombre}<br>
                    <b>Precios:</b>$${info.precio}
                    <img src="${info.img}" alt="${info.nombre}">`
    mostrarProductos.appendChild(li)
 } 

 let agregarProductosEnStock = document.getElementById("agregarProductosEnStock")
console.log(agregarProductosEnStock)

//Funcion para cargar productos

const agregarProductoNuevo = (e) =>{
    e.preventDefault();
    id;
    let producto = document.querySelector(".producto").value;
    let modelo = document.querySelector(".modelo").value;
    let precio = document.querySelector(".precio").value;
    let imagen = document.querySelector(".imagen").value;
  
    let productoNuevo = new Producto(producto, modelo, precio, imagen);

    // Controlamos por consola
    console.log(productoNuevo)

    // Pusheamos
    productoEnStock.push(productoNuevo)

    // Limpiamos el contenedor de productos
    mostrarProductos.innerHTML = "";

    //Creamos un for of para que recorra el arreglo productoEnStock y muestre los productos
    for (const info of productoEnStock) { 
        let li = document.createElement("li")
        li.innerHTML = `<b>${info.articulo}</b><br>
                        <b>Modelo:</b> ${info.nombre}<br>
                        <b>Precios:</b>$${info.precio}
                        <img src="${info.img}" alt="${info.nombre}">`
        mostrarProductos.appendChild(li)
    }
    // Convertir el objeto producto en una cadena JSON
    let productoNuevoJSON = JSON.stringify(productoNuevo);

    // Agregar la cadena JSON al Local Storage
    localStorage.setItem(id, productoNuevoJSON);
    
    // Vaciar el formulario
    e.target.reset();
  };

  //Agregamos el producto al tocar el boton
  agregarProductosEnStock.addEventListener("submit", agregarProductoNuevo)


  //Funcion de filtrado del producto
  function filtrarPorProducto() {
    const tipoProducto = document.getElementById("filtrarPorProducto").value;
    const productosFiltrados = productoEnStock.filter(producto => producto.articulo === tipoProducto);
    
    const mostrarPorTipo = document.getElementById("mostrarPorTipo");
    mostrarPorTipo.innerHTML = "";
    
    for (const producto of productosFiltrados) {
      let li = document.createElement("li");
      li.innerHTML = `<b>${producto.articulo}</b><br>
                      <b>Modelo:</b> ${producto.nombre}<br>
                      <b>Precio:</b> $${producto.precio}<br>
                      <img src="${producto.img}" alt="${producto.nombre}">`;
      mostrarPorTipo.appendChild(li);
    }
  }
  //creo una funcion que recorra el array y envie los datos 
const guardarDatosEnElStorage = (clave, valor) => {localStorage.setItem(clave, valor)}


  for (const info of productoEnStock) {
         guardarDatosEnElStorage(info.id, JSON.stringify(info))
     }

