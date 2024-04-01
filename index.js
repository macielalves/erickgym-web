API_URL = 'https://erickgym-server-latest.onrender.com';

function main() {

  carregarExerciciosAPI();
}

async function carregarExerciciosAPI() {
  // Fazer chamada API (GET /api/exercicios)
  // URL: http://127.0.0.1:8000/api/exercicios
  const response = await fetch(API_URL);
  if (response.status === 200) {
    // mostrar os exercicios na html (DOM)
    const exercicios = await response.json();
    for (let exercicio of exercicios) {
      // criar e pendurar um item em ol
      // adicionarItemNaLista(exercicio)
      console.log(exercicio);
    }
  } else {
    alert('Requisição deu problema!');
  }
}

const postButton = document.querySelector("#btn-cadastrar");
postButton.addEventListener("click", function (e) {
  e.preventDefault();
  postExercicio();
})

async function postExercicio() {
  const options = {
    method: "POST",
    body: `{
      "nome": ${document.querySelector("#cx-nome")?.value},
      "descricao": ${document.querySelector("cx-descricao")?.value}
    }`
  }

  const response = await fetch(API_URL + "/api/exercicios", options);
  if (response.status === 200) {
    console.log(response.json());
  } else {
    throw new Error("Ops! Houve um erro em nosso servidor.");
  }
}