function mostrarCaracteristica(tipo) {

    const caixa = document.getElementById(
        "explicacao-caracteristica"
    );

    const textos = {

        internet:
            "As ferramentas de Inteligência Artificial podem ser acessadas pela internet a partir de diferentes dispositivos, como computadores, celulares e tablets.",

        escala:
            "As ferramentas de IA podem ser utilizadas em diferentes situações, desde tarefas simples do dia a dia até atividades que exigem maior processamento de informações.",

        flexibilidade:
            "A Inteligência Artificial pode ser utilizada em diferentes locais e dispositivos para auxiliar em estudos, pesquisas, organização de informações, comunicação e trabalho.",

        compartilhamento:
            "As ferramentas de IA podem apoiar diferentes pessoas em atividades de aprendizagem, produção de conteúdos, pesquisas e organização de informações."
    };

    caixa.textContent = textos[tipo];
}


function mostrarModelo(modelo) {

    const caixa = document.getElementById(
        "modelo-info"
    );

    if (modelo === "iaas") {

        caixa.innerHTML = `
            <h3>Assistentes de Inteligência Artificial</h3>

            <p>
                São ferramentas que podem auxiliar o usuário em
                tarefas como pesquisas, organização de informações,
                estudos e esclarecimento de dúvidas.
            </p>

            <p>
                Exemplos: assistentes virtuais e ferramentas de IA
                disponíveis em aplicativos e plataformas digitais.
            </p>
        `;
    }

    if (modelo === "paas") {

        caixa.innerHTML = `
            <h3>IA Generativa</h3>

            <p>
                É um tipo de Inteligência Artificial capaz de gerar
                conteúdos a partir de comandos fornecidos pelo usuário,
                como textos, imagens, áudios e outros materiais.
            </p>

            <p>
                Exemplos: ferramentas de geração de textos, imagens
                e outros conteúdos utilizando Inteligência Artificial.
            </p>
        `;
    }

    if (modelo === "saas") {

        caixa.innerHTML = `
            <h3>IA em Aplicativos e Plataformas</h3>

            <p>
                A Inteligência Artificial também está presente em
                aplicativos, mecanismos de busca, redes sociais e
                plataformas digitais utilizadas no cotidiano.
            </p>

            <p>
                Ela pode auxiliar em recomendações, pesquisas,
                comunicação, organização de informações e outras tarefas.
            </p>
        `;
    }
}


function verificarMito(resposta) {

    const resultado =
        document.getElementById("resultado-mito");


    if (resposta === false) {

        resultado.innerHTML = `
            <strong>Resposta correta!</strong><br><br>

            A Inteligência Artificial pode apresentar erros,
            informações incompletas ou inadequadas. Por isso,
            as respostas geradas devem ser verificadas pelo usuário.
        `;

    } else {

        resultado.innerHTML = `
            <strong>Não é a alternativa correta.</strong><br><br>

            A Inteligência Artificial não é infalível.
            É importante analisar as informações geradas,
            verificar as fontes e utilizar a tecnologia de forma
            consciente e responsável.
        `;
    }
}


const perguntas = [

    {
        pergunta:
            "O que é Inteligência Artificial?",

        opcoes: [
            "Uma tecnologia utilizada somente para jogos",
            "Uma tecnologia que permite às máquinas realizar tarefas relacionadas à inteligência humana",
            "Um tipo de computador sem programas",
            "Um sistema utilizado somente para armazenar arquivos"
        ],

        correta: 1
    },

    {
        pergunta:
            "Qual dessas é uma aplicação da Inteligência Artificial no cotidiano?",

        opcoes: [
            "Recomendações em plataformas digitais",
            "Somente impressão de documentos",
            "Apenas armazenamento de papel",
            "Somente utilização de calculadoras"
        ],

        correta: 0
    },

    {
        pergunta:
            "O que é IA generativa?",

        opcoes: [
            "Uma tecnologia utilizada apenas para armazenar arquivos",
            "Um sistema que não produz nenhum conteúdo",
            "Uma Inteligência Artificial capaz de gerar conteúdos a partir de comandos",
            "Um tipo de conexão de internet"
        ],

        correta: 2
    },

    {
        pergunta:
            "Qual dessas atividades pode ser auxiliada por ferramentas de Inteligência Artificial?",

        opcoes: [
            "Pesquisas e estudos",
            "Somente atividades realizadas sem computador",
            "Apenas impressão de documentos",
            "Somente manutenção de equipamentos"
        ],

        correta: 0
    },

    {
        pergunta:
            "Por que é importante verificar informações fornecidas por uma ferramenta de IA?",

        opcoes: [
            "Porque a IA nunca consegue gerar respostas",
            "Porque as respostas podem apresentar erros ou informações incompletas",
            "Porque a IA funciona somente sem internet",
            "Porque nenhuma ferramenta de IA consegue produzir textos"
        ],

        correta: 1
    },

    {
        pergunta:
            "Qual cuidado é importante ao utilizar ferramentas de Inteligência Artificial?",

        opcoes: [
            "Compartilhar todos os dados pessoais",
            "Confiar em todas as respostas sem verificar",
            "Evitar a análise das informações",
            "Ter cuidado com dados pessoais e informações sensíveis"
        ],

        correta: 3
    },

    {
        pergunta:
            "Em quais áreas a Inteligência Artificial pode ser utilizada?",

        opcoes: [
            "Somente em jogos",
            "Somente em redes sociais",
            "Em estudos, trabalho, comunicação, pesquisas e outras atividades",
            "Somente em computadores antigos"
        ],

        correta: 2
    },

    {
        pergunta:
            "Qual atitude demonstra um uso responsável da Inteligência Artificial?",

        opcoes: [
            "Verificar as informações antes de utilizá-las",
            "Compartilhar informações pessoais sem cuidado",
            "Aceitar qualquer resposta como verdadeira",
            "Utilizar a IA sem considerar possíveis riscos"
        ],

        correta: 0
    },

    {
        pergunta:
            "Qual é um possível benefício da Inteligência Artificial?",

        opcoes: [
            "Auxiliar na realização de tarefas e organização de informações",
            "Eliminar a necessidade de verificar informações",
            "Garantir que todas as respostas estejam corretas",
            "Impedir o acesso das pessoas à tecnologia"
        ],

        correta: 0
    },

    {
        pergunta:
            "Qual é a principal ideia do uso consciente da Inteligência Artificial?",

        opcoes: [
            "Utilizar qualquer ferramenta sem preocupação",
            "Substituir completamente a avaliação humana",
            "Utilizar a tecnologia de forma responsável, segura e crítica",
            "Compartilhar todas as informações com as ferramentas de IA"
        ],

        correta: 2
    }

];


let perguntaAtual = 0;

let pontos = 0;

let respondeu = false;


document
    .getElementById("iniciarQuiz")
    .addEventListener("click", iniciarQuiz);


function iniciarQuiz() {

    perguntaAtual = 0;

    pontos = 0;

    respondeu = false;

    document
        .querySelector(".quiz-intro")
        .classList.add("escondido");


    document
        .getElementById("resultadoQuiz")
        .classList.add("escondido");


    document
        .getElementById("quiz-area")
        .classList.remove("escondido");

    mostrarPergunta();
}


function mostrarPergunta() {

    respondeu = false;

    const pergunta =
        perguntas[perguntaAtual];

    document
        .getElementById("numeroPergunta")
        .textContent =
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;

    document
        .getElementById("pontuacao")
        .textContent =
        `Pontos: ${pontos}`;

    document
        .getElementById("pergunta")
        .textContent =
        pergunta.pergunta;

    const opcoes =
        document.getElementById("opcoes");

    opcoes.innerHTML = "";

    pergunta.opcoes.forEach(
        (opcao, indice) => {

            const botao =
                document.createElement("button");

            botao.className = "opcao";

            botao.textContent = opcao;

            botao.addEventListener(
                "click",
                () => verificarResposta(
                    indice,
                    botao
                )
            );

            opcoes.appendChild(botao);
        }
    );

    document
        .getElementById("feedback")
        .textContent = "";

    document
        .getElementById("proxima")
        .classList.add("escondido");

    atualizarProgresso();
}


function verificarResposta(
    indice,
    botaoSelecionado
) {

    if (respondeu) {

        return;
    }

    respondeu = true;

    const pergunta =
        perguntas[perguntaAtual];

    const botoes =
        document.querySelectorAll(".opcao");

    botoes.forEach(
        (botao, indiceBotao) => {

            botao.disabled = true;

            if (
                indiceBotao === pergunta.correta
            ) {

                botao.classList.add(
                    "correta"
                );
            }
        }
    );

    if (indice === pergunta.correta) {

        pontos++;

        botaoSelecionado.classList.add(
            "correta"
        );

        document
            .getElementById("feedback")
            .textContent =
            "Resposta correta! Você ganhou 1 ponto.";

    } else {

        botaoSelecionado.classList.add(
            "errada"
        );

        document
            .getElementById("feedback")
            .textContent =
            `Resposta incorreta. A alternativa correta é: ${pergunta.opcoes[pergunta.correta]}.`;
    }

    document
        .getElementById("pontuacao")
        .textContent =
        `Pontos: ${pontos}`;

    document
        .getElementById("proxima")
        .classList.remove("escondido");
}


document
    .getElementById("proxima")
    .addEventListener(
        "click",
        proximaPergunta
    );


function proximaPergunta() {

    perguntaAtual++;

    if (
        perguntaAtual <
        perguntas.length
    ) {

        mostrarPergunta();

    } else {

        finalizarQuiz();
    }
}


function atualizarProgresso() {

    const porcentagem =
        (
            perguntaAtual /
            perguntas.length
        ) * 100;

    document
        .getElementById("progresso")
        .style.width =
        `${porcentagem}%`;
}


function finalizarQuiz() {

    document
        .getElementById("quiz-area")
        .classList.add("escondido");

    document
        .getElementById("resultadoQuiz")
        .classList.remove("escondido");

    document
        .getElementById("pontuacaoFinal")
        .textContent =
        `${pontos} / ${perguntas.length}`;

    const mensagem =
        document.getElementById("mensagemFinal");

    if (pontos <= 4) {

        mensagem.textContent =
            "Você pode revisar alguns conceitos apresentados sobre Inteligência Artificial.";

    } else if (pontos <= 7) {

        mensagem.textContent =
            "Bom resultado! Você já compreendeu boa parte dos conceitos sobre Inteligência Artificial.";

    } else {

        mensagem.textContent =
            "Excelente! Você demonstrou um ótimo conhecimento sobre o uso de ferramentas de Inteligência Artificial.";
    }
}


function reiniciarQuiz() {

    document
        .getElementById("resultadoQuiz")
        .classList.add("escondido");

    document
        .querySelector(".quiz-intro")
        .classList.remove("escondido");

    window.location.hash = "quiz";
}


function voltarTopo() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });
}
