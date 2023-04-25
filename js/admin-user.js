// let user = [
// {
// fullname: "admin admin",
// email: "admin@email.com",
// role:"ADMIN_ROLE",
// },
// {
// fullname: "Jose Garcia",
// email: "jose@email.com",
// role:"USER_ROLE",
// },
// {
// fullname: "Juan Torres",
// email: "juan@email.com",
// role:"USER_ROLE",
// },
// {
// fullname: "Maria Hernandez",
// email: "maria@email.com",
// role:"USER_ROLE",
// },
// {
// fullname: "Angel Sanchez",
// email: "angel@email.com",
// role:"USER_ROLE",
// },
// {
// fullname: "Nataly Blanco",
// email: "nataly@email.com",
// role:"USER_ROLE",
// }
// ]
let user = JSON.parse (localStorage.getItem('user')) || [];


const userForm = document.getElementById('add-user');

const submitBtnUser = document.getElementById('submit-btnUser');

const tableBodyUser = document.getElementById('table-bodyUser')

let editIndex;

function renderTableUser() {
tableBodyUser.innerHTML = "";

if(user.length === 0) {
    tableBodyUser.innerHTML = `<tr class = "disabled"><td colspan="6"></td>NO SE ENCONTRARON PRODUCTOS</td></tr>`
    return
}



user.forEach((users, index) => {

const tableUser = ` <tr class="user">
                    <td class="user__fullname">${users.fullname}</td>
                    <td class="user__email">${users.email}</td>
                    <td class="user__role">${users.role}</td>
                    <td class ="user__actions">
                    <button class = "user__actions-btn" onclick="editUser(${index})"><i class="fa-solid fa-pencil"></i></button>
                    <button class = "user__actions-btn user__actions-btn--edit" onclick="deleteUser(${index})"><i class="fa-solid fa-trash-can"></i></button>
                    </td>
                    </tr>  `
tableBodyUser.innerHTML += tableUser;
})
}
renderTableUser()

function addUser(evt) {
    evt.preventDefault();
    const elements = evt.target.elements;
    const newUser = new FormData(evt.target);
    const newUserData = Object.fromEntries(newUser);
    if(editIndex >= 0){
        user[editIndex] = newUserData;
        showAlert(' ✔   El producto se edito correctamente', 'succes')
    } else {
        user.push(newUserData);
        showAlert(' ✔   El producto se agrego correctamente ', 'succes')
    }

localStorage.setItem('user', JSON.stringify(user));
editIndex = undefined;
submitBtnUser.classList.remove('edit-btn');
submitBtnUser.innerText = 'Cargar usuario';

renderTableUser()
evt.target.reset();
elements.name.focus();
}

function deleteUser(indice) {
    user.splice(indice, 1);
    localStorage.setItem('user', JSON.stringify(user));
    showAlert(' ✔   Elemento borrado correctamente', 'succes')
    renderTableUser();
    }
    
    function editUser(idx) {
    submitBtnUser.classList.add('edit-btn');
    submitBtnUser.innerText = 'Editar usuario'
    
    let u = user[idx];
    const elementsEdit = userForm.elements;
    elementsEdit.fullname.value = u.fullname;
    elementsEdit.email.value = u.email;
    elementsEdit.role.value = u.role;
    editIndex = idx;
    }
