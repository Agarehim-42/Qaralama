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

// Yadda Saxlayir Parametrli funksiya ifadesi
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

const ulTeqi = document.querySelector("ul")


// const divButtonu = document.querySelector()

const addTodoBtn = document.getElementsByClassName("add-butonu")[0]
console.log(addTodoBtn) 

function tapsirigiElaveEt(e) {
    e.preventDefault() ;


    const taskDivi = document.createElement("div")
    taskDivi.classList.add("d-flex" , "my-3" , "justify-content-between" , "align-items-center" , "task")

    const taskLi = document.createElement("li")
    
    taskLi.innerText = todoInput.value

    taskDivi.appendChild(taskLi)


    ulTeqi.appendChild(taskDivi) 

    const buttonlarDivi = document.createElement("div")
    buttonlarDivi.classList.add("buttonlar")
    const doneBtn = document.createElement("button")
    doneBtn.classList.add("tamamlandi")

    doneBtn.innerHTML = "<i class='fa-solid fa-check-to-slot'></i>"


    const removeBtn = document.createElement("button")
    removeBtn.classList.add =("sil")

    removeBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'

    buttonlarDivi.appendChild(doneBtn)
    buttonlarDivi.appendChild(removeBtn)

    taskDivi.appendChild(buttonlarDivi) 

    

    todoInput.value =""


}

function tamamlaVeYaSil(e) {
    // console.log(e.target)
    const kiliklediyimizYer = e.target 
    if(kiliklediyimizYer.classList.contains("fa-check-to-slot")) {
        kiliklediyimizYer.parentElement.parentElement.parentElement.classList.toggle("done")
    }

    if(kiliklediyimizYer.classList.contains("fa-trash")) {
        kiliklediyimizYer.parentElement.parentElement.parentElement.classList.add("delete")
    }

}

addTodoBtn.addEventListener  ("click",tapsirigiElaveEt)  //undefined
// Hoisting

ulTeqi.addEventListener("click" , tamamlaVeYaSil)




