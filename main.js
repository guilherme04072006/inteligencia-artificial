const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que são resíduos sólidos?",
        alternativas: [
            {
                texto: "Galhos, produtos eletroeletrônicos, plástico, embalagem e papelão.",
                afirmacao: "Resíduos sólidos são materiais descartados provenientes de atividades humanas e processos naturais, apresentando-se no estado sólido. "
            },
            {
                texto: "Tudo que seja proveniente de produções humanas ou processos naturais.",
                afirmacao: "Resíduos sólidos são materiais descartados provenientes de atividades humanas e processos naturais, apresentando-se no estado sólido."
            }
        ]
    },
    {
        enunciado: "Como fazer a separação correta do lixo?",
        alternativas: [
            {
                texto: "AMARELO - Metais, Azul - Papel, VRMELHO - Plástico, VERDE - Vidros, PRETO - Madeiras, LARANJA - Pilhas e Baterias, MARROM - Lixo Orgânico, ROXO - Lixo Radioativo, BRANCO - Lixo Hospitalar e CINZA - Não Reciclável",
                afirmacao: "A importância da reciclagem pode ser vista em diferentes aspectos. Primeiramente, ela ajuda a conservar os recursos naturais do nosso planeta. Ao reciclar materiais, podemos reduzir a extração de matérias-primas, como árvores e minerais, preservando os ecossistemas e evitando danos irreversíveis."
            },
            {
                texto: "O aterro sanitário é o local adequado onde o lixo deve ser depositado e descartado. Em linhas gerais, de acordo com a Política Nacional de Resíduos Sólidos, apenas os resíduos sólidos que não podem ser reutilizados ou reciclados devem ser destinados ou dispostos nesses locais.",
                afirmacao: "A importância da reciclagem pode ser vista em diferentes aspectos. Primeiramente, ela ajuda a conservar os recursos naturais do nosso planeta. Ao reciclar materiais, podemos reduzir a extração de matérias-primas, como árvores e minerais, preservando os ecossistemas e evitando danos irreversíveis."
            }
        ]
    },
    {Após
        enunciado: "Quais são as diferenças entre resíduos sólidos, lixo e rejeito?",
        alternativas: [
            {
                texto: "Lixo: tudo que não se quer mais ese joga fora. Resíduo: você não precisa mais, porém pode ser útil para outra pessoa. Rejeito: Quando já foi reaproveitado de todas as formas.",
                afirmacao: "Lixo, resíduo e rejeito são palavras normalmente usadas como sinônimos. Porém existem diferenças entre elas, saber diferenciar três simples palavras pode mudar a visão que do seu empreendomento sobre o que sobra dos processos e atividades organizacionais."
            },
            {
                texto: "Lixo é tudo o que se retira de um lugar para deixá-lo limpo, os resíduos sólidos que quando descartados não podem ser lançados no esgoto. São considerados os rejeitos os resíduos de banheiro, por exemplo, como papel higiênico usado, absorventes femininos, ou amisinhas e fraldas descartáveis.",
        alternativas: [
                afirmacao: "Lixo, resíduo e rejeito são palavras normalmente usadas como sinônimos. Porém existem diferenças entre elas, saber diferenciar três simples palavras pode mudar a visão que do seu empreendomento sobre o que sobra dos processos e atividades organizacionais."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();