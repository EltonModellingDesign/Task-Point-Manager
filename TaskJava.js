const writeCamp = document.querySelector("#camp")
const createButton = document.querySelector("#CreateButton")
const dropZoneDo = document.querySelector("#drop")
const dropZoneDone = document.querySelector("#dropDone")
const squarePoints = document.querySelector("#square")
const clearAll = document.querySelector("#clear")

let squareDO = 0
let squareDone = 0

function createTask () {
    const newOne = document.createElement('span')
    newOne.classList.add("TaskAdded")
    newOne.textContent = writeCamp.value
    dropZoneDo.appendChild(newOne)

    squareDO += 50
}
createButton.onclick = createTask


function Done (event) {
    let grab = event.target

    if (grab.classList.contains("TaskAdded")){
    const newOne = document.createElement('span')
    newOne.classList.add("TaskDone")
    newOne.textContent = event.target.textContent
    dropZoneDone.appendChild(newOne)

    dropZoneDo.removeChild(event.target)
    } 
    squareDone +=50

    squarePoints.childNodes[3].textContent = `${(squareDone*100/squareDO).toFixed(0)}%`

    if (squarePoints.childNodes[3].textContent == '100%'){
        squarePoints.childNodes[3].style.background = "#A7FD72"
        squarePoints.childNodes[1].textContent = "Parabens !!!"
        createButton.style.pointerEvents = "none"
        createButton.textContent = "Finalizadas"
        createButton.style.background = "#A7FD72"
    }

}
dropZoneDo.onclick = Done


function Refresh () {
    window.location.reload(true)
}
clearAll.onclick = Refresh






/*function grabPower (event) {
    let grab = event.target
    grab.draggable = true

    grab.ondragstart = event =>
    event.dataTransfer.setData('item-id', event.target) 
    console.log(event.target)   

}
newTasks.onmousedown = grabPower




function dropPower (event) {
    let grab = event.target



    grab.ondrop = function(event) {
    const id = event.dataTransfer.getData('item-id')
    const item = document.getElementById(id)
    dropZoneDo.appendChild(item)} 
    
    console.log("drop")
}
newTasks.onmouseup = dropPower*/


