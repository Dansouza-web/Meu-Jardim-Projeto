// DADOS DE EXEMPLO: confira cuidados reais em fontes confiáveis antes de publicar.
// Os dados ficam neste arquivo, separados da lógica. Mais para a frente,
// este array vai ser trocado por uma API (fetch), e o resto do código quase não muda.

const plantas = [
  {
    id: "hortela",
    nome: "Hortelã",
    imagem: "img/imagensplantas/hortela.webp",  
    textoImagem: "Foto de uma planta de Hortelã",
    luz: "media",          
    diasEntreRegas: 2,
    dificuldade: "facil",     
    descricao: "A hortelã é uma erva mundialmente conhecida e largamente utilizada na indústria farmacêutica, cosmética e de alimentos, seja como planta medicinal ou como aromatizante."
  },
  {
    id: "manjericao",
    nome: "Manjericão",
    imagem : "img/imagensplantas/manjericao.jpg",
    textoImagem : "Foto de uma planta de Manjericao",
    luz: "muita",
    diasEntreRegas: 2,
    dificuldade: "facil",
    descricao: "O manjericão é uma planta herbácea, aromática e medicinal, conhecida desde a antiguidade pelos indianos, gregos, egípcios e romanos."
  },
  {
    id: "jiboia",
    nome: "Jiboia",
    imagem: "img/imagensplantas/jiboia.webp",  
    textoImagem: "Foto de uma planta de Jibóia",
    luz: "pouca",
    diasEntreRegas: 7,
    dificuldade: "facil",
    descricao: "A jibóia é uma planta bastante vistosa que tem a habilidade de se apoiar em diversos substratos, esta planta pode ser uma boa pedida para decorar interiores."
  },
  {
    id: "espada-de-sao-jorge",
    nome: "Espada-de-são-jorge",
    imagem: "img/imagensplantas/saojorge.webp",  
    textoImagem: "Foto de uma planta de Espada De São Jorge",
    luz: "pouca",
    diasEntreRegas: 10,
    dificuldade: "facil",
    descricao: "A Espada-de-são-jorge (Dracaena trifasciata) é uma planta herbácea perene originária da África tropical, valorizada pelas folhas eretas, rígidas e pontiagudas que funcionam como elemento estrutural em qualquer composição."
  },
  {
    id: "suculenta",
    nome: "Suculenta",
    imagem: "img/imagensplantas/suculenta.webp",  
    textoImagem: "Foto da planta suculenta",
    luz: "muita",
    diasEntreRegas: 14,
    dificuldade: "media",
    descricao: " As suculentas são plantas que possuem tecidos (raiz, talo, folhas) mais grossos que as demais plantas, permitindo armazenar água em grande quantidade e por períodos prolongados."
  },
  {
    id: "samambaia",
    nome: "Samambaia",
    imagem: "img/imagensplantas/samambaia.webp",  
    textoImagem: "Foto de uma planta de Samambaia",
    luz: "media",
    diasEntreRegas: 3,
    dificuldade: "dificil",
    descricao: "A Samambaia-americana (Nephrolepis exaltata) é uma planta herbácea de folhagem ornamental extremamente valorizada em todo o mundo. Cultivada amplamente como planta de interior e em varandas sombreadas desde a Era vitoriana, destaca-se por sua capacidade de transformar ambientes com sua textura densa e aparência exuberante."
  }
];
const flores =[
  {
    id: "rosa",
    nome: "Rosa",
    imagem: "img/imagensflores/rosa.avif",  
    textoImagem: "Foto de uma Rosa",
    luz: "alta",          
    diasEntreRegas: 2,
    dificuldade: "media",     
    descricao: "A Rosa (Rosa spinosissima) é uma planta arbustiva de porte médio, reconhecida mundialmente por sua resiliência excepcional e beleza nostálgica, sendo uma das espécies mais antigas e rústicas ainda presentes no paisagismo contemporâneo."
  },
  {
    id: "orquidea",
    nome: "Orquídea",
    imagem: "img/imagensflores/orquidea.avif",  
    textoImagem: "Foto de uma Rosa",
    luz: "alta",          
    diasEntreRegas: 2,
    dificuldade: "media",     
    descricao: " A Orquídea-bambu (Arundina graminifolia) é uma das espécies mais fascinantes e versáteis da família Orchidaceae, rompendo com o estigma de que orquídeas são plantas delicadas de interior."
  },
  

];