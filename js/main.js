'use strict'

function onInit(){
    renderGallery()
}

function toEditorMode(el){
  document.querySelector('.image-gallery').hidden = true // hide pics gallery when meme is clicked 
  document.querySelector('.meme-editor').style.display = 'grid' // make editor appear and treat him as grid element
  initEditor(el)
}

function toGalleryMode(){
  document.querySelector('.image-gallery').hidden = false
  document.querySelector('.meme-editor').hidden = true
  document.querySelector('.meme-editor').style.display = 'none'
  document.querySelector('.gellery-nav').classList.add('active')
}