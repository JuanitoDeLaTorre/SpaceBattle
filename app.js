// import {negativeIndexes} from '/Users/johnthomas/Downloads/use-negative-indexes-main/node_modules/use-negative-indexes'

const attack = document.querySelector(".attack");
const userHealth = document.querySelector(".userHealth");
const schwartz = document.querySelector(".schwartz")
const bye = document.querySelector(".bye")
const over = document.querySelector(".gameOver")
const victory = document.querySelector(".victory")
const timeout = document.querySelector(".timeout")
const explanation = document.querySelector(".explanation")
const explanation2 = document.querySelector(".explanation2")
const explanation3 = document.querySelector(".explanation3")

const selfHit = document.querySelector(".selfHit")
const alienHit = document.querySelector(".alienHit")
const selfMiss = document.querySelector(".selfMiss")
const alienMiss = document.querySelector(".alienMiss")
const shipsDestroyedDOM = document.querySelector(".shipsDestroyed")
const damageDealtDOM = document.querySelector(".damageDealt")
const timer = document.querySelector(".timer")
const slider = document.querySelector("#slider")
const message = document.querySelector("#message")
const messageBoard = document.querySelector(".messageBoard")
const startMessage = document.querySelector(".startMessage")
const startGIF = document.querySelector("#startGIF")
const header = document.querySelector(".header")
const options = document.querySelector(".options")
let lofi = new Audio("Resources/yt5s.io - mechanical Ivy (128 kbps).mp3")
const music = document.querySelector(".musicControl")
const dizzy = document.querySelector("#dizzy")

function query(id) {
    if(NodeList.prototype.isPrototypeOf(document.querySelectorAll(id))){
        return document.querySelectorAll(id)
    } else {
        return document.querySelector(id)
    }
}
const circles = query(".circles")
console.log(circles)

let shipSelection = 6

circles.forEach((circle)=>{
    circle.addEventListener("click",()=>{
        circle.style.border = "solid white 3px"
        shipSelection = circle.innerText
        console.log(shipSelection)
    }
    )
})


let playSymbol = "https://cdn-icons-png.flaticon.com/512/6878/6878705.png"
let pauseSymbol = "https://cdn-icons-png.flaticon.com/512/6878/6878704.png"

const chill = document.querySelector("#chillBlock")
const classic = document.querySelector("#classicBlock")
const challenge = document.querySelector("#challengeBlock")


let damageDealt = 0;
let damageTaken = 0;
let shipsDestroyed = 0;
let gameType = "none";
let gifs = false;


const alienHull1 = document.querySelector("#Hull1")
const alienHull2 = document.querySelector("#Hull2")
const alienHull3 = document.querySelector("#Hull3")
const alienHull4 = document.querySelector("#Hull4")
const alienHull5 = document.querySelector("#Hull5")
const alienHull6 = document.querySelector("#Hull6")

const li1 = document.querySelector(".li1")
const li2 = document.querySelector(".li2")
const li3 = document.querySelector(".li3")
const li4 = document.querySelector(".li4")
const li5 = document.querySelector(".li5")
const li6 = document.querySelector(".li6")

//START MESSAGE EVENT LISTENERS

chill.addEventListener("click",()=> {
    console.log("CHILL SELECTED")
    startMessage.style.display = "none"
    gameType = "chill"

    aliens.forEach(ship => {
        setParams(20,[3,5],1,ship,[4,7],[2,3],[0.6,0.7])
    })
    gifs = true;
    console.log(aliens)
    lofi.play()
    lofi.volume = 0.1;
    // pause.classList.add("playing");
})

classic.addEventListener("click",()=> {
    console.log("CLASSIC SELECTED")
    startMessage.style.display = "none"
    gameType = "classic"

    aliens.forEach(ship => {
        setParams(20,[3,4],0.8,ship,[5,9],[3,4],[0.65,0.75])
    })
    explanation2.style.display = "block"
    gifs = true;

})

challenge.addEventListener("click",()=> {
    console.log("CHALLENGE SELECTED")
    startMessage.style.display = "none"
    gameType = "challenge"

    aliens.forEach(ship => {
        setParams(15,[2,4],0.8,ship,[7,11],[3,6],[0.65,0.75])
    })

    explanation3.style.display = "block"
    timer.style.opacity = 1;
    slider.style.opacity = 1;

    gifs = false;

})

// pause.addEventListener("click",() => {
//     if(pause.classList.contains("playing")){
//         pause.innerText = "Play Music"
//         pause.classList.remove("playing")
//         lofi.pause()
//     } else {
//         pause.innerText = "Pause Music"
//         pause.classList.add("playing")
//         lofi.play()
//     }
    
// })

music.addEventListener("click",()=> {
    if(music.src === playSymbol){
        music.src = pauseSymbol;
        lofi.play()
    } else if(music.src === pauseSymbol){
        music.src = playSymbol;
        lofi.pause()
    }
})


startMessage.style.opacity = "1"

header.addEventListener("mouseover", ()=>{
    // header.classList.add("expanded")
    header.style.transform = "translateY(-100px)"
    options.style.opacity = "1"
    options.style.gap = "90px"
    options.style.transform = "translateY(0)"
})






//function taken from https://stackoverflow.com/questions/45735472/generate-a-random-number-between-2-values-to-2-decimals-places-in-javascript
function genRand(min, max, decimalPlaces) {  
    var rand = Math.random() < 0.5 ? ((1-Math.random()) * (max-min) + min) : (Math.random() * (max-min) + min);  // could be min or max or anything in between
    var power = Math.pow(10, decimalPlaces);
    return Math.floor(rand*power) / power;
}

class AlienShip {

    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

}

// DECLARE SHIP AND ALIEN SHIP OBJECTS / INITIALIZE RAND VALUES FOR ALIEN SHIPS


let ship = {
    hull: 20,
    firepower: 4,
    accuracy: 0.7,
}


let alienShip1 = {
    hull: genRand(3,7,0),
    firepower: genRand(2,5,0),
    accuracy: genRand(0.6,0.9,1),
    dead: false
}

let alienShip2 = {
    hull: genRand(3,7,0),
    firepower: genRand(2,5,0),
    accuracy: genRand(0.6,0.9,1),
    dead: false
}

let alienShip3 = {
    hull: genRand(3,7,0),
    firepower: genRand(2,5,0),
    accuracy: genRand(0.6,0.9,1),
    dead: false
}

let alienShip4 = {
    hull: genRand(3,7,0),
    firepower: genRand(2,5,0),
    accuracy: genRand(0.6,0.9,1),
    dead: false
}

let alienShip5 = {
    hull: genRand(3,7,0),
    firepower: genRand(2,5,0),
    accuracy: genRand(0.6,0.9,1),
    dead: false
}

let alienShip6 = {
    hull: genRand(3,7,0),
    firepower: genRand(2,5,0),
    accuracy: genRand(0.6,0.9,1),
    dead: false
}





//CREATE LIST OF ALIEN SHIPS

let aliens = [alienShip1,alienShip2,alienShip3,alienShip4,alienShip5,alienShip6]

function setParams(selfHull, selfFirepowerRange, selfAccuracy,shipNum,hullRange,firepowerRange,accuracyRange) {
    //SET SELF
    ship.hull = selfHull
    ship.firepower = genRand(selfFirepowerRange[0],selfFirepowerRange[1],0)
    ship.accuracy = selfAccuracy

    //SET ALIENS
    shipNum.hull = genRand(hullRange[0],hullRange[1],0)
    shipNum.firepower = genRand(firepowerRange[0],firepowerRange[1],0)
    shipNum.accuracy = genRand(accuracyRange[0],accuracyRange[1],1)


    updateHealth()
}


//INITIALIZE ALIEN SHIP HEALTH IN DOM

function updateHealth(){
    for(let i = 0; i < aliens.length; i++) {
        alienHull1.innerText = alienShip1.hull
        alienHull2.innerText = alienShip2.hull
        alienHull3.innerText = alienShip3.hull
        alienHull4.innerText = alienShip4.hull
        alienHull5.innerText = alienShip5.hull
        alienHull6.innerText = alienShip6.hull

    }
    userHealth.innerText = ship.hull;

}

//INITIALIZE HELPER VARIABLES

let currentAlienShip = 0;
let retreat = "";

//MAIN ACTION FUNCTION (Comments made only on first ship - all six are identical)

function updateShipHulls (shipID) {

    //CHECK VICTORY
    if(currentAlienShip === 6) {
        victory.style.display = "block"
        return console.log("You won!");
    }

    //ASSIGN DAMAGE VALUE

    let hit = ship.firepower;

    if ((shipID + 1) === 1) {

        //SELF ACCURACY CHECK

        if(ship.accuracy > Math.random()) {
            damageDealt += ship.firepower;
            alienShip1.hull -= hit;
            showHit("alien");
            console.log("DIRECT HIT!")
            
            
        } else {
            showMiss("self")
            console.log("YOU MISSED! REGROUP!")
        }

        //CHECK FOR ALIEN SHIP DAMANGE OR DEATH / OFFER RETREAT
        
        if(alienShip1.hull <= 0) {
            alienShip1.dead = true;
            alienHull1.style.fontSize = "18px"
            alienHull1.innerText = "DESTROYED!"
            console.log(`You've destroyed ship #${shipID + 1}! Do you want to retreat? (y/n)`)
            showShipDestroyMessage(1)
            // retreat = prompt(`You've destroyed ship #${shipID + 1}! Do you want to retreat? (y/n)`);
            shipDown();
            currentAlienShip++

        } else {
            alienHull1.innerText = alienShip1.hull;
            if(alienShip1.accuracy > Math.random()) {
                setTimeout(() => {
                    updateHull(alienShip1.firepower);
                },500)
                showHit("self");
                damageTaken += alienShip1.firepower;
                console.log(damageTaken)
                console.log("ALIEN HIT! You took " + alienShip1.firepower + " damage!")

            } else {
                showMiss("alien")
                console.log("ALIEN MISS!")
            }
        }

        // *********** SHIP 2 **********
    } else if ((shipID + 1) === 2) {
        if(ship.accuracy > Math.random()) {
            damageDealt += ship.firepower;
            alienShip2.hull -= hit;
            showHit("alien");
            console.log("DIRECT HIT!")
            
        } else {
            showMiss("self")
            console.log("YOU MISSED! REGROUP!")
        }
        
        if(alienShip2.hull <= 0) {
            alienShip2.dead = true;
            alienHull2.style.fontSize = "18px"
            alienHull2.innerText = "DESTROYED!"
            console.log(`You've destroyed ship #${shipID + 1}! Do you want to retreat? (y/n)`)
            showShipDestroyMessage(2);

            shipDown();
            currentAlienShip++

        } else {
            alienHull2.innerText = alienShip2.hull;
            if(alienShip2.accuracy > Math.random()) {
                setTimeout(() => {
                    updateHull(alienShip2.firepower);
                },500)
                showHit("self");
                damageTaken += alienShip2.firepower;

                console.log("ALIEN HIT! You took " + alienShip2.firepower + " damage!")

            } else {
                console.log("ALIEN MISS!")
            }
        }

        // *********** SHIP 3 **********
    } else if ((shipID + 1) === 3) {
        if(ship.accuracy > Math.random()) {
            damageDealt += ship.firepower;
            alienShip3.hull -= hit;
            showHit("alien");
            console.log("DIRECT HIT!")
            
        } else {
            showMiss("self")
            console.log("YOU MISSED! REGROUP!")
        }
        
        if(alienShip3.hull <= 0) {
            alienShip3.dead = true;
            alienHull3.style.fontSize = "18px"
            alienHull3.innerText = "DESTROYED!"
            console.log(`You've destroyed ship #${shipID + 1}! Do you want to retreat? (y/n)`)
            showShipDestroyMessage(3);

            shipDown();
            currentAlienShip++

        } else {
            alienHull3.innerText = alienShip3.hull;
            if(alienShip3.accuracy > Math.random()) {
                setTimeout(() => {
                    updateHull(alienShip3.firepower);
                },500)
                showHit("self");
                damageTaken += alienShip3.firepower;

                console.log("ALIEN HIT! You took " + alienShip3.firepower + " damage!")

            } else {
                console.log("ALIEN MISS!")
            }
        }

        // *********** SHIP 4 **********
    } else if ((shipID+ 1) === 4) {
        if(ship.accuracy > Math.random()) {
            damageDealt += ship.firepower;
            alienShip4.hull -= hit;
            showHit("alien");
            console.log("DIRECT HIT!")
            
        } else {
            showMiss("self")
            console.log("YOU MISSED! REGROUP!")
        }
        
        if(alienShip4.hull <= 0) {
            alienShip4.dead = true;
            alienHull4.style.fontSize = "18px"
            alienHull4.innerText = "DESTROYED!"
            console.log(`You've destroyed ship #${shipID + 1}! Do you want to retreat? (y/n)`)
            showShipDestroyMessage(4);

            shipDown();
            currentAlienShip++

        } else {
            alienHull4.innerText = alienShip4.hull;
            if(alienShip4.accuracy > Math.random()) {
                setTimeout(() => {
                    updateHull(alienShip4.firepower);
                },500)
                showHit("self");
                damageTaken += alienShip4.firepower;

                console.log("ALIEN HIT! You took " + alienShip4.firepower + " damage!")

            } else {
                console.log("ALIEN MISS!")
            }
        }

        // *********** SHIP 5 **********
    } else if ((shipID + 1) === 5) {
        
        if(ship.accuracy > Math.random()) {
            damageDealt += ship.firepower;
            alienShip5.hull -= hit;
            showHit("alien");
            console.log("DIRECT HIT!")
            
        } else {
            showMiss("self")
            console.log("YOU MISSED! REGROUP!")
        }
        
        if(alienShip5.hull <= 0) {
            alienShip5.dead = true;
            alienHull5.style.fontSize = "18px"
            alienHull5.innerText = "DESTROYED!"
            console.log(`You've destroyed ship #${shipID + 1}! Do you want to retreat? (y/n)`)
            showShipDestroyMessage(5);

            shipDown();
            currentAlienShip++

        } else {
            alienHull5.innerText = alienShip5.hull;
            if(alienShip5.accuracy > Math.random()) {
                setTimeout(() => {
                    updateHull(alienShip5.firepower);
                },500)
                showHit("self");
                damageTaken += alienShip5.firepower;

                console.log("ALIEN HIT! You took " + alienShip5.firepower + " damage!")

            } else {
                console.log("ALIEN MISS!")
            }
        }

        // *********** SHIP 6 **********
    } else if ((shipID + 1) === 6) {
        if(ship.accuracy > Math.random()) {
            damageDealt += ship.firepower;
            alienShip6.hull -= hit;
            showHit("alien");
            console.log("DIRECT HIT!")
            
        } else {
            showMiss("self")
            console.log("YOU MISSED! REGROUP!")
        }
        
        if(alienShip6.hull <= 0) {
            alienShip6.dead = true;
            alienHull6.style.fontSize = "18px"
            alienHull6.innerText = "DESTROYED!"
            console.log(`You've destroyed ship #${shipID + 1}! Do you want to retreat? (y/n)`)
            showShipDestroyMessage(6);

            shipDown();
            currentAlienShip++

        } else {
            alienHull6.innerText = alienShip6.hull;
            if(alienShip6.accuracy > Math.random()) {
                setTimeout(() => {
                    updateHull(alienShip6.firepower);
                },500)
                showHit("self");
                damageTaken += alienShip6.firepower;

                console.log("ALIEN HIT! You took " + alienShip6.firepower + " damage!")

            } else {
                
                console.log("ALIEN MISS!")
            }
        }
    }

   //update DamageDealt
   damageDealtDOM.innerText = damageDealt;

}


//--------------------------------------------------------------------------------
// function updateShipHulls(shipID){

//     if(currentAlienShip === 6) {
//         victory.style.display = "block"
//         return console.log("You won!");
//     }

//     //ASSIGN DAMAGE VALUE

//     let hit = ship.firepower;
//     for(let i = 0; i < aliens.length; i++) {
//         if((i + 1)=== shipID){
//             if(ship.accuracy > Math.random()) {
//                 alienShip6.hull -= hit;
//                 showHit("alien");
//                 console.log("DIRECT HIT!")
                
//             } else {
//                 showMiss("self")
//                 console.log("YOU MISSED! REGROUP!")
//             }
            
//             if(alienShip6.hull <= 0) {
//                 alienShip6.dead = true;
//                 alienHull6.style.fontSize = "18px"
//                 alienHull6.innerText = "DESTROYED!"
//                 console.log(`You've destroyed ship #${shipID + 1}! Do you want to retreat? (y/n)`)
//                 showShipDestroyMessage(6);
    
    
//                 if(retreat === "y") {
//                     retreatAnimation();
//                     return;
//                 }
//                 shipDown();
//                 currentAlienShip++
    
//             } else {
//                 alienHull6.innerText = alienShip6.hull;
//                 if(alienShip6.accuracy > Math.random()) {
//                     setTimeout(() => {
//                         updateHull(alienShip6.firepower);
//                     },500)
//                     showHit("self");
//                     console.log("ALIEN HIT! You took " + alienShip6.firepower + " damage!")
    
//                 } else {
                    
//                     console.log("ALIEN MISS!")
//                 }
//             }
//         }
//     }
// }
//--------------------------------------------------------------------------------


//DISPLAY DOWNED SHIP MESSAGE

function showShipDestroyMessage(shipNum) {
    messageBoard.style.opacity = "1"
    message.innerText = `You've destroyed ship #${shipNum}! Press 'escape' to retreat or keep firing!`
    shipsDestroyed++
    shipsDestroyedDOM.innerText = shipsDestroyed
    setTimeout(()=> {
        messageBoard.style.opacity = "0"
    },6000)
}

//SHOW HIT INDICATORS IN DOM

function showHit(type) {
    if(type === "self") {
        selfHit.style.opacity = "1"
        setTimeout(() => {
            selfHit.style.opacity = "0";
        },2000)

    } else if(type === "alien"){
        alienHit.style.opacity = "1"
        setTimeout(() => {
            alienHit.style.opacity = "0";
        },2000)
    }
}

//SHOW MISS INDICATORS IN DOM

function showMiss (type) {
    if(type === "self") {
        selfMiss.style.opacity = "1"
        setTimeout(() => {
            selfMiss.style.opacity = "0";
        },2000)

    } else if(type === "alien"){
        alienMiss.style.opacity = "1"
        setTimeout(() => {
            alienMiss.style.opacity = "0";
        },2000)
    }
}

//DISPLAY ALIEN SHIP DEATH GIF

function shipDown() {
    if(gifs){
        schwartz.style.display = "block"
        setTimeout(()=> {
            schwartz.style.display = "none"
        },3000)
    }
}

//DISPLAY RETREAT GIF

function retreatAnimation () {
    bye.style.opacity = "0.1"
    bye.style.top = "0%"
    bye.style.height = "80vh"
    bye.style.transform = "translateY(0)"
}

//UPDATE USER HULL IN OBJECT AND DOM

function updateHull (firepower) {
    if(gameType === "challenge") {
        dizzy.style.display = "block"
        setTimeout(()=> {
            dizzy.style.display = "none"
            console.log("TIMEOUT BABY BOI")
        },2000)
        
    }
    ship.hull -= firepower;
    
    userHealth.innerText = ship.hull;
    if(ship.hull <= 0 && gameType === "challenge"){
        timeout.style.display = "block"
        setTimeout(()=> {
            timeout.style.display = "none"
        },4500)
    }
    
    
}

if(gameType === "challenge"){
    if(shipSelection === 4) {
        li5.style.display = "none"
        li6.style.display = "none"
    }
}
li4.style.display = "none"


//POINTLESS EVENT LISTENER/FUNCTION COMBO BECAUSE IT BREAKS IF I TRY ANYTHING ELSE

attack.addEventListener("click", handleAttack)

function handleAttack() {

    if(currentAlienShip === shipSelection) {
        victory.style.display = "block"
    }

    explanation.style.opacity = "0"
    explanation2.style.opacity = "0"
    explanation3.style.opacity = "0"

    // explanation.style.display = "none"
    // explanation2.style.display = "none"
    // explanation3.style.display = "none"

    updateShipHulls(currentAlienShip);
}

let startTime = 40
timer.innerText = startTime;


timer.addEventListener("click",startTimer)


function startTimer() {
    if(!timer.classList.contains("running")){
        timer.classList.add("running")

        let set = setInterval(()=> {
            if(startTime === 0){
                clearInterval(set);
            } else if (startTime <= 11 && startTime >=7){
                timer.style.color = "orange"
                startTime--
                timer.innerText = startTime;
            } else if (startTime <= 6){
                timer.style.color = "red"
                startTime--
                timer.innerText = startTime;
            } else {
                startTime--
                timer.innerText = startTime;
            }
            
        },1000)
    } else {
        timer.innerText = startTime
        timer.classList.remove("running")
        clearInterval(set)
    }
    
}

// for(let i = startTime; i > 0;i--){
//     setTimeout(()=>{
//         console.log("Fireing?")
//         timer.innerHTML = startTime
//     },1000)
// }

function changeTimer() {
    console.log("changing")
    startTime = slider.value
    timer.innerText = slider.value
}

document.onkeydown = (e) => {
    if(e.key === "Escape") {
        ship.hull += 10
        userHealth.innerText = ship.hull;
        retreatAnimation();
    }
}