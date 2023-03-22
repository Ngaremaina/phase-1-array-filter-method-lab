// Code your solution here
function findMatching(drivers, string){
    return drivers.filter(
        word => word === string || word === string.toLowerCase()
    )
}
function fuzzyMatch(drivers, string){
    return drivers.filter(
        word => word[0] === string[0] || word[1]=== string[1]
        // word => word.startsWith(string)
    )
}

function matchName(drivers, string){
    return drivers.filter(
        word => word.name === string 
    )
}