const input = document.querySelector('input');
const button = document.querySelector('button');
const showResult = document.querySelector('.result');
let array = [];

button.addEventListener('click', () => {
    array.push(input.value); //inserindo o valor digitado no array
    const convertion = calcConvertion(array);
    showResult.innerText = convertion; //mostrando o valor na tela
    input.value = ''; //zerando o input
    array = []; //zerando o array
});

function calcConvertion(array){
    let convertion = 0;
    let tempArray = array[0].split('');
    let invertedArray = tempArray.slice(0).reverse();
    for (let index = 0; index < invertedArray.length; index++) {
        convertion += (invertedArray[index] * (Math.pow(2, index)));
    }
    return convertion;
};
