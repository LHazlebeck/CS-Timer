/*const plant1 = require('../assets/c4plant.mp3');
const beep1 = require('../assets/c4Sound.mp3');
const defuse1 = require('../assets/c4defuse.mp3');
const tWin1 = require('../assets/tWin.mp3');
const csWin1 = require('../assets/csWin.mp3');
const defuseAnnounce1 = require('../assets/defuseAnnouncement.mp3');
const yay1 = require('../assets/yayyyyy.mp3');*/

const plant = document.getElementById("c4plant");
const beep = document.getElementById("c4Sound");
const defuse = document.getElementById("c4defuse");
const tWin = document.getElementById("tWin");
const csWin = document.getElementById("csWin");
const defuseAnnounce = document.getElementById("defuseAnnouncement");
const yay = document.getElementById("yay");
let jerry;

const container = document.querySelector('#centeredmenu');
const body = document.querySelector('body')
const html = document.querySelector('html')
const brug = document.querySelector('.brug')

defuseAnnounce.addEventListener('ended', (event) => {
    csWin.play()
    jerry = setTimeout(yay.play(), 3000)
  });

var active = false;
var timeCheck = false;

function refresh() {
    tWin.pause()
    tWin.currentTime = 0
    beep.pause()
    beep.currentTime = 0
    csWin.pause()
    csWin.currentTime = 0
    yay.pause()
    yay.currentTime = 0
    defuseAnnounce.pause()
    defuseAnnounce.currentTime = 0
    clearTimeout(jerry)

    html.style.backgroundColor = 'black'
    body.style.backgroundColor = 'black'
    body.style.justifyContent = 'center'
    body.innerHTML = ""
    bombSet()
}

function defuseSet() {
    html.style.backgroundColor = 'orange'
    body.style.backgroundColor = 'orange'
    let button = document.createElement('button');
    button.style.backgroundColor = '#0649BD'
    let plantIcon = document.createElement('img')
    plantIcon.src = "./Defuser_hud_csgoa.png"
    plantIcon.setAttribute('style', 'height: 7rem; width:fit-content; filter:brightness(0%)');
    body.appendChild(button);
    button.appendChild(plantIcon);

    let notExploded = true;

    function defused() {
        clearTimeout(countdown)
        beep.pause()
        beep.currentTime = 0
        html.style.backgroundColor = '#23ff0a'
        body.style.backgroundColor = '#23ff0a'
        defuseAnnounce.play()

        body.style.gap = '2rem'
        body.style.padding = '3rem'

        let text = document.createElement('b')
        text.textContent = "Counter Terrorists Win"
        text.style.color = "white"
        text.style.fontSize = "1.2 rem"

        let button2 = document.createElement('button');
        button2.textContent = "Refresh"
        button2.setAttribute('style', 'padding: 2rem; font-size: 1.25rem;padding-left: 4rem;border-radius: 10%;padding-right: 4rem; background-color: white; width: 3rem; height: 2rem; color: #FF0F0F')

        button.remove()
        body.appendChild(text)
        body.appendChild(button2)

        button2.addEventListener("touchstart", function(){
            refresh()
        })
        button2.addEventListener("click", function(){
            refresh()
        })
    }

    function explosion() {
        clearTimeout(plantTimer);
        html.style.backgroundColor = '#FF0F0F'
        body.style.backgroundColor = '#FF0F0F'
        body.style.justifyContent = 'space-around'
        body.style.padding = '3rem'
        let text = document.createElement('b')
        text.textContent = "Terrorists Win"

        let skull = document.createElement('img')
        skull.src = "./skull-danger-png.png"
        skull.setAttribute('style', 'height: 8rem; width:fit-content;')

        let button2 = document.createElement('button');
        button2.textContent = "Refresh"
        button2.setAttribute('style', 'padding: 2rem; font-size: 1.25rem;padding-left: 4rem;border-radius: 10%;padding-right: 4rem; background-color: black; width: 3rem; height: 2rem; color: #FF0F0F')

        button.remove()
        body.appendChild(text)
        body.appendChild(skull)
        body.appendChild(button2)

        button2.addEventListener("touchstart", function(){
            refresh()
        })
        button2.addEventListener("click", function(){
            refresh()
        })

        setTimeout(tWin.play(), 1000)
    }
    
    button.addEventListener("touchstart", function(){
        if (active) return;
        defuse.currentTime = 0;
        defuse.play();
        button.style.backgroundColor = '#32D60D'
        plantIcon.setAttribute('style', 'height: 7rem; width:fit-content; filter:brightness(100%)');
        plantTimer = window.setTimeout(defused, 5000);
    })

    button.addEventListener("mousedown", function(){
        if (active) return;
        defuse.currentTime = 0;
        defuse.play();
        button.style.backgroundColor = '#32D60D'
        plantIcon.setAttribute('style', 'height: 7rem; width:fit-content; filter:brightness(100%)');
        plantTimer = window.setTimeout(defused, 5000);
    })
    
    button.addEventListener("touchend", function(){
       // plant.pause();
        if (active) return;
        button.style.backgroundColor = '#0649BD'
        plantIcon.setAttribute('style', 'height: 7rem; width:fit-content; filter:brightness(0%)');
        clearTimeout(plantTimer);
    })

    button.addEventListener("mouseup", function(){
        // plant.pause();
         if (active) return;
         button.style.backgroundColor = '#0649BD'
         plantIcon.setAttribute('style', 'height: 7rem; width:fit-content; filter:brightness(0%)');
         clearTimeout(plantTimer);
     })
 //   html.style.backgroundColor = '#FF0F0F'

 //   let start = Date.now()
 //   let fComplete = (Date.now() - start) /40;
  //  let freq = Math.max( 0.1 + 0.9 * fComplete, 0.15 );
    let countdown = window.setTimeout(explosion, 45850);

 /*    setInterval(function() {
        html.classList.add(brug);
        fComplete = (Date.now() - start) /40;
        freq = Math.max( 0.1 + 0.9 * fComplete, 0.15 );
        anim = freq * 1000
        console.log(freq)
    }, freq * 1000) */
    
}

function bombSet() {
    tWin.pause()
    tWin.currentTime = 0
    beep.pause()
    beep.currentTime = 0
    let button = document.createElement('button');
    let plantIcon = document.createElement('img')
    plantIcon.src = "./C4_hud_csgo.png"
    plantIcon.setAttribute('style', 'height: 8rem; width:fit-content; filter:brightness(0%)');
    body.appendChild(button);
    button.appendChild(plantIcon);

    function planted() {
        button.remove();
        defuseSet();
        beep.play();
    }
    
    button.addEventListener("touchstart", function(){
        if (active) return;
        plant.currentTime = 0;
        plant.play();
        button.style.backgroundColor = '#FF0F0F'
        plantIcon.setAttribute('style', 'height: 8rem; width:fit-content; filter:brightness(100%)');
        plantTimer = window.setTimeout(planted, 3000);
    })

    button.addEventListener("mousedown", function(){
        if (active) return;
        plant.currentTime = 0;
        plant.play();
        button.style.backgroundColor = '#FF0F0F'
        plantIcon.setAttribute('style', 'height: 8rem; width:fit-content; filter:brightness(100%)');
        plantTimer = window.setTimeout(planted, 3000);
    })
    
    button.addEventListener("touchend", function(){
       // plant.pause();
        if (active) return;
        button.style.backgroundColor = '#eaee1f'
        plantIcon.setAttribute('style', 'height: 8rem; width:fit-content; filter:brightness(0%)');
        clearTimeout(plantTimer);
    })

    button.addEventListener("mouseup", function(){
        // plant.pause();
         if (active) return;
         button.style.backgroundColor = '#eaee1f'
         plantIcon.setAttribute('style', 'height: 8rem; width:fit-content; filter:brightness(0%)');
         clearTimeout(plantTimer);
     })
}


bombSet()

let permission = document.createElement('button')
permission.textContent = "CLICK ME FIRST BRO"
body.appendChild(permission)

permission.addEventListener("click", function(){
    plant.volume = 0;
    beep.volume = 0;
    defuse.volume = 0;
    tWin.volume = 0;
    csWin.volume = 0;
    defuseAnnounce.volume = 0;
    yay.volume = 0;

    plant.play();
    plant.pause();
    beep.play();
    beep.pause();
    defuse.play();
    defuse.pause();
    tWin.play();
    tWin.pause();
    csWin.play();
    csWin.pause()
    defuseAnnounce.play();
    defuseAnnounce.pause();
    yay.play();
    yay.pause();

    plant.volume = 1;
    beep.volume = 1;
    defuse.volume = 1;
    tWin.volume = 1;
    csWin.volume = 1;
    defuseAnnounce.volume = 1;
    yay.volume = 1;

   permission.remove()
})
