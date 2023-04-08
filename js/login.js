// 1-a guardo el formulario en una variable 
const loginForm = document.getElementById('loginForm')

// 1.- Obtener lod datos del formulario :
loginForm.addEventListener('submit', (event) =>{
event.preventDefault();

const {email, password} = loginForm.elements;
console.log(email.value, password.value);

// 2a- obtener los usuarios almacenados en el localStorage :
const users = JSON.parse(localStorage.getItem('users')) || [];
console.log(users)

// 2.- Chequear datos ingresados con los usuarios que tengo :

const user = users.find((usr) => {
    if(usr.email === email.value){
        return true;
    }
})
if(!user || user.password !== password.value){
    showAlert(' ❌  Login incorrecto', 'error')
    return
}

localStorage.setItem('currentUser', JSON.stringify(user));
    showAlert(' ✔   login correcto te redireccionaremos en unos instantes...', 'succes')

setTimeout(() => {
    window.location.href = '/';
}, 1500)

});


