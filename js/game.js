const spaceship = document.getElementById("ship");
const fallingRock = document.getElementById("meteor");
const scoreBoard = document.getElementById("points");

let shipX = 375;

let rockX = 100;
let rockY = -50;

let points = 0;

let gameStopped = false;

let scoreAdded = false;


/* ================= GAME LOOP ================= */

setInterval(dropMeteor, 30);


function dropMeteor() {

    if (gameStopped)
        return;


    /* Move meteor downward */

    rockY += 7;


    /* Meteor reached bottom */

    if (rockY > 500) {

        rockY = -50;

        rockX = Math.floor(
            Math.random() * 750
        );

        scoreAdded = false;
    }


    fallingRock.style.left =
        rockX + "px";

    fallingRock.style.top =
        rockY + "px";


    /* ================= SCORE ================= */

    if (
        !scoreAdded &&
        rockY > 450
    ) {

        points++;

        scoreAdded = true;

        scoreBoard.innerText =
            "Score: " + points;
    }


    /* ================= COLLISION ================= */

    if (

        rockY + 40 >= 430 &&

        rockY <= 480 &&

        rockX + 40 >= shipX &&

        rockX <= shipX + 50

    ) {

        gameStopped = true;

        alert(
            "💥 GAME OVER!\nScore: " + points +
            "\nPress R to restart"
        );
    }

}


/* ================= KEYBOARD ================= */

document.addEventListener(
    "keydown",
    function(event) {


        /* ================= RESTART ================= */

        if (
            (event.key === "r" ||
             event.key === "R") &&
            gameStopped
        ) {

            restartGame();

            return;
        }


        if (gameStopped)
            return;


        /* ================= MOVE LEFT ================= */

        if (
            event.key === "ArrowLeft" &&
            shipX > 0
        ) {

            shipX -= 20;
        }


        /* ================= MOVE RIGHT ================= */

        if (
            event.key === "ArrowRight" &&
            shipX < 750
        ) {

            shipX += 20;
        }


        spaceship.style.left =
            shipX + "px";

    }
);


/* ================= RESTART FUNCTION ================= */

function restartGame() {

    shipX = 375;

    rockX =
        Math.floor(
            Math.random() * 750
        );

    rockY = -50;

    points = 0;

    scoreAdded = false;

    gameStopped = false;


    spaceship.style.left =
        shipX + "px";

    fallingRock.style.left =
        rockX + "px";

    fallingRock.style.top =
        rockY + "px";

    scoreBoard.innerText =
        "Score: 0";
}
