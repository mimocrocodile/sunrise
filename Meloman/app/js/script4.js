let rateStockMain = document.querySelector(".rate__stock")
let rateCreate = document.querySelector(".rate__stock-action")
let allData = []

// menuRate.forEach(item=>{
//     item.addEventListener("click", ()=>{
//         console.log(menuRateList.classList)
//         menuRateList.classList.contains("menu__notsee")  ? (menuRateList.classList.remove("menu__notsee"), menuRateArrow.style.background = "url('/app/icns/arrow-up.svg') no-repeat 100% 60%") : (menuRateList.classList.add("menu__notsee"), menuRateArrow.style.background = "url('/app/icns/arrow-down.svg') no-repeat 100% 60%")

//         main.classList.contains("wide") ? null : ( menuMover())
//     })
// })

// let arrow = document.querySelector(".arrow-reveal")
// function menuMover(){
//     arrowCounter++
//     if (window.innerWidth > 1400) {
//         if(main.classList.contains("wide")){
//             main.style.gridTemplateColumns = "110px 1fr"
//             header.style.gridTemplateColumns = "80px 1fr"
//             header.style.gap = "62px"
//             sidebar.style.setProperty("width", "110px")
//             arrow.style.setProperty("left", "65px")
//             menuRateList.classList.contains("menu__notsee")  ? null : menuRateList.classList.add("menu__notsee")
//             main.classList.remove("wide")
//         }
//         else{
//             main.style.gridTemplateColumns = "275px 1fr"
//             header.style.gridTemplateColumns = "215px 1fr"
//             sidebar.style.setProperty("width", "275px")
//             header.style.gap = "92px"
//             arrow.style.setProperty("left", "230px")
//             main.classList.add("wide")
//         }
//         if (arrowCounter % 2 != 0) {

//         }
//         if (arrowCounter % 2 == 0) {

//         }
//     }
//     if (window.innerWidth >= 1200 && window.innerWidth < 1400) {
//         if(main.classList.contains("wide")){
//             main.style.gridTemplateColumns = "110px 1fr"
//             header.style.gridTemplateColumns = "80px 1fr"
//             header.style.gap = "62px"
//             sidebar.style.setProperty("width", "110px")
//             arrow.style.setProperty("left", "65px")
//             menuRateList.classList.contains("menu__notsee")  ? null : menuRateList.classList.add("menu__notsee")
//             main.classList.remove("wide")
//         }
//         else{
//             main.style.gridTemplateColumns = "215px 1fr"
//             header.style.gridTemplateColumns = "195px 1fr"
//             sidebar.style.setProperty("width", "220px")
//             header.style.gap = "92px"

//             arrow.style.setProperty("left", "177px")
//             main.classList.add("wide")
//         }
//         if (arrowCounter % 2 != 0) {

//         }
//         if (arrowCounter % 2 == 0) {

//         }
//     }
//     arrowImgs.forEach((el) => {
//         if (el.classList.contains("not-seeU")) {
//             el.classList.remove("not-seeU")
//             el.classList.add("seeBlock")
//         }
//         else {
//             el.classList.remove("seeBlock")
//             el.classList.add("not-seeU")
//         }
//     })
//     menuList.forEach((el) => {
//         if (el.classList.contains("not-seeU")) {
//             el.classList.remove("not-seeU")
//             el.classList.add("seeBlock")
//         }
//         else {
//             el.classList.remove("seeBlock")
//             el.classList.add("not-seeU")
//         }
//     })
//     logoImgs.forEach((el) => {
//         if (el.classList.contains("not-seeU")) {
//             el.classList.remove("not-seeU")
//             el.classList.add("seeBlock")
//         }
//         else {
//             el.classList.remove("seeBlock")
//             el.classList.add("not-seeU")
//         }
//     })
// }
// arrow.addEventListener("click", () => {
//    menuMover()
// })
if(rateCreate != undefined){
    rateCreate.addEventListener("click", ()=>{
        let rateItem = document.createElement("div")
    rateItem.className = "rate__stock-item"
    rateItem.innerHTML = `
        <div class="rate__stock-type">
            <div>
                <p class="rate__stock-titlename"></p>
                <p class="rate__stock-titledate"></p>
            </div>
            <div>
                <button class="rate__stock-deletebtn" type="button"></button>
            </div>
        </div>
        <div class="rate__stock-main">
        <div class="rate__stock-info">
            <div class="rate__stock-name">
                <label for="rate-name">Название</label>
                <input type="text" name="" id="rate-name">
            </div>
            <div class="rate__stock-date">
                <label for="rate-date">Дата</label>
                <input type="text" name="daterange" class="booking__input-date rate-date" id="rate-date " value="" data-date-format="mm/dd/yy" >
            </div>
        </div>
        <div class="rate__item">
                            <table class="rate__table">
                                <thead>
                                    <tr>
                                        <th class="rate__title">Аренда сутки 13.00 - 10.00</th>
                                        <th>Кол-во, чел</th>
                                        <th>Время, час</th>
                                        <th>Цена</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="rate__table-title">Количество гостей от 1 до 10 чел.</td>
                                        <td><input class="rate__input rate__count" type="number"></td>
                                        <td><input class="rate__input rate__time" type="number"></td>
                                        <td><input class="rate__price" type="number"></td>
                                    </tr>
                                    <tr>
                                        <td class="rate__table-title">Дополнительные гости от 11 до 18 чел.</td>
                                        <td><input class="rate__input rate__count" type="number"></td>
                                        <td><input class="rate__input rate__time" type="number"></td>
                                        <td><input class="rate__price" type="number"></td>
                                    </tr>
                                    <tr>
                                        <td class="rate__table-title">Студия (музыкальная)</td>
                                        <td></td>
                                        <td><input class="rate__input rate__time" type="number"></td>
                                        <td><input class="rate__price" type="number"></td>
                                    </tr>
                                    <tr>
                                        <td class="rate__table-title">Депозит</td>
                                        <td></td>
                                        <td></td>
                                        <td><input class="rate__price" type="number"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="rate__item">
                            <table class="rate__table">
                                <thead>
                                    <tr>
                                        <th class="rate__title">Аренда дневная 13.00 - 22.00</th>
                                        <th>Кол-во, чел</th>
                                        <th>Время, час</th>
                                        <th>Цена</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="rate__table-title">Количество гостей от 1 до 10 чел.</td>
                                        <td><input class="rate__input rate__count" type="number"></td>
                                        <td><input class="rate__input rate__time" type="number"></td>
                                        <td><input class="rate__price" type="number"></td>
                                    </tr>
                                    <tr>
                                        <td class="rate__table-title">Дополнительные гости от 11 до 50 чел.</td>
                                        <td><input class="rate__input rate__count" type="number"></td>
                                        <td><input class="rate__input rate__time" type="number"></td>
                                        <td><input class="rate__price" type="number"></td>
                                    </tr>
                                    <tr>
                                        <td class="rate__table-title">Студия (музыкальная)</td>
                                        <td></td>
                                        <td><input class="rate__input rate__time" type="number"></td>
                                        <td><input class="rate__price" type="number"></td>
                                    </tr>
                                    <tr>
                                        <td class="rate__table-title">Депозит</td>
                                        <td></td>
                                        <td></td>
                                        <td><input class="rate__price" type="number"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
        <div class="rate__item">
            <table class="rate__table">
                <thead>
                    <tr>
                        <th class="rate__title">Дополнительные услуги</th>
                        <th>Кол-во, чел</th>
                        <th>Время, час</th>
                        <th>Цена</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="rate__table-title">Баня</td>
                        <td><input class="rate__input rate__count" type="number"></td>
                        <td><input class="rate__input rate__time" type="number"></td>
                        <td><input class="rate__price" type="number"></td>
                    </tr>
                    <tr>
                        <td class="rate__table-title">Веник (березовый/дубовый)</td>
                        <td><input class="rate__input rate__count" type="number"></td>
                        <td><input class="rate__input rate__time" type="number"></td>
                        <td><input class="rate__price" type="number"></td>
                    </tr>
                    <tr>
                        <td class="rate__table-title">Камин</td>
                        <td><input class="rate__input rate__count" type="number"></td>
                        <td><input class="rate__input rate__time" type="number"></td>
                        <td><input class="rate__price" type="number"></td>
                    </tr>
                    <tr>
                        <td class="rate__table-title">Бильярд (2 кия, шары)</td>
                        <td><input class="rate__input rate__count" type="number"></td>
                        <td><input class="rate__input rate__time" type="number"></td>
                        <td><input class="rate__price" type="number"></td>
                    </tr>
                    <tr>
                        <td class="rate__table-title">Настольный тенис (4 ракетки, 3 шарика</td>
                        <td><input class="rate__input rate__count" type="number"></td>
                        <td><input class="rate__input rate__time" type="number"></td>
                        <td><input class="rate__price" type="number"></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="rate__stock-save">
            <button class="booking__action rate__stock-savebtn">Сохранить</button>
        </div>
        </div>

    `



        rateStockMain.appendChild(rateItem)
            // saveBtnWatcher()
            addCalendar()
            itemRateWatcher()
            rateDelete()
        console.log("1")
    })
}

function addCalendar(){
    let rateDate = document.querySelector(".rate-date")
    rateDate.addEventListener("click",$(function() {
        $('input[name="daterange"]').daterangepicker({
          opens: 'left',
          locale:{
              format: "DD/MM/YYYY"
          }
        },
        );
      }) )
}

// rateTitleWatcher()

function itemRateWatcher(){
    let rateItems = document.querySelectorAll(".rate__stock-item")
    rateItems.forEach(element =>{
        element.addEventListener("click", (el)=>{
            if(el.target.classList.contains("rate__stock-type")){
                el.stopImmediatePropagation()
                console.log(element.querySelector(".rate__stock-main"))
                let rateContainer = element.querySelector(".rate__stock-main")
                rateContainer.style.display == "none" ?  (rateContainer.style.display = "block", element.children[0].children[0].children[0].style.background = "url('/app/icns/arrow-up.svg') no-repeat left") : (rateContainer.style.display = "none", element.children[0].children[0].children[0].style.background = "url('/app/icns/arrow-down.svg') no-repeat left")
            }
            let allInputs = element.getElementsByTagName('input')
            let saveBtn = element.getElementsByClassName("rate__stock-savebtn"), saveCondition = 0
            for(let i = 0; i<allInputs.length; i++){
                    allInputs[i].addEventListener("change", ()=>{
                    saveBtn[0].style.display = "flex"
                })
            }
            if(el.target.classList.contains("rate__stock-savebtn")){
                // Обработка нажатий на кнопку сохранить и сокрытие блоков
                for(let i = 0; i<allInputs.length; i++){
                    if(allInputs[i].value != "" && allInputs[i].value != undefined){
                        saveCondition++
                    }
                }
                console.log(saveCondition, allInputs.length)
                if(saveCondition == allInputs.length){
                    element.children[0].style.display = "flex"
                    element.children[0].children[0].children[0].innerHTML = element.children[1].children[0].children[0].children[1].value
                    element.children[0].children[0].children[1].innerHTML = element.children[1].children[0].children[1].children[1].value
                    // let allInputs = element.getElementsByTagName('input')
                    // for(let i = 0; i<allInputs.length; i++){
                    //     allInputs[i].disabled = true
                    // }
                    element.children[1].style.display = "none"
                    saveBtn[0].style.display = "none"
                }
                else{
                    alert("Не все поля заполнены")
                }


            }
            // if(el.target.classList.contains("rate__stock-editbtn")){
            //     // Обработка нажатия на кнопку редактирования
            //     let allInputs = element.getElementsByTagName('input')
            //     for(let i = 0; i<allInputs.length; i++){
            //         allInputs[i].disabled = false
            //     }
            // }


        })
        // rateTitleWatcher()
    })
}

let rateSave = document.querySelector(".rate__save"), rateMain = document.querySelector(".rate__main")
if(rateMain != undefined){

    let leftSideInputs = rateMain.getElementsByTagName('input'), saveCondition = 0

    rateMain.addEventListener("click", ()=>{
        for(let i = 0; i<leftSideInputs.length; i++){
            leftSideInputs[i].addEventListener("change", ()=>{
            rateSave.style.display = "flex"
        })

    }
    })

    rateSave.addEventListener("click", ()=>{
        for(let i  = 0; i< leftSideInputs.length; i++){
            if(leftSideInputs[i].value != "" && leftSideInputs[i].value != undefined){
                saveCondition++
            }
        }
        if(saveCondition == leftSideInputs.length){
            // Здесь отправляем все в базу
        }
        else {alert("Не все поля заполнены")}
    })
}


function rateDelete(){
    let deleteBtn = document.querySelectorAll(".rate__stock-deletebtn")
    deleteBtn.forEach(el=>{
        el.addEventListener("click", ()=>{
            console.log("asd")
            el.closest(".rate__stock-item").remove()
        })
    })
}

// function rateTitleWatcher(){
//     let rateTitle = document.querySelectorAll(".rate__stock-type")
//     console.log("SADASD")
//     rateTitle.forEach(el=>{
//         el.addEventListener("click", ()=>{
//             console.log("osel")
//             el.nextElementSibling.style.display == "none" ? el.nextElementSibling.style.display = "block" : el.nextElementSibling.style.display = "none"

//         })
//     })
// }
function getWholeData(){
    // let rateCount = document.querySelectorAll(".rate__count"), rateTime = document.querySelectorAll(".rate__time"), ratePrice = document.querySelectorAll(".rate__price")
    // let storageObject = {id: 0, count: 0, time: 0, price: 0}

    localStorage.clear()
    rateItemCopy = document.querySelectorAll(".rate__item")
    rateItemCopy.forEach((element, index) => {
        localStorage.setItem(index, element.innerHTML)
    });
}
// function fillPage(){

//     for(let i =0; i<localStorage.length; i++){
//         let rateItem = document.createElement("div")
//         rateItem.className = "rate__stock-item"
//         console.log(localStorage.getItem(i))
//         rateItem.innerHTML = localStorage.getItem(i)
//         rateMain.appendChild(rateItem)
//     }
// }