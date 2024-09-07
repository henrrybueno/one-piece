function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um personagem ou tripulação</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let nome = ""; 
    let habilidades = "";
    let recompensa = "";
    let características = "";
    let afiliações = "";
    let aparicoes = "";

    // Itera sobre cada personagem da lista de personagensOnePiece
    for (let personagem of personagensOnePiece) {
        nome = personagem.nome.toLowerCase()
        recompensa = personagem.recompensa.toLowerCase()
        características = personagem.características.toLowerCase()
        afiliações = personagem.afiliações.toLowerCase()
        aparicoes = personagem.aparicoes.toLowerCase()
        // se nome includes campoPesquisa
        if (nome.includes(campoPesquisa) || habilidades.includes(campoPesquisa) || recompensa.includes(campoPesquisa) || características.includes(campoPesquisa) || afiliações.includes(campoPesquisa) || aparicoes.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <img src="${personagem.imagem}" alt="${personagem.nome}">
                <h2><span>${personagem.nome}</span></h2>
                <p class="descricao-meta">Habilidades: <span>${personagem.habilidades}</span></p>
                <p class="descricao-meta">Recompensa: <span>${personagem.recompensa}</span></p>
                <p class="descricao-meta">Características: <span>${personagem.características}</span></p>
                <p class="descricao-meta">Afiliações: <span>${personagem.afiliações}</span></p>
                <p class="descricao-meta">Aparições: <span>${personagem.aparicoes}</span></p>
                <a href="${personagem.link}" target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}