const productos = [
  {
    nombre: "figura de accion",
    precio: 12000,
  },
  {
    nombre: "taza",
    precio: 4000,
  },
  {
    nombre: "manga",
    precio: 6000,
  },
  {
    nombre: "remera",
    precio: 2000,
  },
  {
    nombre: "agenda",
    precio: 4000,
  },
];

let carrito = [];


let seleccion = prompt("Hola! Bienvenido desea realizar alguna compra?");

while (seleccion != "si" && seleccion != "no") {
  alert("Por favor ingrese una de las opciones, si o no");
  seleccion = prompt("Bienvenido ¿Desea realizar alguna compra?");
}

if (seleccion == "si") {
  alert("A continuación la lista de productos");
  let todosLosProductos = productos.map((producto) => producto.nombre + " $" + producto.precio);
  alert(todosLosProductos.join(" - "));
} else if (seleccion == "no") {
  alert("Gracias por su visita! Hasta luego!");
}


while (seleccion != "no") {
  let producto = prompt("¡Agrega un producto a tu carrito!");
  let precio = 0;

  if (
    producto == "figura de accion" ||
    producto == "taza" ||
    producto == "manga" ||
    producto == "remera" ||
    producto == "agenda"
  ) {
    switch (producto) {
      case "figura de accion":
        precio = 12000;
        break;
      case "taza":
        precio = 4000;
        break;
      case "manga":
        precio = 6000;
        break;
      case "remera":
        precio = 2000;
        break;
      case "agenda":
        precio = 4000;
        break;
      default:
        break;
    }
    let unidades = Number(prompt("¿Cuantas unidades de ese producto quieres llevar?"));

    carrito.push({ producto, unidades, precio });
    console.log(carrito);
  } else {
    alert("Ese prodcto no esta disponible");
  }


  seleccion = prompt("¿Quieres seguir comprando?");

  while (seleccion === "no") {
    alert("¡Gracias por la compra! hasta pronto")


    carrito.forEach((carritoFinal) => {
      console.log(
        `"producto:" ${carritoFinal.producto}, "unidades:" ${carritoFinal.unidades}, "total a pagar por producto:" ${carritoFinal.unidades * carritoFinal.precio
        }`
      );
    });
    break;
  }
  }



  const total = carrito.reduce((acum, item) => acum + item.precio * item.unidades, 0);
  console.log(`el total a pagar por su compra es de:  ${total}`);
