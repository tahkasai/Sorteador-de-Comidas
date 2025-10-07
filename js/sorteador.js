let comidas = [
    ['Sushi (寿司)','Bolinho de arroz temperado com vinagre, acompanhado de peixe cru, frutos do mar ou legumes.',"Sushi.html"],
    ['Ramen (ラーメン)','Sopa de macarrão com caldo saboroso (de porco, frango ou peixe) e coberturas como ovo, nori e cebolinha.',"Ramen.html"],
    ['Tempurá (天ぷら)','Legumes ou frutos do mar empanados e fritos, leves e crocantes.',"Tempurá.html"],
    ['Pato de Pequim (北京烤鸭)','Pato assado com pele crocante, servido com panquecas finas e molho hoisin.',"PatodePequim.html"],
    ['Chop suey (杂碎)','Mistura de legumes salteados com carne e molho à base de soja.',"ChopSuey.html"],
    ['Dim sum (点心)','Pequenas porções de comida (como bolinhos e pastéis cozidos no vapor) servidas em cestos de bambu.',"DimSum.html"],
    ['Kimchi (김치)','Acompanhamento fermentado feito de acelga, nabo e temperos picantes; símbolo da culinária coreana.',"Kimchi.html"],
    ['Bibimbap (비빔밥)','Tigela de arroz com legumes variados, carne, ovo e molho de pimenta (gochujang).',"Bibimbap.html"],
    ['Curry (करी)','Prato com molhos condimentados (à base de especiarias e leite de coco ou iogurte) servido com arroz ou pão naan.',"Curry.html"],
    ['Samosa (समोसा)','Pastel triangular frito, recheado com batata, ervilha e especiarias.',"Samosa.html"]
];

let numerosRepetidos = [];
let numeroLimite = 10;

function rolarDado(){
    let num = gerarNumeroAleatorio();

    let titulo = document.getElementById('tituloSorteador');
    let descricao = document.getElementById('descricaoSorteador');
    let img = document.getElementById('imgSorteador');
    let link = document.getElementById('cliqueAqui');

    titulo.innerHTML = comidas[num-1][0];
    descricao.innerHTML = comidas[num-1][1];
    img.innerHTML = '<img src="assets/image/comida/'+num+'.png" alt="'+(comidas[num-1][1])+'" class="imgSorteadorComida" width="500px">';
    link.innerHTML = '<a href="pages/receitas/'+(comidas[num-1][2])+'">Veja a receita aqui</a>';
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