
let Products = [
    {
image: "/assets/product-img/img 1 png.png",
name: 'All round',
description:'Tabla de surf-mini funboard 6.0 equilibrio perfecto entre velocidad y estabilidad.',
price:80000,
action:000000,
    },
{
image: "/assets/product-img/img 2 png.png",
name: 'Touring',
description:'Tabla de surf soft top 7.2, las más usadas para realizar travesías o largos recorridos.',
price:82000,
action:000000,
},
{
image: "/assets/product-img/img 3 png.png",
name: 'Racing',
description:'Tabla de surf 7.0 evo G-boards 8 pulgadas, presenta soporte y anclaje y por lo tanto permite maniobras rápidas.',
price:79000,
action:000000,
},
{
image:"/assets/product-img/img 4 jpg.jpg",
name: 'Yoga',
description:' Tabla de surf soft shockn pro superwide 7, excelente para la yoga en la playa,son livianas y consta de buena amortiguación.',
price:69000,
action:000000,
},
{
image:"/assets/product-img/img 5 png.webp",
name: 'Sub/surf',
description:'Tabla de surf soft blue pro wide 8 pulgadas, muy versátil gracias a su diseño es la más utilizada para travesías de olas con poca fuerza.',
price:76000,
action:000000,
},
{
image:"/assets/product-img/img 6 png.png",
name: 'Windsup',
description:'Tabla de surf soft 8.0 art mar cristal, sirve para las travesías tipo paddle surf y por su rígidez para otras disciplinas. ',
price:72000,
action:000000,
},
{
image: "/assets/product-img/img 7 png.png",
name: 'Desmontables',
description:'Tabla de surf g-boards 212cm bic sport tahe, o modulares tipo de material polietileno, para obtener velocidad y fluidez.',
price:68000,
action:000000,
},
{
image:"/assets/product-img/img 8 png.png",
name:'Evolution',
description:'Tabla de surf expoxy xtorsion 5.8 x 21.5, adecuada para principiantes ya q ofrecen mas flotabilidad, estabilidad y mayor facilidad para girar.',
price:70000,
action:000000,
},
{
image:"/assets/product-img/img 9 png.jpg",
name: 'Longboard',
description:'Tabla de surf-mini funboard 6.0 equilibrio perfecto entre velocidad y estabilidad.',
price:65000,
Action:000000,
}

];
const productForm = document.getElementById('add-product');
const submitBtn = document.getElementById('submit-btn'); 
const tableBody = document.getElementById('table-body');
let editIndex; 

function renderizarTabla() {
    tableBody.innerHTML = ""
    Products.forEach((producto, index) => {

    let imageSrc = producto.image ? producto.image : '/assets/product-img/img 10 no product.png'
    const tableRow = `  <tr class = "product">
                        <td class = "product__img">
                        <img class ="product__img product__img--cell" src= '${imageSrc}' alt="${producto.name}"></img>
                        </td>
                        <td class ="product__name">${producto.name}</td>
                        <td class ="product__description">${producto.description}</td>
                        <td class = "product__price">${producto.price}</td>
                        <td class ="product__actions">
                        <button class = "product__actions-btn" onclick="editProduct(${index})"><i class="fa-solid fa-pencil"></i></button>
                        <button class = "product__actions-btn product__actions-btn--edit" onclick="deleteProduct(${index})"><i class="fa-solid fa-trash-can"></i></button>
                        <button class = "product__actions-btn product__actions-btn--favorite ${producto.favorite ? 'active' : '' }" onclick="setFavoriteProduct(${index})"> <i class="fa-regular fa-star"></i></button>
                        </td>
                        </tr>  `
tableBody.innerHTML += tableRow
})
}
renderizarTabla();


function addProduct(evt){
    evt.preventDefault();
    // console.log(evt);
    const elements = evt.target.elements;
    const newProduct = new FormData(evt.target)
    const newProductData = Object.fromEntries(newProduct);
    newProductData.price = +newProductData.price;

    if(editIndex >= 0) {
    Products[editIndex] = newProductData
    } else {
    Products.push(newProductData);    
    }
    editIndex = undefined;
    submitBtn.classList.remove('edit-btn');
    submitBtn.innerText = 'Cargar producto'

    Products.push(newProductData);
    renderizarTabla();
    evt.target.reset();
    elements.name.focus();
}

function deleteProduct(indice) {
Products.splice(indice, 1);
renderizarTabla();
}

function editProduct(idx) {
    submitBtn.classList.add('edit-btn');
    submitBtn.innerText = 'Editar producto'

    let prod = Products[idx];
    const elementsEdit = productForm.elements;
    elementsEdit.image.value = prod.image;
    elementsEdit.name.value = prod.name;
    elementsEdit.description.value = prod.description;
    elementsEdit.price.value = prod.price;
    editIndex = idx;
}

function setFavoriteProduct(index) {
    Products.forEach((prod, idx) =>{
        if(index === idx) { 
            prod.favorite = true;
        } else {
            prod.favorite = false;
        }
    })
renderizarTabla();
}
