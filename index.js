//Constantes e variables

//Constantes
const NUM_PIEZAS=1000;
const PROB_ERROR=0.003;

//Variables
let correctas = 0;
let defectuosas = 0;

//classes
class ErrorPiezaDefectuosa extends Error{}
class ErrorCadenaParada extends Error{}

const comprobarDefectuosa = () => (Math.random() < PROB_ERROR);



for (let i=1; i <= NUM_PIEZAS; i++){
    const esDefectuosa = comprobarDefectuosa();
try{
        if (i === 2){
            throw new ErrorCadenaParada('A cadea de produción parou');
        }
        if (esDefectuosa) {
            throw new ErrorPiezaDefectuosa (`-> Pieza ${i} defectuosa`);
        }
        else 
            correctas++;
    
    } catch (error){
        defectuosas++;
        console.log(`Erro ${i} (mensaxe):${error.message}`);
        console.log(`Erro ${i}(nome):${error.name}`);
        console.log(`Erro ${i}(stack):${error.stack}`);
    }finally{
        
    }
}

console.log(`Fabricadas ${NUM_PIEZAS}`);
console.log(`-> Correctas:   ${correctas} `);
console.log(`-> Defectuosas: ${defectuosas}`);