const init = () => {
    const namesOfMonths = ['January', 'February', 'Marc', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let currentDate = new Date()

    generateTodosSection(namesOfMonths, currentDate)
    generateCalendar(namesOfMonths)
    retrieveData()
    taskSettingsModal()
    dateChanging()
}

init()