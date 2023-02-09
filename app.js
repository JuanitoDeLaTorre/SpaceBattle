const attack = document.querySelector(".attack");
const userHealth = document.querySelector(".userHealth");
const schwartz = document.querySelector(".schwartz")
const bye = document.querySelector(".bye")
const selfHit = document.querySelector(".selfHit")
const alienHit = document.querySelector(".alienHit")

const alienHull1 = document.querySelector("#Hull1")
const alienHull2 = document.querySelector("#Hull2")
const alienHull3 = document.querySelector("#Hull3")
const alienHull4 = document.querySelector("#Hull4")
const alienHull5 = document.querySelector("#Hull5")
const alienHull6 = document.querySelector("#Hull6")



//function taken from https://stackoverflow.com/questions/45735472/generate-a-random-number-between-2-values-to-2-decimals-places-in-javascript
function genRand(min, max, decimalPlaces) {  
    var rand = Math.random() < 0.5 ? ((1-Math.random()) * (max-min) + min) : (Math.random() * (max-min) + min);  // could be min or max or anything in between
    var power = Math.pow(10, decimalPlaces);
    return Math.floor(rand*power) / power;
}


let ship = {
    hull: 20,
    firepower: 4,
    accuracy: 0.7,
}

userHealth.innerText = ship.hull;

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

let aliens = [alienShip1,alienShip2,alienShip3,alienShip4,alienShip5,alienShip6]

for(let i = 0; i < aliens.length; i++) {
    alienHull1.innerText = alienShip1.hull
    alienHull2.innerText = alienShip2.hull
    alienHull3.innerText = alienShip3.hull
    alienHull4.innerText = alienShip4.hull
    alienHull5.innerText = alienShip5.hull
    alienHull6.innerText = alienShip6.hull

}


// console.log(alienShip1.hull)
// console.log(alienShip1.firepower)
// console.log(alienShip1.accuracy)

let quit = false;

// do {
//     let swag = prompt("You've been attacked!")
//     if (swag === "quit") {
//         break;
//     }
// } while(!quit);

let currentAlienShip = 0;
let retreat = "";

function updateAlienHull (shipID) {
    let hit = ship.firepower;

    if ((shipID + 1) === 1) {
        if(ship.accuracy > Math.random()) {
            alienShip1.hull -= hit;
            showHit("alien");
            console.log("DIRECT HIT!")
            
        } else {
            console.log("YOU MISSED! REGROUP!")
        }
        
        if(alienShip1.hull <= 0) {
            alienShip1.dead = true;
            alienHull1.innerText = "DEAD!"
            console.log(`You've destroyed ship #${shipID + 1}! Do you want to retreat? (y/n)`)
            retreat = prompt(`You've destroyed ship #${shipID + 1}! Do you want to retreat? (y/n)`);

            if(retreat === "y") {
                retreatAnimation();
                return;
            }
            shipDown();
            currentAlienShip++

        } else {
            alienHull1.innerText = alienShip1.hull;
            if(alienShip1.accuracy > Math.random()) {
                setTimeout(() => {
                    updateHull(alienShip1.firepower);
                },1000)
                showHit("self");
                console.log("ALIEN HIT! You took " + alienShip1.firepower + " damage!")

            } else {
                console.log("ALIEN MISS!")
            }
        }

        // *********** SHIP 2 **********
    } else if ((shipID + 1) === 2) {
        if(ship.accuracy > Math.random()) {
            alienShip2.hull -= hit;
            showHit("alien");
            console.log("DIRECT HIT!")
            
        } else {
            console.log("YOU MISSED! REGROUP!")
        }
        
        if(alienShip2.hull <= 0) {
            alienShip2.dead = true;
            alienHull2.innerText = "DEAD!"
            console.log(`You've destroyed ship #${shipID + 1}! Do you want to retreat? (y/n)`)
            retreat = prompt(`You've destroyed ship #${shipID + 1}! Do you want to retreat? (y/n)`);


            if(retreat === "y") {
                retreatAnimation();
                return;
            }
            shipDown();
            currentAlienShip++

        } else {
            alienHull2.innerText = alienShip2.hull;
            if(alienShip2.accuracy > Math.random()) {
                setTimeout(() => {
                    updateHull(alienShip2.firepower);
                },1000)
                showHit("self");
                console.log("ALIEN HIT! You took " + alienShip2.firepower + " damage!")

            } else {
                console.log("ALIEN MISS!")
            }
        }

        // *********** SHIP 3 **********
    } else if ((shipID + 1) === 3) {
        if(ship.accuracy > Math.random()) {
            alienShip3.hull -= hit;
            showHit("alien");
            console.log("DIRECT HIT!")
            
        } else {
            console.log("YOU MISSED! REGROUP!")
        }
        
        if(alienShip3.hull <= 0) {
            alienShip3.dead = true;
            alienHull3.innerText = "DEAD!"
            console.log(`You've destroyed ship #${shipID + 1}! Do you want to retreat? (y/n)`)
            retreat = prompt(`You've destroyed ship #${shipID + 1}! Do you want to retreat? (y/n)`);


            if(retreat === "y") {
                retreatAnimation();
                return;
            }
            shipDown();
            currentAlienShip++

        } else {
            alienHull3.innerText = alienShip3.hull;
            if(alienShip3.accuracy > Math.random()) {
                setTimeout(() => {
                    updateHull(alienShip3.firepower);
                },1000)
                showHit("self");
                console.log("ALIEN HIT! You took " + alienShip3.firepower + " damage!")

            } else {
                console.log("ALIEN MISS!")
            }
        }

        // *********** SHIP 4 **********
    } else if ((shipID+ 1) === 4) {
        if(ship.accuracy > Math.random()) {
            alienShip4.hull -= hit;
            showHit("alien");
            console.log("DIRECT HIT!")
            
        } else {
            console.log("YOU MISSED! REGROUP!")
        }
        
        if(alienShip4.hull <= 0) {
            alienShip4.dead = true;
            alienHull4.innerText = "DEAD!"
            console.log(`You've destroyed ship #${shipID + 1}! Do you want to retreat? (y/n)`)
            retreat = prompt(`You've destroyed ship #${shipID + 1}! Do you want to retreat? (y/n)`);


            if(retreat === "y") {
                retreatAnimation();
                return;
            }
            shipDown();
            currentAlienShip++

        } else {
            alienHull4.innerText = alienShip4.hull;
            if(alienShip4.accuracy > Math.random()) {
                setTimeout(() => {
                    updateHull(alienShip4.firepower);
                },1000)
                showHit("self");
                console.log("ALIEN HIT! You took " + alienShip4.firepower + " damage!")

            } else {
                console.log("ALIEN MISS!")
            }
        }

        // *********** SHIP 5 **********
    } else if ((shipID + 1) === 5) {
        if(ship.accuracy > Math.random()) {
            alienShip5.hull -= hit;
            showHit("alien");
            console.log("DIRECT HIT!")
            
        } else {
            console.log("YOU MISSED! REGROUP!")
        }
        
        if(alienShip5.hull <= 0) {
            alienShip5.dead = true;
            alienHull5.innerText = "DEAD!"
            console.log(`You've destroyed ship #${shipID + 1}! Do you want to retreat? (y/n)`)
            retreat = prompt(`You've destroyed ship #${shipID + 1}! Do you want to retreat? (y/n)`);


            if(retreat === "y") {
                retreatAnimation();
                return;
            }
            shipDown();
            currentAlienShip++

        } else {
            alienHull5.innerText = alienShip5.hull;
            if(alienShip5.accuracy > Math.random()) {
                setTimeout(() => {
                    updateHull(alienShip5.firepower);
                },1000)
                showHit("self");
                console.log("ALIEN HIT! You took " + alienShip5.firepower + " damage!")

            } else {
                console.log("ALIEN MISS!")
            }
        }

        // *********** SHIP 6 **********
    } else if ((shipID + 1) === 6) {
        if(ship.accuracy > Math.random()) {
            alienShip6.hull -= hit;
            showHit("alien");
            console.log("DIRECT HIT!")
            
        } else {
            console.log("YOU MISSED! REGROUP!")
        }
        
        if(alienShip6.hull <= 0) {
            alienShip6.dead = true;
            alienHull6.innerText = "DEAD!"
            console.log(`You've destroyed ship #${shipID + 1}! Do you want to retreat? (y/n)`)
            retreat = prompt(`You've destroyed ship #${shipID + 1}! Do you want to retreat? (y/n)`);


            if(retreat === "y") {
                retreatAnimation();
                return;
            }
            shipDown();
            currentAlienShip++

        } else {
            alienHull6.innerText = alienShip6.hull;
            if(alienShip6.accuracy > Math.random()) {
                setTimeout(() => {
                    updateHull(alienShip6.firepower);
                },1000)
                showHit("self");
                console.log("ALIEN HIT! You took " + alienShip6.firepower + " damage!")

            } else {
                console.log("ALIEN MISS!")
            }
        }
    }
    // if(currentAlienShip === 6) {
    //     prompt("OK YOU WON!")
    // } 
}

// alienHit.style.opacity = "1"

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

function shipDown() {
    schwartz.style.display = "block"
    setTimeout(()=> {
        schwartz.style.display = "none"
    },3000)
}

function retreatAnimation () {
    console.log("HI????")
    // schwartz.style.opacity = "0"
    bye.style.opacity = "1"
    bye.style.top = "0%"
    bye.style.height = "80vh"
}

function updateHull (firepower) {
    ship.hull -= firepower;
    
    userHealth.innerText = ship.hull;
    setTimeout(() => {
        if(ship.hull <= 0) {
            userHealth.innerText = 0;
            alert("YOU LOSE! MWAHAHAHAH");
        }
    },2000)
    
}

attack.addEventListener("click", handleAttack)

function handleAttack() {
    if(currentAlienShip === 6) {
        alert("OK OK YOU WON!")
    }
    updateAlienHull(currentAlienShip);
}

