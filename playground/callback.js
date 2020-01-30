const add = (a,b,callback) => {
    setTimeout(() => {
        callback(a+b)
        console.log('2 Seconds have passed')
    }, 2000)
}

add(1,2,(sum) => {
    console.log('Sum is : '+ sum)

})