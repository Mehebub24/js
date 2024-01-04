const randamcol = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i=0 ;i <6 ; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}
let intervelId
const  startColorchang = function(){
   if (!intervelId){
    intervelId = setInterval(colorChange,1000)
   }
   function colorChange(){
    document.body.style.backgroundColor = randamcol()
   }
}
const  stopColorchang = function(){
    clearInterval(intervelId)
    intervelId = null 
}
document.querySelector("#start").addEventListener("click",startColorchang)
document.querySelector("#stop").addEventListener("click",stopColorchang)