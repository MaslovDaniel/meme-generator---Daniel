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

