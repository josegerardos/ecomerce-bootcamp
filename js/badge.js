
let badgeHTML = document.getElementById('cart-count');

function actualizarBadge() {
    badgeHTML.innerText = order.products.reduce((acc,producto) =>{
      acc += producto.cantidad;
      return acc
    },0)
  
  }
  actualizarBadge()