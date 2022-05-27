document.addEventListener("DOMContentLoaded", function (event) {
let switcher = document.querySelector(".switcher")
let changeable = document.querySelectorAll(".booking__changeble")
if(switcher){
    switcher.addEventListener("click", ()=>{
        changeable.forEach(el=>{
            console.log("12312")
            el.classList.contains("not-seeU") ? el.classList.remove("not-seeU") : el.classList.add("not-seeU")
        })
    })
}


let root = document.querySelector(":root")
let arrow = document.querySelector(".arrow-reveal")
let main = document.querySelector(".main")
let header = document.querySelector(".header")
let menuList = document.querySelectorAll(".menu__list")
let bookingHolder = document.querySelector(".booking__holder")
let arrowCounter = 0
let sidebar = document.querySelector(".sidebar")
let logoImgs = document.querySelectorAll(".header__logo-img")
let logoContainer = document.querySelector(".header__logo-img")
let arrowImgs = document.querySelectorAll(".arrow-img")
let wideSections = document.querySelectorAll(".booking__widesection")
let standart = document.querySelectorAll("#standart")
let wideLocation = document.querySelector(".booking__widesection-location")
let bookingLocation = document.querySelector(".booking__item-location")





let menuLink = document.querySelectorAll(".menu__link")

    menuLink.forEach(el => {
        el.addEventListener("mouseover", () => {
            console.log(el.children[1])
            el.children[0].style.backgroundColor = "#8AB0F8"
            el.children[0].children[0].style.filter = "brightness(0) invert(1)"
        })
        el.addEventListener("mouseout", () => {
            el.children[0].style.backgroundColor = "#ffffff"
            el.children[0].children[0].style.filter = "invert(55%) sepia(8%) saturate(453%) hue-rotate(180deg) brightness(91%) contrast(87%)"
        })
    })

let inputTodayDate = document.querySelector(".booking__input-date")
let inputTomorrowDate = document.querySelector(".booking__input-date2")
let todaysDate = new Date()
if(inputTodayDate != undefined && inputTomorrowDate != undefined){
    inputTodayDate.valueAsDate = todaysDate
    todaysDate.setDate(todaysDate.getDate() +1)
    inputTomorrowDate.valueAsDate = todaysDate

    var utc = new Date().toJSON().slice(0,10).replace(/-/g,'-');
    var utc2 = todaysDate.toJSON().slice(0,10).replace(/-/g,'-');
    inputTodayDate.setAttribute("min", utc)
    inputTomorrowDate.setAttribute("min", utc2)
}




let customCheckboxes = document.querySelectorAll(".custom-checkbox")
let customLabels = document.querySelectorAll(".custom-label")
let checkboxCounter = 0, extraPay = document.querySelector(".booking__extra"), foodPay = document.querySelector(".booking__foodpay")
customCheckboxes.forEach((el, index)=>{
    el.id = "bcheckbox" + checkboxCounter
    customLabels[index].setAttribute("for", "bcheckbox" + checkboxCounter)
    checkboxCounter++
})

customLabels.forEach(el =>{
    if(el.classList.contains("custom-label-food")){
        el.setAttribute("data-checked", 1)
    }
    el.addEventListener("click", ()=>{
        if(!el.classList.contains("custom-label-food")){
            el.getAttribute("data-checked") == undefined || el.getAttribute("data-checked") == 0 ? (el.setAttribute("data-checked", 1), extraPay.value = parseInt(extraPay.value) + 1000) : (el.setAttribute("data-checked", 0), extraPay.value= parseInt(extraPay.value) - 1000)
        }
        else{
            el.getAttribute("data-checked") == undefined || el.getAttribute("data-checked") == 0 ? (el.setAttribute("data-checked", 1), foodPay.value = parseInt(foodPay.value) + 50000) : (el.setAttribute("data-checked", 0), foodPay.value= parseInt(foodPay.value) - 50000)
        }

    })
})

let customSelectList = document.querySelectorAll(".custom-select-list")
let customSelectTitle = document.querySelectorAll(".custom-select-title")
let customSelect = document.querySelectorAll(".custom-select")
let customSelectDropdown = document.querySelectorAll(".custom-select-dropdown")
let customSelectType = "", positionWatcher = 0
customSelectTitle.forEach(el=>{
    el.addEventListener("click", ()=>{
        if(customSelectType == el.getAttribute("data-title")){
            // hideAll()
            el.parentElement.children[1].classList.contains("not-see") ? (el.parentElement.children[1].classList.remove("not-see"), el.parentElement.style.position = "absolute", el.children[0].src = "./app/icns/arrow-up.svg") : (el.parentElement.children[1].classList.add("not-see"), el.parentElement.style.position = "static", el.children[0].src = "./app/icns/arrow-down.svg")
        }
        if(customSelectType != el.getAttribute("data-title")){
            customSelectType = el.getAttribute("data-title")
            hideAll()
            el.parentElement.children[1].classList.contains("not-see") ? (el.parentElement.children[1].classList.remove("not-see"), el.parentElement.style.position = "absolute", el.children[0].src = "./app/icns/arrow-up.svg") : (el.parentElement.children[1].classList.add("not-see"), el.parentElement.style.position = "static", el.children[0].src = "./app/icns/arrow-down.svg")
        }

    })
})
function hideAll(){
    console.log("ADSADZ")
    customSelectDropdown.forEach(el=>{
        el.classList.contains("not-see") ? null : el.classList.add("not-see")
    })
    customSelect.forEach(element => {
        element.style.position = "static"
    });
}
customSelectList.forEach((el, index)=>{
    for(let i = 0; i<el.children.length; i++){
        el.children[i].addEventListener("click", ()=>{
            customSelectTitle[index].innerHTML = el.children[i].innerHTML
            let imgTitle = document.createElement("img")
            imgTitle.src = "./app/icns/arrow-down.svg"
            customSelectTitle[index].append(imgTitle)
            hideAll()
        })
    }
})


window.addEventListener("click", ()=>{
    let windowData = window.event.target.getAttribute("data-select")
    if(windowData != "1"){
        hideAll()
    }
})




// beforePropsArray.forEach((el, index) => {
//         console.log("до", el)
//         el = beforeColors[index]
//         console.log(el)
// })

})