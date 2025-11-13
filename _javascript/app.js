// ======== DADOS ========

const DATA = {
  olimpianos: [
    { nome: "AFRODITE", subtitulo: "DEUSA DO AMOR", descricao: "Encarna a beleza, o desejo e a força das emoções humanas. Simbolizada pela concha, rosa e pelo pombo.", img: "_imagens/deuses/afrodite.png" },
    { nome: "APOLO", subtitulo: "DEUS DA LUZ E DAS ARTES", descricao: "Ligado à música, poesia, medicina e profecias. Seu símbolo é a lira. Representa harmonia e conhecimento.", img: "_imagens/deuses/apolo.png" },
    { nome: "ARES", subtitulo: "DEUS DA GUERRA", descricao: "Personifica o combate, a força bruta e o caos das batalhas. Seus símbolos incluem a lança e o escudo.", img: "_imagens/deuses/ares.png" },
    { nome: "ÁRTEMIS", subtitulo: "DEUSA DA CAÇA", descricao: "Protetora da natureza, dos animais e das donzelas. Associada ao arco, lua e cervo. Representa liberdade e pureza.", img: "_imagens/deuses/artemis.png" },
    { nome: "ATENA", subtitulo: "DEUSA DA SABEDORIA", descricao: "Protetora das artes, estratégia e guerra justa. Associada à coruja e ao olivo. Representa inteligência e razão.", img: "_imagens/deuses/atena.png" },
    { nome: "DEMETER", subtitulo: "DEUSA DA COLHEITA", descricao: "Guardiã da fertilidade da terra e das estações. Responsável pelo ciclo das plantações e pela abundância dos alimentos. Representada pelo trigo e pelo cereal.", img: "_imagens/deuses/demeter.png" },
    { nome: "DIONÍSIO", subtitulo: "DEUS DO VINHO", descricao: "Representa celebração, teatro, êxtase e liberdade emocional. Seus símbolos incluem a videira e o cálice de vinho.", img: "_imagens/deuses/dionisio.png" },
    { nome: "HADES", subtitulo: "SENHOR DO SUBMUNDO", descricao: "Governa o reino dos mortos e as riquezas subterrâneas. Seu símbolo mais marcante é o elmo da invisibilidade.", img: "_imagens/deuses/hades.png" },
    { nome: "HERA", subtitulo: "RAINHA DO OLIMPO", descricao: "Deusa do matrimônio e da família. Protetora das mulheres casadas e dos laços sagrados. Seu símbolo é o pavão.", img: "_imagens/deuses/hera.png" },
    { nome: "HERMES", subtitulo: "MENSAGEIRO DOS DEUSES", descricao: "Protetor dos viajantes, comerciantes e comunicações. Usa sandálias aladas e porta o caduceu. Guiador de almas.", img: "_imagens/deuses/hermes.png" },
    { nome: "POSEIDON", subtitulo: "SENHOR DOS MARES", descricao: "Governante dos oceanos, terremotos e cavalos. Carrega o tridente e comanda as águas do mundo. Irmão de Zeus e Hades.", img: "_imagens/deuses/poseidon.png" },
    { nome: "ZEUS", subtitulo: "REI DOS DEUSES", descricao: "Senhor do céu e do trovão. Guardião da ordem e da justiça. Seus símbolos principais são o raio e a águia.", img: "_imagens/deuses/zeus.png" }
  ],

  titas: [
    { nome: "CICLOPE", subtitulo: "ARTESÃOS DIVINOS", descricao: "Forjadores lendários de armas e relâmpagos, conhecidos por seu único olho que simboliza foco absoluto. Criadores do raio de Zeus e de artefatos divinos.", img: "_imagens/titas/ciclope.png" },
    { nome: "CRONOS", subtitulo: "SENHOR DO TEMPO", descricao: "Titã que governa o tempo e o destino das eras. Temido por devorar seus próprios filhos para evitar a profecia de ser destruído. Representa mudança, ciclos e poder inevitável.", img: "_imagens/titas/cronos.png" },
    { nome: "HECATONQUIROS", subtitulo: "GIGANTES DE CEM BRAÇOS", descricao: "Criaturas colossais com cem braços e cinquenta cabeças. Símbolos de força destrutiva e tempestades. Lutaram ao lado de Zeus na Titanomaquia.", img: "_imagens/titas/hecatonquiros.png" },
    { nome: "HIPÉRION", subtitulo: "TITÃ DA LUZ PRIMORDIAL", descricao: "Associado à luz dourada e ao brilho do sol nascente. Pai de Hélio, Selene e Eos. Representa iluminação, majestade e o brilho que antecede o dia.", img: "_imagens/titas/hiperion.png" },
    { nome: "LAPETUS", subtitulo: "TITÃ DA VIDA E MORTALIDADE", descricao: "Ligado à criação da humanidade através de seus filhos Prometeu e Epimeteu. Simboliza o destino dos mortais, a evolução humana e a fragilidade da vida.", img: "_imagens/titas/lapetus.png" },
    { nome: "KRIO", subtitulo: "TITÃ DAS CONSTELAÇÕES", descricao: "Associado ao céu estrelado e às direções celestes. Representa orientação, astrologia antiga e o fluxo do firmamento.", img: "_imagens/titas/krios.png" },
    { nome: "OCEANO", subtitulo: "TITÃ DOS MARES PRIMORDIAIS", descricao: "Personificação do grande rio que circunda o mundo. Pai das águas doces e correntes vitais. Simboliza profundidade, origem e mistério.", img: "_imagens/titas/oceano.png" },
    { nome: "REIA", subtitulo: "MÃE DOS DEUSES OLIMPIANOS", descricao: "Deusa-mãe que salvou Zeus da tirania de Cronos. Ligada à fertilidade, maternidade e proteção. Seu culto celebrava o nascimento, o cuidado e a força das mulheres.", img: "_imagens/titas/reia.png" },
    { nome: "SELENE", subtitulo: "DEUSA DA LUA", descricao: "Personifica o brilho prateado da noite e conduz a lua em sua carruagem celestial. Símbolo de mistério, beleza serena e ciclos noturnos. Representa intuição, calma e o poder sutil das marés e dos sonhos.", img: "_imagens/titas/selene.png" },
  ],

  monstros: [
    { nome: "ESFINGE", subtitulo: "GUARDIÃ DOS ENIGMAS", descricao: "Criatura com corpo de leão, asas e rosto humano. Desafia viajantes com enigmas mortais. Simboliza mistério, sabedoria perigosa e o poder do conhecimento oculto.", img: "_imagens/monstros/esfinge.png" },
    { nome: "GÓRGONAS", subtitulo: "MULHERES-CREATURAS DE OLHAR MORTAL", descricao: "Seres monstruosos com serpentes vivas no lugar dos cabelos. Seu olhar transforma em pedra. Representam medo, punição divina e o limite entre o belo e o aterrador.", img: "_imagens/monstros/gorgonas.png" },
    { nome: "GRIFO", subtitulo: "SENTINELAS ALADAS", descricao: "Criaturas com corpo de leão e cabeça de águia. Símbolos de proteção e nobreza, guardavam tesouros e objetos sagrados. Representam força, vigilância e grandeza.", img: "_imagens/monstros/grifos.png" },
    { nome: "HARPIAS", subtitulo: "VENTOS FURIOSOS", descricao: "Mulheres-aladas que carregam os ventos tempestuosos. Conhecidas por raptar e punir os culpados. Simbolizam caos, velocidade e justiça divina.", img: "_imagens/monstros/harpias.png" },
    { nome: "HIDRA", subtitulo: "SERPENTE DE MÚLTIPLAS CABEÇAS", descricao: "Monstro aquático com várias cabeças que se regeneram quando cortadas. Seu hálito e sangue são venenosos. Representa força indomável, renascimento e terror ancestral.", img: "_imagens/monstros/hidra.png" },
    { nome: "MEDUSA", subtitulo: "A GORGONA SOLITÁRIA", descricao: "A mais famosa das górgonas, amaldiçoada com cabelos de serpentes e olhar petrificante. Simboliza transformação, punição e o poder sombrio da beleza corrompida.", img: "_imagens/monstros/medusa.png" },
    { nome: "MINOTAURO", subtitulo: "A BESTA DO LABIRINTO", descricao: "Criatura com corpo humano e cabeça de touro, aprisionada no labirinto de Creta. Representa força brutal, violência reprimida e o conflito entre civilização e instinto.", img: "_imagens/monstros/minotauro.png" },
    { nome: "PÉGASO", subtitulo: "CORCEL ALADO", descricao: "Cavalo branco divino que nasceu do sangue de Medusa. Símbolo de liberdade, inspiração e elevação espiritual. Representa leveza, velocidade e pureza heroica.", img: "_imagens/monstros/pegasus.png" },
    { nome: "QUIMERA", subtitulo: "CRIATURA DE FOGO E FÚRIA", descricao: "Monstro híbrido com corpo de leão, cabeça de cabra e cauda de serpente. Cospe fogo e traz caos por onde passa. Representa mistura, destruição e selvageria primordial.", img: "_imagens/monstros/quimera.png" }
  ]
};

// ======== TÍTULOS ========

const TITULOS = {
  olimpianos: "DEUSES OLIMPIANOS",
  titas: "TITÃS",
  monstros: "MONSTROS",
};

// ======== FUNÇÕES ========

// renderiza a categoria escolhida
function renderCategoria(cat) {
  const lista = DATA[cat] || [];
  const galeria = document.getElementById("galeria");
  const titulo = document.getElementById("secao-titulo");

  titulo.textContent = TITULOS[cat] || "";
  galeria.innerHTML = lista.map(item => `
    <article class="card">
      <figure class="figure">
        <img loading="lazy" src="${item.img}" alt="${item.nome}">
      </figure>
      <div class="card-text">
        <h2 class="nome">${item.nome}</h2>
        <h3 class="sub">${item.subtitulo}</h3>
        <p>${item.descricao}</p>
      </div>
    </article>
  `).join("");
}

// inicializa os botões de filtro
function setupFiltros() {
  const botoes = document.querySelectorAll(".btn-filtro");

  botoes.forEach(btn => {
    btn.addEventListener("click", () => {
      // tira o "ativo" de todos
      botoes.forEach(b => {
        b.classList.remove("ativo");
        b.setAttribute("aria-pressed", "false");
      });

      // marca o clicado como ativo
      btn.classList.add("ativo");
      btn.setAttribute("aria-pressed", "true");

      const cat = btn.dataset.category; // olimpianos, titas, monstros, batalhas...
      renderCategoria(cat);
    });
  });
}

// inicializa tudo ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  renderCategoria("olimpianos"); // começa com os deuses
  setupFiltros();
});
