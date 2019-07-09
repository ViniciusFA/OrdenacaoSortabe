/*
var meuWebApp = {
    "nome": "Vinicius",
    "ver_nome": function(){
        console.log(meuWebApp.nomr);
    }
};

var meuWebApp = (function(){
    var nome = "Vinicius";
    return{
        'ver_nome': function(){
            return nome;
        },
        'mudar_nome': function(novo_nome){
            nome = novo_nome;
        },
        'apagar_nome': function(){
            nome = null;
        }
    }
}());

meuWebApp.mudar_nome("João");
console.log(meuWebApp.ver_nome());

meuWebApp.apagar_nome("joão");
console.log(meuWebApp.ver_nome());

var xhttp = new XMLHttpRequest();

//garantir a compatibilidade
//var xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

function mostrar_temperatura(dados){
    //converte o Json
    var dados_obj = JSON.parse(dados);
    console.log("A temperatura em Londres é de " + dados_obj.main.temp + ' graus Celsius. ');
    //console.log("propriedade main: " + dados_obj.main)
}

function mostrar_dados(dados){
    var dados_obj = JSON.parse(dados);
    console.log("Dados: " + dados );
     
}

function tempo_londres(callback){
var xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status ==200){
            callback(this.responseText);  
            console.log("Response Text:" + this.responseText)          
        }
    };
xhttp.open("GET", "https://openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22");
xhttp.send();
}

//tempo_londres();
tempo_londres(mostrar_dados);
*/

/*
$.ajax({
    url: "https://openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22",
    type: "GET",
    dataType: "json",
}).done(function(data){
    console.log(data.main.temp);
}).fail(function(){
    console.log("Erro na requisição!" );
});



//temp_atual
//temp_max
//temp_min


$.ajax({
    url: "https://openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22",
    type: "GET",
    dataType: "json",
}).done(function (dados){
    console.log(dados);

    //temperatura atual
    var tempAtual = $("#temp_atual").html(dados.main.temp);
    console.log(tempAtual);
    //temperatura minima
    var tempMin =  $("#temp_min").html(dados.main.temp_min) ;
    console.log(tempMin);
    //temperatura máxima
    var tempMax = $("#temp_max").html(dados.main.temp_max); 
    console.log(tempMax);
}).fail(function(){
    console.log("Erro na requisição");
});
//window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

var cursos = [
    {
        'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
        'avaliacoes': 680,
        'alunos': 2300,
        'categorias': ['programacao', 'tecnologia']
    },

    {
        'titulo': 'Aprenda PHP e faça sites dinâmicos',
        'avaliacoes': 180,
        'alunos': 350,
        'categorias': ['desenvolvimento web', 'programacao']
    },

    {
        'titulo': 'Excel do Zero ao Avançado',
        'avaliacoes': 420,
        'alunos': 1800,
        'categorias': ['produtividade', 'gestão']
    }
    
];

var funcionario = {
    'nome': 'Pedro Souza Gomes',
    'ano_nasc': 1972,
    'cpf': '111.111.111.11',
    'cargo': 'Analista de Sistemas'
};

console.log("Pegando o primeiro curso: " + cursos[0]['titulo']);
//console.log("Nome do funcionário: " + funcionario.nome);

*/



/*
var primeiroConteudoMateria = secao[0]['totalMateria'];
console.log("Conteudo total da materia da primeira secao: " + primeiroConteudoMateria);

for(i=1; i<=primeiroConteudoMateria ; i++){
    console.log("I: " + i);
}
*/




$(function() {
     secao = [
        {
            'totalMateria': 5
            
        },
        {
            'totalMateria': 1
            
        },
        {
            'totalMateria': 6
            
        },
        {
            'totalMateria': 2
            
        },
        {
            'totalMateria': 3
            
        }
    ]

    organizarSequencia()
        
});

    



function organizarSequencia(){

    
    var inicioMateria = 1;    
    var tamanhoLista =0;
    var conteudoMateria =0;
    var listaMateriasGeral =[];

    //pegar os valores das materias de todas as secoes e jogar em uma lista
    $(secao).each(function(index,element){
    //joga o conteudo(tamanho) de cada secao em uma variavel conteudoMateria
     conteudoMateria = element['totalMateria'];
    
     //percorre toda as secoes pegando todas as materis de cada secao e acrescenta em listaMateriasGeral
     for(i=inicioMateria; i<=conteudoMateria ; i++){
           listaMateriasGeral[i] = i;       
         }
         //acrescenta o total de materias por secao em tamanhoLista
        tamanhoLista += conteudoMateria;
        });

      //percorre o tamanho geral da lista para numerar cada materia
     for(j=1; j<=tamanhoLista; j++){
         listaMateriasGeral[j] = j; 
         //mostra cada passo que a iteração faz = mostra o resultado na tela
         console.log("Conteudo da ListaMateriasGeral [" + j + "] = " + listaMateriasGeral[j]);
    }
}





   



        
    