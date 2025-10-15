export function getCocktailIngredients(cocktail)
{
    let ingredients = [];

    for (let i=1; i<=15; i++) {
        let ingredient = cocktail[`strIngredient${i}`];
        let item = {}

        if (ingredient) {
            item.ingredient = ingredient;
            item.measurement = cocktail[`strMeasure${i}`];
            ingredients.push(item)
        }
    }

    return ingredients;
}
