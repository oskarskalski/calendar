const generateDays = () => {
    let month = document.querySelector('.month-select')
    let year = document.querySelector('.year-select')

    let currentMonth = new Date(year.value, month.value, 1)
    const numberOfDaysOfCurrentMonth = new Date(year.value, month.value * 1 + 1, 0).getDate()

    const calendar = []

    if (currentMonth.getDay() != 1) {

        const numberOfDaysTheMonthBeforeCurrentDate = new Date(year.value, month.value, 0)

        let startCountDaysFromThisDayNumber = numberOfDaysTheMonthBeforeCurrentDate.getDate() - currentMonth.getDay() + 2

        for (let i = startCountDaysFromThisDayNumber; i <= numberOfDaysTheMonthBeforeCurrentDate.getDate(); i++) {
            calendar.push(i)
        }

    }
    for (let i = 1; i <= numberOfDaysOfCurrentMonth; i++) {
        calendar.push(i)
    }

    return calendar
}