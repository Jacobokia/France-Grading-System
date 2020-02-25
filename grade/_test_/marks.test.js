const testMark= require('../index')



test(' testing a mark is a number',()=>{
    expect(typeof testMark.marks).toBe("number")

})

test(' testing a mark is a number',()=>{
    expect(testMark.computeScore()).toBe("A")

})