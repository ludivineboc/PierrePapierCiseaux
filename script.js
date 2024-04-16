let choixOrdi;
let choixUtili;

// Fonction choix de l'utilisateur
function choixUtilisateur() {
  // Role : Demander à l'utilisateur de choisir une option par le biais d'un prompt et transforme la reponse pour la mettre en majuscule 
  //parametre : aucun
  choixUtili = prompt("Choisissez pierre, Papier ou Ciseaux :").toUpperCase();
  return choixUtili;
}

// fonction choix de l'ordinateur
function choixOrdinateur() {
  // Role : Générer un nombre aléatoire entre 0 et 2 pour représenter le choix de l'ordinateur. Le chiffre est ensuite associé à une chaine de caractère
  // parametre : aucun
  var choixOrdiNum = Math.floor(Math.random() * 3); // 0: pierre, 1: Papier, 2: Ciseaux

  // Convertir le nombre en une chaîne de caractères
  if (choixOrdiNum === 0) {
    choixOrdi = "PIERRE";
  } else if (choixOrdiNum === 1) {
    choixOrdi = "PAPIER";
  } else {
    choixOrdi = "CISEAUX";
  }

  return choixOrdinateur;
}

// fonction afficher les choix
function afficherChoix() {
  // Role : Afficher le choix de l'utilisateur et de l'ordinateur dans une alerte
  // parametre : aucun
  alert(`Vous avez choisi :  ${choixUtili} 
    L'ordinateur a choisi : ${choixOrdi}`);
}

// fonction determiner le gagnant
function determinerGagnant() {
  // Role : Comparer les choix de l'utilisateur et de l'ordinateur pour determiner le gagnant et l'afficher en alert
  // parametre : aucun
  if (choixUtili === choixOrdi) {
    alert("Égalité !");
  } else if (
    (choixUtili === "PIERRE" && choixOrdi === "CISEAUX") ||
    (choixUtili === "PAPIER" && choixOrdi === "PIERRE") ||
    (choixUtili === "CISEAUX" && choixOrdi === "PAPIER")
  ) {
    alert("Vous avez gagné !");
  } else {
    alert("L'ordinateur a gagné !");
  }
}

//Focntion jouer pour lancer mon jeu
function jouer() {
  // Role : Lancer le jeu en jouant successivement les fonctions
  // parametre : aucun
  choixUtilisateur();
  choixOrdinateur();
  afficherChoix();
  determinerGagnant();
}

jouer();
