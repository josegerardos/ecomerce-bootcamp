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
    setTimeout(() => {
        window.location.href = '/pages/login/login.html';
    }, 3000)
    showAlert('✔   El usuario se registro correctamente', 'succes');
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







