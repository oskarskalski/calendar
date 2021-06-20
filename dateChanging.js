const dateChanging = () => {
    let monthSelect = document.querySelector('.month-select')
    let yearSelect = document.querySelector('.year-select')

    monthSelect.addEventListener('change', (e) => {
        generateCalendarTable('')
    }, false)

    yearSelect.addEventListener('change', (e) => {
        console.log(yearSelect.value)
        generateCalendarTable('')
    }, false)


}