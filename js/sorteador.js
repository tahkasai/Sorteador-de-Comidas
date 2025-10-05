let comidas = [
    ['Sushi (寿司)','Bolinho de arroz temperado com vinagre, acompanhado de peixe cru, frutos do mar ou legumes.'],
    ['Ramen (ラーメン)','Sopa de macarrão com caldo saboroso (de porco, frango ou peixe) e coberturas como ovo, nori e cebolinha.'],
    ['Tempurá (天ぷら)','Legumes ou frutos do mar empanados e fritos, leves e crocantes.'],
    ['Pato de Pequim (北京烤鸭)','Pato assado com pele crocante, servido com panquecas finas e molho hoisin.'],
    ['Chop suey (杂碎)','Mistura de legumes salteados com carne e molho à base de soja.'],
    ['Dim sum (点心)','Pequenas porções de comida (como bolinhos e pastéis cozidos no vapor) servidas em cestos de bambu.'],
    ['Kimchi (김치)','Acompanhamento fermentado feito de acelga, nabo e temperos picantes; símbolo da culinária coreana.'],
    ['Bibimbap (비빔밥)','Tigela de arroz com legumes variados, carne, ovo e molho de pimenta (gochujang).'],
    ['Curry (करी)','Prato com molhos condimentados (à base de especiarias e leite de coco ou iogurte) servido com arroz ou pão naan.'],
    ['Samosa (समोसा)','Pastel triangular frito, recheado com batata, ervilha e especiarias.']
];

let numerosRepetidos = [];
let numeroLimite = 10;

function rolarDado(){
    let num = gerarNumeroAleatorio();

    let titulo = document.getElementById('tituloSorteador');
    let descricao = document.getElementById('descricaoSorteador');
    let img = document.getElementById('imgSorteador');

    titulo.innerHTML = comidas[num-1][0];
    descricao.innerHTML = comidas[num-1][1];
    img.innerHTML = '<img src="assets/image/'+num+'.png" alt="'+(comidas[num-1][1])+'" class="imgSorteadorComida" width="500px">';
}

function gerarNumeroAleatorio(){
    let numeroAleatorio = parseInt(Math.random()*numeroLimite+1);
    
    if(numerosRepetidos.length == numeroLimite){
        numerosRepetidos = [];
    }

    if(numerosRepetidos.includes(numeroAleatorio)){
        return gerarNumeroAleatorio();
    } else{
        numerosRepetidos.push(numeroAleatorio);
        console.log(numerosRepetidos);
        return numeroAleatorio;
    }
}