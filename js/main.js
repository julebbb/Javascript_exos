//Dire a la console Hello World sans et avec variable

// console.log("Hello World !");
//
// var hello = "Hello World !";
//
// console.log(hello);

//Calcule à afficher

// console.log(3*3);
// console.log(12/0);
// console.log(4+9+78);
// console.log(12-7);
// console.log(5e4);

//Demander le nom de la personne et lui dire Bonjour

// var userName = prompt("Quel est ton nom?");
//
// console.log("Bienvenue", userName);

//Afficher mon nom et prenom avec une variable pour chacun

// var nom = "Lebbrecht";
// var prenom = "Justine";
//
// console.log("Bonjour", nom, prenom);

//Afficher le type de variable et changer celle-ci à l'aide de Number

// var myNumber = "123";
//
// console.log(typeof myNumber);
// console.log(typeof Number(myNumber));

//Afficher son nom et prénom en majuscule

// var nom = "Lebbrecht";
// var prenom = "Justine";
// console.log(nom.toUpperCase(), prenom.toUpperCase());
// console.log(nom.toLowerCase(), prenom.toLowerCase());

//Afficher si la variable est remplie ou none
// var miaou = "miaou";
// var vide = "";
//
// //si miaou est vide = true autrement false
// if (miaou == "") {
//   console.log(true);
// } else {
//   console.log(false);
// }
//
// if (vide == "") {
//   console.log(true);
// } else {
//   console.log(false);
// }

//Calculer son age en fonction ce celui du voisin

// var anneeActuel = Number(prompt("Quel est notre année actuel?"));
// var anneeNaiss = Number(prompt("En quel année es-tu née?"));
//
// var age = anneeActuel - anneeNaiss;
// console.log("Tu as ", age, "ans");
//
// //Si il est plus vieux, si il a le même ageet si il est plus jeune
//
// if (age > 21) {
//
//   var diffAge = age - 21;
//   console.log("On a ", diffAge, "ans de différence");
//
// } else if (age == 21) {
//
//   console.log("On a le même age!");
//
// } else {
//
//   var diffAge = 21 - age;
//   console.log("On a ", diffAge, "ans de différence");
//
// }

//Calculer un total avec une reduction

// var prix1 = 70;
// var prix2 = 59;
// var prix3 = 20;
//
// var reduct = (prix1 + prix2 + prix3) * 0.2;
// var total = (prix1 + prix2 + prix3) - reduct;
//
// console.log("Cela lui coùtera ", total, "euros");

//Calculatrice

// var number1 = Number(prompt("Donne moi un nombre !"));
// var number2 = Number(prompt("Donne moi un deuxième nombre !"));
// var total = number1 + number2;
//
// console.log("Le résultat est ", total);

//Se servir du nom et prenom d'un visiteur pour faire ses initial
PAS FINIS
var nom = prompt("Quel est ton nom?");
var prenom = prompt("Quel est ton prénom?");
var prenomInitialDebut = prenom.substr(0,1);
var prenomInitialFin = prenom.substr(-1, 1);

console.log("Ton prénom commence par un", prenomInitialDebut.toUpperCase(), "et finis par un ", prenomInitialFin.toUpperCase());
