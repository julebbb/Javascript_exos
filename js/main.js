//Rock Paper Scissors

var userChoice = "";

var userResult = 0;
var computerResult = 0;

//Computer will choice between 1 and 3
var computerChoice = Math.floor((Math.random() * 3) + 1);

while (computerResult <= 2 && userResult <= 2) {

  //Random number: 1 = rock 2 = paper 3 = scissors
  computerChoice = Math.floor((Math.random() * 3) + 1);

  //User choice ask
  userChoice = prompt("Jouons à pierre, feuille, ciseaux !");

  //If User choice is not pierre feuille or ciseaux
  if (userChoice.toLowerCase().indexOf("pierre") === -1 && userChoice.toLowerCase().indexOf("feuille") === -1 && userChoice.toLowerCase().indexOf("ciseaux")) {

    alert("J'aimerai soit pierre, soit feuille ou ciseaux pas autre chose merci !");

  }

  else {

    //Pierre choice
    if (userChoice.toLowerCase() === "pierre" && computerChoice === 3) {

        //If User make "pierre" and computer make "ciseaux"
        userResult ++;

        alert("Ciseaux ! Mince j'ai perdue !");

    }

    else if (userChoice.toLowerCase() === "pierre" && computerChoice === 2) {

        //If User make "pierre" and computer make "feuille"
        computerResult ++ ;

        alert("Feuille ! Ah ah ! Je t'ai eu !");

    }

    else if (userChoice.toLowerCase() === "pierre" && computerChoice === 1) {

        //If User make "pierre" and computer make "feuille"
        alert("Pierre ! Oh égalité !");

    }

    //Feuille choice
     else if (userChoice.toLowerCase() === "feuille" && computerChoice === 2) {

        //If User make "feuille" and computer make "feuille"
        alert("Feuille ! Oh égalité !");

    }

    else if (userChoice.toLowerCase() === "feuille" && computerChoice === 3) {

        //If User make "feuille" and computer make "ciseaux"
        computerResult ++ ;

        alert("Ciseaux ! Ah ah ! Je t'ai eu !");

    }

    else if (userChoice.toLowerCase() === "feuille" && computerChoice === 1) {

        //If User make "feuille" and computer make "pierre"
        userResult ++;

        alert("Pierre ! Mince j'ai perdue !");

    }

    //Ciseaux choice
    else if (userChoice.toLowerCase() === "ciseaux" && computerChoice === 1) {
        //If User make "ciseaux" and computer make "pierre"
        computerResult ++ ;
        alert("Pierre ! Ah ah ! Je t'ai eu !");

    }

    else if (userChoice.toLowerCase() === "ciseaux" && computerChoice === 2) {

          //If User make "ciseaux" and computer make "feuille"
          userResult ++;

          alert("Feuille ! Mince j'ai perdue !");

    }

    else if (userChoice.toLowerCase() === "ciseaux" && computerChoice === 3) {

        //If User make "ciseaux" and computer make "ciseaux"
        alert("Ciseaux ! Oh égalité !");

    }

  }
      //Display result between user and computer
      console.log("User ", userResult, "ordi ", computerResult);
}

//If user win
if (userResult === 3) {

  alert("Roh tu as gagné !");

} else if (computerResult === 3) {
  //If computer win
  alert("Hi hi hi j'ai gagné !");

}
