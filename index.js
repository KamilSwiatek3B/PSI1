const jeden = document.querySelector(".on");
const dwa = document.querySelector(".tw");

const wynik = document.querySelector(".wynik");

document.querySelector('.btn').addEventListener('click', () => {
    wynik.innerHTML = parseInt(jeden.value) + parseInt(dwa.value);
})
