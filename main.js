let box = document.querySelectorAll(".box")
let outOfBox = document.querySelector("#outer")
let boxEz = document.querySelectorAll(".boxEz")
let outOfBoxEz = document.querySelector("#outer2")
let startBtn = document.querySelector("#start")
let resultBtn = document.querySelector("#result")
let rgbTxt = document.querySelector("#rgbdisp")
let modeEz = document.querySelector("#easy")
let modeHd = document.querySelector("#hard")

let RgbArr = [];
let gameLogic = true;
let gameIndicator = "hard";

function randomRgbGenerator(colorArr){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = `rgb(${r}, ${g}, ${b})`;
    colorArr.push(color)
    return color;
}

function startGame(starter, arr, elementsArr, rgbOUT, resulter){
    starter.addEventListener("click", function(){
        arr = []
        resulter.innerHTML = "result";
        resulter.style.backgroundColor = "gray"
        elementsArr.forEach((boxN) => {
            boxN.style.opacity = "100%";
            boxN.style.backgroundColor = randomRgbGenerator(arr);
        })
        // console.log(arr)

        let randIndex = Math.floor(Math.random() * arr.length);
        let andRGB = arr[randIndex]
        // console.log(andRGB)
        rgbOUT.innerHTML = andRGB;

        inGame(rgbTxt.innerHTML, box, resultBtn, gameLogic)
    })
}

function inGame(correctRGB, coloredDivs, resultOUT, wonLog){
    coloredDivs.forEach((box) => {
        box.addEventListener("click", function(){
            if(wonLog == true){
                if(box.style.backgroundColor == correctRGB){
                    resultOUT.style.backgroundColor = "#4BB543";
                    resultOUT.innerHTML = "You won"
                    box.style.opacity = "100%";
                    Swal.fire({
                        title: "You won the game!",
                        text: "Click start to restart the game or change the gamemode.",
                        icon: "success"
                    });
                    wonLog = false;
                }
                else if(box.style.backgroundColor != correctRGB){
                    resultOUT.style.backgroundColor = "red";
                    resultOUT.innerHTML = "You missed the right box"
                    box.style.opacity = "0%";
                } 
                else{
                    resultOUT.innerHTML = "Error"
                }
            }
        })
    })
}

function inGameEz(correctRGB, coloredDivs, resultOUT, wonLog){
    coloredDivs.forEach((box) => {
        box.addEventListener("click", function(){
            if(wonLog == true){
                if(box.style.backgroundColor == correctRGB){
                    resultOUT.style.backgroundColor = "#4BB543";
                    resultOUT.innerHTML = "You won"
                    box.style.opacity = "100%";
                    Swal.fire({
                        title: "You won the game!",
                        text: "Click start to restart the game or change the gamemode.",
                        icon: "success"
                    });
                    wonLog = false;
                    // setTimeout(() => {
                    //     location.reload()
                    // }, "5000");
                }
                else if(box.style.backgroundColor != correctRGB){
                    resultOUT.style.backgroundColor = "red";
                    resultOUT.innerHTML = "You missed the right box"
                    box.style.opacity = "0%";
                } 
                else{
                    resultOUT.innerHTML = "Error"
                }
            }
        })
    })
}

function startGameEasy(starter, arr, elementsArr, rgbOUT, resulter){
    starter.addEventListener("click", function(){
        arr = []
        resulter.innerHTML = "result";
        resulter.style.backgroundColor = "gray"
        elementsArr.forEach((boxN) => {
            boxN.style.opacity = "100%";
            boxN.style.backgroundColor = randomRgbGenerator(arr);
        })
        // console.log(arr)

        let randIndex = Math.floor(Math.random() * arr.length);
        let andRGB = arr[randIndex]
        // console.log(andRGB)
        rgbOUT.innerHTML = andRGB;

        inGameEz(rgbTxt.innerHTML, boxEz, resultBtn, gameLogic)
    })
}

function modeSwapper(Ezbtn, HardBtn, hardBox, easyBox, resultBox, rgbDisp, hdbox, ezbox, md){
    HardBtn.style.backgroundColor = "#4BB543"
    startGame(startBtn, RgbArr, box, rgbTxt, resultBtn)
    Ezbtn.addEventListener("click", function(){
        md = "easy"
        if(md == "easy"){
            hardBox.style.display = "none"
            easyBox.style.display = "flex"
            Ezbtn.style.backgroundColor = "#4BB543"
    
            ezbox.forEach((e) => {
                e.style.backgroundColor = "#D3D3D3"
            })
    
            HardBtn.style.backgroundColor = "gray"
            resultBox.innerHTML = "result"
            resultBox.style.backgroundColor = "gray"
            rgbDisp.innerHTML = "............"
            startGameEasy(startBtn, RgbArr, boxEz, rgbTxt, resultBtn)
        }
    })
    HardBtn.addEventListener("click", function(){
        md = "hard";
        if(md == "hard"){
            hardBox.style.display = "flex"
            easyBox.style.display = "none"
            Ezbtn.style.backgroundColor = "gray"
            HardBtn.style.backgroundColor = "#4BB543"
            
            hdbox.forEach((x) => {
                x.style.backgroundColor = "#D3D3D3"
            })
    
            resultBox.innerHTML = "result"
            resultBox.style.backgroundColor = "gray"
            rgbDisp.innerHTML = "............"
            startGame(startBtn, RgbArr, box, rgbTxt, resultBtn)
        }
    })
}

modeSwapper(modeEz, modeHd, outOfBox, outOfBoxEz, resultBtn, rgbTxt, box, boxEz, gameIndicator)

// startGame(startBtn, RgbArr, box, rgbTxt, resultBtn)