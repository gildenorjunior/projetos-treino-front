const setas = document.querySelectorAll(".setas");
const seta_esquerda = document.querySelector(".seta-esquerda");
const seta_direita = document.querySelector(".seta-direita");
const nome = document.querySelector("#nome");
const profissao = document.querySelector("#profissao");
const descricao = document.querySelector("#descricao");
const foto = document.querySelector("#foto");
const surprise = document.querySelector('button');

const pessoas = [
  {
    foto: "/assets/perfil-1.jpg",
    nome: "Junior",
    profissao: "Software Enginner",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum praesentium, enim id iusto eum nihil optio odit repellat quasi illum molestiae pariatur doloremque dignissimos est omnis impedit nesciunt reprehenderit explicabo.",
  },
  {
    foto: "/assets/perfil-3.jpg",
    nome: "Jose",
    profissao: "Medico",
    descricao:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi porro asperiores, facere repellat perspiciatis rerum accusamus, inventore, necessitatibus maiores earum ratione! Nam repellat ipsum sed? Consequatur dolorum error veritatis nobis.",
  },
  {
    foto: "/assets/perfil-2.jpg",
    nome: "Laura",
    profissao: "Youtuber",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nemo illo quibusdam at corrupti deserunt accusamus voluptatem aspernatur distinctio esse similique repellat vitae nostrum ab eum enim reiciendis non? Vel.",
  },
  {
    foto: "/assets/perfil-4.jpg",
    nome: "Vitória",
    profissao: "Advogada",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ratione magni labore tenetur! Atque consectetur dignissimos odio autem distinctio tempora laudantium, saepe repellat officia amet molestiae non veniam, rerum magnam.",
  },
];

let indice = 0;

setas.forEach((item) => {
  item.addEventListener("click", function (e) {
    const setaClicada = e.currentTarget;
    if (setaClicada.classList.contains("seta-esquerda")) {
      if (indice <= 0) {
        indice = pessoas.length - 1;
      }
      pessoas[indice--];
    } else if (setaClicada.classList.contains("seta-direita")) {
      if (indice >= pessoas.length - 1) {
        indice = 0;
      }
      pessoas[indice++];
    }

    definirPessoa(indice);
  });
});

surprise.addEventListener('click', () => {
    let indiceAleatorio = Math.floor(Math.random() * (pessoas.length));
    definirPessoa(indiceAleatorio);
});

function definirPessoa(indice){
    foto.setAttribute("src", pessoas[indice].foto);
    nome.textContent = pessoas[indice].nome;
    profissao.textContent = pessoas[indice].profissao;
    descricao.textContent = pessoas[indice].descricao;
}


//OUTRA FORMA DE FAZER
// seta_esquerda.addEventListener("click", () => {
//   if (indice <= 0) {
//     indice = pessoas.length - 1;
//   }
//   pessoas[indice--];

//   foto.setAttribute("src", pessoas[indice].foto);
//   nome.textContent = pessoas[indice].nome;
//   profissao.textContent = pessoas[indice].profissao;
//   descricao.textContent = pessoas[indice].descricao;
// });

// seta_direita.addEventListener("click", () => {
//   if (indice >= pessoas.length - 1) {
//     indice = 0;
//   }
//   pessoas[indice++];

//   console.log(indice);
//   foto.setAttribute("src", pessoas[indice].foto);
//   nome.textContent = pessoas[indice].nome;
//   profissao.textContent = pessoas[indice].profissao;
//   descricao.textContent = pessoas[indice].descricao;
// });
