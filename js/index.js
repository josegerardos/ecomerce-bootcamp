
// { <article class="card">
// //                 <div class="card__header">
// //                 <img src="/assets/product-img/img 1 png.png" alt="product image" class = 'card__img'></img>
// //                 </div>
// //                 <div class="card__body">
// //                 <div class="card__title">
// //                 All round
// //                 </div>
// //                 <p class="card__description">
// //                 Tabla de surf-mini funboard 6.0 equilibrio perfecto entre velocidad y estabilidad.
// //                 </p>
                
// //                 <div class="card__price">
// //                 $ 80000
// //                 </div>
// //                 <div class="card__date">
// //                 13/12/2022
// //                 </div>
                
// //                 </div>
// //                 <div class="card__footer">
// //                 <div class="card__btn-buy-container">
// //                 <a class="card__btn-buy" href="">Comprar</a>
// //                 </div>
// //                 <div class="card__btn-container">
// //                 <a class="card__btn" href="">Detalle</a>
// //                 </div>
// //                 </div>
// // </article> }


let cards = [
    {
image: "/assets/product-img/img 1 png.png",
name: 'All round',
description:'Tabla de surf-mini funboard 6.0 equilibrio perfecto entre velocidad y estabilidad.',
price:80000,
date: 13/12/2022,
    },
{
image: "/assets/product-img/img 2 png.png",
name: 'Touring',
description:'Tabla de surf soft top 7.2, las más usadas para realizar travesías o largos recorridos.',
price:82000,
date: 13/12/2022,
},
{
image: "/assets/product-img/img 3 png.png",
name: 'Racing',
description:'Tabla de surf 7.0 evo G-boards 8 pulgadas, presenta soporte y anclaje y por lo tanto permite maniobras rápidas.',
price:79000,
date: 13/12/2022,
},
{
image:"/assets/product-img/img 4 jpg.jpg",
name: 'Yoga',
description:' Tabla de surf soft shockn pro superwide 7, excelente para la yoga en la playa,son livianas y consta de buena amortiguación.',
price:69000,
date: 13/12/2022,
},
{
image:"/assets/product-img/img 5 png.webp",
name: 'Sub/surf',
description:'Tabla de surf soft blue pro wide 8 pulgadas, muy versátil gracias a su diseño es la más utilizada para travesías de olas con poca fuerza.',
price:76000,
date: 13/12/2022,
},
{
image:"/assets/product-img/img 6 png.png",
name: 'Windsup',
description:'Tabla de surf soft 8.0 art mar cristal, sirve para las travesías tipo paddle surf y por su rígidez para otras disciplinas. ',
price:72000,
date: 13/12/2022,
},
{
image: "/assets/product-img/img 7 png.png",
name: 'Desmontables',
description:'Tabla de surf g-boards 212cm bic sport tahe, o modulares tipo de material polietileno, para obtener velocidad y fluidez.',
price:68000,
date: 13/12/2022,
},
{
image:"/assets/product-img/img 8 png.png",
name:'Evolution',
description:'Tabla de surf expoxy xtorsion 5.8 x 21.5, adecuada para principiantes ya q ofrecen mas flotabilidad, estabilidad y mayor facilidad para girar.',
price:70000,
date: 13/12/2022,
},
{
image:"/assets/product-img/img 9 png.jpg",
name: 'Longboard',
description:'Tabla de surf-mini funboard 6.0 equilibrio perfecto entre velocidad y estabilidad.',
price:65000,
date: 13/12/2022,
}

];
localStorage.setItem('cards', JSON.stringify(cards) );
const cardCcontainer = document.querySelector('#card-container');
const productsLS = JSON.parse(localStorage.getItem('cards')) || []; 
// console.log(productsLS)
function renderProducts(products) {
cardCcontainer.innerHTML = "";    
products.forEach((product, index) => {

const card = document.createElement('article');
card.classList.add('card');
card.innerHTML = `  <div class="card__header">
                    <img src="${product.image}" alt="${product.name}" class="card__img">
                    </div>
                    <div class="card__body">
                    <div class="card__title">
                    ${product.name}
                    </div>
                    <p class="card__description">
                    ${product.description}
                    </p>
                    <div class="card__price">
                    $ ${product.price}
                    </div>
                    <div class="card__date">
                    13/12/2022
                    </div>
                    </div>
                    <div class="card__footer">
                    <div class="card__btn-buy-container">
                    <a class="card__btn-buy" href="" onclick="addToOrder(${index})">Comprar</a>
                    </div>
                    <div class="card__btn-container">
                    <a class="card__btn" href="/pages/product-detail/product-detail.html?id=${index}">Detalle</a>
                    </div>
                    </div>  `
cardCcontainer.appendChild(card);
});
}
renderProducts(productsLS);
