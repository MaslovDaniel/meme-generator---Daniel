'use strict'

var gKeywordSearchCountMap = {'funny': 12,'cat': 10, 'baby': 7, 'cynical': 8, 'animals':6} 

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

