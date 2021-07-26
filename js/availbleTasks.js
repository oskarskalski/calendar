const availbleTasks = (fullDate) => {
    let priorities = []

    let isLowPriority = false
    let isMediumPriority = false
    let isHardPriority = false

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        if (key.startsWith(fullDate)) {
            let value = JSON.parse(localStorage.getItem(key))

            if (value.priority == 'low')
                isLowPriority = true

            if (value.priority == 'medium')
                isMediumPriority = true

            if (value.priority == 'hard')
                isHardPriority = true
        }
    }

    if (isLowPriority)
        priorities.push('low')

    if (isMediumPriority)
        priorities.push('medium')

    if (isHardPriority)
        priorities.push('hard')

    return priorities
}