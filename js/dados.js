// DADOS DE EXEMPLO: confira cuidados reais em fontes confiáveis antes de publicar.
// Os dados ficam neste arquivo, separados da lógica. Mais para a frente,
// este array vai ser trocado por uma API (fetch), e o resto do código quase não muda.

const plantas = [
  {
    id: "hortela",
    nome: "Hortelã",
    emoji: "🌿",
    luz: "media",          
    diasEntreRegas: 2,
    dificuldade: "facil",     // "facil" ou "media"
    descricao: "Cresce rápido e gosta de solo úmido. Boa para chás e para quem está começando."
  },
  {
    id: "manjericao",
    nome: "Manjericão",
    emoji: "🌱",
    luz: "muita",
    diasEntreRegas: 2,
    dificuldade: "facil",
    descricao: "Precisa de bastante sol. Colher as folhas de cima estimula novos brotos."
  },
  {
    id: "jiboia",
    nome: "Jiboia",
    emoji: "🍃",
    luz: "pouca",
    diasEntreRegas: 7,
    dificuldade: "facil",
    descricao: "Aceita ambientes com pouca luz e perdoa esquecimentos de rega."
  },
  {
    id: "espada-de-sao-jorge",
    nome: "Espada-de-são-jorge",
    emoji: "🪴",
    luz: "pouca",
    diasEntreRegas: 10,
    dificuldade: "facil",
    descricao: "Resistente e de poucos cuidados. O excesso de água é o maior risco."
  },
  {
    id: "suculenta",
    nome: "Suculenta",
    emoji: "🌵",
    luz: "muita",
    diasEntreRegas: 14,
    dificuldade: "media",
    descricao: "Guarda água nas folhas. Regue só quando a terra estiver bem seca."
  },
  {
    id: "samambaia",
    nome: "Samambaia",
    emoji: "🌿",
    luz: "media",
    diasEntreRegas: 3,
    dificuldade: "media",
    descricao: "Gosta de umidade e de luz suave, sem sol forte direto nas folhas."
  }
];