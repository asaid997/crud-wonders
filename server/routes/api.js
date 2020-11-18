const express = require('express')
const router = express.Router()

const wonders = [
    { name: "Mount Everest", location: "Nepal", visited: false },
    { name: "Grand Canyon", location: "Arizona", visited: false },
    { name: "Botanical Gardens", location: "Singapore", visited: true },
    { name: "Pantheon", location: "Greece", visited: false },
    { name: "Colosseum", location: "Italy", visited: true }
]

router.get('/wonders', function(req, res) {
    res.send(wonders)
})

router.post('/wonder', function(req, res) {
    console.log(req.body)
    wonders.push({...req.body, visited: false })
    res.end()
})

router.put('/wonder/:name', function(req, res) {
    console.log(req.params.name + " inside put")
    const wonder = req.params.name
    wonders.forEach(element => {
        if (`${element.name} - ${element.location}` === wonder)
            element.visited = true
    });
    res.end()
})

router.delete('/wonder/:name', function(req, res) {
    console.log(req.params.name + " inside delete")
    const wonder = req.params.name
    wonders.forEach((element, index) => {
        if (`${element.name}` === wonder)
            wonders.splice(index, 1)
    });
    res.end()
})

module.exports = router