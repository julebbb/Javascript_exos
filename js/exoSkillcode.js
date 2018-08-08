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

//--------------------Remplir une piscine
//
// function temps(longueur, largeur, debitEau) {
//   var volume = longueur * largeur * 1.5;
//   var resultat = [(60 * volume)/debitEau]/100;
//   return resultat;
// }
//
// console.log("La piscine est remplie en ", temps(prompt("Quel est la longueur de la piscine ?"), prompt("la largeur ?"), prompt("Enfin le debit d'eau ?")) , " m3 par minutes");

//---------------------Calcul de cercle

// function pericercle(rayon) {
//   var resultat = rayon * 2 * Math.PI;
//   return resultat;
// }
//
// function aircercle(rayon) {
//   var resultat = rayon * 2;
//   return resultat;
// }
//
// var userNombre = prompt("Donner moi le rayon de votre cercle !");
// console.log("Le périmètre du cercle est de ", pericercle(userNombre), " et l'air est de ", aircercle(userNombre));

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

//-----------------Echequier

// var str = "";
// for (i = 0; i < 8; i++) {
//   for (j = 0; j < 8; j++) {
//   if ((i+j)%2 === 0) {
//     str = str + "#";
//
//   } else {
//     str = str + " ";
//
//   }
//   }
//   str = str + "\n";
// }
//
// console.log(str);

//----------------La matrix
// for (i = 0; i < 4; i++) {
//   for (j = 0; j < 4; j++) {
//     if (j === i){
//       console.log(1);
//   } else {
//     console.log(0);
//   }}
//   console.log("----------");
// }

//-------------------Fonction nombre pairs

// function verifPairs(nombre) {
//
//     if (Math.round(nombre)%2 === 0) {
//       resultat = true;
//     } else {
//       resultat = false;
//     }
//
//     return resultat;
// }
//
// console.log(verifPairs(1.4));

// -----------------------Factoriel
//
// var nombre = prompt("Donner moi un nombre");
// var resultat = 1;
// for (var i = 1; i < nombre; i++) {
//
//   if (nombre.indexOf("123456789") != -1) {
//     console.log(prompt("Je demande un nombre !"));
//   } else {
//     resultat = resultat * i;
//
// console.log(resultat);
//   }
// }
// if (resultat != null) {
//   console.log(resultat);
// }


// ----------------------- Les tirets sa compte

// function correcteur(caractere) {
//
//   var result = "Ceci n'est pas une chaine de caractère !";
//   //Si la chaine n'est pas un string
//   if (typeof caractere != typeof "string") {
//         return result;
//   }
//   //Autrement si elle est un string et qu'il y a un -
//   //indexOf montre si l'element est dans le string s'il est pas il donne -1
//   else if (caractere.indexOf("-") != -1) {
//     //replace remplace l'element pour qu'il change tous les element avec un - il faut ajouter g pour global
//     return caractere.replace(/-/g, "_");
//
//   } else {
//     return caractere;
//   }
// }
//
// console.log(correcteur("La- vie est -plein-e de-sur-prise-"));
// console.log(correcteur(1));

//------------------------- S'entrainer avec les tableaux

// var course = ["pommes", "oranges", "lait", "steak", "frites"];
//
// console.log("Je dois acheter des ", course[0], " des ", course[course.length - 1], "et du ", course[2]);

//-----------------------Tableau d'un homme

// function personne() {
//   var homme = new Array("Lemret", "Loic", 24, "née le 12 octobre 1994");
//   var info = "Cette personne s'appelle " + homme[0] + " " + homme[1] + " il a " + homme[2] + "ans et est " + homme[3];
//   return info;
// }
// console.log(personne())

//With multi table
// var human = new Array([], [], []);
//
// function man(name, firstname, age, birth, numberTab) {
//   human[numberTab].push(name);
//   human[numberTab].push(firstname);
//   human[numberTab].push(age);
//   human[numberTab].push(birth);
//   return human;
// }
// man("Loncke", "Léa", "19", " 1999", 0)
// man("Lebbrecht", "Justine", "21", "14 février 1997", 1)
//
// console.log(man("Landine", "Cyrielle", "22", "30 juillet 1996", 2));

//-----------------------------Le max d'un tableau numérotés
//
// var maxTable = new Array(10, 30, 50);
//
// var max = Math.max.apply(null, maxTable);
//
// //If max is not a number
// if (isNaN(max)) {
//
//   console.log(false);
//
// } else {
//
//   console.log("Le plus grand du tableau c'est ", max);
//
// }

//---------------------------Le max d'un tableau avec des mots

// var arrString = ["Miaou", "Liberté", "Congoleximatisation", "Constellation"];
//
// //Array who take the result of length
// var arrLength = [];
//
// for (var i = 0; i < arrString.length; i++) {
//   arrString[i].length
//
//   arrLength.push(arrString[i].length);
// }
//
// var max = Math.max.apply(null, arrLength);
//
// //If max is not a number
// if (isNaN(max)) {
//
//   console.log(false);
//
// } else {
//
//   console.log("Le plus grand du tableau fais ", max, " caractères");
//
// }

//------------Ajouter des mots dans un tableau jusqu'a qu'ils disent stop et on sort les resultat

// var task = [];
// task.push(prompt("Ecrivez vos tâches à faire"));
//
// //Add task while "fin" is writting
// while (task.indexOf("fin") === -1) {
//   task.push(prompt("Ensuite ?"));
// }
//
// //Delete the last task "fin"
// task.pop();
//
// console.log("Ce que tu dois faire: ");
//
// //Display task
// for (var i = 0; i < task.length; i++) {
//
//   console.log(task[i]);
// }
