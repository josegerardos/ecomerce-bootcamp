// const badgeHTML = document.getElementById('cart-count')


const Products = [
    {
imagen: "/assets/product-img/img 1 png.png",
nombre: 'All round',
descripción:'Tabla de surf-mini funboard 6.0 equilibrio perfecto entre velocidad y estabilidad.',
cantidad:1,
precio:80000,
subtotal:000000,
    },
{
    imagen: "/assets/product-img/img 2 png.png",
    nombre: 'Touring',
    descripción:'Tabla de surf soft top 7.2, las más usadas para realizar travesías o largos recorridos.',
    cantidad:1,
    precio:82000,
    subtotal:000000,
},
{
    imagen: "/assets/product-img/img 3 png.png",
nombre: 'Racing',
descripción:'Tabla de surf 7.0 evo G-boards 8 pulgadas, presenta soporte y anclaje y por lo tanto permite maniobras rápidas.',
cantidad:1,
precio:79000,
subtotal:000000,
},
{
    imagen:"/assets/product-img/img 4 jpg.jpg",
nombre: 'Yoga',
descripción:' Tabla de surf soft shockn pro superwide 7, excelente para la yoga en la playa,son livianas y consta de buena amortiguación.',
cantidad:1,
precio:69000,
subtotal:000000,
},
{
    imagen:"/assets/product-img/img 5 png.webp",
nombre: 'Sub/surf',
descripción:'Tabla de surf soft blue pro wide 8 pulgadas, muy versátil gracias a su diseño es la más utilizada para travesías de olas con poca fuerza.',
cantidad:1,
precio:76000,
subtotal:000000,
},
{
    imagen:"/assets/product-img/img 6 png.png",
nombre: 'Windsup',
descripción:'Tabla de surf soft 8.0 art mar cristal, sirve para las travesías tipo paddle surf y por su rígidez para otras disciplinas. ',
cantidad:1,
precio:72000,
subtotal:000000,
},
{
    imagen: "/assets/product-img/img 7 png.png",
nombre: 'Desmontables',
descripción:'Tabla de surf g-boards 212cm bic sport tahe, o modulares tipo de material polietileno, para obtener velocidad y fluidez.',
cantidad:1,
precio:68000,
subtotal:000000,
},
{
    imagen:"/assets/product-img/img 8 png.png",
    nombre:'Evoluyion',
descripción:'Tabla de surf expoxy xtorsion 5.8 x 21.5, adecuada para principiantes ya q ofrecen mas flotabilidad, estabilidad y mayor facilidad para girar.',
cantidad:1,
precio:70000,
subtotal:000000,
},
{
    imagen:"/assets/product-img/img 9 png.jpg",
nombre: 'Longboard',
descripción:'Tabla de surf-mini funboard 6.0 equilibrio perfecto entre velocidad y estabilidad.',
cantidad:1,
precio:65000,
subtotal:000000,
}

];






const tableBody = document.getElementById('table-body');

function paintTable(){
    tableBody.innerHTML = ''
    Products.forEach((producto) => {
        let imagenSrc = producto.imagen ? producto.imagen : '/assets/product-img/img 10 no product.png'
        const tableRow = 

                        `<td>
                        <img src="${imagenSrc}" width="120" alt="${producto.nombre}">
                        </td>
                        <td>${producto.nombre}</td>
                        <td>${producto.descripción}</td>
                        <td>${producto.cantidad}</td>
                        <td>${producto.precio}</td>
                        <td>${producto.subtotal}</td>
                        </tr>` 
tableBody.innerHTML += tableRow
});

}
paintTable();



























// let order = {
//     products:[
//         {
//             productName:'xbox',
//             cantidad:2,
//             price:1000
//         },
//         {
//             productName:'Swicth',
//             cantidad:1,
//             price:200000
//         }
//     ],


//     user: 'email@gmail.com',
//     total:3000 ,


// } ;   

// esta es para los numeros q se incrementan en before:
// function actualizarBage(){
// badgeHTML.innerHTML = order.products.length
// }

// esta es para el total :
// function actualizarBage(){
//     badgeHTML.innerHTML = order.products.reduce((acc, producto) =>{
//         acc += producto.cantidad;
//     },0)
// }
// actualizarBage()




// agregar elemento:
// function addToOrder(){
//     buscar el producto por indice en el localstorage
// {/* <div class="card__title"> */}
                    // ${product.name}
                    // </div>,

// {/* <div class="card__price"> */}
                    // ${product.price}
                    // </div>,
                    // <div>Cantidad</div>
// }














