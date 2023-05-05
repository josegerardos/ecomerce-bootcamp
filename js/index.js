
// let Products = [
//     {
// image: "/assets/product-img/img 1 png.png",
// name: 'All round',
// description:'Tabla de surf-mini funboard 6.0 equilibrio perfecto entre velocidad y estabilidad.',
// price:80000,
// date: 13/12/2022,
//     },
// {
// image: "/assets/product-img/img 2 png.png",
// name: 'Touring',
// description:'Tabla de surf soft top 7.2, las más usadas para realizar travesías o largos recorridos.',
// price:82000,
// date: 13/12/2022,
// },
// {
// image: "/assets/product-img/img 3 png.png",
// name: 'Racing',
// description:'Tabla de surf 7.0 evo G-boards 8 pulgadas, presenta soporte y anclaje y por lo tanto permite maniobras rápidas.',
// price:79000,
// date: 13/12/2022,
// },
// {
// image:"/assets/product-img/img 4 jpg.jpg",
// name: 'Yoga',
// description:' Tabla de surf soft shockn pro superwide 7, excelente para la yoga en la playa,son livianas y consta de buena amortiguación.',
// price:69000,
// date: 13/12/2022,
// },
// {
// image:"/assets/product-img/img 5 png.webp",
// name: 'Sub/surf',
// description:'Tabla de surf soft blue pro wide 8 pulgadas, muy versátil gracias a su diseño es la más utilizada para travesías de olas con poca fuerza.',
// price:76000,
// date: 13/12/2022,
// },
// {
// image:"/assets/product-img/img 6 png.png",
// name: 'Windsup',
// description:'Tabla de surf soft 8.0 art mar cristal, sirve para las travesías tipo paddle surf y por su rígidez para otras disciplinas. ',
// price:72000,
// date: 13/12/2022,
// },
// {
// image: "/assets/product-img/img 7 png.png",
// name: 'Desmontables',
// description:'Tabla de surf g-boards 212cm bic sport tahe, o modulares tipo de material polietileno, para obtener velocidad y fluidez.',
// price:68000,
// date: 13/12/2022,
// },
// {
// image:"/assets/product-img/img 8 png.png",
// name:'Evolution',
// description:'Tabla de surf expoxy xtorsion 5.8 x 21.5, adecuada para principiantes ya q ofrecen mas flotabilidad, estabilidad y mayor facilidad para girar.',
// price:70000,
// date: 13/12/2022,
// },
// {
// image:"/assets/product-img/img 9 png.jpg",
// name: 'Longboard',
// description:'#Tabla de surf-mini funboard 6.0 equilibrio perfecto entre velocidad y estabilidad.',
// price:65000,
// date: 13/12/2022,
// },
// {
// image:"/assets/product-img/img 11 png.png",
// name: 'Brewster Traction',
// description:' Lleva tu surf al proximo nivel con el pad antideslizante brewster está compuesto por tres piezas para trabajar con un rango mas amplio de formas de tail.  ',
// price:15000,
// date: 13/12/2022,
// },
// {
// image:"/assets/product-img/img 12 png.png",
// name: ' Creatures pro 6 ',
// description:' Cuerda de pie para tabla de surf de 85,83 pulgadas, brazalete de seguridad ajustable para el tobillo.   ',
// price:7000,
// date: 13/12/2022,
// },
// {
// image:"/assets/product-img/img 13 png.png",
// name: 'Boardbag',
// description:'Bolso de viaje para dos o tres velas con separador, fundas para colgar, mastil, alas, base y fuselaje.',
// price:25000,
// date: 13/12/2022,
// },
// {
// image:"/assets/product-img/img 14 png.webp",
// name: 'Suit volte',
// description:'Adecuado para quienes surfean regularmente y priorizan la flexibilidad y el valor, los trajes volte tienen caracteristicas inigualables.',
// price:30000,
// date: 13/12/2022,
// },
// {
// image:"/assets/product-img/img 15 png.png",
// name: 'Soporte AA-9',
// description:'Acopla la cámara a una tabla de surf, las tiras proporcionadas evitan q la cámara se caiga si se desprende de la montura, viene con soporte de base.',
// price:18000,
// date: 13/12/2022,
// },
// {
// image:"/assets/product-img/img 16 png.png",
// name: 'Camara GoPro surf',
// description:'Perfecto para tablas de surf, de paddle, cubiertas de barcos u otras superficies similares en las que necesites la máxima capacidad de sujeción.',
// price:18000,
// date: 13/12/2022,
// },
// {
// image:"/assets/product-img/img 17 png.png",
// name: 'Funda dry leaves',
// description:'Diseño jaspeado con diferentes motivos, bolsillo exterior con cremallera, rejilla para evacuar el agua.',
// price:65000,
// date: 13/12/2022,
// }

// ];

// localStorage.setItem('Products', JSON.stringify(Products));
const user = JSON.parse(localStorage.getItem('user'))
const cardCcontainer = document.querySelector('#card-container');
const productsLS = JSON.parse(localStorage.getItem('Products')) || [];
const searchBtn = document.querySelector('.product-search__btn');
searchBtn.addEventListener('click', filterProducts);

function renderProducts(products) {
cardCcontainer.innerHTML = '';    
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
                    <a class="card__btn-buy" id="cart-count" href="/pages/order/order.html" onclick="addToOrder(${index})" ${user ? '': 'disabled'}>Comprar</a>
                    </div>
                    <div class="card__btn-container">
                    <a class='card__btn' href="/pages/product-detail/product-detail.html?id=${index}" >Detalle</a>
                    </div>
                    </div>  `
cardCcontainer.appendChild(card);
});

}
renderProducts(productsLS);

 
function filterProducts() {
  const searchInput = document.querySelector('#buscar');
  const searchText = searchInput.value.toLowerCase().trim();

  const filteredProducts = productsLS.filter((product) => {
    const productName = product.name.toLowerCase();
    return productName.includes(searchText);
  });

  renderProducts(filteredProducts);

  const buyButtons = document.querySelectorAll('.product__btn');
  buyButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      addToOrder(index); 
      window.location.href = 'order.html';
    });
  });

  const productsCount = document.querySelector('#cantidad-de-productos');
  productsCount.textContent = filteredProducts.length;
}

