const renderRecipes = new Render()

const search = function() {
    let input = $("#ingredientInput").val()
    $.get(`/recipes/${input}`, function(recipes) {
        renderRecipes.renderData(recipes)
    })
}