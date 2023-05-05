
// let usuarios = [
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



let usuarios = JSON.parse (localStorage.getItem('usuarios')) || [];


const userForm = document.getElementById('add-user');

const submitBtnUser = document.getElementById('submit-btnUser');

const tableBodyUser = document.getElementById('table-bodyUser')

let editIndex;

function renderTableUser() {
tableBodyUser.innerHTML = "";

if(usuarios.length === 0) {
    tableBodyUser.innerHTML = `<tr class = "disabled"><td colspan="6"></td>NO SE ENCONTRARON PRODUCTOS</td></tr>`
    return
}

usuarios.forEach((users, index) => {

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
        usuarios[editIndex] = newUserData;
        showAlert(' ✔   El producto se edito correctamente', 'succes')
    } else {
        usuarios.push(newUserData);
        showAlert(' ✔   El producto se agrego correctamente ', 'succes')
    }

localStorage.setItem('usuarios', JSON.stringify(usuarios));
editIndex = undefined;
submitBtnUser.classList.remove('edit-btn');
submitBtnUser.innerText = 'Cargar usuario';

renderTableUser()
evt.target.reset();
elements.name.focus();
}

function deleteUser(indice) {
    usuarios.splice(indice, 1);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    showAlert(' ✔   Elemento borrado correctamente', 'succes')
    renderTableUser();
    }
    
    function editUser(idx) {
    submitBtnUser.classList.add('edit-btn');
    submitBtnUser.innerText = 'Editar usuario'
    
    let u = usuarios[idx];
    const elementsEdit = userForm.elements;
    elementsEdit.fullname.value = u.fullname;
    elementsEdit.email.value = u.email;
    elementsEdit.role.value = u.role;
    editIndex = idx;
    }
