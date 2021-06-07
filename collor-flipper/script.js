const button = document.querySelector('button');
const color = document.querySelector('.color');

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

button.addEventListener('click', () => {
    let hexColor = "#";
    for (let index = 0; index < 6; index++) {
        hexColor += hex[generateRandomColor()];
    }

    document.body.style.backgroundColor = hexColor;
    color.innerHTML = hexColor;
    console.log(hexColor);
});

const generateRandomColor = () => {
    let random = Math.floor(Math.random() * hex.length);
    return random;
};


// OUTRA FORMA DE FAZER
// const generateRandomColor = () => {
//     let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//     document.body.style.backgroundColor = randomColor;
//     color.innerText = `${randomColor}`;
//     return randomColor;
// };

// button.addEventListener('click', generateRandomColor);
