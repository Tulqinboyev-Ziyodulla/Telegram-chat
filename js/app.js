import {DATA} from "../server/db.js";
const form = document.querySelector(".form")
const input = document.querySelector(".form input")
const content = document.querySelector(".content")
const headerStatus = document.querySelector(".header__status")
const contentImage = document.querySelector(".content__image")

// Xabar jo'natayotganda refresh bo'masligi uchun
form.addEventListener("submit", (event)=>{
    event.preventDefault()
    let val = input.value
    if(val.trim() === "") return null

    // Xabar yozganda stikerni yoqolishi uchun
    contentImage.style.display = "none"
    
    // Vaqtni xozirgi vaqt bilan birhil korsatish uchun
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()

    
    // Xabarlar uchun yangi element yaratish uchun
    let div = document.createElement("div")
    div.className = "message my-message"
    div.innerHTML = `
    <p>${val}</p>
    <span>${hour}:${minute}</span>
    `
    // Xabarni yuborgandan keyin yozilgan xabarni tozalaydi
    content.appendChild(div)
    input.value = ""
    
    // Partnyorni chaqirish
    partnerSendMessage()
})


function partnerSendMessage(){
    // Partnyor yozishini kuttirish
    setTimeout(()=>{
    // Vaqtni xozirgi vaqt bilan birhil korsatish uchun
        let date = new Date()
        let hour = date.getHours()
        let minute = date.getMinutes()
        
        // DATA ni random xabar chiqarish uchun
        let index = Math.floor(Math.random() * DATA.length)

        // Xabarlar uchun yangi element yaratish uchun
        let div = document.createElement("div")
        div.className = "message"
        div.innerHTML = `
            <p>${DATA[index]}</p>
            <span>${hour}:${minute}</span>
        `
        // Xabarni yuborgandan kegin yozilgan habarni tozalaydi
      content.appendChild(div)
    }, 1000)
}