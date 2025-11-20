window.onload = init;
// fonction d'initialisation ---------------------------------------------------------
 function init(){
    
// controle du mot de passe
    document.getElementById('mdp').addEventListener('input', controleMotDePasse);
// controle du nom utilisateur
    document.getElementById('utilisateur').addEventListener('input', NomUtilisateur);
// controle du mail 
    document.getElementById('email').addEventListener('input', verifEmail);
// controle du confirm mdp
    document.getElementById('mdpComfirme').addEventListener('input', verifConfirmationMotDePasse);


// gestion du localstorage
    document.querySelector('.formulaireInscription').addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('utilisateur').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('mdp').value;

        enregistrerUtilisateur(username, email, password);
    });


}


// --------------------------------------------------------------------------------
// mise en place du formulaire d'incription
let pointMinuscule = 0;
let pointMajuscule = 0;
let pointChiffre = 0;
let pointSymbole = 0;
let pointNbCaracteres = 0;

// compteur nom utilisateur +1 si correct
let pointNomUtilisateur = 0;
// compteur mail +1 si correct
let pointEmail = 0;

// déclaration pour utiliser le boutton
const bouton = document.getElementById('vert'); 

// -----------------------------------------------------------------------------------
// fonction pour savoir si le nombre de caract requis est present ou non.
function NomUtilisateur(){
    // récupère la saisie  du nom utilisateur
    const input = document.getElementById('utilisateur'); 
    const utilisateur = input.value;
    // si moins de 3 caract texte affiche en rouge et le compteur reste a zero
    //  si plus ou egal a 3 caract texte affiche en vert et le compteur prend 1
    if(utilisateur.length >= 3){
        pointNomUtilisateur = 1;
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        pointNomUtilisateur = 0;
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
    validation(); // mise à jour du bouton valider
}


// fonction qui verifie que l'email est correct
function verifEmail() {
    // récu^père la saisie du mail 
   const input = document.getElementById('email'); // ici
    let email = input.value;
    // regex  pour vérifier un email
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // si regex mail valide ecrit en vert et compteur +1 si regex invalide mail ecrit en rouge et compteur 0
    if(regex.test(email)){
        pointEmail = 1;
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        pointEmail = 0;
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
    validation();// mise à jour du bouton valider
}





/**
 * ----------------------------------------------------------------------------------------------
 * Fonction vérifiant que chaque consigne est respectée et gérant l'activation du bouton valider
 * ----------------------------------------------------------------------------------------------
 */
function validation() {
    // calcul si tout les critère requis sont présent
    let total = pointMinuscule + pointMajuscule + pointChiffre + pointNbCaracteres + pointSymbole + pointNomUtilisateur + pointEmail;

    
    // Si tout est ok, active le bouton, si non ne l'active pas
    if(total === 7){
        bouton.disabled = false;
        bouton.style.backgroundColor = "green"; 
        bouton.style.color = "white"; 

    } else {
        // revient au valeur par deffaut
        bouton.disabled = true;
        bouton.style.backgroundColor = ""; 
        bouton.style.color = ""; 
    }
}

/**
 * --------------------------------------------------------------------------------------------------
 * Fonction centrale du contrôle du mot de passe
 * -----------------------------------------------------------------------------------------------------
 */
function controleMotDePasse() {
    // récuper le mdp
    const input = document.getElementById("mdp");
    let mdp = input.value;


	//appel des fonction pour vérifier le mot de passe
    verifMinuscule(mdp);

    verifMajuscule(mdp);

    verifChiffre(mdp);

    verifNbCaracteres(mdp);

    verifSymbole(mdp);

    niveauMotDePasse (mdp);

    // Si tous les critères du mot de passe sont valides
    if(pointMinuscule && pointMajuscule && pointChiffre && pointNbCaracteres && pointSymbole){
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }

    validation();

}
// fonction verif des minuscule
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
        pointMinuscule = 1;
    } else {
        pointMinuscule = 0;
    }

}
//même principe que pour la verifMinuscule mais pour majuscule
function verifMajuscule(mdp) {
    let presenceMajuscule = false;
    

    for (let i = 0; i < mdp.length; i++) {
        if (mdp.charCodeAt(i) >= 65 && mdp.charCodeAt(i) <= 90) {
            presenceMajuscule = true;
        } 
    }

    if (presenceMajuscule) {
        pointMajuscule = 1;
    } else {
        pointMajuscule = 0;
    }

}
//  fonction verif chiffre
function verifChiffre(mdp) {
    let presenceChiffre = false;

    for (let i = 0; i < mdp.length; i++) {
        if (mdp.charCodeAt(i) >= 48 && mdp.charCodeAt(i) <= 57) {
            presenceChiffre = true;
        } 
    }

    if (presenceChiffre) {
        pointChiffre = 1;
    } else {
        pointChiffre = 0;
    }
   
}
// fonction qui verif le nb de caractere du mdp
function verifNbCaracteres(mdp) {
    let nbCaract = false;
	//si le mot de passe fait + de 8 lettres je valide la consigne de longueur
    if (mdp.length >= 8) {
        nbCaract = true;
    } else {
        nbCaract = false;
    }

    if (nbCaract) {
        pointNbCaracteres = 1;
    } else {
        pointNbCaracteres = 0;
    }

}
// fonction qui verif les symboles
function verifSymbole(mdp){
    let regex = /[!@#$%^&*(),.?":{}|<>]/;
    if(regex.test(mdp)){
        pointSymbole = 1;
    } else {
        pointSymbole = 0;
    }
}
// fonction qui verifie la confirm mot de passe
function verifConfirmationMotDePasse() {
    const mdp = document.getElementById('mdp').value;
    const mdpComfirme = document.getElementById('mdpComfirme');
    
    if(mdpComfirme.value === mdp && mdpComfirme.value !== ""){
        mdpComfirme.classList.add('valid');
        mdpComfirme.classList.remove('invalid');
    } else {
        mdpComfirme.classList.add('invalid');
        mdpComfirme.classList.remove('valid');
    }
}

// ---------------------------------------------------------------------------------------
// fonction pour la force du mot de passe pour afficher la barre de progresion
// -----------------------------------------------------------------------------------
function niveauMotDePasse(mdp) {
    const barre = document.getElementById("barreMdp");
    const texte = document.getElementById("force-mdp");

    let niveau = "Faible";  // par défaut
    let largeur = "33%";
    let couleur = "red";

    if (mdp.length < 6) {
        niveau = "Faible";
        largeur = "33%";
        couleur = "red";
    } else if (mdp.length >= 6 && (pointChiffre === 1 || pointSymbole === 1)) {
        niveau = "Moyen";
        largeur = "66%";
        couleur = "orange";
    } 
    if (mdp.length >= 10 && pointChiffre === 1 && pointSymbole === 1) {
        niveau = "Fort";
        largeur = "100%";
        couleur = "green";
    }

    // Mise à jour de la barre et du texte
    barre.style.width = largeur;
    barre.style.backgroundColor = couleur;
    texte.textContent = niveau;
}
// -----------------------------------------------------------------------------------------
// stocker les donnée dans le local storage
// -----------------------------------------------------------------------------------------
function enregistrerUtilisateur(username, email, password) {
    // porte vers le json
    let utilisateurs = JSON.parse(localStorage.getItem('utilisateurs')) || [];

    // vérifier mail unique
    if (utilisateurs.some(u => u.email === email)) {
        alert("Email déjà utilisé");
        return;
    }
    // vérifier nom unique
    if (utilisateurs.some(u => u.username === username)) {
        alert("Nom d'utilisateur déjà utilisé");
        return;
}

    // créer l’objet utilisateur
    const nouvelUtilisateur = { username, email, password };
    
    // ajouter au tableau
    utilisateurs.push(nouvelUtilisateur);

    // sauvegarder dans le localStorage
    localStorage.setItem('utilisateurs', JSON.stringify(utilisateurs));

    alert("Inscription réussie !");

    RedirectionVersPageConnection();
}

// --------------------------------------------------------------------------------------------------
//  JS DE LA PAGE CONNECTER
// --------------------------------------------------------------------------------------------------

function RedirectionVersPageConnection(){
    console.log("redirection");
    
    document.location.href="connection.html"; 
}


