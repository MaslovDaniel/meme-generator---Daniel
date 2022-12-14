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
