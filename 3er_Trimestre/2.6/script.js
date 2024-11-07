function botonLike(elemento){
    let like = parseInt(elemento.getAttribute('like-contador') || '0');
    like++;
    elemento.setAttribute('like-contador', like);
    elemento.textContent = like + ' Likes';
}