

let order = JSON.parse(localStorage.getItem('order')) || { user: [], products: [] };
const tableBody = document.getElementById('table-body');
const totalButton = document.getElementById('total-button');
const totalDisplay = document.getElementById('total-display');

function paintTable(order) {
  if(tableBody !== null){
    tableBody.innerHTML = "";
    if (order.products.length === 0) {
      tableBody.innerHTML = `<tr class="disabled"><td colspan="6">NO SE ENCONTRARON PRODUCTOS</td></tr>`
      return
    }
  
    order.products.forEach((producto, index) => {
      let imageSrc = producto.image ? producto.image : '/assets/product-img/img 10 no product.png';
      const tableRow =
        `            
          <tr class="order">
          <td class="order__img">
          <img class="order__img product__img--cell" src="${imageSrc}" alt="${producto.name}">
          </td>
          <td class="order__name">${producto.name}</td>
          <td class="order__description">${producto.description}</td>
          <td class="order__cantidad">${producto.cantidad}</td>
          <td class="order__price">${producto.price}</td>
          <td class="order__price">${producto.subtotal}</td>
          <td class="order__actions">
          <button class="order__actions-btn order__actions-btn--edit" onclick="deleteProduct(${index})">
          <i class="fa-solid fa-trash-can"></i>
          </button>
          </td>
          </tr>
        `
        ;
        tableBody.innerHTML += tableRow;
  
    });
  }
}

function addToOrder(index) {
  const product = JSON.parse(localStorage.getItem('Products'))[index];
  const cartIndex = order.products.findIndex(p => p.name === product.name);
  if (cartIndex === -1) {
    product.cantidad = 1;
    product.subtotal = product.price;
    order.products.push(product);
  } else {
    order.products[cartIndex].cantidad += 1;
    order.products[cartIndex].subtotal += product.price;
  }
  order.user[0].total = order.products.reduce((total, p) => total + p.subtotal, 0);
  localStorage.setItem('order', JSON.stringify(order));
  paintTable(index);
}

paintTable(order);

function deleteProduct(index) {
  order.products.splice(index, 1);
  localStorage.setItem('order', JSON.stringify(order));
  showAlert(' ✔   Elemento borrado correctamente', 'succes');
  paintTable(order)
}

if(totalButton !== null){
  totalButton.addEventListener('click', () => {
    const total = order.user[0].total;
    order.user[0].total = total;
    localStorage.setItem('order', JSON.stringify(order));
    totalDisplay.innerHTML = `$${total}`;
  });
}


















































