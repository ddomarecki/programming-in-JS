const btn = document.querySelector('button');
const div = document.querySelector("div");

const names = ["Jagienka", "Dobrawa", "Daria", "Asia", "Klara", "Marysia", "Anastazja"];
const prefixs = ["wydaje mi się", "Mam wrażenie", "Szczerze powiedziawszy, myślę", "Szczerze uważam", "na 100% twierdzę", "Jestem pewien"];

const nameGenerator = () => {
    const indexName = Math.floor(Math.random() * names.length);
    const indexPrefix = Math.floor(Math.random() * prefixs.length);
    div.textContent = `${prefixs[indexPrefix]}, że najlepsze będzie imię ${names[indexName]}`;
}

btn.addEventListener('click', nameGenerator);