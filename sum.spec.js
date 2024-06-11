const sum = require("./sum.js")

test ('adds 1 + 2 to equal 3',() => {
    expect(sum(1,2)).toEqual(3)

})
test ('adds -1 + 2 to equal 0',() => {
    expect(sum(-1,2)).toEqual(0)

})