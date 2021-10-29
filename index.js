const jeden = document.querySelector(".on");
const dwa = document.querySelector(".tw");

const wynik = document.querySelector(".wynik");

document.querySelector('.btn').addEventListener('click', () => {
    console.log('es');
    let one = parseInt(jeden.value);
    let two = parseInt(dwa.value);
    wynik.innerHTML = one + two;
})