                // <article class="card">
                // <div class="card__header">
                // <img src="/assets/product-img/img 1 png.png" alt="product image" class="card__img">
                // </div>
                // <div class="card__body">
                // <div class="card__title">
                // All round
                // </div>
                // <p class="card__description">
                // Tabla de surf-mini funboard 6.0 equilibrio perfecto entre velocidad y estabilidad.
                // </p>
                
                // <div class="card__price">
                // $ 80000
                // </div>
                // <div class="card__date">
                // 13/12/2022
                // </div>
                
                // </div>
                // <div class="card__footer">
                // <div class="card__btn-buy-container">
                // <a class="card__btn-buy" href="">Comprar</a>
                // </div>
                // <div class="card__btn-container">
                // <a class="card__btn" href="">Detalle</a>
                // </div>
                // </div>
                // </article>
                
const cardCcontainer = document.querySelector('#card-container');
const productsLS = JSON.parse(localStorage.getItem('Products')) || []; 
console.log(productsLS)
function renderizarProductos(products) {
cardCcontainer.innerHTML = "";    
products.forEach((product,index) => {

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
renderizarProductos(productsLS);
