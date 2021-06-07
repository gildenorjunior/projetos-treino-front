const botoes = document.querySelectorAll('button');
const valor = document.querySelector('#valor');

contador = 0;

botoes.forEach((item) => {
    item.addEventListener('click', function (e){
       const id = e.currentTarget.id;
       if(id === 'aumentar')
       contador++
       else if (id === 'diminuir')
       contador--
       else
       contador = 0;

       valor.textContent = contador;

       if(contador > 0)
       valor.style.color = 'green'
       else if(contador < 0)
       valor.style.color = 'red';
       else 
       valor.style.color = '#222'
    });
});

//OUTRO JEITO DE FAZER
// const valor = document.querySelector('#valor');
// const aumentar = document.querySelector('#aumentar');
// const diminuir = document.querySelector('#diminuir');
// const zerar = document.querySelector('#zerar');

// aumentar.addEventListener('click', () => {
//     let conteudo = parseInt(valor.innerText);
//     conteudo++;
//     valor.textContent = conteudo;

// });

// diminuir.addEventListener('click', () => {
//     let conteudo = parseInt(valor.innerText);
//     conteudo--;
//     valor.textContent = conteudo
//     console.log(conteudo)
// });

// zerar.addEventListener('click', () => {
//     valor.textContent = 0;
// });
