'use strict'

let gElCanvas
let gCtx

let gLineIdx = 0
let gIconIdx = 0
let gLineDragIdx = -1

let gIsDown
let gStartPos
const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

function addMouseListeners() {
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mouseup', onUp)
}
  
function addTouchListeners() {
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchend', onUp)
}

function initEditor(el){
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
    resizeCanvas()
    selectImg(el)
    addListeners()
    renderIconsBar()
    renderMeme(el.src)

}

function renderMeme(img){
    if (!img){
        img = getUrl()
        drawImg(img)
    } else{
        drawImg(img)
    } 
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}

function addListeners() {
    addMouseListeners()
    addTouchListeners()
    //Listen for resize ev 
    window.addEventListener('resize', () => {
      resizeCanvas()
      renderMeme()
    })
}

function drawImg(image) {
    const img = new Image() // Create a new html img element
    img.src = image // Send a network req to get that image, define the img src
    // When the image ready draw it on the canvas
    img.onload = () => {
      gCtx.drawImage(img, 0, 0, gElCanvas.clientWidth, gElCanvas.clientHeight)
      drawConTent()
    }
}

function getEvPos(ev) {
    //Gets the offset pos , the default pos
    let pos = {
      x: ev.offsetX,
      y: ev.offsetY
    }
    // Check if its a touch ev
    if (TOUCH_EVS.includes(ev.type)) {
      //soo we will not trigger the mouse ev
      ev.preventDefault()
      //Gets the first touch point
      ev = ev.changedTouches[0]
      //Calc the right pos according to the touch screen
      pos = {
        x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
        y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
      }
    }
    return pos
}
function setTxtInput(){
    let txt = getLineTxt(gLineIdx)
    document.querySelector('.txt-line-input').value = ''
    document.querySelector('.txt-line-input').placeholder = txt
}

function alignTxt(value,direction){
    setLineAlign(value,direction,gLineIdx)
    renderMeme()
}

function onMove(ev) {
    if (!gIsDown) return
    const pos = getEvPos(ev)
    const dx = pos.x - gStartPos.x
    console.log('dx:', dx);
    
    const dy = pos.y - gStartPos.y
    console.log('dy:', dy);
    
    setLineCoords(dx,dy,gLineDragIdx) // TO DO: write this function 
    gStartPos = pos
    renderMeme()
}

function onDown(ev) {
    //Get the ev pos from mouse or touch
    const pos = getEvPos(ev)
    console.log('pos:',pos);
    gIsDown = true
    let lineIdx = lineClickedIdx(pos)
    if (lineIdx < 0) return
    gLineDragIdx = lineIdx
    gLineIdx = lineIdx
    setSelectedLine(gLineIdx)
    setTxtInput()
    renderMeme()
    //Save the pos we start from 
    gStartPos = pos
    document.body.style.cursor = 'grabbing'
}

function onUp() {
    gIsDown = false
    gLineDragIdx = -1
    document.body.style.cursor = 'auto'
}

function renderIconsBar(){
    document.querySelector('.icon-1').innerText = getIconTxt(0 + gIconIdx)
    document.querySelector('.icon-2').innerText = getIconTxt(1 + gIconIdx)
    document.querySelector('.icon-3').innerText = getIconTxt(2 + gIconIdx)
}
