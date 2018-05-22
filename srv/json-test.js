var fs = require('fs')

console.log('hi')

fs.readFile('srv/data.json', 'utf-8', (err, data) => {
    console.log('file opened:', data)
    jdata = JSON.parse(data)
    console.log('json:', jdata)
    console.log(jdata[0].color, jdata[0].value)
    console.log(jdata[1].color, jdata[1].value)

    jone = jdata[0]
    console.log('simplified...')
    console.log(jone.color, jone.value)
    console.log(jone.color, jone.value)

})
