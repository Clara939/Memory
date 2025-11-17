window.onload = init;

// fonction d'initialisation
function init(){

document.getElementById('mdp').addEventListener('input', () => {
        controleMotDePasse();
    })
}
// mise en place du formulaire d'incription
let conformiteMdp = 0;
let pointMinuscule = 0;
let pointMajuscule = 0;
let pointChiffre = 0;
let pointNbCaracteres = 0;


//méthode qui permet de mofidier la couleur d'un élément en fonction de son id
function colorTextRed(id) {
    document.getElementById(id).style.color = "red";
}

function colorTextGreen(id) {
    document.getElementById(id).style.color = "green";
}



// fonction pour savoir si le nombre de caract requis est present ou non.
function NomUtilisateur (){
    let utilisateur = document.getElementById('utilisateur');
    let nbCaract = false;
    // si l'utilisateur est vide
    if (utilisateur.length == 0 ){
        colorTextRed('utilisateur');
        // il faut aussi affiche l'icone rouge
    }

    // si l'utilisateur est + de 3 caractère
    if (utilisateur.length >= 3){
        colorTextGreen('utilisateur');
        // il faut afficher l'icone vert
        nbCaract = true;
    }
    else {
        colorTextRed('utilisateur');
        nbCaract = false;
    }
}

/**
 * Fonction vérifiant que chaque consigne est respectée et gérant l'activation du bouton valider
 */
function validation() {
	//je donne une valeur à chaque point de vérification, c'est arbitraire
    conformiteMdp = pointMinuscule + pointMajuscule + pointChiffre + pointNbCaracteres;
    console.log(conformiteMdp);
	//si tous les points sont conformes j'active le bouton
    if (conformiteMdp == 4) {
        document.getElementById("valider").disabled = false;
    } else {
        document.getElementById("valider").disabled = true;
    }
}
/**
 * Fonction centrale du contrôle du mot de passe
 */
function controleMotDePasse() {
    let mdp = document.getElementById("mdp").value;
	//appel des méthodes sucessives pour vérifier le mot de passe
    verifMinuscule(mdp);

    verifMajuscule(mdp);

    verifChiffre(mdp);

    verifNbCaracteres(mdp);

    validation();

}
function verifMinuscule(mdp) {
    let presenceMinuscule = false;

    for (let i = 0; i < mdp.length; i++) {
		//chaque caractère à un équivalent numérique, cela permet de gérer facilement les caractères spéciaux notamment
		
		//ici on regarde si la valeur numérique du caractère correspond à une minuscule
        if (mdp.charCodeAt(i) >= 97 && mdp.charCodeAt(i) <= 122) {
            presenceMinuscule = true;
        } 
    }
	
	//si on trouve une minuscule on passe la consigne minuscule en vert
    if (presenceMinuscule) {
        colorTextGreen('minuscule');
        pointMinuscule = 1;
    } else {
        colorTextRed('minuscule');
        pointMinuscule = 0;
    }

}
//même principe que pour la verifMinuscule
function verifMajuscule(mdp) {
    let presenceMajuscule = false;
    

    for (let i = 0; i < mdp.length; i++) {
        if (mdp.charCodeAt(i) >= 65 && mdp.charCodeAt(i) <= 90) {
            presenceMajuscule = true;
        } 
    }

    if (presenceMajuscule) {
        colorTextGreen('majuscule');
        pointMajuscule = 1;
    } else {
        colorTextRed('majuscule');
        pointMajuscule = 0;
    }

}

function verifChiffre(mdp) {
    let presenceChiffre = false;

    for (let i = 0; i < mdp.length; i++) {
        if (mdp.charCodeAt(i) >= 48 && mdp.charCodeAt(i) <= 57) {
            presenceChiffre = true;
        } 
    }

    if (presenceChiffre) {
        colorTextGreen('chiffre');
        pointChiffre = 1;
    } else {
        colorTextRed('chiffre');
        pointChiffre = 0;
    }
   
}function verifNbCaracteres(mdp) {
    let nbCaract = false;

	//si le mot de passe est vidé je remets les consignes en rouge
    if (mdp.length == 0) {
        colorTextRed('minuscule');
        colorTextRed('majuscule');
        colorTextRed('chiffre');
        colorTextRed('nbCaracteres');
    }

	//si le mot de passe fait + de 8 lettres je valide la consigne de longueur
    if (mdp.length >= 8) {
        colorTextGreen('nbCaracteres');
        nbCaract = true;
    } else {
        colorTextRed('nbCaracteres');
        nbCaract = false;
    }

    if (nbCaract) {
        pointNbCaracteres = 1;
    } else {
        pointNbCaracteres = 0;
    }

}