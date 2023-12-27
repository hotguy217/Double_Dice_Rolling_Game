let numOfDice;
let diceResult;
let diceImages;
let diceTotal;
let numOfDice2;
let diceResult2;
let diceTotal2;
let diceImages2;
let values;
let images;
let playerOneScore = 0;
let playerTwoScore = 0;


// Dice One
function rollDice() {
    document.getElementById("Container").style.backgroundColor = "rgb(9, 9, 46)";
    document.getElementById("Container2").style.backgroundColor = "rgb(9, 9, 46)";
    document.getElementById("winLoseCondition").innerHTML = "";
    numOfDice = document.getElementById("numOfDice").value;
    diceResult = document.getElementById("diceResult");
    diceTotal = document.getElementById("diceTotal");
    diceImages = document.getElementById("diceImages");

    values = [];
    images = [];
    let idMonster = 0;
    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        idMonster++;
        values.push(value);
        images.push(`<img src="inage/${value}.png" id = "image1${idMonster}">`)
    }


    let diceTotalNum = 0;

    values.forEach(function (values) {
        diceTotalNum += values;
    });

    diceResult.textContent = `dice: ${values.join(',')} `;
    diceTotal.textContent = `total: ${diceTotalNum} `;
    diceImages.innerHTML = images.join('');
    console.log(diceImages);

    for (var count = 1; ; count++) {
        if (count > 0) {
            return diceTotalNum;
        }
    }
}

// Dice Two
function rowDiceTwo() {
    document.getElementById("Container").style.backgroundColor = "rgb(9, 9, 46)";
    document.getElementById("Container2").style.backgroundColor = "rgb(9, 9, 46)";
    document.getElementById("winLoseCondition").innerHTML = "";
    numOfDice2 = document.getElementById("numOfDice2").value;
    diceResult2 = document.getElementById("diceResult2");
    diceTotal2 = document.getElementById("diceTotal2");
    diceImages2 = document.getElementById("diceImages2");

    values = [];
    images = [];
    let idMonster = 0;
    for (let q = 0; q < numOfDice2; q++) {
        const value = Math.floor(Math.random() * 6) + 1;
        idMonster++;
        values.push(value);
        images.push(`<img src="inage/${value}.png" id = "image2${idMonster}">`)
    };

    let diceTotalNum2 = 0;
    values.forEach(function (values) {
        diceTotalNum2 += values;
    });

    diceResult2.textContent = `dice: ${values.join(',')} `;
    diceTotal2.textContent = `total: ${diceTotalNum2} `;
    diceImages2.innerHTML = images.join('');
    console.log(diceImages2);

    for (var count = 1; ; count++) {
        if (count > 0) {
            return diceTotalNum2;
        }
    }

}

// Total Compare 
function compareDiceTotal() {
    let diceOne = rollDice();
    let diceTwo = rowDiceTwo();

    if (diceOne > diceTwo) {
        document.getElementById("winLoseCondition").innerHTML = "🎲 Player One WON";
        document.getElementById("Container").style.backgroundColor = "gold";
        document.getElementById("Container2").style.backgroundColor = "rgb(9, 9, 46)";
        playerOneScore++;
        console.log(playerOneScore)
        winLoseCount.textContent = "Win: " + playerOneScore;
    } else if (diceOne < diceTwo) {
        document.getElementById("winLoseCondition").innerHTML = "🎲 Player Two WON";
        document.getElementById("Container").style.backgroundColor = "rgb(9, 9, 46)";
        document.getElementById("Container2").style.backgroundColor = "gold";
        playerTwoScore++;
        console.log(playerTwoScore)
        winLoseCount2.textContent = "Win: " + playerTwoScore;
    } else {
        document.getElementById("winLoseCondition").innerHTML = "🎲 DRAW";
        document.getElementById("Container").style.backgroundColor = "rgb(9, 9, 46)";
        document.getElementById("Container2").style.backgroundColor = "rgb(9, 9, 46)";
    };


}

// Restart Function
function restart() {
    document.getElementById("diceResult").innerHTML = "dice: ";
    document.getElementById("diceResult2").innerHTML = "dice: ";
    document.getElementById("diceTotal").innerHTML = "total: ";
    document.getElementById("diceTotal2").innerHTML = "total: ";
    document.getElementById("Container").style.backgroundColor = "rgb(9, 9, 46)";
    document.getElementById("Container2").style.backgroundColor = "rgb(9, 9, 46)";
    playerOneScore = 0;
    playerTwoScore = 0;
    winLoseCount.textContent = "Win: " + playerOneScore;
    winLoseCount2.textContent = "Win: " + playerTwoScore;
    document.getElementById("winLoseCondition").innerHTML = "";
    document.getElementById("numOfDice").value = "1";
    document.getElementById("numOfDice2").value = "1";

    let imageEater1 = document.getElementById("image12");
    let imageEater2 = document.getElementById("image13");
    let imageEater3 = document.getElementById("image22");
    let imageEater4 = document.getElementById("image23");
    if (imageEater1 = true && (imageEater2 = false)) {
        $("#image12").hide();
    } else if (imageEater1 = true && (imageEater2 = true)) {
        $("#image12").hide();
        $("#image13").hide();
    } else {
        alert("aaaa")
    }
    if (imageEater3 = true && (imageEater4 = false)) {
        $("#image22").hide();
    } else if (imageEater3 = true && (imageEater4 = true)) {
        $("#image22").hide();
        $("#image23").hide();
    } else {
        alert("aaaa")
    }
    document.getElementById("image11").src = "inage/6.png";
    document.getElementById("image21").src = "inage/6.png";

}
