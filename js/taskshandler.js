const tasksHandler = () => {
    let getTitleElement = document.querySelector('.add-tasks__title-task')

    if(getTitleElement.value.length != 0){
        let getDayOfMonth = document.querySelector('.current-day__day-of-month')
        let getDate = document.querySelector('.current-day__date')
        let getTimeElement = document.querySelector('.add-tasks__time-task')
        let getContentElement = document.querySelector('.add-tasks__content-task')
        let getPriorityElement = document.querySelector('.add-tasks__priority-task')

        let settings = {
            title: getTitleElement.value,
            content: getContentElement.value,
            time: getTimeElement.value,
            priority: getPriorityElement.value
        }

        window.localStorage
            .setItem(`${getDayOfMonth.innerHTML} ${getDate.innerHTML} ${new Date().getTime()}`
                , JSON.stringify(settings));


        let getTasksElement = document.querySelector('.todos__tasks')
        getTasksElement.querySelectorAll('*').forEach(n => n.remove());

        retrieveData()
        getTitleElement.value = ''
        getContentElement.value = ''

        return true
    }else{
        return false
    }
}