console.log('Client side javascript is loaded!')


fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then(() => {
        console.log(data)
    })
})