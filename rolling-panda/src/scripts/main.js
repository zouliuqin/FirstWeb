/**
 * 注释
 */
//单行注释
// let myHeading = document.querySelector("h1").onclick =function(){
//     alert('不要戳我了~')
// }
// // myHeading.textContent='Hello,Word!';

// let a=1.1
// let b=9999
// let c= a+b
// let d=999
// let e=b*d

// myHeading.textContent=e

let myHeading = document.querySelector("h1")
let img=document.querySelector('img')
let button=document.querySelector('button')

button.onclick=showImport()

function showImport(){
    let myName =prompt('请输入你的名字1')
    localStorage.setItem('name',myName)
    myHeading.textContent=(myHeading.textContent ==='null' ? "" :myHeading.textContent ) + (myName == null ? "" :myName)
    
}
if(!localStorage.getItem('name')){
    showImport()
}else{
    let name = localStorage.getItem('name')
    myHeading.textContent=(myHeading.textContent ==='null' ? "" :myHeading.textContent ) + (name == 'null' ?" " :name)
}

img.onclick=function(){
    let src =this.getAttribute('src')
    if(src==='images/12.webp'){
        this.setAttribute('src','images/23.webp')
    }else{
        this.setAttribute('src','images/12.webp')
    }
}