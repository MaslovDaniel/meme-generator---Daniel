'use strict'

function renderGallery(){
    renderGalleryImgs()
}

function renderGalleryImgs(){
    let imgsUrl = getImgsForDisplay() // to render only the pics with a specific keyword
    // console.log('imgsUrl:', imgsUrl);
    
    let strHTML = ``
    imgsUrl.map((url,idx) => {
        strHTML += `<img class="img-${idx}" src="${url}" 
        onclick="toEditorMode(this)">`
    })

    // console.log(strHTML)
    document.querySelector('.gallery-container').innerHTML = strHTML
}

