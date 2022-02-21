function flatten(mylist: Array<string|number|object>): Array<string> {
    let res = []
    mylist.forEach((el : any) => {
        if (Symbol.iterator in Object(el)){
            for (let x  of el) {
                res.push(x)
            }
        }
        else res.push(el)
    })
    return res
}

console.log(flatten([1, "a", ["b", "c", 3], "B"]))