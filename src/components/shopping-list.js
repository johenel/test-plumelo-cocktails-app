import {html} from "lit";
import {component, useEffect, useState} from "@pionjs/pion";
import {themeStyles} from "../styles/theme.css";
import {shoppingListStyles} from "../styles/shopping-list.css";
import {getCocktailIngredients} from "../utils/helpers";
import './modal';


function ShoppingList({shoplist})
{
    const [allIngredients, setAllIngredients] = useState([]);
    const [cocktailNames, setCocktailNames] = useState([]);
    const [ingredientNames, setIngredientNames] = useState([]);

    // Monitor shoplist changes
    useEffect(() => {
        extractCocktailNameAndIngredients(shoplist)
    }, [shoplist]);

    // Extract ingredient names
    useEffect(() => {
        let tempIngredientNames = [];
        allIngredients.forEach(item => tempIngredientNames.push(item.ingredient));
        setIngredientNames([...new Set(tempIngredientNames)]);
    }, [allIngredients]);

    const extractCocktailNameAndIngredients = (shoplist) => {
        let tempNames = [];
        let tempIngredients = [];
        shoplist.forEach(cocktail => {
            tempNames.push(cocktail.strDrink);
            tempIngredients = [...tempIngredients, ...getCocktailIngredients(cocktail)]
        })
        setCocktailNames(tempNames);
        setAllIngredients(tempIngredients);
    }

    const handlePrintIngredientsClick = () => {
        const printWindow = window.open('', '', 'width=1400,height=800');
        let ingredientHtml =  ingredientNames.map(ingredient => {
            return `<li>` + ingredient + `</li>`
        }).join('');
        printWindow.document.write(`
            <html>
                <head><title>Print Preview</title></head>
                <body>
                    <ul>
                       `+ ingredientHtml +`
                    </ul>
                </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
        printWindow.close();
    }

    return html`
        <style>
            ${themeStyles}
            ${shoppingListStyles}
        </style>
        <div class="shopping-list-wrapper flex flex-col justify-between">
            <div class="flex flex-col">
                <div class="text-sm" style="font-weight: bold;letter-spacing: 1px;">Shopping list</div>
                <div class="shopping-list-info p-2">
                    <div>
                        ${shoplist.length === 0 ? html`
                            <div class="text-xs" style="color: gray">No items yet</div>
                        ` : html`
                            <div class="shopping-list-cocktail-names text-xs">
                                ${cocktailNames.join(', ')}
                            </div>
                        `}
                    </div>
                    <div class="shopping-list-ingredients text-sm">
                        <ul style="padding-left: 0px;">
                            ${ingredientNames.slice(0, 10).map((item) => html`
                                <li>${item}</li>
                            `)}
                            ${ingredientNames.length > 10 ? html`
                                <li>+ ${ingredientNames.length - 10} more</li>
                            ` : html``}
                        </ul>
                    </div>
                </div>
            </div>
            <div class="shopping-list-footer flex justify-end grow-0">
                <button @click=${handlePrintIngredientsClick}>Print</button>
            </div>
        </div>
    `;
}

customElements.define('shopping-list', component(ShoppingList))
