// variables
const cartes = document.getElementsByClassName('cartes');



// fonction génerale qui appel toutes les fonctions
export function initialisation(){
    // initialisation des cartes avec espaces
document.addEventListener("keyup", (event) =>{
    if (event.key == " "){
        cartesInit();
    }
});
// initialisation du click sur les cartes
// document.getElementsByClassName("cartes").addEventListener("click",retourne);


}
// fonction d'initialisation pour afficher les cartes retourner

 function cartesInit(){
for (const carte in cartes){

    console.log("cartes initialiser")
}
}

// fonction qui permet de cliquer sur les cartes et qu'elle se retourne

$(function (){
    // variables pour le nombre d'essai
let nbEssai = 0;

    // Je commence simple sans choix de taille ni de thème...
    // A complexifier plus tard
    let match1 = '<img src="ressources/memory-legume/1.svg">';
    // let match2 = '<img src="ressources/memory-legume/2.svg">';
    // let match3 = '<img src="ressources/memory-legume/3.svg">';
    // let match4 = '<img src="ressources/memory-legume/4.svg">';
    // let match5 = '<img src="ressources/memory-legume/5.svg">';
    // let match6 = '<img src="ressources/memory-legume/6.svg">';

    // Jouer un essai
        $(".carte").on("click", revelerCarte);

function revelerCarte() {
    if ($(this).attr("class") === "carte") { // "carte" = face cachée
        // Reveler la carte
        $(this).html(match1);
        console.log("Flip card")
    }
}

})
//  fonction qui permet de verifier si 2 cartes sont identiques ou non dans ce cas elle se retourne au bout de 5 secondes.
// function verification(){
    // let f = 2;
    // for(let i = 0; i<f; i++ ){
    //     retourne();
    // }
    // if ()
// }

