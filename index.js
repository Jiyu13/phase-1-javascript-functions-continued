// code your solution here

function saturdayFun(thingsToDo = "roller-skate") {
    return `This Saturday, I want to ${thingsToDo}!`;
}


const mondayWork = function(thingsToDo = "go to the office") {
    return `This Monday, I will ${thingsToDo}.`;
}

function wrapAdjective (wraps) {
    return function(name = "Special") {
        return `You are ${wraps}${name}${wraps}!`;   
    }

}

