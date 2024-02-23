const ACTION_ADD = "addMovie"
const ACTION_DIRECTED_BY = "directedBy"
const ACTION_ON_DATE = "onDate"

function defineAction(command) {
    if (command.includes(ACTION_ADD)) {
        return ACTION_ADD
    }
    if (command.includes(ACTION_DIRECTED_BY)) {
        return ACTION_DIRECTED_BY
    }
    if (command.includes(ACTION_ON_DATE)) {
        return ACTION_ON_DATE
    }
}

function process(commandArray) {
    let map = new Map()
    for (let i = 0; i < commandArray.length; i++) {
        let command = commandArray[i]
        let action = defineAction(command)
        if(action === ACTION_ADD) {
            map.set()
        }
    }
}