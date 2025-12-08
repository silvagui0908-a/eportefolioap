/**
 * func.js
 * Funções utilitárias para adicionar funcionalidades ao seu portfólio.
 */

// Exemplo: Alternar tema claro/escuro
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

// Exemplo: Rolagem suave para seções
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Exemplo: Mostrar mensagem de boas-vindas
function showWelcomeMessage() {
    alert('Bem-vindo ao meu portfólio!');
}

// Exemplo: Copiar texto para área de transferência
function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => alert('Texto copiado!'))
        .catch(() => alert('Falha ao copiar texto.'));
}

// Função para mostrar/ocultar abas
function showTab(tabId, btn) {
    const tabs = ['inicio', 'sobre-mim', 'sumarios'];
    tabs.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            section.style.display = (id === tabId) ? 'block' : 'none';
        }
    });
    // Destacar aba ativa
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    // Esconder detalhe da aula se mudar de aba
    if(tabId !== 'sumarios') {
        const detalhe = document.getElementById('aula-detalhe');
        if(detalhe) detalhe.style.display = 'none';
    }
}

// Dados das aulas
const aulasDetalhes = {
    1: {
        titulo: "Aula 1: Apresentação",
        data: "10/09/2025",
        texto: "Apresentação do professor e dos alunos. Enquadramento da disciplina Aplicações Informáticas B: objetivos, conteúdos programáticos e metodologia de trabalho. Apresentação das normas e regras de funcionamento da disciplina. Esclarecimento sobre critérios de avaliação.",
        materiais: [
        ],
        opiniao: "Uma boa introdução à disciplina, com esclarecimentos importantes sobre o funcionamento e expectativas."
    },
    2: {
        titulo: "Aula 2: Introdução aos conceitos fundamentais",
        data: "19/09/2025",
        texto: "Introdução aos conceitos de linguagem natural e linguagem formal.A importância da programação. Conceito de algoritmo . Apresentação do pseudocódigo como forma estruturada de representação de algoritmos.",
        materiais: [
            { imagem: "imgs/aula2--1.png" }
        ],
        opiniao: "Aprendizagem de conteudos precisos para o desenvolvimento de softwares."
    },
    3: {
        titulo: "Aula 3: Introdução ao ePortfólio",
        data: "19/09/2025",
        texto: "Introdução ao ePortfólio, discucao das datas de entrega e como vai funcionar a avaliacao da disciplina.",
        materiais: [
            { imagem: "imgs/portefolio.png" }
        ],
        opiniao: "Uma aula útil para entender como documentar e refletir sobre o aprendizado ao longo do periodo escolar."
    },
    4: {
        titulo: "Aula 4: Resolução de exercícios práticos",
        data: "25/09/2025",
        texto: "Resolução de exercícios práticos de modo a rever, aplicar e consolidar os conteúdos abordados até ao momento.",
        materiais: [
            { imagem: "imgs/aula2--2.png" },
            { imagem: "imgs/aula3--1.png" }
        ],
        opiniao: "Exercícios práticos que ajudaram a fixar os conceitos aprendidos."
    },
    5: {
        titulo: "Aula 5: Resolução de exercícios práticos",
        data: "26/09/2025",
        texto: "Resolução de exercícios práticos de modo a rever, aplicar e consolidar os conteúdos abordados até ao momento.",
        materiais: [
            { imagem: "imgs/aula3--2.png" }
        ],
        opiniao: "Exercícios práticos que ajudaram a fixar os conceitos aprendidos."
    },
    6: {
        titulo: "Aula 6: Resolução de exercícios práticos",
        data: "26/09/2025",
        texto: "Resolução de exercícios práticos de modo a rever, aplicar e consolidar os conteúdos abordados até ao momento.",
        materiais: [
        ],
        opiniao: "Exercícios práticos que ajudaram a fixar os conceitos aprendidos."
    },
    7: {
        titulo: "Aula 7: Resolução de exercícios práticos",
        data: "02/10/2025",
        texto: "Resolução de exercícios práticos de modo a rever, aplicar e consolidar os conteúdos abordados até ao momento.",
        materiais: [
        ],
        opiniao: "Exercícios práticos que ajudaram a fixar os conceitos aprendidos."
    }, 
    8: {
        titulo: "Aula 8: Introdução ao Python",
        data: "03/10/2025",
        texto: "Introdução à linguagem de programação Python: características e aplicações. Utilizar um IDE para desenvolvimento e execução de programas. Identificar diferentes tipos de dados. Utilizar variáveis em programas. Elaborar programas em ambiente de consola.",
        materiais: [
            { imagem: "imgs/ficha2--1.png" }
        ],
        opiniao: "Uma introdução clara e prática ao Python, facilitando o início na programação."
    }, 
    9: {
        titulo: "Aula 9: Resolução de exercícios práticos",
        data: "03/10/2025",
        texto: "Resolução de exercícios práticos utilizando a linguagem de programação Python de forma a rever, aplicar e consolidar os conteúdos.",
        materiais: [
        ],
        opiniao: "Exercícios práticos que ajudaram a fixar os conceitos aprendidos em Python."
    },
    10: {
        titulo: "Aula 10: Resolução de exercícios práticos",
        data: "09/10/2025",
        texto: "Resolução de exercícios práticos utilizando a linguagem de programação Python de forma a rever, aplicar e consolidar os conteúdos.",
        materiais: [
            { imagem: "imgs/ficha3--1.png" }
        ],
        opiniao: "Exercícios práticos que ajudaram a fixar os conceitos aprendidos em Python."
    },
    11: {
        titulo: "Aula 11: Resolução de exercícios práticos",
        data: "10/10/2025",
        texto: "Resolução de exercícios práticos utilizando a linguagem de programação Python de forma a rever, aplicar e consolidar os conteúdos.",
        materiais: [
            { imagem: "imgs/ficha3--2.png" }
        ],
        opiniao: "Exercícios práticos que ajudaram a fixar os conceitos aprendidos em Python."
    },
    12: {
        titulo: "Aula 12: Resolução de exercícios práticos",
        data: "10/10/2025",
        texto: "Resolução de exercícios práticos utilizando a linguagem de programação Python de forma a rever, aplicar e consolidar os conteúdos.",
        materiais: [
            { imagem: "imgs/ficha3--3.png" }
        ],
        opiniao: "Exercícios práticos que ajudaram a fixar os conceitos aprendidos em Python."
    },
    13: {
        titulo: "Aula 13: Resolução de exercícios práticos",
        data: "16/10/2025",
        texto: "Resolução de exercícios práticos utilizando a linguagem de programação Python de forma a rever, aplicar e consolidar os conteúdos.",
        materiais: [
        ],
        opiniao: "Exercícios práticos que ajudaram a fixar os conceitos aprendidos em Python."
    },
    14: {
        titulo: "Aula 14: Resolução de exercícios práticos",
        data: "17/10/2025",
        texto: "Resolução de exercícios práticos utilizando a linguagem de programação Python de forma a rever, aplicar e consolidar os conteúdos.",
        materiais: [
        ],
        opiniao: "Exercícios práticos que ajudaram a fixar os conceitos aprendidos em Python."
    },
    15: {
        titulo: "Aula 15: Resolução de exercícios práticos",
        data: "17/10/2025",
        texto: "Resolução de exercícios práticos utilizando a linguagem de programação Python de forma a rever, aplicar e consolidar os conteúdos.",
        materiais: [
        ],
        opiniao: "Exercícios práticos que ajudaram a fixar os conceitos aprendidos em Python."
    },
    16: {
        titulo: "Aula 16: Elaborar programas com a biblioteca turtle",
        data: "23/10/2025",
        texto: "Resolução de exercícios em Python e aprendizagem da biblioteca turtle comecando a fazer alguns exercícios.",
        materiais: [
            { imagem: "imgs/ficha4--1.png" }
        ],
        opiniao: "Facil aprendizagem da biblioteca turtle expandido a nossa criatividade."
    },
    17: {
        titulo: "Aula 17: Resolução de exercícios práticos",
        data: "24/10/2025",
        texto: "Resolução de exercícios práticos utilizando a linguagem de programação Python de forma a rever, aplicar e consolidar os conteúdos.",
        materiais: [
            { imagem: "imgs/ficha4--2.png" }
        ],
        opiniao: "Exercícios práticos que ajudaram a fixar os conceitos aprendidos em Python."
    },
    18: {
        titulo: "Aula 18: Resolução de exercícios práticos",
        data: "24/10/2025",
        texto: "Resolução de exercícios práticos utilizando a linguagem de programação Python de forma a rever, aplicar e consolidar os conteúdos.",
        materiais: [
        ],
        opiniao: "Exercícios práticos que ajudaram a fixar os conceitos aprendidos em Python."
    },
    19: {
        titulo: "Aula 19: Resolução de exercícios práticos",
        data: "30/10/2025",
        texto: "Resolução de exercícios práticos utilizando a linguagem de programação Python de forma a rever, aplicar e consolidar os conteúdos.",
        materiais: [
        ],
        opiniao: "Exercícios práticos que ajudaram a fixar os conceitos aprendidos em Python."
    },
    20: {
        titulo: "Aula 20: Resolução de exercícios práticos",
        data: "31/10/2025",
        texto: "Resolução de exercícios práticos utilizando a linguagem de programação Python de forma a rever, aplicar e consolidar os conteúdos.",
        materiais: [
            { imagem: "imgs/ficha5--1.png" }
        ],
        opiniao: "Exercícios práticos que ajudaram a fixar os conceitos aprendidos em Python."
    },
    21: {
        titulo: "Aula 21: Resolução de exercícios práticos",
        data: "31/10/2025",
        texto: "Resolução de exercícios práticos utilizando a linguagem de programação Python de forma a rever, aplicar e consolidar os conteúdos.",
        materiais: [
            { imagem: "imgs/ficha5--2.png" }
        ],
        opiniao: "Exercícios práticos que ajudaram a fixar os conceitos aprendidos em Python."
    },
    22: {
        titulo: "Aula 22: Análise dos portefolios.",
        data: "06/11/2025",
        texto: "Análise dos portefolios individuais e resolução de exercícios práticos.",
        materiais: [
            { imagem: "imgs/ficha5--3.png" }
        ],
        opiniao: "Exercícios práticos que ajudaram a fixar os conceitos aprendidos em Python."
    },
    23: {
        titulo: "Análise de portefólios e programas gráficos em turtle.",
        data: "07/11/2025",
        texto: "Foram analisados os portefólios individuais e desenvolvidos pequenos projetos gráficos utilizando a biblioteca turtle, reforçando os conteúdos através de exercícios práticos.",
        materiais: [],
        opiniao: "A aula foi bastante produtiva, permitindo aos alunos aplicar competências gráficas e rever conceitos essenciais."
    },
    24: {
        titulo: "Revisão de portefólios e prática em turtle.",
        data: "07/11/2025",
        texto: "Nesta sessão foram revistos os portefólios e realizados exercícios de programação gráfica em turtle para consolidar os conhecimentos adquiridos.",
        materiais: [],
        opiniao: "Os alunos mostraram evolução clara na utilização da biblioteca turtle."
    },
    25: {
        titulo: "Professor em serviço oficial — Web Summit Lisboa 2025.",
        data: "13/11/2025",
        texto: "Devido à participação numa visita de estudo à Web Summit Lisboa 2025, não se realizou a aula regular.",
        materiais: [],
        opiniao: "A ausência foi justificada e relacionada com um evento de grande relevância tecnológica."
    },
    26: {
        titulo: "Participação no concurso Bebras.",
        data: "14/11/2025",
        texto: "A aula foi reservada para a participação dos alunos no concurso Bebras, focado no pensamento computacional e resolução de desafios lógicos.",
        materiais: [
            { imagem: "imgs/bebras.png" }
        ],
        opiniao: "Os estudantes envolveram-se bem nos desafios, demonstrando interesse e motivação."
    },
    27: {
        titulo: "Programas em consola com seleção, ciclos e números aleatórios.",
        data: "14/11/2025",
        texto: "Foram criados programas em modo consola aplicando estruturas condicionais, ciclos repetitivos e geração de números pseudoaleatórios.",
        materiais: [
            { imagem: "imgs/ficha6--1.png" }
        ],
        opiniao: "A aula consolidou eficazmente conceitos essenciais de programação estruturada."
    },
    28: {
        titulo: "Consola: seleção, ciclos, aleatoriedade e exercícios.",
        data: "20/11/2025",
        texto: "Os alunos programaram usando decisões, ciclos e números aleatórios, finalizando com exercícios para reforçar os conteúdos.",
        materiais: [
            { imagem: "imgs/ficha6--2.png" }
        ],
        opiniao: "A prática ajudou a esclarecer dúvidas e a reforçar capacidades."
    },
    29: {
        titulo: "Escola encerrada devido a greve.",
        data: "21/11/2025",
        texto: "A escola esteve encerrada por motivo de greve, impossibilitando a realização das atividades letivas.",
        materiais: [],
        opiniao: "A interrupção foi inevitável; sem impacto avaliativo direto."
    },
    30: {
        titulo: "Escola encerrada devido a greve.",
        data: "21/11/2025",
        texto: "A continuação da greve impediu novamente a realização de aulas neste dia.",
        materiais: [],
        opiniao: "Mais um dia sem atividade letiva, exigindo reorganização posterior."
    },
    31: {
        titulo: "Consola: seleção, ciclos, aleatoriedade e exercícios.",
        data: "27/11/2025",
        texto: "Foram realizados programas em consola aplicando estruturas condicionais e repetitivas, juntamente com números pseudoaleatórios, terminando com exercícios práticos.",
        materiais: [
            { imagem: "imgs/ficha6--3.png" }
        ],
        opiniao: "Os alunos mostraram boa capacidade de aplicar os conceitos em exercícios reais."
    },
    32: {
        titulo: "Exercícios para consolidação de conteúdos.",
        data: "28/11/2025",
        texto: "A aula foi dedicada à resolução de exercícios destinados a reforçar os conteúdos previamente abordados.",
        materiais: [
            { imagem: "imgs/ficha6--4.png" }
        ],
        opiniao: "Uma sessão útil para ganhar fluidez na aplicação dos conhecimentos."
    },
    33: {
        titulo: "Exercícios de consolidação de conteúdos.",
        data: "28/11/2025",
        texto: "A continuação da prática permitiu aprofundar e aplicar os conhecimentos em programação.",
        materiais: [],
        opiniao: "A repetição orientada revelou-se eficaz para os alunos assimilarem conceitos."
    },
    34: {
        titulo: "Resolver problemas: controlo, ciclos e manipulação de strings.",
        data: "04/12/2025",
        texto: "Foram resolvidos problemas que envolveram estruturas de decisão, ciclos e operações com strings e caracteres, reforçando as bases de programação.",
        materiais: [],
        opiniao: "A aula foi muito completa e permitiu trabalhar várias competências em simultâneo."
    },
    35: {
        titulo: "Exercícios práticos para rever e consolidar.",
        data: "05/12/2025",
        texto: "A sessão consistiu em exercícios práticos direcionados para rever tópicos essenciais de programação.",
        materiais: [],
        opiniao: "Boa aula para reforçar conteúdos antes de avançar para temas mais complexos."
    },
    36: {
        titulo: "Exercícios finais de consolidação.",
        data: "05/12/2025",
        texto: "Foram resolvidos exercícios adicionais para solidificar definitivamente os conteúdos trabalhados ao longo das últimas aulas.",
        materiais: [],
        opiniao: "Excelente finalização do ciclo de conteúdos; alunos mostraram progresso evidente."
    }
}



function showAulaDetalhe(aulaNum) {
    const detalhe = aulasDetalhes[aulaNum];
    if (!detalhe) return;
    document.getElementById('sumarios').style.display = 'none';
    document.getElementById('aula-detalhe').style.display = 'block';
    let html = `
        <h2>${detalhe.titulo}</h2>
        <div class="sumario-header">
            <span class="sumario-label">Sumário:</span>
            <span class="sumario-data">Data: ${detalhe.data}</span>
        </div>
        <p style="margin-top:18px;">${detalhe.texto}</p>
        <div class="materiais-opiniao">
            <div class="materiais">
                <h3>Materiais da Aula:</h3>
                <div class="materiais-imagens">
                    ${detalhe.materiais.map(m => `
                        ${m.imagem ? 
                            `<img src="${m.imagem}" alt="${detalhe.titulo}" style="max-width:300px; margin:10px 0; border-radius:8px;">`
                        : ""}
                    `).join("")}
                </div>
            </div>
            <div class="opiniao">
                <h3>Minha Opinião:</h3>
                <p>${detalhe.opiniao || "Ainda não escrevi a opinião desta aula."}</p>
            </div>
        </div>
    `;
    document.getElementById('aula-detalhe-conteudo').innerHTML = html;
}





function voltarSumarios() {
    document.getElementById('aula-detalhe').style.display = 'none';
    document.getElementById('sumarios').style.display = 'block';
}

// Mostrar a aba "inicio" ao carregar a página
window.onload = function() {
    showTab('inicio', document.querySelector('.tab-btn'));
};

function showTab(tabId, btn) {
    const tabs = ['inicio', 'sobre-mim', 'sumarios', 'bibliografia']; 
    tabs.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            section.style.display = (id === tabId) ? 'block' : 'none';
        }
    });
    // Destacar aba ativa
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    // Esconder detalhe da aula se mudar de aba
    if(tabId !== 'sumarios') {
        const detalhe = document.getElementById('aula-detalhe');
        if(detalhe) detalhe.style.display = 'none';
    }
}
