const h1 = document.querySelector("h1")
const btn = document.querySelector("button")
let h2 = document.querySelector("h2")
const kubi =document.querySelector(".kubi")





btn.addEventListener("click", () => {
getData()
kubi.classList.toggle("class")
})


async function getData (){

    h1.innerHTML= "Loading..."
 kubi.setAttribute("disabled",true)
 let res = await fetch("https://api.adviceslip.com/advice")
 let data = await res.json()
 h1.innerHTML = data.slip.advice
 h2.innerHTML = data.slip.id
 kubi.setAttribute("remove")
}