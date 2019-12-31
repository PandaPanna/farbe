const colorBtn = document.querySelector(".colorBtn");
const bodyBcg = document.querySelector('body');
const colors = {rot: "red",
                purpur: "magenta",
                gelb: "yellow",
                orange: "orange",
                grün: "green",
                blau: "blue",
                lila: "purple",
                weiß: "white",
                braun: "brown",
                rosa: "pink",
                grau: "grey",
                hellblau: "LightBlue",
                schwarz: "black",
                dunkelblau: "DarkBlue",
                silber: "silver",
                goldfarben: "gold"
                }


var random = Math.floor(Math.random()*Object.keys(colors).length)
colorBtn.addEventListener('click', function(){
                                            changeColor()});





function changeColor(){
  var newRandom = Math.floor(Math.random()*Object.keys(colors).length)
  if (newRandom != window.random){
    bodyBcg.style.backgroundColor = Object.values(colors)[newRandom]
    // console.log('First loop', Object.values(colors)[newRandom])
    document.getElementById('text').innerHTML = Object.keys(colors)[newRandom]
    window.random = newRandom
  }else{
    // console.log('NEW LOOP')
    changeColor()
  }

}
