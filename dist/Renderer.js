class Render {
    constructor() {

    }
    renderData = function(recipes) {
        const source = $("#ingredient-template").html()
        const template = Handlebars.compile(source)
        $(".results").empty()
        let recipeSheet = template({ recipes })
        $(".results").append(recipeSheet)
    }
}