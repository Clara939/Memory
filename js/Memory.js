window.onload = initialisation;
// variables
// cartes
const cartes = document.getElementsByClassName('cartes');

// valeurs des cartes
const valeursCartes = [1,2,3,4,5,6,1,2,3,4,5,6];

// valeurs des cartes retournée
let firstCard = null;
let secondCard = null;

// tableau de mélange cartes
let valeursMelangees = [];

// permet de bloquer le clique pendant le resetboard
let boardLocked = false;

// afficher message gagnant
const bravo = document.getElementsByClassName('bravo')







// fonction génerale qui appel toutes les fonctions
   function initialisation() {
    
    // mélanger les cartes
    melangerCartes();

    //initialisation des cartes en affichant d'abord la face 
    cartesFace();

    // initialisation des cartes avec espaces et permet de relancer la partie
    document.addEventListener("keyup", (event) => {
    if (event.key == " ") {
        relancerPartie();
    }
});

    
    // initialisation du click sur les cartes
     const cartes = document.getElementsByClassName("cartes");
    for (const carte of cartes) {
        carte.addEventListener("click", retourne);}
}








// fonction d'initialisation pour afficher les cartes retourner et deja melanger
function cartesFace() {
    valeursMelangees = shuffle([...valeursCartes])
    let index = 0 ;
// initialisation des images :fini marche. NE PAS TOUCHER !!!!!!
    for (const carte of cartes) {
        carte.innerHTML = "";
        const valeur = valeursMelangees[index++]
        carte.value = valeur;
    
        if (carte.value == 1){
            let image = document.createElement("img")

            image.src="../ressources/memory-legume/1.svg";
            carte.appendChild(image);
            
        }
        else if (carte.value == 2){
            let image = document.createElement("img")

            image.src="../ressources/memory-legume/2.svg";
            carte.appendChild(image);
            
        }
        else if (carte.value == 3){
            let image = document.createElement("img")

            image.src="../ressources/memory-legume/3.svg";
            carte.appendChild(image);
            
        }
        else if (carte.value == 4){
            let image = document.createElement("img")

            image.src="../ressources/memory-legume/4.svg";
            carte.appendChild(image);
            
        }
        else if (carte.value == 5){
            let image = document.createElement("img")

            image.src="../ressources/memory-legume/5.svg";
            carte.appendChild(image);
            
        }
        else {
            let image = document.createElement("img")

            image.src="../ressources/memory-legume/6.svg";
            carte.appendChild(image);
            
        }
    }
}

// fonction inittialisation avec le point ? en appuyant sur espace
function cartesInit(){
    for (const carte of cartes){
        let image = document.createElement("img")
            image.src="../ressources/question.svg";
            carte.innerHTML = ""; // vide la carte
            carte.appendChild(image);
    }
        
    
}


 // fonction pour initialiser le melange
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};


// fonction melanger cartes
function melangerCartes() {
    // convertir en tableau
    let cartesArray = Array.from(cartes);

    // mélanger
    cartesArray = shuffle(cartesArray);

    // réinsérer dans le DOM
    const plateau = document.getElementById("plateau");
    if(plateau!=null){
        plateau.innerHTML = "";

        cartesArray.forEach(carte => plateau.appendChild(carte));
    }
}


// fonction qui permet de cliquer sur les cartes et qu'elle se retourne + appele fonction a derouler pour voir
function retourne(event){
    if (boardLocked) return; // si le plateau est verrouillé, ne rien faire
    
    // variable corespondante a la cartes cliquée
   const carteCliquee = event.currentTarget;

    //    efface le ? pour laisser la place au cote face
   carteCliquee.innerHTML = "";

    // variable avec la valeur de la carte
    const valeur = carteCliquee.value;

    // création de l'image
    let image = document.createElement("img");

    // if pour trier quelle image afficher
    if(valeur == 1){
        image.src ="../ressources/memory-legume/1.svg"
    }
    else if(valeur == 2){
        image.src ="../ressources/memory-legume/2.svg"
    }
    else if(valeur == 3){
        image.src ="../ressources/memory-legume/3.svg"
    }
    else if(valeur == 4){
        image.src ="../ressources/memory-legume/4.svg"
    }
    else if(valeur == 5){
        image.src ="../ressources/memory-legume/5.svg"
    }
    else {
        image.src ="../ressources/memory-legume/6.svg"
    }
    // affecte l'image a la carte cliquee
    carteCliquee.appendChild(image);
    //pour gérer les paires 
    if (firstCard == null){
        firstCard = carteCliquee;
    }
    else{
        secondCard = carteCliquee;
        // verouille le plateau
        boardLocked = true
        // appelle la fonction verification pour verifier les paires
        verification(); 
    }
}

// fonction pour remettre les cartes pas paires de dos
// meme chose que carte init mais pour une seule carte
function remettreFaceCachee(carte) {
    carte.innerHTML = "";
    const image = document.createElement("img");
    image.src = "../ressources/question.svg"; // image du dos de la carte
    carte.appendChild(image);
}


//  fonction qui permet de verifier si 2 cartes sont identiques ou non dans ce cas elle se retourne au bout de 5 secondes.
function verification(){
    if (firstCard.value !== secondCard.value){
        setTimeout(()=> {
            // remettre les cartes face cachée
            remettreFaceCachee(firstCard);
            remettreFaceCachee(secondCard);

            // reinitialise les variables
            resetPlateau();
            // déverouille le plateau
            boardLocked = false;

        }, 1000);// laisse un délai pour l'animation
    } else{
    // cartes identiques : on bloque définitivement ces cartes
    desactiveCarte();
    // on réinitialise juste les variables
    resetPlateau();
    // déverouille le plateau
    boardLocked = false;
}

}

// fonction pour reset verification et avoir les 2 cartes a verifier a null
function resetPlateau() {
    firstCard = null;
    secondCard = null;
}


// désactive les cartes paires trouvé et affecte la class matched
function desactiveCarte(){
    firstCard.removeEventListener('click', retourne);
    secondCard.removeEventListener('click', retourne);
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');

    // vérifier si la partie est gagné
    checkVictory();
}
// vérification après chaque paire trouvé et affiche message gagnant
function checkVictory() {
    let toutesTrouvees = true;

    for (const carte of cartes) {
        if (!carte.classList.contains('matched')) {
            toutesTrouvees = false;
            break;
        }
    }

    if (toutesTrouvees) {
    //    affiche texte bravo!!!
    let titre = document.createElement('h2');
      titre.innerHTML = "Bravo ! vous avez gagné !";
            bravo[0].appendChild(titre);

    }
}

// fonction pour relancer une partie
function relancerPartie(){
    // enleve le message bravo
    bravo[0].innerHTML = "";
    // remet les variables a null
    resetPlateau();
    // débloque les cartes
    boardLocked = false;
    // enlève la class matched et réactive les cartes
    for (const carte of cartes) {
        carte.classList.remove('matched');
        carte.innerHTML = ""; // vide complètement la carte
        carte.addEventListener("click", retourne);
    }
    // mélange les cartes
    melangerCartes();
    
    // remettre image ? 
    cartesInit();
}
