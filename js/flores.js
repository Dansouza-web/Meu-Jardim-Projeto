// ---------- 1. Pegar os elementos da página ----------
const listaflores = document.getElementById("lista-flores");
const campoBusca = document.getElementById("busca");
const filtroLuz = document.getElementById("filtro-luz");
const filtroDificuldade = document.getElementById("filtro-dificuldade");
const contador = document.getElementById("contador");

const rotulosLuz = {
  pouca: "Pouca luz",
  media: "Luz indireta",
  muita: "Sol direto"
};

const rotulosDificuldade = {
  facil: "Fácil",
  media: "Média",
  dificil: "Dificil"
  
};

// ---------- 3. Funções auxiliares ----------

// Cria um elemento, coloca texto e (opcionalmente) uma classe.
// Usamos textContent em vez de innerHTML: é mais seguro quando o texto vem de fora.
function criarElemento(tag, texto, classe) {
  const elemento = document.createElement(tag);
  elemento.textContent = texto;
  if (classe) {
    elemento.classList.add(classe);
  }
  return elemento;
}

// Deixa o texto em minúsculas e sem acento, para "hortela" achar "Hortelã".
function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")                 // separa a letra do acento
    .replace(/[\u0300-\u036f]/g, ""); // remove os acentos
}

// Recebe UMA flores e devolve o card pronto.
function criarCard(flores) {
  const card = document.createElement("article");
  card.classList.add("card");
  visual = document.createElement("img");
  visual.src = flores.imagem;        
  visual.alt = flores.textoImagem;  
  visual.classList.add("card-imagem");
  const emoji = criarElemento("span", flores.emoji, "card-emoji");
  emoji.setAttribute("aria-hidden", "true");
  const nome = criarElemento("h2", flores.nome, "card-nome");
  const descricao = criarElemento("p", flores.descricao, "card-descricao");
  const etiquetas = document.createElement("ul");
  etiquetas.classList.add("etiquetas");

  const textos = [
    rotulosLuz[flores.luz],
    "Regar a cada " + flores.diasEntreRegas + " dias",
    "Dificuldade: " + rotulosDificuldade[flores.dificuldade]
  ];

  textos.forEach(function (texto) {
    etiquetas.appendChild(criarElemento("li", texto));
  });

  card.append(visual,emoji , nome, descricao, etiquetas);
  return card;
}

// ---------- 4. Filtrar ----------

// Devolve só as floress que passam em TODOS os filtros.
function filtrarfloress() {
  const textoBusca = normalizarTexto(campoBusca.value.trim());
  const luzEscolhida = filtroLuz.value;
  const dificuldadeEscolhida = filtroDificuldade.value;

  return flores.filter(function (flores) {
    const combinaNome = normalizarTexto(flores.nome).includes(textoBusca);
    const combinaLuz = luzEscolhida === "todas" || flores.luz === luzEscolhida;
    const combinaDificuldade =
      dificuldadeEscolhida === "todas" || flores.dificuldade === dificuldadeEscolhida;

    return combinaNome && combinaLuz && combinaDificuldade;
  });
}

// ---------- 5. Mostrar na tela ----------

function mostrarfloress(lista) {
  listaflores.replaceChildren(); 

  if (lista.length === 0) {
    contador.textContent = "Nenhuma flores encontrada. Tente mudar os filtros.";
    return;
  }

  lista.forEach(function (flores) {
    listaflores.appendChild(criarCard(flores));
  });

  contador.textContent =
    lista.length === 1 ? "1 flores encontrada" : lista.length + " floress encontradas";
}

function atualizarTela() {
  mostrarfloress(filtrarfloress());
}

// ---------- 6. Ligar os eventos ----------
// "input" dispara a cada letra digitada; "change" quando a opção do select muda.
campoBusca.addEventListener("input", atualizarTela);
filtroLuz.addEventListener("change", atualizarTela);
filtroDificuldade.addEventListener("change", atualizarTela);

// Primeira exibição, assim que a página carrega.
atualizarTela();