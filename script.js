/* =========================
   CARACTERÍSTICAS DA NUVEM
========================= */

function mostrarCaracteristica(tipo) {

    const caixa = document.getElementById(
        "explicacao-caracteristica"
    );

    const textos = {

        internet:
            "Os recursos e serviços podem ser acessados pela internet a partir de diferentes dispositivos e locais.",

        escala:
            "A infraestrutura pode ser ampliada ou reduzida conforme a necessidade dos usuários.",

        flexibilidade:
            "A computação em nuvem permite acessar recursos e serviços de diferentes locais e dispositivos.",

        compartilhamento:
            "Os recursos computacionais podem ser compartilhados entre múltiplos usuários, favorecendo o melhor aproveitamento da infraestrutura."
    };

    caixa.textContent = textos[tipo];
}


/* =========================
   MODELOS IAAS / PAAS / SAAS
========================= */

function mostrarModelo(modelo) {

    const caixa = document.getElementById(
        "modelo-info"
    );

    if (modelo === "iaas") {

        caixa.innerHTML = `
            <h3>IaaS — Infraestrutura como Serviço</h3>

            <p>
                Fornece servidores virtuais, redes e armazenamento
                pela internet. O usuário possui maior controle sobre
                o sistema operacional e as aplicações.
            </p>

            <p>
                Exemplos: AWS EC2, Google Compute Engine e
                Microsoft Azure VMs.
            </p>
        `;
    }


    if (modelo === "paas") {

        caixa.innerHTML = `
            <h3>PaaS — Plataforma como Serviço</h3>

            <p>
                Oferece plataformas e ferramentas para desenvolvimento
                de aplicações sem que o usuário precise gerenciar
                diretamente a infraestrutura subjacente.
            </p>

            <p>
                Exemplos: Google App Engine, Heroku e Azure App Service.
            </p>
        `;
    }


    if (modelo === "saas") {

        caixa.innerHTML = `
            <h3>SaaS — Software como Serviço</h3>

            <p>
                Disponibiliza aplicações completas pela internet,
                acessíveis por navegador ou aplicativo, sem necessidade
                de instalação local.
            </p>

            <p>
                Exemplos: Google Drive, Microsoft 365, Dropbox e Zoom.
            </p>
        `;
    }
}


/* =========================
   MITO OU VERDADE
========================= */

function verificarMito(resposta) {

    const resultado =
        document.getElementById("resultado-mito");


    if (resposta === false) {

        resultado.innerHTML = `
            <strong>Resposta correta!</strong><br><br>

            A computação em nuvem não é livre de impactos ambientais.
            Ela envolve consumo de energia, sistemas de refrigeração,
            equipamentos eletrônicos e infraestrutura de data centers.
        `;

    } else {

        resultado.innerHTML = `
            <strong>Não é a alternativa correta.</strong><br><br>

            A computação em nuvem também apresenta impactos ambientais,
            como consumo de energia, refrigeração e infraestrutura
            dos data centers.
        `;
    }
}


/* =========================
   QUIZ
========================= */

const perguntas = [

    {
        pergunta:
            "Qual é uma característica da computação em nuvem?",

        opcoes: [
            "Acesso apenas por um computador específico",
            "Acesso pela internet",
            "Ausência de recursos compartilhados",
            "Necessidade obrigatória de infraestrutura local"
        ],

        correta: 1
    },


    {
        pergunta:
            "O que os data centers precisam consumir para operar e manter seus sistemas de refrigeração?",

        opcoes: [
            "Energia elétrica",
            "Somente papel",
            "Apenas água potável",
            "Somente materiais recicláveis"
        ],

        correta: 0
    },


    {
        pergunta:
            "Qual tecnologia permite criar máquinas virtuais a partir de servidores físicos?",

        opcoes: [
            "Virtualização",
            "Impressão digital",
            "Videoconferência",
            "Armazenamento físico"
        ],

        correta: 0
    },


    {
        pergunta:
            "Qual modelo de nuvem oferece maior controle ao usuário?",

        opcoes: [
            "SaaS",
            "PaaS",
            "IaaS",
            "Nenhum deles"
        ],

        correta: 2
    },


    {
        pergunta:
            "Qual modelo disponibiliza aplicações completas pela internet?",

        opcoes: [
            "IaaS",
            "PaaS",
            "SaaS",
            "Data Center"
        ],

        correta: 2
    },


    {
        pergunta:
            "Como a nuvem pode contribuir para reduzir o uso de papel?",

        opcoes: [
            "Eliminando todos os documentos",
            "Utilizando armazenamento digital e colaboração online",
            "Aumentando a impressão de documentos",
            "Substituindo computadores por papel"
        ],

        correta: 1
    },


    {
        pergunta:
            "Como videoconferências e trabalho remoto podem contribuir para a sustentabilidade?",

        opcoes: [
            "Aumentando deslocamentos",
            "Reduzindo deslocamentos",
            "Eliminando a internet",
            "Aumentando o uso de servidores locais"
        ],

        correta: 1
    },


    {
        pergunta:
            "Qual dessas é uma estratégia de otimização da infraestrutura?",

        opcoes: [
            "Virtualização",
            "Aumento do desperdício",
            "Uso de equipamentos ociosos",
            "Ausência de monitoramento"
        ],

        correta: 0
    },


    {
        pergunta:
            "Qual ODS está relacionado à Indústria, Inovação e Infraestrutura?",

        opcoes: [
            "ODS 9",
            "ODS 12",
            "ODS 13",
            "ODS 1"
        ],

        correta: 0
    },


    {
        pergunta:
            "Qual é a ideia principal relacionada à sustentabilidade na computação em nuvem?",

        opcoes: [
            "A nuvem não possui nenhum impacto ambiental",
            "A tecnologia deve ser utilizada de forma eficiente e consciente",
            "Todo consumo de energia deve ser eliminado",
            "Os data centers devem deixar de existir"
        ],

        correta: 1
    }

];


let perguntaAtual = 0;

let pontos = 0;

let respondeu = false;


/* =========================
   INICIAR QUIZ
========================= */

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


/* =========================
   MOSTRAR PERGUNTA
========================= */

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


/* =========================
   VERIFICAR RESPOSTA
========================= */

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


/* =========================
   PRÓXIMA PERGUNTA
========================= */

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


/* =========================
   PROGRESSO
========================= */

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


/* =========================
   FINALIZAR QUIZ
========================= */

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
            "Você pode revisar alguns conceitos da apresentação.";

    } else if (pontos <= 7) {

        mensagem.textContent =
            "Bom resultado! Você já compreendeu boa parte dos conceitos.";

    } else {

        mensagem.textContent =
            "Excelente! Você demonstrou um ótimo conhecimento sobre o tema.";
    }
}


/* =========================
   REINICIAR
========================= */

function reiniciarQuiz() {

    document
        .getElementById("resultadoQuiz")
        .classList.add("escondido");


    document
        .querySelector(".quiz-intro")
        .classList.remove("escondido");


    window.location.hash = "quiz";
}


/* =========================
   VOLTAR AO TOPO
========================= */

function voltarTopo() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });
}