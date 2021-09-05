const numberRandom = (min, max) => {
    const number = Math.random() * (max - min) + min;
    return number;
}

const numberRandomInt = (min, max) => {
    const number = Math.floor(Math.random() * (max - min + 1) + min);
    return number;
}

