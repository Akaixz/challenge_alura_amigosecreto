// aplicação do amigo secreto, challenge alura

// Arrays globais para armazenar os nomes adicionados e os que ainda podem ser sorteados
let participantes = [];
let nomesDisponiveis = [];

// Atualiza a exibição da lista de nomes adicionados.
function atualizarLista() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; // Limpa a lista existente

  // Para cada nome, cria um item de lista (li) e adiciona à lista dos nomes
  participantes.forEach(nome => {
    const li = document.createElement("li");
    li.textContent = nome;
    listaAmigos.appendChild(li);
  });
}

//Função acionada pelo botão "Adicionar".
// Valida o campo de entrada e, se válido, adiciona o nome aos arrays e atualiza a lista na tela.
function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  // Validação: impede que seja adicionado um nome em branco
  if (nome === "") {
    alert("Por favor, digite um nome válido.");
    return;
  }

  // Adiciona o nome aos arrays
  participantes.push(nome);
  nomesDisponiveis.push(nome);
  atualizarLista();

  // Limpa o campo de entrada
  input.value = "";
}

//Função acionada pelo botão "Sortear amigo".Realiza o sorteio de forma que cada nome seja sorteado apenas uma vez.
function sortearAmigo() {
  // Verifica se ainda há nomes disponíveis para sorteio
  if (nomesDisponiveis.length === 0) {
    alert("Todos os nomes já foram sorteados ou nenhum nome foi adicionado.");
    return;
  }

  // Gera um índice aleatório baseado no número de nomes disponíveis
  const indiceAleatorio = Math.floor(Math.random() * nomesDisponiveis.length);
  const nomeSorteado = nomesDisponiveis.splice(indiceAleatorio, 1)[0]; // Remove o nome sorteado para não repetir

  // Exibe o resultado na lista de resultados
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>Amigo Secreto: ${nomeSorteado}</li>`;
}
