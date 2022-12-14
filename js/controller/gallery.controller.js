'use strict'

function renderGallery(value){
    renderGalleryImgs()
}

function renderGalleryImgs(){
    let imgsUrl = getImgsForDisplay()
    // console.log(imgsUrl)
    let strHTML = ``
    imgsUrl.map((url,idx) => {
        strHTML += `<img class="img-${idx}" src="${url}" 
        alt="img for meme editor" 
        onclick="toEditorMode(this)">`
    })

    // console.log(strHTML)
    document.querySelector('.gallery-container').innerHTML = strHTML
}

