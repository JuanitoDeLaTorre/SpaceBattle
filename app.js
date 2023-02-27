// import {negativeIndexes} from '/Users/johnthomas/Downloads/use-negative-indexes-main/node_modules/use-negative-indexes'

function query(id) {
    if(document.querySelectorAll(id).length > 1){
        return Array.from(document.querySelectorAll(id))
    } else {
        return document.querySelector(id)
    }
}

const attack = query(".attack");
const userHealth = query(".userHealth");
const schwartz = query(".schwartz")
const bye = query(".bye")
const over = query(".gameOver")
const victory = query(".victory")
const timeout = query(".timeout")
const explanation = query(".explanation")
const explanation2 = query(".explanation2")
const explanation3 = query(".explanation3")
const gameOverStats = query(".gameOverStats")
const restart = query(".restart")

const statsHealth = query("#statsHealth")
const statsFire = query("#statsFire")
const statsAcc = query("#statsAcc")

const selfHit = query(".selfHit")
const alienHit = query(".alienHit")
const selfMiss = query(".selfMiss")
const alienMiss = query(".alienMiss")
const shipsDestroyedDOM = query(".shipsDestroyed")
const damageDealtDOM = query(".damageDealt")
const damageTakenDOM = query(".damageTaken")
const timer = query(".timer")
const slider = query("#slider")
const message = query("#message")
const messageBoard = query(".messageBoard")
const startMessage = query(".startMessage")
const startGIF = query("#startGIF")
const header = query(".header")
const options = query(".options")
const difficulty = query("#difficulty")
let lofi = new Audio("Resources/yt5s.io - mechanical Ivy (128 kbps).mp3")
let midLoFi = new Audio("Resources/Irresistible..mp3")
let challengeLoFi = new Audio("Resources/CinnamonSpeedway.mp3")
let activeSong = lofi
const music = query(".musicControl")
const dizzy = query("#dizzy")

let gifBank = ["https://media4.giphy.com/media/26BRNKLUezD1NpsOc/giphy.gif?cid=ecf05e473c7fx3sepozw7yaucqeb6wx4ogmfza0plp5ujnuq&rid=giphy.gif&ct=g",
"https://media0.giphy.com/media/SuVZk2PWL6izAOYT1T/giphy.gif?cid=ecf05e473c7fx3sepozw7yaucqeb6wx4ogmfza0plp5ujnuq&rid=giphy.gif&ct=g",
"https://media3.giphy.com/media/hDFyKdd2XBqU/giphy.gif?cid=ecf05e47bj4wxdp7avoebzny6oyx2bjbqfa2nrr28sv62l5d&rid=giphy.gif&ct=g",
"https://media1.giphy.com/media/PApUlVfEFmZAQ/giphy.gif?cid=ecf05e47507wzh60frvnagku85pqnz4120cgbkljz2qaf36c&rid=giphy.gif&ct=g",
"https://media2.giphy.com/media/XBoudmRMb6woaZ6JI7/giphy.gif?cid=ecf05e47bj4wxdp7avoebzny6oyx2bjbqfa2nrr28sv62l5d&rid=giphy.gif&ct=g",
"https://media3.giphy.com/media/AiLwj4cLiqbN59YdpB/giphy.gif?cid=ecf05e47h8ep7kcfwr0pwjt2wslahi8qko47aefvd8h0ue49&rid=giphy.gif&ct=g",
"https://media2.giphy.com/media/RJddmVhFR04GisOuII/giphy.gif?cid=ecf05e47vompn94gytlx6qlymk6pb3nupc7ijonltpst0e2s&rid=giphy.gif&ct=g",
"https://media4.giphy.com/media/yzC9QWcomU2m4/giphy.gif?cid=ecf05e47dl4ll6rt80jtn9dg4pyg0r95edt4duppd4fqxugm&rid=giphy.gif&ct=g"]

const boom1 = query("#boom1")
const boom2 = query("#boom2")
const boom3 = query("#boom3")
const boom4 = query("#boom4")
const boom5 = query("#boom5")
const boom6 = query("#boom6")


const circles = query(".circles")

let shipSelection = 6

circles.forEach((circle)=>{
    circle.addEventListener("click",()=>{
        circle.style.border = "solid white 3px"
        circle.style.boxShadow = "0px 0px 15px white"
        shipSelection = circle.innerText
    }
    )
})

let userStats = {
    shipsDestroyed: 0,
    damageTaken: 0,
    damageDealt: 0
}


let playSymbol = "./Resources/play.png"
let pauseSymbol = "./Resources/pause.png"

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
    
    startMessage.style.display = "none"
    gameType = "chill"

    aliens.forEach(ship => {
        setParams(25,[3,5],1,ship,[4,7],[2,3],[0.6,0.7])
    })
    explanation.style.display = "block"
    setShipStats()
    gifs = true;
 
    lofi.play()
    lofi.volume = 0.1;
    activeSong = lofi
    
})

classic.addEventListener("click",()=> {
   
    startMessage.style.display = "none"
    gameType = "classic"

    aliens.forEach(ship => {
        setParams(20,[3,4],0.8,ship,[5,9],[3,4],[0.65,0.75])
    })
    setShipStats()

    explanation2.style.display = "block"
    gifs = true;

    midLoFi.play()
    midLoFi.volume = 0.1
    activeSong = midLoFi
})

challenge.addEventListener("click",()=> {
    
    startMessage.style.display = "none"
    gameType = "challenge"

    aliens.forEach(ship => {
        setParams(20,[2,4],0.8,ship,[7,11],[3,6],[0.65,0.75])
    })

    setShipStats()
    setShipsDOM();
    explanation3.style.display = "block"
    timer.style.opacity = 1;
    slider.style.opacity = 1;

    gifs = false;

    challengeLoFi.play()
    challengeLoFi.volume = 0.1
    activeSong = challengeLoFi

})

music.addEventListener("click",()=> {

    if(music.src.includes('play')){
        music.setAttribute('src', './Resources/pause.png');
        activeSong.play()
    } else if(music.src.includes('pause')){
        music.setAttribute('src', './Resources/play.png');
        activeSong.pause()
    }
})

//DISPLAY START MESSAGE ON PAGE LOAD
startMessage.style.opacity = "1"

header.addEventListener("mouseover", ()=>{
    // header.classList.add("expanded")
    difficulty.style.opacity = "1"
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

//SET SHIPSTATS IN DOM
function setShipStats (){
    statsHealth.innerText = ship.hull
    statsFire.innerText = ship.firepower
    statsAcc.innerText = ship.accuracy * 100
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
            
        } else {
            showMiss("self")
        }

        //CHECK FOR ALIEN SHIP DAMANGE OR DEATH / OFFER RETREAT
        
        if(alienShip1.hull <= 0) {
            alienShip1.dead = true;
            alienHull1.style.fontSize = "18px"
            alienHull1.innerText = "DESTROYED!"

            boom(boom1,li1)
            showShipDestroyMessage(1)
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


            } else {
                showMiss("alien")
            }
        }

        // *********** SHIP 2 **********
    } else if ((shipID + 1) === 2) {
        if(ship.accuracy > Math.random()) {
            damageDealt += ship.firepower;
            alienShip2.hull -= hit;
            showHit("alien");
            
        } else {
            showMiss("self")
        }
        
        if(alienShip2.hull <= 0) {
            alienShip2.dead = true;
            alienHull2.style.fontSize = "18px"
            alienHull2.innerText = "DESTROYED!"

            boom(boom2,li2)

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

            } else {
                showMiss("alien")
            }
        }

        // *********** SHIP 3 **********
    } else if ((shipID + 1) === 3) {
        if(ship.accuracy > Math.random()) {
            damageDealt += ship.firepower;
            alienShip3.hull -= hit;
            showHit("alien");
            
        } else {
            showMiss("self")
        }
        
        if(alienShip3.hull <= 0) {
            alienShip3.dead = true;
            alienHull3.style.fontSize = "18px"
            alienHull3.innerText = "DESTROYED!"

            boom(boom3,li3)

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


            } else {
                showMiss("alien")
            }
        }

        // *********** SHIP 4 **********
    } else if ((shipID+ 1) === 4) {
        if(ship.accuracy > Math.random()) {
            damageDealt += ship.firepower;
            alienShip4.hull -= hit;
            showHit("alien");
            
        } else {
            showMiss("self")
        }
        
        if(alienShip4.hull <= 0) {
            alienShip4.dead = true;
            alienHull4.style.fontSize = "18px"
            alienHull4.innerText = "DESTROYED!"

            boom(boom4,li4)

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


            } else {
                showMiss("alien")
            }
        }

        // *********** SHIP 5 **********
    } else if ((shipID + 1) === 5) {
        
        if(ship.accuracy > Math.random()) {
            damageDealt += ship.firepower;
            alienShip5.hull -= hit;
            showHit("alien");
            
        } else {
            showMiss("self")
        }
        
        if(alienShip5.hull <= 0) {
            alienShip5.dead = true;
            alienHull5.style.fontSize = "18px"
            alienHull5.innerText = "DESTROYED!"

            boom(boom5,li5)

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

            } else {
                showMiss("alien")
            }
        }

        // *********** SHIP 6 **********
    } else if ((shipID + 1) === 6) {
        if(ship.accuracy > Math.random()) {
            damageDealt += ship.firepower;
            alienShip6.hull -= hit;
            showHit("alien");
            
        } else {
            showMiss("self")
        }
        
        if(alienShip6.hull <= 0) {
            alienShip6.dead = true;
            alienHull6.style.fontSize = "18px"
            alienHull6.innerText = "DESTROYED!"

            boom(boom6,li6)

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

            } else {
                showMiss("alien")
            }
        }
    }

   //update DamageDealt
   damageDealtDOM.innerText = damageDealt;

}

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
        schwartz.src = gifBank[Math.floor(Math.random()*gifBank.length)]
        schwartz.style.display = "block"
        setTimeout(()=> {
            schwartz.style.display = "none"
        },3000)
    }
}

function boom(id,liNum) {
    id.style.display = "block"

    if(gameType != "challenge"){
        setTimeout(()=>{
            liNum.style.opacity = "0"
            id.style.display = "none"
        },7000)
    } else {
        setTimeout(()=>{
            liNum.style.opacity = "0"
            id.style.display = "none"
        },3000)
    }
    
}

//DISPLAY RETREAT GIF

function retreatAnimation () {
    if(gameType != "challenge"){
        bye.style.opacity = "1"
        bye.style.top = "0%"
        bye.style.height = "80vh"
        bye.style.transform = "translateY(0)"
    } else {
        bye.style.opacity = "1"
        bye.style.top = "0%"
        bye.style.height = "80vh"
        bye.style.transform = "translateY(0)"
        setTimeout(()=> {
            bye.style.opacity = "0"
            bye.style.top = "200%"
            bye.style.height = "80vh"
            bye.style.transform = "translateY(0)"
        },5000)
    }
}

//UPDATE USER HULL IN OBJECT AND DOM

function updateHull (firepower) {
    if(gameType === "challenge") {
        dizzy.style.display = "block"
        setTimeout(()=> {
            dizzy.style.display = "none"
        },2000)
        
    }
    ship.hull -= firepower;
    
    userHealth.innerText = ship.hull;
    if(ship.hull <= 0 && gameType === "challenge"){

        if(startTime > 0){
            ship.hull += 15
            updateHealth()
        } 

        timeout.style.display = "block"
        setTimeout(()=> {
            timeout.style.display = "none"
        },4500)
    } else if(ship.hull <= 0) {
        displayGameOver();
    }
    
    
}

function setShipsDOM() {
        if(shipSelection == 4) {
            li5.style.display = "none"
            li6.style.display = "none"
        } else if (shipSelection == 5) {
            li6.style.display = "none"            
        }

}



//POINTLESS EVENT LISTENER/FUNCTION COMBO BECAUSE IT BREAKS IF I TRY ANYTHING ELSE

attack.addEventListener("click", handleAttack)

function handleAttack() {

    if(currentAlienShip === shipSelection) {
        victory.style.display = "block"
    }

    explanation.style.opacity = "0"
    explanation2.style.opacity = "0"
    explanation3.style.opacity = "0"


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
                timeout.classList.remove("running")
                clearInterval(set);
                // aliens.forEach(ship => {
                //     setParams(15,[2,4],0.8,ship,[7,11],[3,6],[0.65,0.75])
                // })
                shipsDestroyedDOM.innerText = shipsDestroyed
                damageDealtDOM.innerText = damageDealt
                damageTakenDOM.innerText = damageTaken
                gameOverStats.style.display = "block"
                gameOverStats.style.transform = "scale(150%)"

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

restart.addEventListener("click",()=> {
    location.reload();
})

function displayGameOver() {
    shipsDestroyedDOM.innerText = shipsDestroyed
    damageDealtDOM.innerText = damageDealt
    damageTakenDOM.innerText = damageTaken
    gameOverStats.style.display = "block"
    gameOverStats.style.transform = "scale(150%)"
}

function changeTimer() {
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