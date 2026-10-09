// ---------- 1. Pegar os elementos da página ----------
const listaPlantas = document.getElementById("lista-plantas");
const campoBusca = document.getElementById("busca");
const filtroLuz = document.getElementById("filtro-luz");
const filtroDificuldade = document.getElementById("filtro-dificuldade");
const contador = document.getElementById("contador");

// ---------- 2. Textos que aparecem para o usuário ----------
// Nos dados guardamos códigos curtos ("muita"); aqui traduzimos para texto bonito.
const rotulosLuz = {
  pouca: "Pouca luz",
  media: "Luz indireta",
  muita: "Sol direto"
};

const rotulosDificuldade = {
  facil: "Fácil",
  media: "Média"
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

// Recebe UMA planta e devolve o card pronto.
function criarCard(planta) {
  const card = document.createElement("article");
  card.classList.add("card");

  const emoji = criarElemento("span", planta.emoji, "card-emoji");
  emoji.setAttribute("aria-hidden", "true"); // é só decoração para leitores de tela

  const nome = criarElemento("h2", planta.nome, "card-nome");
  const descricao = criarElemento("p", planta.descricao, "card-descricao");

  const etiquetas = document.createElement("ul");
  etiquetas.classList.add("etiquetas");

  const textos = [
    rotulosLuz[planta.luz],
    "Regar a cada " + planta.diasEntreRegas + " dias",
    "Dificuldade: " + rotulosDificuldade[planta.dificuldade]
  ];

  textos.forEach(function (texto) {
    etiquetas.appendChild(criarElemento("li", texto));
  });

  card.append(emoji, nome, descricao, etiquetas);
  return card;
}

// ---------- 4. Filtrar ----------

// Devolve só as plantas que passam em TODOS os filtros.
function filtrarPlantas() {
  const textoBusca = normalizarTexto(campoBusca.value.trim());
  const luzEscolhida = filtroLuz.value;
  const dificuldadeEscolhida = filtroDificuldade.value;

  return plantas.filter(function (planta) {
    const combinaNome = normalizarTexto(planta.nome).includes(textoBusca);
    const combinaLuz = luzEscolhida === "todas" || planta.luz === luzEscolhida;
    const combinaDificuldade =
      dificuldadeEscolhida === "todas" || planta.dificuldade === dificuldadeEscolhida;

    return combinaNome && combinaLuz && combinaDificuldade;
  });
}

// ---------- 5. Mostrar na tela ----------

function mostrarPlantas(lista) {
  listaPlantas.replaceChildren(); 

  if (lista.length === 0) {
    contador.textContent = "Nenhuma planta encontrada. Tente mudar os filtros.";
    return;
  }

  lista.forEach(function (planta) {
    listaPlantas.appendChild(criarCard(planta));
  });

  contador.textContent =
    lista.length === 1 ? "1 planta encontrada" : lista.length + " plantas encontradas";
}

function atualizarTela() {
  mostrarPlantas(filtrarPlantas());
}

// ---------- 6. Ligar os eventos ----------
// "input" dispara a cada letra digitada; "change" quando a opção do select muda.
campoBusca.addEventListener("input", atualizarTela);
filtroLuz.addEventListener("change", atualizarTela);
filtroDificuldade.addEventListener("change", atualizarTela);

// Primeira exibição, assim que a página carrega.
atualizarTela();