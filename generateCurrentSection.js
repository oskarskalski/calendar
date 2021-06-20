const generateTodosSection = (namesOfMonths, currentDate) => {
    let calendarContainer = document.querySelector('.page-main__calendar')

    let createCurrentDayContainer = document.createElement('div')
    let createDayOfMonthHeading = document.createElement('h1')
    let createDateHeading = document.createElement('h2')
    let createTodoContainer = document.createElement('div')
    let createTodoHeading = document.createElement('h3')
    let createTasksContainer = document.createElement('div')
    let createTasksSettingsButton = document.createElement('button')
    let createTransformLinesAnimationElement = document.createElement('span')

    createCurrentDayContainer.classList.add('calendar__current-day')
    createDayOfMonthHeading.classList.add('current-day__day-of-month')
    createDateHeading.classList.add('current-day__date')
    createTodoContainer.classList.add('current-day__todos')
    createTodoHeading.classList.add('todos__heading')
    createTasksContainer.classList.add('todos__tasks')
    createTasksSettingsButton.classList.add('current-day__tasks-settings')
    createTransformLinesAnimationElement.classList.add('tasks-settings__transform-lines')

    let currentDay = document.createTextNode(currentDate.getDate())
    createDayOfMonthHeading.appendChild(currentDay)

    let currentMonthAndYear = document.createTextNode(namesOfMonths[currentDate.getMonth()] + " " + currentDate.getFullYear())
    createDateHeading.appendChild(currentMonthAndYear)

    let todoListHeading = document.createTextNode('What do you have to do?')
    createTodoHeading.appendChild(todoListHeading)

    calendarContainer.appendChild(createCurrentDayContainer)

    createCurrentDayContainer.append(
        createDayOfMonthHeading,
        createDateHeading,
        createTodoContainer,
        createTasksSettingsButton
    )

    createTodoContainer.append(
        createTodoHeading,
        createTasksContainer
    )

    createTasksSettingsButton.appendChild(
        createTransformLinesAnimationElement
    )
}
