
var medida1 = 'mt';

var medida2 = 'mt';

var retornarValor = 0;

const converterParaMetros = [{mt: 1}, {km: 1000}, {cm: 0.01}, {li: 500}, {zg:3.33333}];

const unidadesDeMedidas = [{mt: 1}, {km: 0.001}, {cm: 100}, {li: 0.002}, {zg:0.3}];

function converterMedida(){

    let valorInicial = document.getElementById('input').value;

    let resultado = document.getElementById('result');

    var medidaInicial = document.getElementById('medida1').value;

    var medidaFinal = document.getElementById('medida2').value;

    medida1 = medidaInicial;
    medida2 = medidaFinal;

    calcularMedida(medidaInicial,valorInicial,converterParaMetros);
     
    calcularMedida(medidaFinal, retornarValor,unidadesDeMedidas);
    
   // let valorFinal = document.createTextNode(retornarValor);

    resultado.value = retornarValor;
}

function calcularMedida(medida,valor,unidades){
   if (medida != 'default'){
       if (medida1 != medida2){
            let valor2 = parseInt(valor);
        
            unidades.forEach(unidade => {
                
                if (unidade.hasOwnProperty(medida)){console.log(unidade);
                if (medida1 == 'cm'){
                   
                }
                else{
                var retorno = valor2 * unidade[medida];
                //console.log(retorno.toFixed(5));
                retornarValor = retorno;
                }}
            }) 
        }
        else{
            alert('Selecione Medidas DIFERENTES!')
           }
       }
   else{
       alert('Escolha uma Medida')
   }
    
}

function esconderKm(){
    var tipoMedida = document.getElementById('medida1').value;
    const zhang = document.getElementById('zhang');
    const lis = document.getElementById('lis');
    const quilometro = document.getElementById('quilometro');
    if (tipoMedida == 'cm'){
        quilometro.style.display = 'none';
        lis.style.display = 'none';
        zhang.style.display = 'none';
    }
    else{
        quilometro.style.display = 'block';
        lis.style.display = 'block';
        zhang.style.display = 'block';
    }
}