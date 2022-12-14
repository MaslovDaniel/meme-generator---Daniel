'use strict'

var gImgs = [
    {id: 1, url: 'images/meme-imgs/1.jpg', },
  
]
var gMeme = { 
    selectedImgId: 5, 
    selectedLineIdx: 0, 
    icons: {iconTxt: '', iconIdx:0 ,iconIdy: 0, isSelected: false},
    lines: [ {txt:'', x: 250, y: 70, size: 60, align:'center', color:'red', isSelected: true},
    {txt:'', x: 250, y: 437, size: 60, align:'center', color:'red', isSelected: false},
    {txt:'', x: 250, y: 250, size: 60, align:'center', color:'red' , isSelected: false}] 
}

function getImgsForDisplay(){
    let imgs = gImgs.filter((img) => {
        return img.keywords.some(word => {
            return word.toLowerCase().includes(gSearchTxt.toLowerCase())
        })
    })
    return imgs.map((img)=> {return img.url}) 
}

