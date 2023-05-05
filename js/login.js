 
const loginForm = document.getElementById('loginForm')


loginForm.addEventListener('submit', (event) =>{
event.preventDefault();

const {email, password} = loginForm.elements;
// console.log(email.value, password.value);

const users = JSON.parse(localStorage.getItem('users')) || [];
// console.log(users)


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
showAlert(' ✔   login correcto te redireccionaremos en unos instantes...', 'succes');

setTimeout(() => {
window.location.href = '/';
}, 1500)

});


