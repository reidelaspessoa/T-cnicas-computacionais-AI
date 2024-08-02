const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas'); 
const caixaAlternativas = document.querySelector('.caixa-alternativas');   
const caixaResultado = document.querySelector('.caixa-resultado'); 
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
    enunciado: "Qual país tem o maior índice de pobreza?",
    alternativas: [
        {
            texto:"África", 
            afirmação:"Afirmação da alternativa 1"
        },
        { 
            texto: "Somália", 
            afirmação: "afirmação da alternativa 2"
        },
        {
            texto: "Suíça",
            afirmação: "afirmação alternativa 3" 
        },
        {
            texto: "Cuba",
            afirmação: "afirmação alternativa 4"
        }
    ]
},
    {
    enunciado: "Qual o estado brasileiro mais racista?",
    alternativas: [
        {
            texto: "São Paulo", 
            afirmação: "afirmação alternativa 1" 
        },
        {
            texto: "Paraná", 
            afirmação: "afirmação alternativa 2" 
        },
        {
            texto: "Rio Granda do Sul", 
            afirmação: "afirmação alternativa3" 
        },
        {
            texto: "Santa Catarina",
            afirmação: "afirmação alternativa 4"
        }
    ]
},
    {
    enunciado: "Qual dos seguintes fatores é mais frequentemente citado como uma causa primária da desigualdade social em sociedades modernas?",
    alternativas: [
        {
            texto: "Distribuição desigual de riqueza e renda", 
            afirmação: "afirmação alternativa 1" 
        },
        {
            texto: "Localização geográfica", 
            afirmação: "afirmação alternativa 2" 
        },
        {
            texto: "Preferências culturais", 
            afirmação: "afirmação alternativa 3" 
        },
        {
            texto: "Condições climáticas",
            afirmação: "afirmação alternativa 4"
        }
    ]
},
    ];

    let atual = 0;
    let perguntaAtual;
    let historiaFinal = "";

    function mostraPergunta() {
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado
        mostraAlternativas();
        }
        function mostraAlternativas() {
            for (const alternativa of perguntaAtual.alternativas) {
            const botaoAlternativas = 
            document.createElement("button");
            botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
            caixaAlternativas.appendChild(botaoAlternativas);
            }
        }
        function respostaSelecionada(opcaoSelecionada) {
            const afirmacoes = opcaoSelecionada.afirmação;
            historiaFinal = afirmacoes;
            atual++;
            mostraPergunta();
            }
        mostraPergunta();