function login(elemento) {
    if (elemento.innerText == "Login") {
        elemento.innerText = 'Logout'
        elemento.style.backgroundColor = 'Red';
    } else {
        elemento.innerText = 'Login'
        elemento.style.backgroundColor = 'Blue';
    }
}

function contadorLike(elemento) {
    let like = parseInt(elemento.getAttribute('like-contador') || '0');
    like++;
    elemento.setAttribute('like-contador', like);
    elemento.textContent = like + ' Likes';
    alert('Le has dado like a "ninja"')
}

function borrarAdd(elemento) {
    elemento.remove();
}