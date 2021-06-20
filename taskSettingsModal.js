const taskSettingsModal = () => {
    let clickState = 1

    let tasksSettings = document.querySelector('.current-day__tasks-settings')

    tasksSettings.addEventListener('click', () => {
        let currentDayContainer = document.querySelector('.calendar__current-day')
        let transformLines = document.querySelector('.tasks-settings__transform-lines')
        if (clickState == 1) {
            let createTaskContainer = document.createElement('div')
            let createHeading = document.createElement('h3')
            let createHeadingElement = document.createElement('input')
            let createTextAreaContent = document.createElement('textarea')
            let createTimeElement = document.createElement('input')
            let createSelectElement = document.createElement('select')
            let createErrorElement = document.createElement('div')
            let createAddTaskBtn = document.createElement('button')
            let options = ['low', 'medium', 'hard']

            tasksSettings.classList.toggle('change-bg-color')

            createHeadingElement.type = 'text'
            createTimeElement.type = 'time'
            createTimeElement.required = true

            let taskHeading = document.createTextNode('Add new task!')
            createHeading.appendChild(taskHeading)

            let addTaskBtnText = document.createTextNode('Add task!')
            createAddTaskBtn.appendChild(addTaskBtnText)

            createHeadingElement.placeholder = 'Write title here...'
            createTextAreaContent.placeholder = 'Write content of the task here...'

            createTextAreaContent.maxLength = 100

            for (let i in options) {
                let createOption = document.createElement('option')
                createOption.value = options[i]
                let optionText = document.createTextNode(`${options[i]} priority`)
                createOption.appendChild(optionText)

                createSelectElement.appendChild(createOption)
            }

            createTaskContainer.classList.add('current-day__add-tasks')
            createTaskContainer.classList.add('appear')
            createHeading.classList.add('add-tasks__heading')
            createHeadingElement.classList.add('add-tasks__title-task')
            createTextAreaContent.classList.add('add-tasks__content-task')
            createTimeElement.classList.add('add-tasks__time-task')
            createSelectElement.classList.add('add-tasks__priority-task')
            createErrorElement.classList.add('add_tasks__error-element')
            createAddTaskBtn.classList.add('add-tasks__add-task')

            transformLines.classList.add('open-settings')


            createAddTaskBtn.addEventListener('click', () => {
                let createWarmingElement = document.createElement('div')
                let resultMessage
                if (tasksHandler()) {
                    resultMessage = document.createTextNode('Task added!')
                    createWarmingElement.appendChild(resultMessage)
                    createWarmingElement.classList.add('add-tasks__complete')
                } else {
                    resultMessage = document.createTextNode('Complete the title to add the task!')
                    createWarmingElement.appendChild(resultMessage)
                    createWarmingElement.classList.add('add-tasks__failed')
                }
                createErrorElement.appendChild(createWarmingElement)

                setTimeout(() => {
                    createErrorElement.removeChild(createWarmingElement)
                }, 3000)
            }, false)

            currentDayContainer.appendChild(createTaskContainer)
            createTaskContainer.appendChild(createHeading)
            createTaskContainer.appendChild(createHeadingElement)
            createTaskContainer.appendChild(createTextAreaContent)
            createTaskContainer.appendChild(createTimeElement)
            createTaskContainer.appendChild(createSelectElement)
            createTaskContainer.appendChild(createErrorElement)
            createTaskContainer.appendChild(createAddTaskBtn)

            clickState++
        } else {
            let addTaskSection = document.querySelector('.current-day__add-tasks')

            addTaskSection.classList.remove('appear')
            addTaskSection.classList.add('disappear')
            transformLines.classList.add('close-settings')
            setTimeout(() => {
                currentDayContainer.removeChild(addTaskSection)
                transformLines.classList.remove('open-settings')
                transformLines.classList.remove('close-settings')
            }, 2000)


            clickState--
        }
    }, false)
}