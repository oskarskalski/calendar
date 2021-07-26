const changeTaskSection = (date) => {
    let dayOfTheMonthElement = document.querySelector(".current-day__day-of-month")

    if (dayOfTheMonthElement) {
        let currentMonthAndYearElement = document.querySelector(".current-day__date")

        let monthSelectElement = document.querySelector('.month-select')
        let yearSelectElement = document.querySelector('.year-select')
        let choosenMonth = monthSelectElement.options[monthSelectElement.selectedIndex].text
        let choosenYear = yearSelectElement.options[yearSelectElement.selectedIndex].text

        dayOfTheMonthElement.innerHTML = date;
        currentMonthAndYearElement.innerHTML =
            `${choosenMonth} ${choosenYear}`

        let fullDate = `${date} ${choosenMonth} ${choosenYear}`

        retrieveData(fullDate)
    }

}