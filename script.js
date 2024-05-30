
let playerMaxHP = 30
let playerHP = 30
let playerATK = 1
let playerDEF = 1
let playerDEX = 1
let playerLUCK = 1
let comMaxHP = 50
let comHP = 50
let comATK = 20
let comDEF = 25
let comDEX = 25
let comLUCK = 65
let turn = true
const playerHPBar = document.getElementById("hp-bar")
const playerText = document.getElementById("hp-text")
const comHPBar = document.getElementById("com-hp-bar")
const comText = document.getElementById("com-hp-text")
const combatLogs = document.getElementById("logs")
const endLine = document.getElementById('end')
const button = document.getElementById('rButton')
let = finaloutcome = 0;

function restart(){
    console.log("HIHIHI")
    playerHP = playerMaxHP
    comHP = comMaxHP
    hpChange('player',0)
    hpChange('computer',0)
    combatLogs.innerHTML=''
    endLine.innerHTML=''
    button.style.display = 'none'
}




function hpChange(target, value){
    console.log(target +'__'+  value )

    if (target == 'player'){
        playerHP -= value
        playerText.innerHTML = `${playerHP}/${playerMaxHP}`
        const ch = Math.round((playerHP/playerMaxHP)*100)
        console.log(`Hp: ${playerHP} Percent ${ch}`)
        playerHPBar.style.width = `${ch}%`}
    else if (target == 'computer'){
        comHP -= value
        comText.innerHTML = `${comHP}/${comMaxHP}`
        const ch = Math.round((comHP/comMaxHP)*100)
        console.log(`Hp: ${comHP} Percent ${ch}`)
        comHPBar.style.width = `${ch}%`}
}




function statCheck(stat){
    return (Math.floor(stat/5))

}

function aiTurn(){
    act = Math.floor(Math.random()* 4) + 1;

    if (comHP <= (comHP-6)){return kamikaze(comLUCK);}
    else if(act == 1){return attack(comATK);}
    else if(act == 2){return block(comDEF);}
    else if(act ==3){return evade(comDEX);}
    else{
        console.log("hardware shortcircuited")
        return [0,0,'hardware shortcircuited']
    }


}

function pairs(a , b){
// a = player  b = comp
console.log("RAN")
//atk
if (a[2] == 'atk'){
    if (b[2] == 'atk'){
        combatLogs.innerHTML=(` \nPlayer used DoS with a roll of ${a[0]}, dealing ${a[1]} damage to the hardware. \n
        The computer also used DoS and rolled a ${b[0]}, dealing ${b[1]} damage to the player.\n `)
    }
    else if(b[2] == 'def'){
        combatLogs.innerHTML=(` \nPlayer used DoS with a roll of ${a[0]}, dealing ${a[1]} damage to the hardware. \n
        The computer used Network Monitoring and rolled a ${b[0]}, negating ${b[1]}% of the damage done this turn.\n `)
    }
    else if(b[2] == 'ev'){
        combatLogs.innerHTML=(` \nPlayer used DoS with a roll of ${a[0]}, dealing ${a[1]} damage to the hardware. \n
        The computer used Data Backup and rolled a ${b[0]}, recovering ${b[1]}% of the damage done this turn.\n `)
    }
    else if(b[2] == 'kami'){
        if (b[1] > 21){
            combatLogs.innerHTML=(` \nPlayer used DoS with a roll of ${a[0]}, dealing ${a[1]} damage to the hardware. \n
        The computer decided to be mutually destructive, rolling a ${b[0]}. . . it shortcircuited.\n `)
        }
        else{
            combatLogs.innerHTML=(` \nPlayer used DoS with a roll of ${a[0]}, dealing ${a[1]} damage to the hardware. \n
        The computer decided to be mutually destructive, rolling a ${b[0]}, managing to infect the players BIOS without harming their own system.'\n `)
    }
    }
    else{
        combatLogs.innerHTML=(` \nPlayer used DoS with a roll of ${a[0]}, dealing ${a[1]} damage to the hardware. \n
        The computer froze.\n `)
     }
}
//block
else if (a[2] == 'def'){
    if (b[2] == 'atk'){
        combatLogs.innerHTML=(` \nPlayer used Network Monitoring with a roll of ${a[0]}, blocking ${a[1]}% of the damage done this turn. \n
        The computer also used DoS and rolled a ${b[0]}, dealing ${b[1]} damage to the player.\n `)
    }
    else if(b[2] == 'def'){
        combatLogs.innerHTML=(` \nPlayer used Network Monitoring with a roll of ${a[0]}. \n
        The computer also used Network Monitoring.\n `)
    }
    else if(b[2] == 'ev'){
        combatLogs.innerHTML=(` \nPlayer used Network Monitoring with a roll of ${a[0]}. \n
        The computer used Data Backup.\n `)
    }
    else if(b[2] == 'kami'){
        if (b[1] > 21){
            combatLogs.innerHTML=(` \nPlayer used Network Monitoring with a roll of ${a[0]}. \n
        The computer decided to be mutually destructive, rolling a ${b[0]}. . . it shortcircuited.\n `)
        }
        else{
            combatLogs.innerHTML=(` \nPlayer used Network Monitoring with a roll of ${a[0]}, Monitoring failed. \n
        The computer decided to be mutually destructive, rolling a ${b[0]}, managing to infect the players BIOS without harming their own system.'\n `)
    }
        combatLogs.innerHTML=(` \nPlayer used Network Monitoring with a roll of ${a[0]}, blocking ${a[1]}% of the damage. \n
        The computer also used DoS and rolled a ${b[0]}, dealing ${b[1]} damage to the player.\n `)
    }
    else{combatLogs.innerHTML=(` \nPlayer used Network Monitoring with a roll of ${a[0]}. \n
    The computer froze.\n `) 
}
}
//evade
else if (a[2] == 'ev'){
    if (b[2] == 'atk'){
        combatLogs.innerHTML=(` \nPlayer used Data Backup with a roll of ${a[0]}, recovering ${a[1]}% of the damage done this turn. \n
        The computer also used DoS and rolled a ${b[0]}, dealing ${b[1]} damage to the player.\n `)
    }
    else if(b[2] == 'def'){
        combatLogs.innerHTML=(` \nPlayer used Data Backup with a roll of ${a[0]}. \n
        The computer used Network Monitoring.\n `)
    }
    else if(b[2] == 'ev'){
        combatLogs.innerHTML=(` \nPlayer used Data Backup with a roll of ${a[0]}. \n
        The computer also used Data Backup.\n `)
    }
    else if(b[2] == 'kami'){
        if (b[1] > 21){
            combatLogs.innerHTML=(` \nPlayer used Data Backup with a roll of ${a[0]}. \n
        The computer decided to be mutually destructive, rolling a ${b[0]}. . . it shortcircuited.\n `)
        }
        else{
            combatLogs.innerHTML=(` \nPlayer used Data Backup with a roll of ${a[0]}. \n
        The computer decided to be mutually destructive, rolling a ${b[0]}, managing to infect the players BIOS without harming their own system.'\n `)
    }
    }
    else{combatLogs.innerHTML=(` \nPlayer used Data Backup with a roll of ${a[0]}, recovering ${a[1]}% of the damage done this turn. \n
    The computer froze.\n `) 
}
}
//kami
else if (a[2] == 'kami'){
    if(a[1] > 21){
        combatLogs.innerHTML=(` \nPlayer decided to be mutually destructive, rolling a ${a[0]}, managing to infect the computer's BIOS without harming your own system. \n `)   
    }
    else{
        combatLogs.innerHTML=(` \nPlayer decided to be mutually destructive, rolling a ${a[0]}. . . you shortcircuited. \n `)
    }
}


}

function rollDie(){
    return (Math.floor(Math.random()* 20) + 1);
}

function action(x){
    let a1 = aiTurn()
    let a2 = []
    if (playerHP <= 0){
        endLine.innerHTML=('Womp,womp. You failed to infiltrate the computer, try again?')
        button.style.display = 'block'
    }
    else if (comHP <= 0){
        endLine.innerHTML=('Congrats, you infiltrated the computer!!!')
    }
    else
    {console.log(a1[0] +'___' + a1[1] + '___' + a1[2])
    if (x==1){
        //attack
        
        a2 = attack(playerATK)
        if(a1[2] == 'atk'){
            hpChange('computer',a2[1])
            hpChange('player',a1[1])
        }
        else if(a1[2]=='def'){
            

            hpChange('computer',Math.round((a2[1]*(100-a1[1])/100)))

        }
        else if(a1[2]=='ev'){
            hpChange('computer',Math.round((a2[1]*(100-a1[1])/100)))

        }
        else if(a1[2]=='kami'){
            if (a1[1] >21){hpChange('player',playerMaxHP)}
            else(hpChange('computer',comMaxHP))

        }
        else{
            hpChange('computer',a2[1])

        }
      

    }
    else if (x==2){
        //defense
        
        a2 = block(playerATK)
        if(a1[2] == 'atk'){
            hpChange('player',Math.round((a1[1]*(100-a2[1])/100)))
        }
        else if(a1[2]=='def'){
            

            console.log('nothing')

        }
        else if(a1[2]=='ev'){
            console.log('nothing')

        }
        else if(a1[2]=='kami'){
            if (a1[1] >21){hpChange('player',playerMaxHP)}
            else(hpChange('computer',comMaxHP))

        }
        else{
            console.log('nothing')

        }
        
    }
    else if (x==3){
        //evasion

        a2 = evade(playerATK)
        if(a1[2] == 'atk'){
            hpChange('player',Math.round((a1[1]*(100-a2[1])/100)))
        }
        else if(a1[2]=='def'){
            

            console.log('nothing')

        }
        else if(a1[2]=='ev'){
            console.log('nothing')

        }
        else if(a1[2]=='kami'){
            if (a1[1] >21){hpChange('player',playerMaxHP)}
            else(hpChange('computer',comMaxHP))

        }
        else{
            console.log('nothing')

        }
        
    }
    else{
        //gamble
        
        a2 = kamikaze(playerATK)
        if (a2[1] >21){hpChange('computer',comMaxHP)}
            else(hpChange('player',playerMaxHP))
        

    }
    console.log(a2[0] +'___' + a2[1] +'___' + a2[2])
    pairs(a2,a1)}


    if (playerHP <= 0){
        endLine.innerHTML=('Womp,womp. You failed to infiltrate the computer, try again?')
        button.style.display = 'block'
    }
    else if (comHP <= 0){
        endLine.innerHTML=('Congrats, you infiltrated the computer!!!')
    }

}



function attack(stat){
    finaloutcome=0
    roll = rollDie() + (Math.floor(stat/5));
    if (roll >=8){
        multi = Math.floor((roll - 4)/4);
        finaloutcome = (2*multi) 
        console.log("Success "+finaloutcome)
    }
    return [roll,finaloutcome,'atk']


}
// 5=10%  8=20%  then + 20 for every 3
function block(stat){
    finaloutcome=0
    roll = rollDie() + (Math.floor(stat/5));
    if (roll >=5 && roll <8){
        finaloutcome = 10
        console.log("Success 10%")
    }
    else if(roll >=8){
        multi = Math.floor((roll - 5)/3);
        finaloutcome = (20*multi)
        console.log("Success 20%"+multi)
    }
    return[roll,finaloutcome,'def']

    


}
// 14=25% + 25% per multi
function evade(stat){
    finaloutcome=0
    roll = rollDie() + (Math.floor(stat/5));
    if (roll >= 14){
        multi = Math.floor((roll - 12)/2);
        finaloutcome = (25*multi)
        console.log("Success 25%"+multi)


    }

    return[roll,finaloutcome,'ev']

}


function kamikaze(stat){
    finaloutcome=0
    roll = rollDie() + (Math.floor(stat/5));
    if (roll <20){
        finaloutcome=-1000
        console.log("KABOOM")

    }
    else{
        finaloutcome=1000
        console.log("KABOOM, but you lived?")
    }

    return[roll,finaloutcome,'kami']
}



