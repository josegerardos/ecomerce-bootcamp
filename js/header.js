const signIn = document.getElementById('sign-in');



function renderHeaderLinks() {

const currentUser = JSON.parse(localStorage.getItem('currentUser'));

if(currentUser) {
    signIn.innerHTML = `<div onclick="logout()" class="navbar__nav-link">Logout</div>`
} else {

signIn.innerHTML = `<a href="/pages/login/login.html" class="navbar__nav-link">Login</a>`
// const link = document.createElement('a');
// link.classList.add('navbar__nav-link');
// link.href = 'pages/login/login.html';
// link.setAttribute('target', '_blank');
// link.innerText = 'login'
// signIn.replaceChildren(link);
}
}

function logout(){
localStorage.removeItem('currentUser');
renderHeaderLinks();

}


renderHeaderLinks()