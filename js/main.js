'use strict'

function onInit(){
    renderGallery()
    document.querySelector('.img-0').innerHTML = `<input
    type="file"
    class="file-input btn"
    name="image"
    onchange="onImgInput(event)"
  />`
}

function toEditorMode(el){
  console.log('this:',el.classList[0]);
  document.querySelector('.image-gallery').hidden = true
  document.querySelector('.meme-editor').hidden = false
  document.querySelector('.meme-editor').style.display = 'grid'
  document.querySelector('.gellery-nav').classList.remove('active')
  initEditor(el)
}

function toGalleryMode(){
  document.querySelector('.image-gallery').hidden = false
  document.querySelector('.meme-editor').hidden = true
  document.querySelector('.meme-editor').style.display = 'none'
  document.querySelector('.gellery-nav').classList.add('active')
}