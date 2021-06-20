let circleAChoosenDay = (element) => {

    let elementsCssClasses = element.childNodes[0].className.split(" ")
    let isCurrentMonthDay = elementsCssClasses.includes("not-current-month-day")

    if (!isCurrentMonthDay) {
        if (element.className.split(" ").includes("not-current-month-day"))
            console.log("test")

        let circledDay = document.querySelector('.choosen-day')

        if (circledDay)
            circledDay.classList.remove("choosen-day")

        element.classList.add("choosen-day");
    }else{

    }
}