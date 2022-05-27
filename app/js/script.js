document.addEventListener("DOMContentLoaded", function (event) {

    let calendarMain = document.querySelector(".calendar__main"), daysName = []
    let calendarSidebar = document.querySelector(".calendar__sidebar"), sidebarHouseTypes = 0, categories = [],
        categoriesName = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "nineth", "tenth"], categoryCounter = 0
    let kIndicator = 0, buttonArea = 0


    let addAreaTypes = document.querySelectorAll(".sunrise")




    for (let i = 0; i < addAreaTypes.length; i++) {

        addAreaTypes[i].classList.add("area__type-" + i)
        addAreaTypes[i].setAttribute("data-area", i)
        addAreaTypes[i].classList.add("area")
    }

    for (let j = 0; j < calendarSidebar.children.length; j++) {
        let allRows = document.querySelectorAll(".new__container")
        if (calendarSidebar.children[j].tagName == "BUTTON") {
            sidebarHouseTypes = 0
            buttonArea = calendarSidebar.children[j].getAttribute("data-area")
            console.log(buttonArea)

        }
        if (j > 1 && calendarSidebar.children[j].tagName == "DIV") {

            calendarSidebar.children[j].classList.add("house__type-" + sidebarHouseTypes)
            calendarSidebar.children[j].classList.add("house")
            calendarSidebar.children[j].setAttribute("data-area", buttonArea)
            console.log(calendarSidebar.children[j].getAttribute("data-area"))
            // let dataRow = allRows[j].getAttribute("data-row")
            // calendarSidebar.children[j].setAttribute("data-row", dataRow)
            sidebarHouseTypes++
        }
        if (calendarSidebar.children[j].classList.contains("sunrise")) {
            categories.push([j, categoriesName[categoryCounter]])
            categoryCounter++
        }
    }



    let kHolder = 0

    getDays()
    function getDays() {
        let date = new Date()
        let month = date.getMonth()
        let year = date.getFullYear()
        daysInMonth = new Date(year, month + 1, 0).getDate();
        getDaysName(daysInMonth, month, year)
        fillCalendar(daysInMonth)
    }


    function getDaysName(days, month, year) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        for (let i = 1; i <= days; i++) {
            let day = new Date(Date.UTC(year, month, i));
            daysName.push(day.toLocaleDateString("ru-RU", options))
        }


        for (let i = 0; i < daysName.length; i++) {
            daysName[i].includes("понедельник") ? daysName[i] = "ПН" : null
            daysName[i].includes("вторник") ? daysName[i] = "ВТ" : null
            daysName[i].includes("среда") ? daysName[i] = "СР" : null
            daysName[i].includes("четверг") ? daysName[i] = "ЧТ" : null
            daysName[i].includes("пятница") ? daysName[i] = "ПТ" : null
            daysName[i].includes("суббота") ? daysName[i] = "СБ" : null
            daysName[i].includes("воскресенье") ? daysName[i] = "ВС" : null
        }
    }



    function fillCalendar(days) {
        for (let i = 0; i < calendarSidebar.children.length; i++) {
            kIndicator = 0
            for (let k = 0; k < categories.length; k++) {
                if (i == categories[k][0]) {
                    fillCategories("yes", days, k, i)
                    kHolder = k
                    kIndicator++
                }
            }
            if (i == 0) {
                fillCategories(0, days, 0, i)
                continue
            }
            if (i == 1) {
                fillCategories(1, days, 0, i)
                continue
            }
            if (kIndicator == 0) {
                fillCategories(10, days, kHolder, i)
            }
        }
        getSidebarRows()
        fillDates(1, 5, "Sunrise Бухта", "Вилла", "Бронь", "Фамилия И.О")
        fillDates(10, 20, "Sunrise Бухта", "Вилла", "Заявка", "Фамилия И.О")
        fillDates(22, 26, "Sunrise Бухта", "Вилла", "Заявка с сайта", "Фамилия И.О")
        fillDates(3, 9, "Sunrise Бухта", "Шале", "Заявка", "Фамилия И.О")
        fillDates(12, 19, "Sunrise Бухта", "Шале", "Оплачено", "Фамилия И.О")
        fillDates(21, 23, "Sunrise Бухта", "Шале", "Бронь", "Фамилия И.О")
        fillDates(24, 30, "Sunrise Бухта", "Шале", "Оплачено", "Фамилия И.О")
        fillDates(2, 11, "Sunrise Бухта", "Винный домик", "Заявка с сайта", "Фамилия И.О")
        fillDates(14, 19, "Sunrise Бухта", "Винный домик", "Бронь", "Фамилия И.О")
        fillDates(22, 24, "Sunrise Бухта", "Винный домик", "Бронь", "Фамилия И.О")
    }

    function getSidebarRows() {
        for (let j = 0; j < calendarSidebar.children.length; j++) {
            let allRows = document.querySelectorAll(".new__container")
            if (j > 1 && calendarSidebar.children[j].tagName == "DIV") {
                let dataRow = allRows[j].getAttribute("data-row")
                calendarSidebar.children[j].setAttribute("data-row", dataRow)
            }
        }
    }


    function fillCategories(equal, days, k, i) {
        let newContainer = document.createElement('div')
        newContainer.className = "new__container"
        for (let j = 0; j < days; j++) {
            let div = document.createElement('div')
            div.style.borderLeft = "1px solid #C6CEDF"
            div.style.borderBottom = "1px solid #C6CEDF"
            div.style.position = "relative"
            newContainer.setAttribute("data-row", "" + i)
            if (equal == 0) {
                div.className = "date__item"
                div.innerHTML = daysName[j]
            }
            if (equal == 1) {
                div.innerHTML = j + 1
                div.className = "date__item"
                div.style.backgroundColor = "#EBF0FA"
                if (days - j == 1) {
                    div.style.borderTopRightRadius = "14px"
                    div.style.borderBottomRightRadius = "14px"
                }
            }
            if (equal == "yes") {
            }
            if (equal == 10) {
                newContainer.className = categories[k][1] + "-category new__container not-seeU"
            }
            newContainer.append(div)

        }
        calendarMain.append(newContainer)
    }

    setTimeout(() => {
        for (let j = 0; j < calendarSidebar.children.length; j++) {
            if (calendarSidebar.children[j].classList.contains("sunrise")) {
            }
        }
    }, 1000);

    function fillDates(startish, finish, areaType, houseType, bookingType, customerName) {
        let allAreas = document.querySelectorAll(".area"), allHouses = document.querySelectorAll(".house"), colorBookingType = ""
        if (bookingType == "Бронь") { colorBookingType = "#B5CCF7" }
        if (bookingType == "Оплачено") { colorBookingType = "#99D6B5" }
        if (bookingType == "Заявка") { colorBookingType = "#FFE666" }
        if (bookingType == "Заявка с сайта") { colorBookingType = "#E78366" }
        for (let i = 0; i < allAreas.length; i++) {
            if (areaType == allAreas[i].innerHTML) {
                for (let j = 0; j < allHouses.length; j++) {
                    if (allAreas[i].getAttribute("data-area") == allHouses[j].getAttribute("data-area") && houseType == allHouses[j].innerHTML) {
                        for (let k = 0; k < calendarMain.children.length; k++) {
                            if (allHouses[j].getAttribute("data-row") == calendarMain.children[k].getAttribute("data-row")) {
                                for (let h = 0; h < calendarMain.children[k].children.length; h++) {
                                    if (startish - 1 == h) {
                                        let startDiv = document.createElement("div"), nameBlock = document.createElement("p")
                                        nameBlock.className = "customer-name", startDiv.className = "start"
                                        nameBlock.innerHTML = customerName
                                        finish - startish < 4 ? nameBlock.classList.add("customer-shortname") : null
                                        startDiv.style.backgroundColor = colorBookingType
                                        startDiv.append(nameBlock)
                                        calendarMain.children[k].children[h].append(startDiv)
                                    }
                                    if (h > startish - 1 && h < finish - 1) {
                                        calendarMain.children[k].children[h].style.backgroundColor = colorBookingType
                                        calendarMain.children[k].children[h].style.border = "none"
                                    }
                                    if (finish - 1 == h) {
                                        let finishDiv = document.createElement("div"), popupTriangle = document.createElement("div"),
                                        popupTriangleImg = document.createElement("img"), popupImg = document.createElement("img")
                                        finishDiv.className = "finish", popupImg.src = "./app/icns/adv-info.svg", popupImg.className = "calendar__img"
                                        finishDiv.style.backgroundColor = colorBookingType
                                        let popupWindow = document.createElement("div")
                                        popupWindow.className = "calendar__popup not-seeU"
                                        popupWindow.innerHTML = `
                                            <div class="calendar__popup-main">
                                                <div class="calendar__popup-holder">
                                                    <div class="calendar__popup-submain">
                                                        <p class="calendar__popup-title">Данные</p>
                                                        <p><span>Заказчик: </span>Фамилия И.О. </p>
                                                        <p><span>Количество гостей: </span>5 чел.</p>
                                                        <p><span>Время: </span>15.05.2022 / 25.05.2022</p>
                                                        <p><span>Бронь: </span>сайт</p>
                                                    </div>
                                                    <div class="calendar__popup-submain">
                                                        <p class="calendar__popup-title">Стоимость</p>
                                                        <p><span>Доп. услуги: </span>сауна 24 000тг, прокат sup досок 4 000 тг.</p>
                                                        <p><span>Проживание: </span>100 000тг.</p>
                                                        <p><span>Общая сумма: </span>240 000 тг.</p>
                                                        <p><span> Оплачено: </span>150 000 тг.</p>
                                                    </div>
                                                </div>
                                                <a href="/" class="calendar__popup-action">Подробнее</a>
                                            </div>
                                        `
                                        popupTriangle.className = "calendar__popup-triangle"
                                        popupTriangleImg.src = "./app/img/triangle.png"
                                        popupTriangle.append(popupTriangleImg)
                                        popupWindow.append(popupTriangle)
                                        calendarMain.children[k].children[h].style.borderLeft = "none"
                                        finishDiv.append(popupImg)
                                        finishDiv.append(popupWindow)
                                        calendarMain.children[k].children[h].append(finishDiv)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }


    let bay = document.querySelector(".bay")
    let sand = document.querySelector(".sand")
    let rahman = document.querySelector(".rahman")
    let rocky = document.querySelector(".rocky")
    let bayItems = document.querySelectorAll(".first-category")
    let sandItems = document.querySelectorAll(".second-category")
    let rahmanItems = document.querySelectorAll(".third-category")
    let rockyItems = document.querySelectorAll(".fourth-category")
    bayItems.forEach(el => {
        el.classList.add("not-seeU")
    })
    sandItems.forEach(el => {
        el.classList.add("not-seeU")
    })
    rahmanItems.forEach(el => {
        el.classList.add("not-seeU")
    })
    rockyItems.forEach(el => {
        el.classList.add("not-seeU")
    })
    bay.addEventListener("click", () => {
        if (bayItems[0].classList.contains("not-seeU")) {

            bayItems.forEach(el => {
                el.classList.remove("not-seeU")
                el.classList.add("seeU")
            })

        }
        else {
            console.log("world")
            bayItems.forEach(el => {
                el.classList.remove("seeU")
                el.classList.add("not-seeU")
            })
        }
    })
    sand.addEventListener("click", () => {
        if (sandItems[0].classList.contains("not-seeU")) {
            sandItems.forEach(el => {
                el.classList.remove("not-seeU")
                el.classList.add("seeU")
            })

        }
        else {
            console.log("world")
            sandItems.forEach(el => {
                el.classList.remove("seeU")
                el.classList.add("not-seeU")
            })
        }
    })
    rahman.addEventListener("click", () => {
        if (rahmanItems[0].classList.contains("not-seeU")) {
            rahmanItems.forEach(el => {
                el.classList.remove("not-seeU")
                el.classList.add("seeU")
            })

        }
        else {
            rahmanItems.forEach(el => {
                el.classList.remove("seeU")
                el.classList.add("not-seeU")
            })
        }
    })
    rocky.addEventListener("click", () => {
        if (rockyItems[0].classList.contains("not-seeU")) {
            rockyItems.forEach(el => {
                el.classList.remove("not-seeU")
                el.classList.add("seeU")
            })

        }
        else {
            console.log("world")
            rockyItems.forEach(el => {
                el.classList.remove("seeU")
                el.classList.add("not-seeU")
            })
        }
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



})

let locationContainer = document.querySelector(".settings__location-container")
let locationList = document.querySelector(".settings__location-listholder")
let locCounter = 0, listCounter = 0
locationContainer.addEventListener("mouseover", () => {
    locationList.classList.remove("not-seeU")
    locationList.classList.add("seeU")
    locCounter++
})
locationList.addEventListener("mouseover", () => {
    locationList.classList.add("seeU")
    listCounter++
})
locationContainer.addEventListener("mouseleave", () => {
    locCounter = 0
    if (locCounter == 0 && listCounter == 0) {
        locationList.classList.remove("seeU")
        locationList.classList.add("not-seeU")
    }

})
locationList.addEventListener("mouseover", () => {
    listCounter = 0
    if (locCounter == 0 && listCounter == 0) {
        locationList.classList.remove("seeU")
        locationList.classList.add("not-seeU")
    }
})
let yearContainer = document.querySelector(".settings__year-container")
let yearList = document.querySelector(".settings__year-listholder")
let yearCounter = 0, yearListCounter = 0
yearContainer.addEventListener("mouseover", () => {
    yearList.classList.remove("not-seeU")
    yearList.classList.add("seeU")
    yearCounter++
})
yearList.addEventListener("mouseover", () => {
    yearList.classList.add("seeU")
    yearListCounter++
})
yearContainer.addEventListener("mouseleave", () => {
    yearCounter = 0
    if (yearCounter == 0 && yearListCounter == 0) {
        yearList.classList.remove("seeU")
        yearList.classList.add("not-seeU")
    }

})
yearList.addEventListener("mouseover", () => {
    yearListCounter = 0
    if (yearCounter == 0 && yearListCounter == 0) {
        yearList.classList.remove("seeU")
        yearList.classList.add("not-seeU")
    }
})


setTimeout(() => {
    let bookImgs = document.querySelectorAll(".calendar__img")
    let bookPopups = document.querySelectorAll(".calendar__popup")
    let bookImgsContainer = 0, bookImgsParent = 0
    console.log(bookImgs)
    bookImgs.forEach((el) => {

        el.addEventListener("mouseover", () => {
            bookImgsParent++
            el.parentElement.children[1].classList.remove("not-seeU")
            el.parentElement.children[1].classList.add("seeU")
            if(el.parentElement.children[1].getBoundingClientRect().right > scrollContainer.getBoundingClientRect().right){
                console.log("loh")
                console.log(el.parentElement.children[1].getBoundingClientRect().left)
                console.log(scrollContainer.getBoundingClientRect().left)
                if(window.innerWidth>=1400){
                    el.parentElement.children[1].style.left = "-469px"
                    el.parentElement.children[1].children[1].style.marginLeft = "472px"
                    console.log("loh")
                }

                if (window.innerWidth > 1200 && window.innerWidth < 1400) {

                    el.parentElement.children[1].style.left = "-372px"
                    el.parentElement.children[1].children[1].style.marginLeft = "370px"
                }
            }
            if(el.parentElement.children[1].getBoundingClientRect().left < scrollContainer.getBoundingClientRect().left){
                console.log("pidr")
                if (window.innerWidth >= 1400) {
                    el.parentElement.children[1].style.left = "-27px"
                    el.parentElement.children[1].children[1].style.marginLeft = "19px"
                }



            }
        })
        el.addEventListener("mouseout", () => {
            bookImgsParent = 0
            if (bookImgsContainer == 0 && bookImgsParent == 0) {
                el.parentElement.children[1].classList.remove("seeU")
                el.parentElement.children[1].classList.add("not-seeU")
            }

        })
    })
    bookPopups.forEach((el) => {
        el.addEventListener("mouseover", () => {
            bookImgsContainer++
            el.classList.remove("not-seeU")
            el.classList.add("seeU")

        })
        el.addEventListener("mouseout", () => {
            bookImgsContainer = 0
            if (bookImgsContainer == 0 && bookImgsParent == 0) {
                el.classList.remove("seeU")
                el.classList.add("not-seeU")
            }
        })
    })
}, 1000);
changeTableSize()
function changeTableSize() {
    let scrollContainer = document.querySelector(".scroll-container")
    let mainBlock = document.querySelector(".main__holder")
    if (window.innerWidth > 1400) {
        scrollContainer.style.setProperty("width", (mainBlock.clientWidth - 300) + "px")
    }
    if (window.innerWidth > 1200 && window.innerWidth < 1400) {
        console.log(mainBlock.clientWidth)
        scrollContainer.style.setProperty("width", (mainBlock.clientWidth - 250) + "px")
    }
    if (window.innerWidth < 1200) {
        scrollContainer.style.setProperty("width", (mainBlock.clientWidth - 220) + "px")
    }

}
window.addEventListener("resize", () => {
    changeTableSize()
})


let arrow = document.querySelector(".arrow-reveal")
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
        menuRateList.classList.contains("menu__notsee")  ? ( menuRateList.classList.remove("menu__notsee"), menuRateArrow.style.background = "url('./app/icns/arrow-up.svg') no-repeat 100% 60%") : ( menuRateList.classList.add("menu__notsee"), menuRateArrow.style.background = "url('./app/icns/arrow-down.svg') no-repeat 100% 60%")
        main.classList.contains("wide") ? null : ( menuMover())
    })
})


arrow.addEventListener("click", () => {
    menuMover()
 })
function menuMover(){
    arrowCounter++
    if (window.innerWidth > 1400) {
        if(main.classList.contains("wide")){
            main.style.gridTemplateColumns = "110px 1fr"
            header.style.gridTemplateColumns = "80px 1fr"
            header.style.gap = "62px"
            sidebar.style.setProperty("width", "110px")
            scrollContainer.style.setProperty("left", "409px")
            arrow.style.setProperty("left", "65px")
            menuRateList.classList.contains("menu__notsee")  ? null : (menuRateList.classList.add("menu__notsee"), menuRateArrow.style.background = "url('./app/icns/arrow-down.svg') no-repeat 100% 60%")
            main.classList.remove("wide")
            changeTableSize()
        }
        else{
            main.style.gridTemplateColumns = "275px 1fr"
            header.style.gridTemplateColumns = "215px 1fr"
            sidebar.style.setProperty("width", "275px")
            header.style.gap = "92px"
            scrollContainer.style.setProperty("left", "574px")
            arrow.style.setProperty("left", "230px")
            // menuRateList.classList.contains("menu__notsee")  ? null : menuRateList.classList.add("menu__notsee")
            main.classList.add("wide")
            changeTableSize()
        }
    }
    if (window.innerWidth > 1200 && window.innerWidth < 1400) {
        if(main.classList.contains("wide")){
            main.style.gridTemplateColumns = "110px 1fr"
            header.style.gridTemplateColumns = "80px 1fr"
            header.style.gap = "62px"
            sidebar.style.setProperty("width", "110px")
            scrollContainer.style.setProperty("left", "361px")
            arrow.style.setProperty("left", "65px")
            menuRateList.classList.contains("menu__notsee")  ? null : (menuRateList.classList.add("menu__notsee"), menuRateArrow.style.background = "url('./app/icns/arrow-down.svg') no-repeat 100% 60%")
            main.classList.remove("wide")
            changeTableSize()
        }
       else{
            main.style.gridTemplateColumns = "275px 1fr"
            header.style.gridTemplateColumns = "215px 1fr"
            sidebar.style.setProperty("width", "275px")
            header.style.gap = "92px"
            scrollContainer.style.setProperty("left", "526px")
            arrow.style.setProperty("left", "230px")
            //
            main.classList.add("wide")
            changeTableSize()
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

setTimeout(() => {
    var date = new Date().getDate();
    date = parseInt(date)
    let calendarItems = document.querySelectorAll(".new__container")
    // console.log(calendarItems[0].children[0])

    function colorDay(event) {

        for (let i = 1; i < calendarItems.length; i++) {
            for (let j = 0; j < calendarItems[i].children.length; j++) {
                if (i == 1) {
                    if (event - 1 == j) {
                        calendarItems[i].children[j].style.borderLeft = "1px solid"
                        calendarItems[i].children[j].style.borderRight = "1px solid"
                        calendarItems[i].children[j].style.borderTop = "1px solid"
                        calendarItems[i].children[j].style.borderTopColor = "#274F9B"
                        calendarItems[i].children[j].style.borderLeftColor = "#274F9B"
                        calendarItems[i].children[j].style.borderRightColor = "#274F9B"
                    }
                }
                if (i == calendarItems.length - 1) {
                    if (event - 1 == j) {
                        calendarItems[i].children[j].style.borderLeft = "1px solid"
                        calendarItems[i].children[j].style.borderRight = "1px solid"
                        calendarItems[i].children[j].style.borderBottom = "1px solid"
                        calendarItems[i].children[j].style.borderBottomColor = "#274F9B"
                        calendarItems[i].children[j].style.borderLeftColor = "#274F9B"
                        calendarItems[i].children[j].style.borderRightColor = "#274F9B"
                    }
                }
                else {
                    if (event - 1 == j) {
                        calendarItems[i].children[j].style.borderLeft = "1px solid"
                        calendarItems[i].children[j].style.borderRight = "1px solid"
                        calendarItems[i].children[j].style.borderLeftColor = "#274F9B"
                        calendarItems[i].children[j].style.borderRightColor = "#274F9B"
                    }
                }

            }
        }
    }
    colorDay(date)
}, 1000);


