let main = document.querySelector(".main")
let header = document.querySelector(".header")
let sidebar = document.querySelector(".sidebar")
let scrollContainer = document.querySelector(".scroll-container")
let menuList = document.querySelectorAll(".menu__list")
let arrowCounter = 0
let logoImgs = document.querySelectorAll(".header__logo-img")
let logoContainer = document.querySelector(".header__logo-img")
let arrowImgs = document.querySelectorAll(".arrow-img")
let menuRate = document.querySelectorAll(".menu__rate"), menuRateList = document.querySelector(".menu__rate-item"), menuRateFlag = 0
let menuRateArrow = document.querySelector(".menu__link-arrow")

menuRate.forEach(item=>{
    item.addEventListener("click", ()=>{
        console.log(menuRateList.classList)
        menuRateList.classList.contains("menu__notsee")  ? (menuRateList.classList.remove("menu__notsee"), menuRateArrow.style.background = "url('./app/icns/arrow-up.svg') no-repeat 100% 60%") : (menuRateList.classList.add("menu__notsee"), menuRateArrow.style.background = "url('./app/icns/arrow-down.svg') no-repeat 100% 60%")
        main.classList.contains("wide") ? null : ( menuMover())
    })
})

let arrow = document.querySelector(".arrow-reveal")
function menuMover(){
    arrowCounter++
    if (window.innerWidth > 1400) {
        if(main.classList.contains("wide")){
            main.style.gridTemplateColumns = "110px 1fr"
            header.style.gridTemplateColumns = "80px 1fr"
            header.style.gap = "62px"
            sidebar.style.setProperty("width", "110px")
            arrow.style.setProperty("left", "65px")
            menuRateList.classList.contains("menu__notsee")  ? null : (menuRateList.classList.add("menu__notsee"), menuRateArrow.style.background = "url('./app/icns/arrow-down.svg') no-repeat 100% 60%")
            main.classList.remove("wide")
        }
        else{
            main.style.gridTemplateColumns = "275px 1fr"
            header.style.gridTemplateColumns = "215px 1fr"
            sidebar.style.setProperty("width", "275px")
            header.style.gap = "92px"
            arrow.style.setProperty("left", "230px")
            main.classList.add("wide")
        }
        if (arrowCounter % 2 != 0) {

        }
        if (arrowCounter % 2 == 0) {

        }
    }
    if (window.innerWidth >= 1200 && window.innerWidth < 1400) {
        if(main.classList.contains("wide")){
            main.style.gridTemplateColumns = "110px 1fr"
            header.style.gridTemplateColumns = "80px 1fr"
            header.style.gap = "62px"
            sidebar.style.setProperty("width", "110px")
            arrow.style.setProperty("left", "65px")
            menuRateList.classList.contains("menu__notsee")  ? null : (menuRateList.classList.add("menu__notsee"), menuRateArrow.style.background = "url('./app/icns/arrow-down.svg') no-repeat 100% 60%")
            main.classList.remove("wide")
        }
        else{
            main.style.gridTemplateColumns = "215px 1fr"
            header.style.gridTemplateColumns = "195px 1fr"
            sidebar.style.setProperty("width", "220px")
            header.style.gap = "92px"

            arrow.style.setProperty("left", "177px")
            main.classList.add("wide")
        }
        if (arrowCounter % 2 != 0) {

        }
        if (arrowCounter % 2 == 0) {

        }
    }
    arrowImgs.forEach((el) => {
        if (el.classList.contains("not-seeU")) {
            el.classList.remove("not-seeU")
            el.classList.add("seeBlock")
        }
        else {
            el.classList.remove("seeBlock")
            el.classList.add("not-seeU")
        }
    })
    menuList.forEach((el) => {
        if (el.classList.contains("not-seeU")) {
            el.classList.remove("not-seeU")
            el.classList.add("seeBlock")
        }
        else {
            el.classList.remove("seeBlock")
            el.classList.add("not-seeU")
        }
    })
    logoImgs.forEach((el) => {
        if (el.classList.contains("not-seeU")) {
            el.classList.remove("not-seeU")
            el.classList.add("seeBlock")
        }
        else {
            el.classList.remove("seeBlock")
            el.classList.add("not-seeU")
        }
    })
}
arrow.addEventListener("click", () => {
   menuMover()
})


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