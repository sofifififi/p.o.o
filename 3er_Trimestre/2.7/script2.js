let array = [0,2,3];
let span = [
    document.querySelector("#post"),
    document.querySelector("#post-2"),
    document.querySelector("#post-3")
];

function like(id) {
    array[id]++;
    span[id].innerHTML = `${array[id]} likes`;
}