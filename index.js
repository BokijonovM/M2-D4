const removeButtons = function(){
    let removeButtons = document.getElementById("button-addon1")
    let removeElem = document.getElementById("remove-button")
    let byr = removeElem.style.display="none"
    removeButtons.onclick = byr
}
const removeButtons1 = function(){
    let removeButtons = document.getElementById("button-addon2")
    let removeElem = document.getElementById("remove-button1")
    let byr = removeElem.style.display="none"
    removeButtons.onclick = byr
}
const removeButtons2 = function(){
    let removeButtons = document.getElementById("button-addon3")
    let removeElem = document.getElementById("remove-button2")
    let byr = removeElem.style.display="none"
    removeButtons.onclick = byr
}
const removeButtons3 = function(){
    let removeButtons = document.getElementById("button-addon4")
    let removeElem = document.getElementById("remove-button3")
    let byr = removeElem.style.display="none"
    removeButtons.onclick = byr
}
const removeButtons4 = function(){
    let removeButtons = document.getElementById("button-addon5")
    let removeElem = document.getElementById("remove-button4")
    let byr = removeElem.style.display="none"
    removeButtons.onclick = byr
}
const removeButtons5 = function(){
    let removeButtons = document.getElementById("button-addon6")
    let removeElem = document.getElementById("remove-button5")
    let byr = removeElem.style.display="none"
    removeButtons.onclick = byr
}

const getInput = function(){
    let teamsNames = document.getElementById("draw-name")
    return teamsNames.value
}
const outputInput = function(eventData){
    let getOutputId = document.createElement("p")
    let generatedOutput = document.getElementById("generated-output1")
    let ab = getOutputId.innerText = getInput()
    generatedOutput.value = ab
    
}