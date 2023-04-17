    const registerForm = document.querySelector('#registerForm'); 
    const registerBtn = document.getElementById('registerSubmit');
    registerForm.addEventListener('submit', (event) => {
    console.log(event);
    event.preventDefault();
    const el = event.target.elements;

    if(el.password.value !== el.password2.value){
    showAlert(' ⚠   El password no coincide' , 'warning')
    return
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    const userExist = checkIfUserExist(users, el.email.value);
    if(userExist) {
        showAlert(' ❌  El mail ya se encuentra registrado', 'error')
        return;
    }
    // let userEmailExist = false;

    // solucion 1 no adecuada porque recorre todo el array 
    // users.forEach(usr => {
    //     if(usr.email === el.email.value){
    //         console.warn('El usuario ya existe')
    //         userEmailExist = true;
    //     }
    // })
// !================================================================
//     const userExist = users.find(user => {
//         if(user.email === el.email.value){
//             return true
//         }
//     })
//     if(userExist) {
//         console.warn('El usuario ya existe')
//         return
// }

    const user = {
        fullName:el.fullname.value,
        email:el.email.value,
        password:el.password.value,
        password2:el.password2.value,
        age:el.age.valueAsNumber,
        date:el.date.value,
        country:el.country.value,
        sex:el.sex.value,
        termsAndConditions:el.terms.value,
        role:'USER_ROLE'
    }
    users.push(user)
    localStorage.setItem('users', JSON.stringify(users));
    // registerForm.reset()
    showAlert('✔   El usuario se registro correctamente', 'succes')

})

function checkIfUserExist(users, emailToSearch) {

const indexOfUser = users.findIndex(usuario => {
if(usuario.email === emailToSearch) {
return true
}
})
if(indexOfUser >= 0){
showAlert (' ❌  El usuario ya existe', 'error')
return true;
}
}





