
const params = window.location.search;
const paramsUrl = new URLSearchParams(params)
const paramsEntries = Object.fromEntries(paramsUrl)
// console.log(paramsEntries)
const indice = paramsEntries.id;
// console.log("indice",indice)
const products = JSON.parse(localStorage.getItem("Products"));
// console.log("products", products)
const product = products[indice]
document.body.innerHTML =   ` <div class="container">
                                <div class="detail">
                                <div class="detail__image">
                                <img src="${product.image}" alt="${product.name}" class="card__img">
                                </div>
                                <div class="detail__info">
                                <div class="detail__name">
                                ${product.name}
                                </div>
                                <div class="detail__price">
                                $ ${product.price}
                                </div>
                                <div class="detail__date">
                                13/12/2022
                                </div>
                                <button class="detail__btn" id='comprar-ahora-btn' " >Comprar ahora</button>
                                </div>
                                <p class="detail__description">
                                ${product.description}
                                </p>
                                </div>
                                </div>
                                `
                            
const comprarAhoraBtn = document.getElementById('comprar-ahora-btn');                             
comprarAhoraBtn.addEventListener('click', () => {
addToOrder(indice);
window.location.href = '/pages/order/order.html';
});










