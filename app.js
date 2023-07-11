const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
 const btn = document.getElementById("btn");
const color = document.querySelector("colors");

btn.addEventListener("click",function(){
    //colors[2]
    let randomNumber = getRandomNum()
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})
function getRandomNum(){
    return Math.floor(Math.random()*colors.length)
}