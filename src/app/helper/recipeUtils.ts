import {FullRecipe} from "../entities";

export function recipeCleaner(fullRecipe: FullRecipe): string[][] {

    let ingredientsWithMeasures = clearIngredients(fullRecipe);
    return ingredientsWithMeasures
}

/**
 * clears FullRecipe and returns an array of arrays containing the pair of measure + ingredient
 * @param fullRecipe array of arrays containing the pair of measure + ingredient
 */
export function clearIngredients(fullRecipe: FullRecipe): string[][] {
    let ingredients = []
    let entries = Object.entries(fullRecipe);
    let i = 9;
    while (i <= 28 && entries[i][1] != "") {
        ingredients.push([entries[i + 20][1], entries[i][1]])
        i++
    }
    return ingredients
}

export function ytToEmbed(url: string): string {
    if (url === '') return url
    return url.replace("watch?v=", "embed/")
}
