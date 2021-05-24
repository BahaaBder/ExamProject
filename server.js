const { json } = require('body-parser')
const express = require('express')
const path = require('path')
const app = express()


const urllib = require('urllib')
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

let recipes = []



app.get('/recipes/:ingredient', function(request, response) {
    let userRequest = request.params.ingredient
    recipes = []
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/` + userRequest, function(err, res) {
        data = JSON.parse(res).results
        for (let r of data) {
            recipes.push({
                title: r.title,
                thumbnail: r.thumbnail,
                ingredients: r.ingredients,
                href: r.ingredients.href
            })
        }
        response.send(recipes)
    })


})






app.get('/sanity', function(request, response) {
    response.send("OK")
})




const port = 8080
app.listen(port, function() {
    console.log(`Running server on port ${port}`)
})