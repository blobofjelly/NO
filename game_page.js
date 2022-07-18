egg = "player1";
strawberry = "player2";
pea = localStorage.getItem("belgian_fries");
apple = localStorage.getItem("hoagie");
document.getElementById("friedChicken").innerHTML = pea + " : ";
document.getElementById("beep_beep_vegetable").innerHTML = apple + " : ";
salt = 0;
sugar = 0;
document.getElementById("tomato").innerHTML = salt;
document.getElementById("honk_honk_lettuce").innerHTML = sugar;

document.getElementById("mystery_meat").innerHTML = "Question turn: " + pea;
document.getElementById("jell_o").innerHTML = "Answer turn: " + apple;
function banana(){
    grape = document.getElementById("wordibird").value;
    cucumber = grape.toLowerCase();
    console.log("'word' in lowercase is equal to "+ cucumber);
    beet = cucumber.charAt(1);
    console.log(beet);
    radish = Math.floor(cucumber.length/2);
    pancake = cucumber.charAt(radish);
    console.log(pancake);
    scallion = cucumber.length-1;
    carrot = cucumber.charAt(scallion);
    console.log(carrot);
    pomegranite = cucumber.replace(beet, "_");
    mushroom = pomegranite.replace(pancake, "_");
    cauliflower = mushroom.replace(carrot, "_");
    console.log(cauliflower);

    bean = "<h4 id = 'lime'>Q. " + cauliflower + "</h4>";
    celery = "<br> Answer: <input type = 'text' id = 'tangerine'>";
    lemon = "<br> <br> <button class = 'btn btn-info' onclick = 'cereal()'>Check</button>";
    row = bean+celery+lemon;
    document.getElementById("sysco_food_services").innerHTML = row;
    document.getElementById("wordibird").value = "";
}
function cereal(){
    ginger = document.getElementById("tangerine").value;
    mango = ginger.toLowerCase();
    console.log("'answer' in lowercase = "+mango);
    if(mango == cucumber){
        if(strawberry == "player1"){
            salt = salt + 1;
            document.getElementById("tomato").innerHTML = salt;
        }
        else{
            suger = sugar + 1;
            document.getElementById("honk_honk_lettuce").innerHTML = sugar;
        }
    }
    if (egg == "player1"){
        egg = "player2";
        document.getElementById("mystery_meat").innerHTML = "Question turn : " + apple;
    }
    else{
        egg = "player1";
        document.getElementById("mystery_meat").innerHTML = "Question turn : " + pea;
    }
    if (strawberry == "player1"){
        strawberry = "player2";
        document.getElementById("jell_o").innerHTML = "Answer turn : " + apple;
    }
    else{
        strawberry = "player1";
        document.getElementById("jell_o").innerHTML = "Answer turn : " + pea;
    }
    document.getElementById("sysco_food_services").innerHTML = "";
}