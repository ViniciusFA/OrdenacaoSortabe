$(function() {
    //objeto multidimensional seção
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
    organizarSequencia();        
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