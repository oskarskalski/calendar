let generateCalendar = (namesOfMonths) => {
    const namesOfDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const currentDay = new Date()

    let calendar = document.querySelector('.page-main__calendar')

    let createCalendarContainer = document.createElement('table')
    createCalendarContainer.classList.add('calendar__container')

    calendar.appendChild(createCalendarContainer)

    let createMonthAndYearOptionsHead = document.createElement('thead')
    let createHeadsRow = document.createElement('tr')
    let createRowWrapper = document.createElement('td')
    let createPreviousBtn = document.createElement('button')
    let createNextBtn = document.createElement('button')
    let createMonthSelect = document.createElement('select')
    let createYearSelect = document.createElement('select')

    createMonthSelect.classList.add('month-select')
    createYearSelect.classList.add('year-select')

    createPreviousBtn.classList.add('arrow-btn')
    createPreviousBtn.classList.add('left-direction-arrow')

    createNextBtn.classList.add('arrow-btn')
    createNextBtn.classList.add('right-direction-arrow')

    for(let i in namesOfMonths){
        let createMonthOption = document.createElement('option')
        createMonthOption.value = i
        createMonthOption.text = namesOfMonths[i]

        createMonthSelect.add(createMonthOption)
    }

    createMonthSelect.selectedIndex = currentDay.getMonth()

    for(let i = currentDay.getFullYear(); i <= currentDay.getFullYear() + 15; i++){
        let createYearOption = document.createElement('option')

        createYearOption.value = i
        createYearOption.text = i

        createYearSelect.add(createYearOption)
    }

    createYearSelect.selectedIndex = 0

    createPreviousBtn.addEventListener('click', () => generateCalendarTable('back'), false);
    createNextBtn.addEventListener('click', () => generateCalendarTable('next'), false);

    createRowWrapper.colSpan = 7

    createRowWrapper.append(
        createPreviousBtn,
        createMonthSelect,
        createYearSelect,
        createNextBtn
    )

    createHeadsRow.appendChild(createRowWrapper)
    createMonthAndYearOptionsHead.appendChild(createHeadsRow)
    createCalendarContainer.appendChild(createMonthAndYearOptionsHead)

    let createCalendarHeadings = document.createElement('tr')
    createCalendarHeadings.classList.add('container__days-of-week')

    createCalendarContainer.appendChild(createCalendarHeadings)

    for(let i in namesOfDays){
        let createHeader = document.createElement('th')
        createHeader.classList.add('days-of-week__day-name')
        createHeader.textContent = namesOfDays[i]
        createCalendarHeadings.appendChild(createHeader)
    }

    generateCalendarTable('')
}