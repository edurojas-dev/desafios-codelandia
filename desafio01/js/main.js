function renderNav() {
  const navbarId = document.getElementById("navbar");
  const navBarComponent = `
    <div class="bloco-nav">
      <span>Codêlandia</span>
      <span>Blog</span>
    </div>
    <div class="bloco-input">
      <input type="text" placeholder="Pesquise no blog..." id="pesquisar">
    </div>
  `;
  navbarId.innerHTML = navBarComponent;
}

function renderCard(dataPost, titlePost, descPost) {
  return `
    <div class="card">
      <div class="card-header">
        <span class="dataPostagem">${dataPost}</span>
        <span>
          <img src="assets/Vector.png" alt="like">
        </span>
      </div>
      <div class="card-body">
        <h1>${titlePost}</h1>
        <p>
          ${descPost}
        </p>
      </div>
    </div>
  `;
}

const postagens = document.getElementById("postagens")
const listPost = [
  {
    dataPost: "02 de jul, 2021",
    titlePost: "Tim Berners-Lee vai leiloar código-fonte da web",
    descPost: 
    `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus
      ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum
      nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et,
      interdum ullamcorper libero.
    `,
  },

  {
    dataPost: "02 de jul, 2021",
    titlePost: "Tim Berners-Lee vai leiloar código-fonte da web",
    descPost: 
    `
      Nam vitae finibus
      ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum
      nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et,
      interdum ullamcorper libero.
    `,
  },

  {
    dataPost: "02 de jul, 2021",
    titlePost: "Tim Berners-Lee vai leiloar código-fonte da web",
    descPost: 
    `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus
      ante. Duis lobortis tellus vel diammet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et,
      interdum ullamcorper libero.
    `,
  },

  {
    dataPost: "03 de jun, 2022",
    titlePost: "Novos lançamentos de filmes da Marvel",
    descPost: 
    `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus
      ante. Duis lobortis tellus vel diam
    `,
  },
];
// calls functions
renderNav();

postagens.innerHTML = listPost.map(item =>{
  return renderCard(item.dataPost, item.titlePost, item.descPost)
}).join("")
