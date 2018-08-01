//---------Demander quel jour on est et donner le jour d'après
//
// var jour = prompt("Quel jour sommes-nous ?");
//
// switch (jour) {
//   case "lundi":
//       console.log("Demain ce sera mardi");
//       break;
//   case "Lundi":
//       console.log("Demain ce sera mardi");
//       break;
//
//   case "mardi":
//       console.log("Demain ce sera mercredi");
//       break;
//   case "Mardi":
//       console.log("Demain ce sera mercredi");
//       break;
//
//   case "Mercredi":
//       console.log("Demain ce sera jeudi");
//       break;
//   case "mercredi":
//       console.log("Demain ce sera jeudi");
//       break;
//
//   case "Jeudi":
//       console.log("Demain ce sera vendredi");
//       break;
//   case "jeudi":
//       console.log("Demain ce sera vendredi");
//       break;
//
//   case "Vendredi":
//       console.log("Demain ce sera samedi");
//       break;
//   case "vendredi":
//       console.log("Demain ce sera samedi");
//       break;
//
//   case "Samedi":
//       console.log("Demain ce sera dimanche");
//       break;
//   case "samedi":
//       console.log("Demain ce sera dimanche");
//       break;
//
//   case "Dimanche":
//       console.log("Demain ce sera lundi");
//       break;
//   case "dimanche":
//       console.log("Demain ce sera lundi");
//       break;
//   default:
//   console.log("Je n'ai pas compris");
// }

//------------------------Comparer deux nombre

// var nb1 = prompt("Donnez moi un premier nombre");
// var nb2 = prompt("Donnez moi un deuxième nombre");
//
// if (nb1 === nb2) {
//   console.log(nb1, " est égal à ", nb2);
// } else if (nb1 < nb2) {
//   console.log(nb1, " est plus petit que ", nb2);
// } else {
//   console.log(nb1, " est plus grand que ", nb2);
// }

// --------------------------Baccalauréat

// var userMoyenne = Number(prompt("Donnez moi votre moyenne au Baccalauréat"));
//
// if (userMoyenne < 10) {
//   console.log("Vous êtes recalés");
// } else if (10 < userMoyenne && userMoyenne < 12) {
//   console.log("Vous êtes reçu");
// } else if (userMoyenne >= 12 && userMoyenne <= 20) {
//   console.log("Vous êtes reçu avec une mention");
// } else if (userMoyenne < 0 | userMoyenne > 20) {
//   console.log("Ceci n'est pas une moyenne");
// }

// var nb1 = 2;
//
// var nb2 = 4;
//
// var nb3 = 0;
//
//
// if (nb1 > nb2) {
//
//     nb1 = nb3 * 2;
//
// } else {
//
//     nb1++;
//
//     if (nb2 > nb3) {
//
//         nb1 = nb1 + nb3 * 3;
//
//     } else {
//
//         nb1 = 0;
//
//         nb3 = nb3 * 2 + nb2;
//
//     }
//
// }
//
// console.log(nb1, nb2, nb3);

//-------------------------Nombre de jour du mois

// var mois = Number(prompt("Donne moi le nombre du mois que tu veux"));
//
// if (mois === 1 | mois === 3 | mois === 5 | mois === 7 | mois === 8 | mois === 10 | mois === 12) {
//   console.log("Il y a 31 jours dans ce mois");
// } else if (mois === 2) {
//   console.log("Il y a 28 jours dans ce mois");
//
// } else if (mois === 4 | mois === 6 | mois === 9 | mois === 11) {
//   console.log("Il y a 30 jours dans ce mois");
//
// } else {
//   console.log("Ce n'est pas un mois");
// }

//---------------------Heure suivante

// var heure = Number(prompt("Donner moi une heure"));
// var minute = Number(prompt("Donner moi les minutes"));
// var seconde = Number(prompt("Donner moi les secondes"));
//
// //Si on arrive a 60 secondes
// if (seconde === 59) {
//   minute++;
//   seconde = 0;
//
//   //Si on arrive a 60 minutes
//   if (minute === 60) {
//     heure++;
//     minute = 0;
//
//     //Si on arrive a 24 heures
//     if (heure === 24) {
//       heure = 0;
//     }
//   }
//   else {
//   }
// } else {
//   seconde++;
// }
//
//
// console.log("Il est ", heure, "h", minute, "m", seconde, "s");


//---------------------------Tours de manège
//
// for (var i = 1; i <= 10; i++) {
//   console.log("C'est le tour numéros ", i);
// }

//Tours de manège ameliorer
// var tour = Number(prompt("Combien de tour veux-tu faire ?"));
//
// for (var i = 1; i <= tour; i++) {
//   console.log("C'est le tour numéros ", i);
// }

//-----------------------------Parités
// for (var i = 1; i <= 10; i++) {
//
//     if (i % 2 === 0) {
//
//         console.log(i + " est pair");
//
//     }
//
//     else {
//       console.log(i + " est impair");
//     }
//
// }

//------------------------Parités améliorer

// for (var i = Number(prompt("Donner moi un nombre entre 1 et 10")); i <= 10; i++) {
//
//     if (i % 2 === 0) {
//
//         console.log(i + " est pair");
//
//     }
//
//     else {
//       console.log(i + " est impair");
//     }
//
// }

//-------------------------Saisie de nombres

// var saisie = Number(prompt("Saisie un nombre"))
// while (saisie >= 100) {
//   alert("Wrong !");
//   saisie = prompt("Saisie un nombre");
// }
//
// alert("Good !")

// var saisie = Number(prompt("Saisie un nombre"))
// while (saisie >= 100 || saisie <= 50) {
//   alert("Wrong !");
//   saisie = prompt("Saisie un nombre");
// }
//
// alert("Good !")

//----------------------Multiplication

// var userNb = Number(prompt("Saisissez un nombre entre 1 et 10"));
//
// console.log("Voici la table de multiplication de ", userNb);
//
// for (var i = 1; i <= 10; i++) {
//   console.log(userNb, "x ", i, "= ", (userNb * i));
// }

// var userNb = Number(prompt("Saisissez un nombre entre 1 et 10"));
//
// while (userNb <= 1 || userNb >= 10) {
//   alert("Entre 1 et 10 sa ne les inclue pas !")
//   userNb = Number(prompt("Saisissez un nombre entre 1 et 10"));
// }
//
// console.log("Voici la table de multiplication de ", userNb);
//
//
// for (var i = 2; i <= 9; i++) {
//   console.log(userNb, "x ", i, "= ", (userNb * i));
// }

//-------------------------Ni oui ni none

// var saisie = prompt("Tu veux jouer à ni oui, ni non ? :D");
//
// while (saisie !== "Oui" && saisie !== "oui" && saisie !== "Non" && saisie !== "non") {
//   saisie = prompt("Tu veux jouer à ni oui, ni non ? :D");
// }
//
// alert("Perdue :p !");

//------------------------Triangle

var triangle = "";
var i = 0;

console.log(triangle);
while (i < 7) {
  triangle = triangle + "#";
  console.log(triangle);
  i++
}
