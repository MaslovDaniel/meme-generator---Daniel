'use strict'

function renderGallery(value){
    renderGalleryImgs()
}

function renderGalleryImgs(){
    let imgsUrl = getImgsForDisplay()
    let strHTML = ``
    imgsUrl.map((url,idx) => {
        strHTML += `<img class="img-${idx}" src="${url}" 
        alt="img for meme editor">`
    })
    document.querySelector('.gallery-container').innerHTML = strHTML
}