import {THE_COCKTAIL_DB_API} from "../config/apis";

export async function searchCocktails(query)
{
    const res = await fetch(`${THE_COCKTAIL_DB_API}` + query);

    if (!res.ok) {
        throw new Error(`Something went wrong while searching for cocktails.`);
    }

    let data = await res.json();

    return data?.drinks || [];
}
