// const lampaniSondurenBtn = document.getElementById("off-btn")
// const lampaniYandiranBtn = document.getElementById("on-btn")
// console.log(lampaniSondurenBtn)
// lampaniYandiranBtn.addEventListener("click", function() {
//     // console.log(document.getElementById("Messi"))
//     // alert("cdcdcmsc,")
//     document.getElementById("Messi").src ="./assets/images/pic_bulbon.gif"
// })


// lampaniSondurenBtn.addEventListener("click" , function(){
//     document.getElementById("Messi").src ="/assets/images/pic_bulboff.gif"
// })


// Regular adi parametrSIZ
// function salamHamiya () {
//     console.log("privet" , "druzya")
// }

// salamHamiya() 




// // REgular adi parametrLI
// function salamlaAll (name) {
//     console.log("Privet" , name)

// }
// salamlaAll("Mesmali")

// // Yadda Saxlayir Parametrli funksiya ifadesi
// const SalamParametrliFunksiyaIfadesi = function ( ad , soyad) {
//     console.log(`Salam ,  ${ad}  ${soyad} `)
// }
// SalamParametrliFunksiyaIfadesi("Vaga Mesmalovic")



// const oxFunksiya = (ad , soyad) => console.log("Salam" , ad , soyad) 
// oxFunksiya("Memmedaga , Quba")


// load vs DOMContentLoaded
// Document Object Model
// window.addEventListener("load" , getMelumatlariGetir)


// async function getMelumatlariGetir() {
//     alert(pidr)
// }


// DOM
// const text = document.getElementsByClassName("text")[0]
// text.innerText = "Hello bro"
// text.style.textAlign = "center"
// console.log(text)










const todoInput = document.querySelector("input")
/* <div class="d-flex my-3 justify-content-between align-items-center task">
        <li>Noxcalla</li>
        <div class="buttonlar">
            <button class="done">
            <i class="fa-solid fa-check-to-slot"></i>
        </button>

        <button class="delete">
            <i class="fa-solid fa-trash"></i>
        </button>
    </div>
    
    


        
    </div> */

const todoInputu = document.querySelector("input")
const addTodoBtn = document.getElementsByClassName("add-butonu")[0]
console.log(addTodoBtn)

function tapsirigiElaveEt(e) {
    e.preventDefault() ;

    const taskDivi = document.createElement("div")
    taskDivi.classList.add("d-flex" , "my-3" , "justify-content-between" , "align-items-center" , "task")

    const taskLi = document.createElement("li")
    
    taskLi.innerText = todoInput.value
    console.log(taskLi)

    const taskbutton = document.createElement("button")
    taskbutton.classList.add("add-butonu" , "p-3")

    taskbutton.innerHTML = todoInput.value
    console.log(taskbutton)
}

addTodoBtn.addEventListener  ("click",tapsirigiElaveEt)  //undefined
// Hoisting




