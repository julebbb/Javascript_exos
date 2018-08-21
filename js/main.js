//Rock Paper Scissors

var userResult = 0;
var computerResult = 0;
var computerMake = ["", "Pierre !", "Feuille !", "Ciseaux !"];
//Computer will choice between 1 and 3

while (computerResult <= 2 && userResult <= 2) {

  //Random number: 1 = rock 2 = paper 3 = scissors
  var computerChoice = Math.floor((Math.random() * 3) + 1);
  //User choice ask
  var userChoice = prompt("Jouons à pierre, feuille, ciseaux !").toLowerCase();

  //If User choice is not pierre feuille or ciseaux
  if (userChoice.indexOf("pierre") === -1 && userChoice.indexOf("feuille") === -1 && userChoice.indexOf("ciseaux")) {

    alert("J'aimerai soit pierre, soit feuille ou ciseaux pas autre chose merci !");

  }

  else {

    //Pierre choice
    if ((userChoice === "pierre" && computerChoice === 3) || (userChoice === "feuille" && computerChoice === 1) || (userChoice === "ciseaux" && computerChoice === 2)) {

        //If User make "pierre" and computer make "ciseaux"
        userResult ++;

        alert(computerMake[Number(computerChoice)] + " Mince j'ai perdue !");

    }

    else if ((userChoice === "pierre" && computerChoice === 2) || (userChoice === "feuille" && computerChoice === 3) || (userChoice === "ciseaux" && computerChoice === 1)) {

        //If User make "pierre" and computer make "feuille"
        computerResult ++ ;

        alert(computerMake[Number(computerChoice)] + " Ah ah ! Je t'ai eu !");

    }

    else if ((userChoice === "pierre" && computerChoice === 1) || (userChoice === "feuille" && computerChoice === 2) || (userChoice === "ciseaux" && computerChoice === 3)) {

        //If User make "pierre" and computer make "feuille"
        alert(computerMake[Number(computerChoice)] + " Oh égalité !");

    }

    //Display result between user and computer
    console.log("User ", userResult, "ordi ", computerResult);

  }

}

//If user win
if (userResult === 3) {

  alert("Roh tu as gagné !");

} else if (computerResult === 3) {
  //If computer win
  alert("Hi hi hi j'ai gagné !");

}
