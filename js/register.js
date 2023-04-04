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
        termsAndConditions:el.terms.value
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
        console.warn('El usuario ya existe')
        return true;
        }
}
function showAlert(text, type = 'succes') {      
         //   VAMOS A HACER NUESTRO ALERT CUSTOM:
        const alertDialog = document.createElement('div');
        alertDialog.classList.add('alert-dialog');
        alertDialog.innerText = text;
        document.body.appendChild(alertDialog);

        if(type === 'error') {
            alertDialog.style.background = 'linear-gradient(rgba(159, 159, 161, 1), rgba(217, 15, 33, 1)';
        }
        if(type ==='warning') {
            alertDialog.style.background = 'linear-gradient(rgba(159, 159, 161,1), rgba(217, 99, 15, 1))'
        }

        setTimeout(() => alertDialog.classList.add('show'), 10)

        setTimeout(() =>{
        alertDialog.remove('show');
            setTimeout(() => {
                alertDialog.remove()
            }, 1000)
            // window.location.href = '/pages/login/login.html'
        }, 3000)

}




