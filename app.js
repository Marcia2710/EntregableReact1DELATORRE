// lista de productos

const productos = [

// Vinagres de 250ml
//const Vinagres250ml = [

    { id: 1, nombre: "Vinagre de sidra de Manzana organico", precio: 2000, cantidad: 1 }, 

    { id: 2, nombre: "Vinagre de sidra de manzana con canela y jengibre", precio: 3500, cantidad: 1 },

    { id: 3, nombre: "Vinagre de sidra de manzana con romero y jengibre", precio: 3500, cantidad: 1 },

    { id: 4, nombre: "Vinagre de sidra de manzana con Anana, Apio y jengibre", precio: 3500, cantidad: 1 },

    { id: 5, nombre: "Vinagre de sidra de manzana con Arandanos y Guayaba", precio: 3500, cantidad: 1 },

    { id: 6, nombre: "Vinagre de sidra de manzana con Naranja y Melon", precio: 3500, cantidad: 1 },

    { id: 7, nombre: "Vinagre de sidra de manzana con quiwi y Maracuya", precio: 3500, cantidad: 1 },

    { id: 8, nombre: "Vinagre de sidra de manzana con Mango y Maracuya", precio: 3500, cantidad: 1 },

    { id: 9, nombre: "Vinagre de sidra de manzana con Mango y Maracuya", precio: 3500, cantidad: 1 },

  
 // vinagres 500ml
 //const Vinagres500ml = [
    { id: 10, nombre: "Vinagre de sidra de Manzana organico", precio: 6000, cantidad: 1 },

    { id: 11, nombre: "Vinagre de sidra de manzana con canela y jengibre", precio: 8000, cantidad: 1 },

    { id: 12, nombre: "Vinagre de sidra de manzana con romero y jengibre", precio: 8000, cantidad: 1 },

    { id: 13, nombre: "Vinagre de sidra de manzana con Anana, Apio y jengibre", precio: 8000, cantidad: 1 },

    { id: 14, nombre: "Vinagre de sidra de manzana con Arandanos y Guayaba", precio: 8000, cantidad: 1 },

    { id: 15, nombre: "Vinagre de sidra de manzana con Naranja y Melon", precio: 8000, cantidad: 1 },

    { id: 16, nombre: "Vinagre de sidra de manzana con quiwi y Maracuya", precio: 8000, cantidad: 1 },

    { id: 17, nombre: "Vinagre de sidra de manzana con Mango y Maracuya", precio: 8000, cantidad: 1 },

    { id: 18, nombre: "Vinagre de sidra de manzana con Mango y Maracuya", precio: 8000, cantidad: 1 },

    { id: 19, nombre: "Vinagre de sidra de manzana con Mango y Maracuya", precio: 8000, cantidad: 1 },


   //let Vinagres500mlJSON = JSON.stringify(Vinagres500ml);

   //1lt
   //const Vinagres1L = [
    { id: 20, nombre: "Vinagre de sidra de Manzana organico", precio: 12000, cantidad: 1 },

    { id: 21, nombre: "Vinagre de sidra de manzana con canela y jengibre", precio: 15000, cantidad: 1 },

    { id: 22, nombre: "Vinagre de sidra de manzana con romero y jengibre", precio: 15000, cantidad: 1 },

    { id: 23, nombre: "Vinagre de sidra de manzana con Anana, Apio y jengibre", precio: 15000, cantidad: 1 },

    { id: 24, nombre: "Vinagre de sidra de manzana con Arandanos y Guayaba", precio: 15000, cantidad: 1 },

    { id: 25, nombre: "Vinagre de sidra de manzana con Naranja y Melon", precio: 15000, cantidad: 1 },

    { id: 26, nombre: "Vinagre de sidra de manzana con quiwi y Maracuya", precio: 15000, cantidad: 1 },

    { id: 27, nombre: "Vinagre de sidra de manzana con Mango y Maracuya", precio: 15000, cantidad: 1 },

    { id: 28, nombre: "Vinagre de sidra de manzana con Mango y Maracuya", precio: 15000, cantidad: 1 },


   //let Vinagres1LJSON = JSON.stringify(Vinagres1L);


   //2lt
   //const Vinagres2L = [
    { id: 29, nombre: "Vinagre de sidra de Manzana organico", precio: 18000, cantidad: 1 },

    { id: 30, nombre: "Vinagre de sidra de manzana con canela y jengibre", precio: 25000, cantidad: 1 },

    { id: 31, nombre: "Vinagre de sidra de manzana con romero y jengibre", precio: 25000, cantidad: 1 },

    { id: 32, nombre: "Vinagre de sidra de manzana con Anana, Apio y jengibre", precio: 25000, cantidad: 1 },

    { id: 33, nombre: "Vinagre de sidra de manzana con Arandanos y Guayaba", precio: 25000, cantidad: 1 },

    { id: 34, nombre: "Vinagre de sidra de manzana con Naranja y Melon", precio: 25000, cantidad: 1 },

    { id: 35, nombre: "Vinagre de sidra de manzana con quiwi y Maracuya", precio: 25000, cantidad: 1 },

    { id: 36, nombre: "Vinagre de sidra de manzana con Mango y Maracuya", precio: 25000, cantidad: 1 },



   //let Vinagres2LJSON = JSON.stringify(Vinagres2L);

   //5lt
   //const Vinagres5L = [
    { id: 37, nombre: "Vinagre de sidra de Manzana organico", precio: 30000, cantidad: 1 },

    { id: 38, nombre: "Vinagre de sidra de manzana con canela y jengibre", precio: 48000, cantidad: 1 },

    { id: 39, nombre: "Vinagre de sidra de manzana con romero y jengibre", precio: 48000, cantidad: 1 },

    { id: 40, nombre: "Vinagre de sidra de manzana con Anana, Apio y jengibre", precio: 48000, cantidad: 1 },

    { id: 41, nombre: "Vinagre de sidra de manzana con Arandanos y Guayaba", precio: 48000, cantidad: 1 },

    { id: 42, nombre: "Vinagre de sidra de manzana con Naranja y Melon", precio: 48000, cantidad: 1 },

    { id: 43, nombre: "Vinagre de sidra de manzana con quiwi y Maracuya", precio: 48000, cantidad: 1 },

    { id: 44, nombre: "Vinagre de sidra de manzana con Mango y Maracuya", precio: 48000, cantidad: 1 },


   //let Vinagres5LJSON = JSON.stringify(Vinagres5L);


   // estan agregados todos los vinagres con direntes cantidades que tenia en la lista, si llego a agregar mas los agrego aca




   // Encurtidos
   //const Encurtidos500grs = [
    { id: 45, nombre: "Encurtido de pepinillos", precio: 3000, cantidad: 1 },

    { id: 46, nombre: "Encurtido de zanahoria", precio: 2000, cantidad: 1 },

    { id: 47, nombre: "Encurtido de cebolla", precio: 2000, cantidad: 1 },

    { id: 48, nombre: "Encurtido de coliflor", precio: 2500, cantidad: 1 },

    { id: 49, nombre: "Encurtido de remolacha", precio: 2500, cantidad: 1 },

    { id: 50, nombre: "Encurtido de pimiento", precio: 2000, cantidad: 1 },

    { id: 51, nombre: "Encurtido de rábanos", precio: 3000, cantidad: 1 },

    { id: 52, nombre: "Encurtido de zanahoria y jengibre", precio: 3000, cantidad: 1 },

    { id: 53, nombre: "chucrut", precio: 3000, cantidad: 1 },

    { id: 54, nombre: "Encurtido mixto 1 (pepinillos, zanahorias, cebollitas, coliflor y pimientos)", precio: 3000, cantidad: 1 },

    { id: 55, nombre: "Encurtido mixto 2 (repollo pepinos, zanahorias, cebollas, coliflor, pimientos y remolacha)", precio: 3000, cantidad: 1 },


 

   //let EncurtidosJSON = JSON.stringify(Encurtidos); 
   //console.log(EncurtidosJSON);


   // Encurtidos de 1kg 
   //const Encurtidos1kg = [
    { id: 56, nombre: "Encurtido de pepinillos", precio: 5000, cantidad: 1 },

    { id: 57, nombre: "Encurtido de zanahoria", precio: 4000, cantidad: 1 },

    { id: 58, nombre: "Encurtido de cebolla", precio: 4000, cantidad: 1 },

    { id: 59, nombre: "Encurtido de coliflor", precio: 4500, cantidad: 1 },

    { id: 60, nombre: "Encurtido de remolacha", precio: 4500, cantidad: 1 },

    { id: 61, nombre: "Encurtido de pimiento", precio: 4000, cantidad: 1 },

    { id: 62, nombre: "Encurtido de rábanos", precio: 5000, cantidad: 1 },

    { id: 63, nombre: "Encurtido de zanahoria y jengibre", precio: 5000, cantidad: 1 },

    { id: 64, nombre: "chucrut", precio: 5000, cantidad: 1 },

    { id: 65, nombre: "Encurtido mixto 1 (pepinillos, zanahorias, cebollitas, coliflor y pimientos)", precio: 3000, cantidad: 1 },

    { id: 66, nombre: "Encurtido mixto 2 (repollo pepinos, zanahorias, cebollas, coliflor, pimientos y remolacha)", precio: 3000, cantidad: 1 },


   // escabeches
   //const Escabeches500grs = [
    { id: 67, nombre: "Escabeche de pollo", precio: 4000, cantidad: 1 },

    { id: 68, nombre: "Escabeche de pescado", precio: 5000, cantidad: 1 },

    { id: 69, nombre: "Escabeche de verduras", precio: 4000, cantidad: 1 },

    { id: 70, nombre: "Escabeche de cerdo", precio: 7000, cantidad: 1 },

    { id: 71, nombre: "Escabeche de res", precio: 6000, cantidad: 1 },

    { id: 72, nombre: "Escabeche de Viscacha", precio: 9000, cantidad: 1 },

    { id: 73, nombre: "Escabeche de chivito", precio: 7000, cantidad: 1 },

    { id: 74, nombre: "Escabeche de Berenjena", precio: 3000, cantidad: 1 },

    { id: 75, nombre: "Escabeche mixto (pollo y verduras)", precio: 6000, cantidad: 1 },

    { id: 76, nombre: "Escabeche de mariscos", precio: 10000, cantidad: 1 },

    { id: 77, nombre: "Escabeche de conejo", precio: 7000, cantidad: 1 },

    
    

 //let Escabeches500grsJSON = JSON.stringify(Escabeches500grs);


 // escabeches de 1kg
 //const Escabeches1kg = [
    { id: 78, nombre: "Escabeche de pollo", precio: 7000, cantidad: 1 },

    { id: 79, nombre: "Escabeche de pescado", precio: 9000, cantidad: 1 },

    { id: 80, nombre: "Escabeche de verduras", precio: 7000, cantidad: 1 },

    { id: 81, nombre: "Escabeche de cerdo", precio: 12000, cantidad: 1 },

    { id: 82, nombre: "Escabeche de res", precio: 10000, cantidad: 1 },

    { id: 83, nombre: "Escabeche de Viscacha", precio: 15000, cantidad: 1 },

    { id: 84, nombre: "Escabeche de chivito", precio: 12000, cantidad: 1 },

    { id: 85, nombre: "Escabeche de Berenjena", precio: 6000, cantidad: 1 },

    { id: 86, nombre: "Escabeche mixto (pollo y verduras)", precio: 10000, cantidad: 1 },

    { id: 87, nombre: "Escabeche de mariscos", precio: 18000, cantidad: 1 },

    { id: 88, nombre: "Escabeche de conejo", precio: 12000, cantidad: 1 },



   //let Escabeches1kgJSON = JSON.stringify(Escabeches1kg);


   // yogures de 1litro
   //const Yogures1L = [
    { id: 89, nombre: "Yogur natural", precio: 2500, cantidad: 1 },

    { id: 90, nombre: "Yogur de fresa", precio: 3000, cantidad: 1 },

    { id: 91, nombre: "Yogur de durazno", precio: 3000, cantidad: 1 },

    { id: 92, nombre: "Yogur de vainilla", precio: 3000, cantidad: 1 },

    { id: 93, nombre: "Yogur de coco", precio: 3000, cantidad: 1 },

    { id: 94, nombre: "Yogur de limón", precio: 3000, cantidad: 1 },

    { id: 95, nombre: "Yogur de maracuyá", precio: 3000, cantidad: 1 },

    { id: 96, nombre: "Yogur de frutos del bosque", precio: 3000, cantidad: 1 },



   // let yoguresJSON = JSON.stringify(Yogures);

    
   // aca falta agregar los mismos productos en la presentacion de  ( 500ml) los cuales tendran diferente precio y diferente id los ya agregados son de 1lt  (500ml => precio 1700) (1lt => precio 3000) 

   //let Yogures500ml = [

    { id: 97, nombre: "Yogur natural", precio: 1700, cantidad: 1 },

    { id: 98, nombre: "Yogur de fresa", precio: 2000, cantidad: 1 },

    { id: 99, nombre: "Yogur de durazno", precio: 2000, cantidad: 1 },

    { id: 100, nombre: "Yogur de vainilla", precio: 2000, cantidad: 1 },

    { id: 101, nombre: "Yogur de coco", precio: 2000, cantidad: 1 },

    { id: 102, nombre: "Yogur de limón", precio: 2000, cantidad: 1 },

    { id: 103, nombre: "Yogur de maracuyá", precio: 2000, cantidad: 1 },

    { id: 104, nombre: "Yogur de frutos del bosque", precio: 2000, cantidad: 1 },



    //let yogures500mlJSON = JSON.stringify(Yogures500ml);


   //kefir
   //let Kefir1L = [

   { id: 105, nombre: "Kefir natural", precio: 3000, cantidad: 1 },

   { id: 106, nombre: "Kefir con frutillas", precio: 3500, cantidad: 1 },

   { id: 107, nombre: "Kefir con durazno", precio: 3500, cantidad: 1 },

   { id: 108, nombre: "Kefir con kiwi", precio: 3500, cantidad: 1 },

   { id: 109, nombre: "Kefir con anana", precio: 3500, cantidad: 1 },

   { id: 110, nombre: "Kefir con mango", precio: 3500, cantidad: 1 },

   { id: 111, nombre: "Kefir con maracuya", precio: 3500, cantidad: 1 },



   //let Kefir1LJSON = JSON.stringify(Kefir1L);


   //let Kefir500ml = [

   { id: 112, nombre: "Kefir natural", precio: 2000, cantidad: 1 },

   { id: 113, nombre: "Kefir con frutillas", precio: 2500, cantidad: 1 },

   { id: 114, nombre: "Kefir con durazno", precio: 2500, cantidad: 1 },

   { id: 115, nombre: "Kefir con kiwi", precio: 2500, cantidad: 1 },

   { id: 116, nombre: "Kefir con anana", precio: 2500, cantidad: 1 },

   { id: 117, nombre: "Kefir con mango", precio: 2500, cantidad: 1 },

   { id: 118, nombre: "Kefir con maracuya", precio: 2500, cantidad: 1 },

]

   //let Kefir500mlJSON = JSON.stringify(Kefir500ml);



const cargarProductos = (Productos) => {
    let titulo = document.getElementById("titulo");
    let listado = document.getElementById("listado");

    titulo.innerText = "Tienda de Productos Artesanales";

    Productos.forEach((productos) => {
        let div = document.createElement("div");
       div.innerHTML = `
       div
          <span>${productos.id}</span>
          <h3>$${productos.nombre}</h3>
          <p>Precio: $${productos.precio}</p>
       `;

       listado.appendChild(div);
    });

   
}
   
let total = 0;
let eleccion = prompt(
  "Seleccione un producto para agregar al carrito:\n1. Vinagre de sidra de Manzana organico 250ml\n2. Vinagre de sidra de manzana con canela y jengibre 250ml\n3. vinagre de sidra de manzana con romero y jengibre 250ml\n4. Vinagre de sidra de manzana con piña y apio 250ml\n5. Vinagre de sidra de manzana con arandanos y guayaba 250ml\n6. Vinagre de sidra de manzana con naranja y melon 250ml\n7. Vinagre de sidra de manzana con quiwi y maracuya 250ml\n8. Vinagre de sidra de manzana con maracuya 250ml\n9. Vinagre de sidra de manzana organico 500ml\n10. vinagree de sidra de manzana con canela y jengibre 500ml\n11. Vinagre de sidra de manzana con romero y jengibre 500ml\n12. vinagre de sidra de manzana con piña y apio 500ml"
  
  

);
// seguire agregados el resto de los productos a la lista, 


    switch (eleccion) {
        case "1":
            total = total + 12000;
            console.log("Total del carrito es de: $" + total);
            break;
        case "2":
            total = total + 3000;
            console.log("Total del carrito es de: $" + total);
            break;
        case "3":
           total = total + 5000;
            console.log("Total del carrito es de: $" + total);
            break;
        case "4":
           // agregarAlCarrito(4, "Yogur natural", 2500, 1);
            total = total + 2500;
            console.log("Total del carrito es de: $" + total);
            break;
        case "5":
            // agregarAlCarrito(5, "Kefir natural", 3000, 1);
            total = total + 3000;
            console.log("Total del carrito es de: $" + total);
            break;

        case "6":
            
        default:
          console.log("Opción inválida");
            break;
        case "7":
            total = total + 2500;
            console.log("Total del carrito es de: $" + total);
            break;


        case "8":
            total = total + 2500;
            console.log("Total del carrito es de: $" + total);
            break;



       case "9":
           total = total + 2500;
           console.log("Total del carrito es de: $" + total);
           break;

       case "10":
         total = total + 2500;
           console.log("Total del carrito es de: $" + total);
           break;

       case "11":
           total = total + 2500;
           console.log("Total del carrito es de: $" + total);
           break;

       case "12":
        
        

       case "13":
          console.log("Gracias por preferir nuestros productos, tu total es de: $" + total);
            break;  
}

const IVA = 0.21;
 let agregarIVA = precio => precio * IVA; 
 console.log("El IVA es de: $" + calcularIVA(total));
  function calcularIVA(precio) {
   return precio * IVA;
  }


//seguire agregando los productos que entan en la lista, estan agregados los primeros de cada categoria a modo de ejemplo por ahora 

 let continuar = confirm("¿Desea agregar otro producto al carrito? (si)");
 if (continuar) {
  console.log("Gracias por preferir nuestros productos, tu total es de: $" + total);

  while (eleccion !== "13");
}

 
// cuando agregue mas productos cambiar el numero 13
// por el numero que corresponda a salir


//addTocart = (id, nombre, precio, cantidad) => {
//   let producto = { id, nombre, precio, cantidad };
//   carrito.push(producto);
//   console.log(carrito);
//}
//console.log(productos);




// crear cuenta de usuario

let usuario = prompt("Ingresa tu nombre de usuario:");
  let NombreyApellido = prompt("Ingresa tu Nombre y Apellido:");
  let edad = parseInt(prompt("Ingresa tu edad:"));
   parseInt(edad);
   Number.isInteger(edad);
    if (edad >= 18) {
      alert("Bienvenido/a " + usuario + " a nuestra tienda de Productos Artesanales");
    } else {
      alert("Lo siento, debes ser mayor de 18 años para crear una cuenta.");
   }
console.log(typeof edad);
  

 let email = prompt("Ingresa tu direccion de email");
  if (email.includes("@") && email.includes(".")) {
     console.log("Email válido");
   } else {
     if (!email.includes("@") && !email.includes(".")) {
     alert("Email inválido");
   }
   }
   
   // mirar denuevo aca porque en consola se sale null
   
let password = prompt("Ingresa tu contraseña:");
let confirmarPassword = prompt("Confirme su contraseña:");

 if (password === confirmarPassword) {
     alert("Cuenta creada exitosamente");
} else {( password !== confirmarPassword)
      alert("Las contraseñas no coinciden,vueva a intentarlo");
   }




 // Ingreso de usuario
    
    let usuarioIngresado = prompt("Ingrese su nombre de usuario:");
     let passwordIngresada = prompt("Ingrese su contraseña:");

     if (usuarioIngresado === usuario && passwordIngresada === password) {
      console.log("Ingreso exitoso");
     } else if (usuarioIngresado !== usuario || passwordIngresada !== password) {
       alert("Usuario o contraseña incorrectos intentalo nuevamente");
     }

function saludarUsuario(repes) {
   for (let i = 0; i < repes; i++) {
      alert("! Bienvenido/a  " + usuario + " a nuestra tienda de Productos Artesanales !");
   }
}
saludarUsuario(20);







   


//filtros  --- buscar productos por nombre---dejo esto aca para cuando empiese a armar el HTML  
 let filtro = prompt("Ingrese el nombre del producto que desea buscar:");
let resultado = productos.filter((producto) => producto.nombre.toLowerCase( ).includes(filtro.toLowerCase()));
if (resultado.length > 0) {
    console.log("Resultados de la búsqueda:");
    resultado.forEach((producto) => {
        console.log("- " + producto.nombre);
    });
} else {

    console.log("No se encontraron productos que coincidan con la búsqueda.");
}








