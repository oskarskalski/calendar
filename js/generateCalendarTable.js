const generateCalendarTable = (direction, choosenDay) => {
    let currentDate = new Date()

    let countDays = 0

    let calendarElement = document.querySelector('.calendar__container')

    let monthSelected = document.querySelector('.month-select')
    let yearSelected = document.querySelector('.year-select')

    if (direction == 'next') {
        if (monthSelected.value == 11) {
            yearSelected.value = parseInt(yearSelected.value) + 1
            monthSelected.value = 0
        } else {
            monthSelected.value = parseInt(monthSelected.value) + 1
        }
    } else if (direction == 'back') {
        if (monthSelected.value == 0) {
            yearSelected.value = parseInt(yearSelected.value) - 1
            monthSelected.value = 11
        } else {
            monthSelected.value = parseInt(monthSelected.value) - 1
        }
    }
    const generatedCalendarArray = generateDays()

    const dayRows = document.querySelectorAll('.container__days')

    if (dayRows.length > 0)
        dayRows.forEach(n => n.remove())

    let isDayOneFoundOfCurrentMonth = false
    let k = 1

    for (let i = 0; i < generatedCalendarArray.length / 7; i++) {
        let createCalendarRow = document.createElement('tr')
        createCalendarRow.classList.add('container__days')

        for (let j = 0; j < 7; j++) {
            let createCalendarCell = document.createElement('td')
            createCalendarCell.classList.add('rectangle')

            let createCellText = document.createElement('span')
            createCellText.classList.add('number-of-day')

            if (generatedCalendarArray[(i * 7) + j] > 20 && !isDayOneFoundOfCurrentMonth) {
                createCellText.classList.add('previous-month-day')
                createCellText.classList.add('not-current-month-day')
            } else if (generatedCalendarArray[(i * 7) + j] === 1 && !isDayOneFoundOfCurrentMonth) {
                isDayOneFoundOfCurrentMonth = true
            }


            if (countDays == (currentDate.getDate() - 1) &&
                monthSelected.value == currentDate.getMonth() &&
                yearSelected.value == currentDate.getFullYear()) {
                createCalendarCell.classList.add('choosen-day')

            }

            createCellText.textContent = generatedCalendarArray[(i * 7) + j]

            if (generatedCalendarArray[(i * 7) + j] == null) {
                createCellText.classList.add('next-month-day')
                createCellText.classList.add('not-current-month-day')

                createCellText.textContent = k
                k++
            }


            createCalendarCell.addEventListener('click', () => {
                let elementClassNames = createCalendarCell.childNodes[0].className.split(" ")

                if (elementClassNames.length === 1) {
                    changeTaskSection(createCalendarCell.textContent)
                } else {
                    if (elementClassNames[1] === "previous-month-day") {
                        generateCalendarTable('back', createCalendarCell.textContent)
                    } else {
                        generateCalendarTable('next', createCalendarCell.textContent)
                    }

                    changeTaskSection(createCalendarCell.textContent)
                }

                circleAChoosenDay(createCalendarCell)

            }, false)

            createCalendarCell.appendChild(createCellText)
            createCalendarRow.appendChild(createCalendarCell)


            if (!createCellText.classList.contains('not-current-month-day')) {
                countDays++

                if(choosenDay){
                    if(countDays == choosenDay){
                        createCalendarCell.classList.add("choosen-day")
                    }
                }

                let typesOfTasks = availbleTasks(`${createCellText.innerText} ${monthSelected.options[monthSelected.selectedIndex].text} ${yearSelected.value}`)

                if (typesOfTasks.length > 0) {
                    let createTypesOfTasksContainer = document.createElement('div')
                    createTypesOfTasksContainer.classList.add('tasks--dots')

                    for (let z in typesOfTasks) {
                        let createTypeOfTaskDot = document.createElement('div')

                        createTypeOfTaskDot.classList.add(typesOfTasks[z] + "-priority-element")
                        createTypesOfTasksContainer.appendChild(createTypeOfTaskDot)
                    }
                    createCalendarCell.appendChild(createTypesOfTasksContainer)
                }

            }
        }
        calendarElement.appendChild(createCalendarRow)
    }


}