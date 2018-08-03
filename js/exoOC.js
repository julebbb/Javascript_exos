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

//-------------------------Ni oui ni non

// var saisie = prompt("Tu veux jouer à ni oui, ni non ? :D");
//
// while (saisie !== "Oui" && saisie !== "oui" && saisie !== "Non" && saisie !== "non") {
//   saisie = prompt("Tu veux jouer à ni oui, ni non ? :D");
// }
//
// alert("Perdue :p !");

//------------------------Triangle

// var triangle = "";
// var i = 0;
//
// while (i < 7) {
//   triangle = triangle + "#";
//   console.log("\"" + triangle + "\"");
//   i++
// }

// var miaou = "Nano";
//
// for (var i = 0; i < 5; i++) {
//   miaou = miaou + "cyte";
//   console.log("\"" + miaou + "\"");
// }

//------------------FIZZBUZZ

// for (var i = 1; i <= 100; i++) {
//
//   if (i%3 === 0 && i%5 === 0) {
//
//     console.log("FIZZBUZZ");
//
//   } else if (i%5 === 0) {
//
//     console.log("BUZZ");
//
//   } else if (i%3 === 0) {
//
//     console.log("FIZZ");
//
//   } else {
//
//     console.log(i);
//
//   }
//
// }

//--------------Bonjour améliorer

// function direBonjour (prenom, nom) {
//   var message = "Bonjour, " + prenom + " " + nom;
//   return message;
// }
//
// console.log(direBonjour("Justine", "Lebbrecht"));

//-------------------Carré d'un nombre

// function carre(x) {
//   var resultat = Number(x * x);
//   return resultat;
// }
//
// console.log(carre(0)); // Doit afficher 0
// console.log(carre(2)); // Doit afficher 4
// console.log(carre(5)); // Doit afficher 25


//-----------------Minimun de deux nombres

// function min(x, y) {
//   if (x > y) {
//     return y;
//   } else {
//     return x;
//   }
// }
//
// console.log(min(4.5, 5)); // Doit afficher 4.5
// console.log(min(19, 9)); // Doit afficher 9
// console.log(min(1, 1)); // Doit afficher 1

//--------------------Calculatrice

// function calculer(x, operation, y) {

//  if (isNaN(x) === true || isNaN(y) === true) {

//     return "Une des propositions n'est pas un nombre"

//   } else {

//     if (operation === "+") {

//       var resultat = x + y;

//       return resultat;

//     } else if (operation === "-") {

//       var resultat = x - y;

//       return resultat;

//     } else if (operation === "*") {

//       var resultat = x * y;

//       return resultat;

//     } else if (operation === "/") {

//       var resultat = x / y;

//       return resultat;

//     } else {

//       return "J'ai besoin de savoir ce que tu veux que je fasse avec tes nombres !";

//     }
//   }
// }
//
// console.log(calculer(4, "+", 6)); // Doit afficher 10
// console.log(calculer(4, "-", 6)); // Doit afficher -2
// console.log(calculer(2, "*", 0)); // Doit afficher 0
// console.log(calculer(12, "/", 0)); // Doit afficher Infinity
// console.log(calculer("ju", "/", 0)); // Doit afficher que c pas bon
// console.log(calculer(12, 2, 0)); // Doit afficher qu'il me faut un opérateur


//---------------Périmètre d'un cercle

// function circle(rayon) {
//
//   var resultat = rayon * 2 * Math.PI;
//   return resultat.toFixed(2);//Arrondi au dixième enlever to fixed pour le vrai result
//
// }
//
// console.log(circle(2));
// console.log(circle(85));
// console.log(circle(10));

// -------------------Les mots

// var mot = prompt("Ecrivez un mot ou un nom. N'importe quoi !");
//
// // !!!! Inportant à comprendre !!!
// var reversed = "";
// for (var i = Number(mot.length) - 1; i >= 0; i--) {
//     reversed += mot[i];
// }
//
// function compterNbVoyelles(x) {
//   var resultat = 0;
//
//   if (x.toUpperCase().indexOf("A") != -1 ) {
//     resultat++;
//   }
//
//   if (x.toUpperCase().indexOf("E") != -1) {
//     resultat++;
//   }
//
//   if (x.toUpperCase().indexOf("I") != -1) {
//     resultat++;
//   }
//
//   if (x.toUpperCase().indexOf("O") != -1) {
//     resultat++;
//   }
//
//   if (x.toUpperCase().indexOf("U") != -1) {
//     resultat++;
//   }
//
//   if (x.toUpperCase().indexOf("Y") != -1) {
//     resultat++;
//   }
//   return resultat;
// }
// var consonne = mot.length - compterNbVoyelles(mot) ;
//
// console.log("Le mot ", mot, "contient ", mot.length, " caractère(s) !");
// console.log("Il s'écrit en minuscules ", mot.toLowerCase());
// console.log("Il s'écrit en majuscules ", mot.toUpperCase());
// console.log("Il contient ", compterNbVoyelles(mot), "voyelle(s) et ", consonne, "consonne(s)");
// console.log("A l'envers on l'écris", reversed);
//
// if (reversed === mot) {
//   console.log("C'est un palindrome !");
// } else {
//   console.log("Ce n'est pas un palindrome");
// }

//------------------- Les 3 mousquetaires

// var mousquetaire = ["Athos", "Porthos", "Aramis"];
//
// console.log("Voici les trois mousquetaires :");
//
// for (var i = 0; i < mousquetaire.length; i++) {
//
//   console.log(mousquetaire[i]);
// }
//
// mousquetaire.push("Artagnant");
//
// console.log("Et maintenant ils sont quatre !");
//
// mousquetaire.forEach(function (mousquetaire) {
//   console.log(mousquetaire);
// });


//---------------------La somme d'un tableau

// var valeurs = [11, 3, 7, 2, 9, 10];
//
//
//
// console.log(resultat);
