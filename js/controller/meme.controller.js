'use strict'

let gElCanvas
let gCtx

let gLineIdx = 0
let gIconIdx = 0
let gLineDragIdx = -1

let gIsDown
let gStartPos
const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

function initEditor(el) {
    gElCanvas = document.getElementById('my-canvas')
    // console.log('gElCanvas:', gElCanvas)

    gCtx = gElCanvas.getContext('2d')
    // console.log('gCtx:', gCtx);

    resizeCanvas() // standart canvas must have func
    selectImg(el) // catch specific img
    addListeners() // standart canvas must have func
    renderIconsBar()
    renderMeme(el.src)

}
function resizeCanvas() { // standart canvas must have func
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}

function renderIconsBar() {
    document.querySelector('.icon-1').innerText = getIconTxt(0 + gIconIdx)
    document.querySelector('.icon-2').innerText = getIconTxt(1 + gIconIdx)
    document.querySelector('.icon-3').innerText = getIconTxt(2 + gIconIdx)
}

function renderMeme(img) {
    if (!img) {
        img = getUrl() // to allow drawing to the pic
        drawImg(img)
    } else {
        drawImg(img)
    }
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

function drawConTent() {
    let lines = getMeme().lines
    // console.log('lines:', lines);

    lines.map((line) => {
        let { txt, x, y, size, align, color, isSelected } = line
        if (isSelected) drawBox(10, y - 40, size) // the box where we can write
        drawText(txt, x, y, size, color, align)
    })
    let icon = getIcon()
    let { iconTxt, iconIdx, iconIdy } = icon
    drawText(iconTxt, iconIdx, iconIdy)
}

function drawBox(x = 10, y = 10, size = 50) { // the box where we can write
    gCtx.strokeStyle = 'white'
    y += (50 - size)
    gCtx.strokeRect(x, y, 480, size) // standart function to make a square on canvas
}

function drawText(text, x = 250, y = 47, size, color, align) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = color
    gCtx.fillStyle = 'black'
    gCtx.font = `${size}px Arial`
    gCtx.textAlign = align
    gCtx.fillText(text, x, y) // Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(text, x, y) // Draws (strokes) a given text at the given (x, y) position.
}

function getEvPos(ev) { // standart function to use touch events on the phone
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
function addListeners() { // standart canvas must have func
    addMouseListeners()
    addTouchListeners()
    window.addEventListener('resize', () => {
        resizeCanvas()
        renderMeme()
    })
}
function addMouseListeners() { // standart canvas must have func
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() { // standart canvas must have func
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchend', onUp)
}

function onMove(ev) { // standart func for mobile
    if (!gIsDown) return
    const pos = getEvPos(ev)
    // console.log('pos:', pos); 
    gStartPos = pos
    renderMeme()
}
function onUp() { // standart func for mobile
    gIsDown = false
    gLineDragIdx = -1
    document.body.style.cursor = 'auto'    // Default. The browser sets a cursor
}

function onDown(ev) { // standart func for mobile
    //Get the ev pos from mouse or touch
    const pos = getEvPos(ev)

    console.log('pos:', pos);
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

function lineClickedIdx(clickedPos){
    let linegrab = gMeme.lines.findIndex(line => {
        return (clickedPos.y < line.y + 10 && clickedPos.y > line.y - 50 &&
            line.txt)
    })
    let line = gMeme.lines.find(line => {
        return (clickedPos.y < line.y + 10 && clickedPos.y > line.y - 50 &&
            line.txt)
    })
    return linegrab
}

function setTxtInput() {
    let txt = getLineTxt(gLineIdx)
    document.querySelector('.txt-line-input').value = ''
    document.querySelector('.txt-line-input').placeholder = txt
}

function alignTxt(value, direction) {
    setLineAlign(value, direction, gLineIdx)
    renderMeme()
}


function inputText(text, x, y) {
    setLineTxt(text, gLineIdx)
    renderMeme()
}

function choseIcon(idx) {
    setIcon(gIconIdx + idx)
    renderMeme()
}

function setIcon(idx) {
    gMeme.icons = { iconTxt: gIcons[idx], iconIdx: 250, iconIdy: 250 }
}