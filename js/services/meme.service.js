'use strict'

var gKeywordSearchCountMap = {'funny': 12,'cat': 10, 'baby': 7, 'cynical': 8, 'animals':6} 

const gIcons = ['😎','😍','😂','😅','🤗','🍔']

let gSearchTxt = ''

var gImgs = [
    {id: 1, url: 'images/meme-imgs/1.jpg', keywords: ['funny', 'politics','trump','funy face','american']},
    {id: 2, url: 'images/meme-imgs/2.jpg', keywords: ['cute', 'animals','animal','dog']},
    {id: 3, url: 'images/meme-imgs/3.jpg', keywords: ['cute', 'animals','animal','dog','baby']},
    {id: 4, url: 'images/meme-imgs/4.jpg', keywords: ['cat','animals','animal']},
    {id: 5, url: 'images/meme-imgs/5.jpg', keywords: ['funny', 'baby']},
    {id: 6, url: 'images/meme-imgs/6.jpg', keywords: ['funny', 'man']},
    {id: 7, url: 'images/meme-imgs/7.jpg', keywords: ['funny', 'baby','funy face']},
    {id: 8, url: 'images/meme-imgs/8.jpg', keywords: ['funny', 'cynical','smart']},
    {id: 9, url: 'images/meme-imgs/9.jpg', keywords: ['funny', 'baby','evil','laughing']},
    {id: 10, url: 'images/meme-imgs/10.jpg', keywords: ['funny', 'laughing','America']},
    {id: 11, url: 'images/meme-imgs/11.jpg', keywords: ['funny', 'yes','cute','win']},
    {id: 12, url: 'images/meme-imgs/12.jpg', keywords: ['funny', 'pointing','israeli']},
    {id: 13, url: 'images/meme-imgs/13.jpg', keywords: ['funny', 'movie','pointing']},
    {id: 14, url: 'images/meme-imgs/14.jpg', keywords: ['funny', 'black','rapper','america']},
    {id: 15, url: 'images/meme-imgs/15.jpg', keywords: ['funny', 'lord of the rings','movie']},
    {id: 16, url: 'images/meme-imgs/16.jpg', keywords: ['funny', 'laughing','movie','star']},
    {id: 17, url: 'images/meme-imgs/17.jpg', keywords: ['funny', 'politics', 'putin', 'russia']},
    {id: 18, url: 'images/meme-imgs/18.jpg', keywords: ['two', 'cartoon','movie','pointing']},
    {id: 1, url: 'images/meme-imgs/1.jpg', keywords: ['funny', 'politics','trump','funy face','american']},
    {id: 2, url: 'images/meme-imgs/2.jpg', keywords: ['cute', 'animals','animal','dog']},
    {id: 3, url: 'images/meme-imgs/3.jpg', keywords: ['cute', 'animals','animal','dog','baby']},
    {id: 4, url: 'images/meme-imgs/4.jpg', keywords: ['cat','animals','animal']},
    {id: 5, url: 'images/meme-imgs/5.jpg', keywords: ['funny', 'baby']},
    {id: 6, url: 'images/meme-imgs/6.jpg', keywords: ['funny', 'man']},
    {id: 7, url: 'images/meme-imgs/7.jpg', keywords: ['funny', 'baby','funy face']},
    {id: 8, url: 'images/meme-imgs/8.jpg', keywords: ['funny', 'cynical','smart']},
    {id: 9, url: 'images/meme-imgs/9.jpg', keywords: ['funny', 'baby','evil','laughing']},
    {id: 10, url: 'images/meme-imgs/10.jpg', keywords: ['funny', 'laughing','America']},
    {id: 11, url: 'images/meme-imgs/11.jpg', keywords: ['funny', 'yes','cute','win']},
    {id: 12, url: 'images/meme-imgs/12.jpg', keywords: ['funny', 'pointing','israeli']},
    {id: 13, url: 'images/meme-imgs/13.jpg', keywords: ['funny', 'movie','pointing']},
    {id: 14, url: 'images/meme-imgs/14.jpg', keywords: ['funny', 'black','rapper','america']},
    {id: 15, url: 'images/meme-imgs/15.jpg', keywords: ['funny', 'lord of the rings','movie']},
    {id: 16, url: 'images/meme-imgs/16.jpg', keywords: ['funny', 'laughing','movie','star']},
    {id: 17, url: 'images/meme-imgs/17.jpg', keywords: ['funny', 'politics', 'putin', 'russia']},
    {id: 18, url: 'images/meme-imgs/18.jpg', keywords: ['two', 'cartoon','movie','pointing']},
]

var gMeme = { 
    selectedImgId: 5, 
    selectedLineIdx: 0, 
    icons: {iconTxt: '', iconIdx:0 ,iconIdy: 0, isSelected: false},
    lines: [ {txt:'', x: 250, y: 70, size: 60, align:'center', color:'red', isSelected: true}, // three lines for 3 line in memes editor
    {txt:'', x: 250, y: 437, size: 60, align:'center', color:'red', isSelected: false},
    {txt:'', x: 250, y: 250, size: 60, align:'center', color:'red' , isSelected: false}] 
}


// to render only the pics with a specific keyword
function getImgsForDisplay(){
    let imgs = gImgs.filter((img) => {
        return img.keywords.some(word => {
            return word.toLowerCase().includes(gSearchTxt.toLowerCase())
        })
    })
    return imgs.map((img)=> {return img.url}) 
     
}

function selectImg(el){
    // console.log('el:', el);
    // catch the class that is img-his num
    // console.log('el.classList[0]:', el.classList[0]) 
    
    gMeme.selectedImgId = el.classList[0].split('-')[1] // catch only the num/id of the pic
    // console.log('gMeme.selectedImgId:', gMeme.selectedImgId);
    
    gImgs[gMeme.selectedImgId].url = el.src
    // console.log(' gImgs[gMeme.selectedImgId].url:',  gImgs[gMeme.selectedImgId].url);
}

function getMeme(){
    return gMeme
}

function getIconTxt(idx){
    return gIcons[idx]
}

function getUrl(){
    return gImgs[gMeme.selectedImgId].url
}

function setLineTxt(txt,idx){
    gMeme.lines[idx].txt = txt 
}
function setSelectedLine(index){ // make sure we are on the selected line
    gMeme.lines.map((line,idx) => {
        line.isSelected = (idx === index) ? true: false
    })
}

function getIcon(){
    return gMeme.icons
}

function getLineTxt(idx){
    return gMeme.lines[idx].txt
}

function resetSelectedLines(){
    gMeme.lines.map(line => {line.isSelected = false})
}

function getCoords(idx){
    let {x,y} = gMeme.lines[idx]
    return {x, y: y - 37}
}

function setColor(value,idx){
    gMeme.lines[idx].color = value
}

function setTxtSize(num, idx){
    gMeme.lines[idx].size += num
}

function getTextSize(idx){
    return gMeme.lines[idx].size
}

function clearTxt(idx){
    gMeme.lines[idx].txt = ''
}

function getIconTxt(idx){
    return gIcons[idx]
}

function getLastIdx(){
    return gIcons.length - 3
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

function getLineTxt(idx){
    return gMeme.lines[idx].txt
}

function clearMemeTxt(){
    gMeme.lines = [ {txt:'', x: 250, y: 70, size: 60, align:'center', color:'red', isSelected: true},
    {txt:'', x: 250, y: 437, size: 60, align:'center', color:'red', isSelected: false},
    {txt:'', x: 250, y: 250, size: 60, align:'center', color:'red' , isSelected: false}] 
}

function setLineAlign(value,direction,idx){
    gMeme.lines[idx].x = value
    gMeme.lines[idx].align = direction
}

function getLastIdx(){
    return gIcons.length - 3
}