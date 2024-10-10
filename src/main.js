
const imagens = ['dist/images/batman1.gif', 'dist/images/superman1.gif', 'dist/images/alfred1.gif', 'dist/images/lexLuthor1.png', 'dist/images/WW1.gif'];
const imagemElement = document.querySelector('#imagem');
const textElement = document.querySelector('#text');
const titleElement = document.querySelector('#title');
const button = document.querySelector('#sortear');
const close = document.querySelector('#close');
const frame = document.querySelector('#frame');
const frameContainer = document.querySelector('#frameContainer');

function closeFrame(){
    frame.classList.add('hidden')
    console.log("funcionou")

    frameContainer.parentNode.removeChild(frameContainer);
}


function sortearImagem() {
    imagemElement.src = 'dist/images/batmanRuning.gif';
    textElement.innerText = '...'
    titleElement.innerText = 'Verificando seus dados, caracteristicas e habilidades'
    button.innerText = 'ANALISANDO'

    setTimeout(() => {

      const indice = Math.floor(Math.random() * imagens.length);

    if(indice == 0){
        textElement.innerText = 'Você é o Batman, um dos heróis mais icônicos do mundo. Você é um vigilante sombrio e enigmático, operando nas sombras para proteger Gotham City. Embora não tenha superpoderes, sua inteligência, habilidades de combate e equipamentos avançados são suas maiores armas. Sua determinação é inabalável, movida pela trágica perda dos seus pais, o que o fez jurar lutar contra o crime. Você é um mestre em artes marciais, investigação e estratégia, sempre um passo à frente dos seus inimigos. Por trás da máscara, você é Bruce Wayne, um bilionário que usa seus recursos para financiar sua guerra contra o crime.'
        titleElement.innerText = 'VOCÊ É O BATMAN'
        button.innerText = 'REFAZER'
    } else if (indice == 1){
        textElement.innerText = 'Você é o Superman, o herói mais poderoso da Terra. Originário do planeta Krypton, seus poderes vêm da radiação do Sol amarelo da Terra, o que lhe dá força sobre-humana, invulnerabilidade, velocidade incrível e a capacidade de voar. Seus olhos podem disparar raios de calor e enxergar através de quase tudo, e sua super-audição e sopro congelante são igualmente impressionantes. Apesar de seu poder imenso, você é guiado por um forte senso de justiça e bondade, sempre buscando proteger os inocentes. Sob o traje azul e vermelho com o icônico "S", você é Clark Kent, um repórter humilde que equilibra sua vida dupla enquanto defende a verdade e a esperança.'
        titleElement.innerText = 'VOCÊ É O SUPERMAN'
        button.innerText = 'REFAZER'
    } else if( indice == 2){
        textElement.innerText = 'Você é Alfred Pennyworth, o fiel mordomo e confidente de Bruce Wayne, o Batman. Mais do que apenas um servo, você é uma figura paterna, oferecendo apoio emocional e sabedoria para Bruce em sua luta contra o crime. Sua experiência como ex-agente militar e médico de campo o torna essencial tanto nas operações táticas quanto nos cuidados com os ferimentos do Batman. Você é sofisticado, com um senso de humor sarcástico, mas sempre demonstra lealdade inabalável. Além de gerenciar a Mansão Wayne, você é a bússola moral de Bruce, ajudando-o a manter sua humanidade enquanto enfrenta o caos de Gotham.'
        titleElement.innerText = 'VOCÊ É O ALFRED'
        button.innerText = 'REFAZER'
    } else if( indice == 3){
        textElement.innerText = 'Você é Lex Luthor, um dos maiores e mais brilhantes vilões do mundo. Como um gênio bilionário, inventor e empresário, você é movido por uma ambição desmedida e uma visão de um mundo onde a humanidade governa sem interferência de seres alienígenas como o Superman. Apesar de não ter poderes, sua inteligência estratégica e vastos recursos o tornam um adversário formidável. Você vê o Superman como uma ameaça à supremacia humana e dedica sua vida a destruí-lo, acreditando que ele impede o verdadeiro progresso da humanidade. Frio, calculista e extremamente manipulador, você sempre está envolvido em planos elaborados, usando sua influência para avançar suas ambições, mantendo uma fachada pública de um empresário respeitável e filantropo.'
        titleElement.innerText = 'VOCÊ É O LEX LUTHOR'
        button.innerText = 'REFAZER'
    } else if( indice == 4){
        textElement.innerText = 'Você é a Mulher Maravilha, uma guerreira amazona e princesa de Themyscira. Dotada de força sobre-humana, agilidade e imortalidade, você foi treinada desde cedo para ser uma combatente formidável e defensora da paz. Seu coração é guiado pela compaixão e pela justiça, e você luta incansavelmente para proteger a humanidade, acreditando no poder do amor e da verdade. Armado com o Laço da Verdade, braceletes indestrutíveis e sua tiara, você é praticamente invencível em batalha. Além de suas habilidades, você é também uma diplomata sábia e uma líder nata. Sob o nome de Diana Prince, você vive no mundo dos homens, equilibrando sua missão heroica com a busca por justiça e igualdade para todos.'
        titleElement.innerText = 'VOCÊ É A MULHER MARAVILHA'
        button.innerText = 'REFAZER'
    }

    imagemElement.src = imagens[indice];
    }, 2000);
}


document.querySelector('#sortear').addEventListener('click', sortearImagem);
document.querySelector('#close').addEventListener('click', closeFrame);
