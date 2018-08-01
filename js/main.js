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

// var nom = prompt("Quel est ton nom?");
// var prenom = prompt("Quel est ton prénom?");
// var age = Number(prompt("Quel age as-tu?"));
//
// var prenomInitialDebut = prenom.substr(0, 1);
// var prenomInitialFin = prenom.substr(-1, 1);
// var nomInitialDebut = nom.substr(0, 1);
// var nomInitialFin = nom.substr(-1, 1);
// var ageTotal = age / 33;
//
// console.log("Ton prénom commence par un", prenomInitialDebut.toUpperCase(), "et finis par un ", prenomInitialFin.toUpperCase());
// console.log("Ton nom commence par un", nomInitialDebut.toUpperCase(), "et finis par un ", nomInitialFin.toUpperCase());
// console.log("Enfin ensemble sa fait ", prenomInitialDebut.toUpperCase() + prenomInitialFin.toUpperCase() + nomInitialDebut.toUpperCase() + nomInitialFin.toUpperCase());
// console.log("Diviser par 33 ton age c'est de ", Math.round(ageTotal));

// Afficher le nombre le plus grand

// var nb1 = 25;
// var nb2 = 222;
// var nb3 = 5;
// var nb4 = 15;
//
// if (nb1 > nb2 && nb1 > nb3 && nb1 > nb4) {
//   console.log(nb1, " est le plus grand");
// } else if (nb2 > nb1 && nb2 > nb3 && nb2 > nb4) {
//   console.log(nb2, " est le plus grand");
// } else if (nb3 > nb1 && nb3 > nb2 && nb3 > nb4) {
//   console.log(nb3, " est le plus grand");
// } else {
//   console.log(nb4, " est le plus grand");
// }

//Programe pour demander un age

// var age = prompt("Quel age as-tu ?");
//
// if (age < 0) {
//
//   console.log("J'aimerais avoir un vrai àge s'il te plait");
//
// } else if (age >= 21) {
//
//
//   if (age%2 == 0) {
//
//     console.log("Tu as un nombre pair !");
//
//   } else if (Number.isInteger(Math.sqrt(age))) {
//
//     console.log("Tu as un nombre carré !");
//
//   } else {
//     console.log("Tu peux entrer !");
//
//   }
// }

//La terrible boucle que j'arrivais pas

// var nombreCache = 12;
// var userNombre = prompt("Choisissez un nombre");
//
// //Tant que c'est différent
// while (nombreCache != userNombre) {
//   //Si user est plus petit
//   if (userNombre < nombreCache) {
//     alert("Trop petit !")
//   }
//   //Si trop grand
//   else {
//     alert("Trop grand !")
//   }
//   //Redemander un chiffre
//   userNombre = prompt("Choisissez un nombre")
// }
//
// alert("Bravo tu as gagné !");

//Repetition de chiffre jusqu'à 100
// var nombre = 0;
//
// while (nombre < 100) {
//   nombre ++;
//   console.log(nombre);
// }

//La même mais en affichant que les nombres pairs
// var nombre = 0;
//
// while (nombre < 100) {
//   if (nombre%2 === 1) {
//     nombre++;
//     console.log(nombre);
//   }
//   else {
//     nombre++;
//   }
// }

//Remplir une piscine
// 
// longueur * largeur * 1.5;
//  [(60 * volume)/debitEau]/100;
