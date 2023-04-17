const params = window.location.search;
const paramsUrl = new URLSearchParams(params)
const paramsEntries = Object.fromEntries(paramsUrl)
const indice = paramsEntries.id;
const products = JSON.parse(localStorage.getItem('Products'));
const product = products[indice]
document.body.innerHTML = `
                            <h1>${product.name}</h1>
                            <img src = "${product.image}">
                            <p>${product.description}</p>
                            <p>${product.price}</p>
                            `