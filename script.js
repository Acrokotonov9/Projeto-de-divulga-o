const projetos = [

    {
        id: 1,
        categoria: "Acessibilidade",
        titulo: "Plataforma inteligente de apoio a pessoas com baixa visão",
        resumo: "Sistema web e mobile que utiliza inteligência artificial para auxiliar pessoas com baixa visão em tarefas do dia a dia.",
        autor: "João da Silva",
        curso: "Ciência da Computação",
        instituicao: "Universidade XYZ",
        ano: "2026",
        tecnologias: "HTML, CSS, JavaScript, Python",
        descricao: `
            O projeto propõe uma plataforma inteligente voltada à acessibilidade,
            utilizando recursos de inteligência artificial para auxiliar pessoas
            com baixa visão em atividades cotidianas.

            A solução busca promover autonomia, inclusão e facilitar o acesso
            a informações por meio do reconhecimento de objetos, leitura de
            textos e descrição de ambientes.
        `,
        relevancia: [2, 6, 10, 82]
    },

    {
        id: 2,
        categoria: "IA",
        titulo: "Sistema de recomendação acadêmica",
        resumo: "Ferramenta que aproxima estudantes de projetos de acordo com seus interesses.",
        autor: "Ana Souza",
        curso: "Sistemas de Informação",
        instituicao: "Instituto XYZ",
        ano: "2026",
        tecnologias: "JavaScript, Python",
        descricao: `
            Sistema desenvolvido para recomendar projetos acadêmicos
            de acordo com os interesses e preferências dos usuários.
        `,
        relevancia: [3, 8, 22, 67]
    },

    {
        id: 3,
        categoria: "Robótica",
        titulo: "Automação inteligente para laboratórios",
        resumo: "Projeto de automação para tornar atividades laboratoriais mais eficientes.",
        autor: "Lucas Pereira",
        curso: "Engenharia",
        instituicao: "Instituto XYZ",
        ano: "2026",
        tecnologias: "Arduino, C++",
        descricao: `
            Projeto desenvolvido para automatizar tarefas repetitivas
            em ambientes laboratoriais, buscando maior eficiência.
        `,
        relevancia: [5, 10, 30, 55]
    },

    {
        id: 4,
        categoria: "Meio ambiente",
        titulo: "Monitoramento ambiental inteligente",
        resumo: "Monitoramento de indicadores ambientais por sensores.",
        autor: "Marina Lima",
        curso: "Engenharia Ambiental",
        instituicao: "Universidade XYZ",
        ano: "2026",
        tecnologias: "IoT, JavaScript",
        descricao: `
            Sistema que utiliza sensores e processamento de dados
            para acompanhar indicadores ambientais.
        `,
        relevancia: [2, 7, 26, 65]
    },

    {
        id: 5,
        categoria: "Automação",
        titulo: "Automação residencial acessível",
        resumo: "Sistema de automação pensado para facilitar tarefas domésticas.",
        autor: "Pedro Alves",
        curso: "Tecnologia",
        instituicao: "Instituto XYZ",
        ano: "2026",
        tecnologias: "ESP32, JavaScript",
        descricao: `
            Uma proposta de automação residencial com foco em
            praticidade, acessibilidade e controle simplificado.
        `,
        relevancia: [4, 9, 27, 60]
    },

    {
        id: 6,
        categoria: "IA",
        titulo: "Assistente virtual educacional",
        resumo: "Assistente para apoiar estudantes durante os estudos.",
        autor: "Beatriz Costa",
        curso: "Ciência da Computação",
        instituicao: "Universidade XYZ",
        ano: "2026",
        tecnologias: "Python, IA",
        descricao: `
            Ferramenta baseada em inteligência artificial para auxiliar
            estudantes na organização e compreensão dos conteúdos.
        `,
        relevancia: [2, 8, 20, 70]
    }

];


const grid = document.getElementById("projetos");

const home = document.getElementById("home");

const telaProjeto = document.getElementById("projeto");

const busca = document.getElementById("search");



function mostrarProjetos(lista) {

    grid.innerHTML = "";

    lista.forEach(projeto => {

        const card = document.createElement("div");

        card.classList.add("card-projeto");

        card.innerHTML = `

            <div class="card-topo">

                <div class="imagem-card">
                    ▧
                </div>

                <div class="card-info">

                    <span class="categoria-card">
                        ${projeto.categoria}
                    </span>

                    <h3>
                        ${projeto.titulo}
                    </h3>

                    <p>
                        ${projeto.resumo}
                    </p>

                </div>

            </div>


            <div class="card-footer">

                <div class="avatar">
                    👤
                </div>

                <button
                    class="botao ver-projeto"
                    data-id="${projeto.id}">
                    VER PROJETO
                </button>

            </div>
        `;

        grid.appendChild(card);

    });


    document.querySelectorAll(".ver-projeto").forEach(botao => {

        botao.addEventListener("click", () => {

            abrirProjeto(
                Number(botao.dataset.id)
            );

        });

    });

}



function abrirProjeto(id) {

    const projeto = projetos.find(
        item => item.id === id
    );

    document.getElementById("categoriaProjeto").textContent =
        projeto.categoria.toUpperCase();

    document.getElementById("tituloProjeto").textContent =
        projeto.titulo;

    document.getElementById("resumoProjeto").textContent =
        projeto.resumo;

    document.getElementById("descricaoProjeto").textContent =
        projeto.descricao;

    document.getElementById("autorProjeto").textContent =
        projeto.autor;

    document.getElementById("autorContato").textContent =
        projeto.autor;

    document.getElementById("curso").textContent =
        projeto.curso;

    document.getElementById("instituicao").textContent =
        projeto.instituicao;

    document.getElementById("ano").textContent =
        projeto.ano;

    document.getElementById("tecnologias").textContent =
        projeto.tecnologias;



    document.getElementById("porcentagem").textContent =
        projeto.relevancia[3] + "%";


    projeto.relevancia.forEach((valor, indice) => {

        document.getElementById(
            `barra${indice + 1}`
        ).style.width = valor + "%";

    });


    home.classList.add("hidden");

    telaProjeto.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



document.getElementById("voltar").addEventListener(
    "click",
    () => {

        telaProjeto.classList.add("hidden");

        home.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);



document.querySelectorAll(".categorias button").forEach(botao => {

    botao.addEventListener("click", () => {

        const categoria =
            botao.dataset.categoria;

        if (categoria === "Todos") {

            mostrarProjetos(projetos);

            return;

        }

        const filtrados =
            projetos.filter(
                projeto =>
                    projeto.categoria === categoria
            );

        mostrarProjetos(filtrados);

    });

});



busca.addEventListener("input", () => {

    const texto =
        busca.value.toLowerCase();

    const resultados =
        projetos.filter(projeto =>

            projeto.titulo
                .toLowerCase()
                .includes(texto)

            ||

            projeto.categoria
                .toLowerCase()
                .includes(texto)

            ||

            projeto.resumo
                .toLowerCase()
                .includes(texto)

        );

    mostrarProjetos(resultados);

});



document.getElementById("avaliar").addEventListener(
    "click",
    () => {

        document
            .getElementById("opcoes")
            .classList.toggle("hidden");

    }
);


document.querySelectorAll("#opcoes button").forEach(botao => {

    botao.addEventListener("click", () => {

        alert(
            "Avaliação registrada: " +
            botao.textContent
        );

        document
            .getElementById("opcoes")
            .classList.add("hidden");

    });

});



mostrarProjetos(projetos);