function pesquisar() {
  /**
   * Função responsável por pesquisar e exibir os Pokémons mais votados em uma seção HTML.
   * 
   * **Funcionamento:**
   * 1. Seleciona a seção HTML onde os resultados serão exibidos.
   * 2. Itera sobre cada Pokémon no array `pokemonsMaisVotados`.
   * 3. Constrói o HTML para cada Pokémon, incluindo nome, habilidades, descrição, link e votos.
   * 4. Insere o HTML gerado na seção HTML selecionada.
   */

  // Seleciona a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if(!campoPesquisa){
    section.innerHTML = "<p> Nenhum pokemon encontrado! Digite um nome antes de pesquisar! </p>";
    return
  }
  // Inicializa uma string vazia para armazenar o HTML gerado
  campoPesquisa = campoPesquisa.toLowerCase();
  let resultados = "";
  let nome = "";
  let descricao = "";

  // Itera sobre cada Pokémon no array de Pokémon mais votados
  for (let dado of pokemonsMaisVotados) {
    nome = dado.nome.toLocaleLowerCase();
    descricao = dado.descricao.toLocaleLowerCase();
    /**
     * Para cada Pokémon, cria um elemento HTML para exibir as informações.
     * As informações são obtidas das propriedades do objeto `dado`.
     */
    // se nomr includes campPesquisa
    if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
      resultados += `
      <div class="item-resultado">
        <h2><a href="#" target="_blank">${dado.nome}</a></h2>
        <p class="descricao-meta"> Técnicas: ${dado.habilidades}</p>
        <p class="descricao-meta"> Descrição: ${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Clique aqui para saber mais</a>
        <p class="descricao-meta"> Votos recebidos: ${dado.votos}</p>
      </div>
    `;
    }
  }

  if(!resultados){
    resultados = "<p> Nada foi encontrado ! </p>"
  }
  // Insere o HTML gerado na seção HTML selecionada
  section.innerHTML = resultados;
}


