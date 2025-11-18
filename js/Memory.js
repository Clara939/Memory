// fonction génerale qui appel toutes les fonctions
export function initialisation(){
    // initialisation des cartes avec espaces
document.addEventListener("keyup", (event) =>{
    if (event.key == " "){
        cartesInit();
    }
});
// initialisation du click sur les cartes
document.addEventListener("click",retourne);


}
// fonction d'initialisation pour afficher les cartes retourner
 function cartesInit(){
    let cartes = document.getElementById('cartes');
    cartes.src = ".\ressources\question.svg";
console.log("cartes initialiser")
}

// fonction qui permet de cliquer sur les cartes et qu'elle se retourne
function retourne(){

}
