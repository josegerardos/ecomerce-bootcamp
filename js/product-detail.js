const params = window.location.search;
const paramsUrl = new URLSearchParams(params)
const paramsEntries = Object.fromEntries(paramsUrl)
const indice = paramsEntries.id;
const products = JSON.parse(localStorage.getItem('Products'));
const product = products[indice]
document.body.innerHTML = `<p>${JSON.stringify(product)}</p>

                            <img src = "${product.image}">`