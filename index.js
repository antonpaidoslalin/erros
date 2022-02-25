const NUM_PIEZAS=10;
const PROB_ERROR=0.25;

const comprobarDefectuosa = () => (Math.random() < PROB_ERROR);

for (let i=1; i <= NUM_PIEZAS; i++){
    const esDefectuosa = comprobarDefectuosa();
    console.log (`esDefectuosa: ${esDefectuosa}`)
try{
        if (esDefectuosa) {
            throw `-> Pieza ${i} defectuosa`;
        }
        else {
            console.log (`Pieza ${i} Fabricada`)

        }
    } catch (error){
        throw error;
    }

}