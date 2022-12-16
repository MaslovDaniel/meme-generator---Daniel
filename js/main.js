'use strict'

function onInit(){
    renderGallery()
}

function toEditorMode(el){
  document.querySelector('.image-gallery').hidden = true // hide pics gallery when meme is clicked 
  initEditor(el)
}

function toGalleryMode(){
  document.querySelector('.image-gallery').hidden = false
}