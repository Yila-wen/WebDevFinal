let playerMaxHP = 20
let playerHP = 20
let playerATK = 1
let playerDEF = 1
let playerDEX = 1
let playerLUCK = 1
let comMaxHp = 50
let comHP = 50
let comATK = 3
let comDEF = 5
let comDEX = 10
let comLUCK = 65
let turn = true
const playerHPBar = document.getElementsByClassName("hp-bar")
const pText = document.getElementById("hp-text")

function heal(){
    playerHP = playerMaxHP;
}




function dmg(){
    playerHP -= 1
    pText.innerHTML = `${playerHP}/${playerMaxHP}`
    const ch = Math.round((playerHP/playerMaxHP)*100)
    console.log(`Hp: ${playerHP} Percent ${ch}`)
    playerHPBar.style.width = `${ch}%`
}

function statCheck(stat){
    return (Math.floor(stat/5))

}

function aiTurn(){
    act = Math.floor(Math.random()* 4) + 1;

    if (comHP <= (comHP-playerATK)){kamikaze(comLUCK, true);}
    else if(act == 1){attack(comATK, true);}
    else if(act == 2){block(comDEF, true);}
    else if(act ==3){evade(comDEX, true);}
    else{
        console.log("hardware was fried")
    }


}


function rollDie(){
    return (Math.floor(Math.random()* 20) + 1);
}


function attack(stat, next){
    roll = rollDie() + (Math.floor(stat/5));
    if (roll >=8){
        multi = Math.floor((roll - 4)/4);
        console.log("Success "+(2*multi))

        if (!next){
            playerHPBar.style.width = `${Math.round((playerHP/playerMaxHP)*100)}%`
        }
        else{
            playerHP -= 2*multi
        }


    }
    turn = next;


}
// 5=10%  8=20%  then + 20 for every 3
function block(stat , next){
    roll = rollDie() + (Math.floor(stat/5)); 
    if (roll >=5 && roll <8){
        console.log("Success 10%")
    }
    else if(roll >=8){
        multi = Math.floor((roll - 5)/3);
        console.log("Success 20%"+multi)
    }
    turn = next;

}
// 14=25% + 25% per multi
function evade(stat, next){
    roll = rollDie() + (Math.floor(stat/5));
    if (roll >= 14){
        multi = Math.floor((roll - 12)/2);
        console.log("Success 25%"+multi)


    }
    turn = next;

}


function kamikaze(stat, next){
    roll = rollDie() + (Math.floor(stat/5));
    if (roll <20){
        console.log("KABOOM")

    }
    else{
        console.log("KABOOM, but you lived?")
    }
    turn = next;

}



