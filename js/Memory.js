// variables
const cartes = document.getElementsByClassName('cartes');



// fonction génerale qui appel toutes les fonctions
export function initialisation() {
    // initialisation des cartes avec espaces
    document.addEventListener("keyup", (event) => {
        if (event.key == " ") {
            cartesInit();
        }
    });
    // initialisation du click sur les cartes
    // document.getElementsByClassName("cartes").addEventListener("click",retourne);


}
// fonction d'initialisation pour afficher les cartes retourner

function cartesInit() {
let i = 1;
    for (const carte of cartes) {
        
        carte.textContent = i++;

        console.log("cartes initialiser")
    }
}

// fonction qui permet de cliquer sur les cartes et qu'elle se retourne


//  fonction qui permet de verifier si 2 cartes sont identiques ou non dans ce cas elle se retourne au bout de 5 secondes.
// function verification(){
// let f = 2;
// for(let i = 0; i<f; i++ ){
//     retourne();
// }
// if ()
// }

