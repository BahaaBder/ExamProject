const renderRecipes = new Render()
    //Get Data From Server
const search = function() {
    let input = $("#ingredientInput").val()
    $.get(`/recipes/${input}`, function(recipes) {
        renderRecipes.renderData(recipes)
    })
}

$("img").on("click", ".image", function() {
    alert($(this).closest("div").find("ul").find("li"))
})