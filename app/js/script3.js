let locationContainer = document.querySelectorAll(".settings__location-container")
let locationList = document.querySelector(".settings__location-listholder")
let locCounter = 0, listCounter = 0
locationContainer.forEach(el=>{
    el.addEventListener("mouseover", () => {
        el.children[1].classList.remove("not-seeU")
        el.children[1].classList.add("seeU")
        locCounter++
    })
    el.children[1].addEventListener("mouseover", () => {
        el.children[1].classList.add("seeU")
        listCounter++
    })
    el.addEventListener("mouseleave", () => {
        locCounter = 0
        if (locCounter == 0 && listCounter == 0) {
            el.children[1].classList.remove("seeU")
            el.children[1].classList.add("not-seeU")
        }

    })
    el.children[1].addEventListener("mouseover", () => {
        listCounter = 0
        if (locCounter == 0 && listCounter == 0) {
            el.children[1].classList.remove("seeU")
            el.children[1].classList.add("not-seeU")
        }
    })
})



let printer = document.querySelector(".list__print")
let excel = document.querySelector(".list__excel")
excel.addEventListener("click", ()=>{

    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.querySelector(".table");
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    let filename = ''
    // Specify file name
    filename = filename?filename+'.xls':'excel_data.xls';

    // Create download link element
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

        // Setting the file name
        downloadLink.download = filename;

        //triggering the function
        downloadLink.click();
    }

})
printer.addEventListener("click", ()=>{
        window.print()
        // var printContent = document.querySelector(".table-container");
        // var WinPrint = window.open('', '', 'width=900,height=650');
        // WinPrint.document.write(printContent.innerHTML);
        // WinPrint.document.close();
        // WinPrint.focus();
        // WinPrint.print();
        // WinPrint.close();

})