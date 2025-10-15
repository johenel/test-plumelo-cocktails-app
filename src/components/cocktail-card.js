import {html} from "lit";
import {component, useEffect, useState} from "@pionjs/pion";
import {cocktailCardStyles} from "../styles/cocktail-card.css";
import {themeStyles} from "../styles/theme.css";
import {getCocktailIngredients} from "../utils/helpers";
import {toast} from "../utils/toast";

function CocktailCard({cocktail, shoplist})
{
    const [ingredients, setIngredients] = useState([]);
    const [isInShopList, setIsInShopList] = useState(false);
    const [isViewIngredientsModalOpen, setIsViewIngredientsModalOpen] = useState(false);

    // Get cocktail ingredients
    useEffect(() => {
        setIngredients(getCocktailIngredients(cocktail))
    }, [])

    // Monitor shoplist changes
    useEffect(() => {
        let tempShopList = shoplist.filter(item => item.idDrink === cocktail.idDrink);
        if (tempShopList.length > 0) {
            setIsInShopList(true);
        } else {
            setIsInShopList(false)
        }
    }, [shoplist])

    return html`
        <style>
            ${themeStyles}
            ${cocktailCardStyles}
        </style>
        <div class="cocktail-card-container flex">
            <div class="cocktail-thumb" style='background-image: url(${cocktail.strDrinkThumb})'></div>
            <div class="cocktail-info text-left p-2 flex flex-col">
                <div class="cocktail-name">${cocktail?.strDrink}</div>
                <div class="cocktail-sub-info flex text-xs justify-between mb-1" style="flex-grow: 0">
                    <div>${cocktail?.strCategory} - ${cocktail?.strAlcoholic}</div>
                    <div>${cocktail?.strGlass}</div>
                </div>
                <div class="text-sm" >
                    ${cocktail?.strInstructions}
                </div>
                <div class="cocktail-footer flex justify-between mt-2 text-xs">
                    <div class="cocktail-ingredients-btn" @click=${(e) => setIsViewIngredientsModalOpen(true)}>View ${ingredients.length} ingredients</div>
                    <div class="cocktail-shopping-btn">
                        ${isInShopList ? html`
                            <div class="cocktail-remove-shop-list-item-btn" @click=${() => {
                                this.dispatchEvent(new CustomEvent('remove-shoplist-item', {detail: cocktail}))
                                toast('Cocktail removed from the shopping list.');
                            }}>- Remove from shop list</div>
                        `: html`
                            <div class="cocktail-add-shop-list-item-btn" @click=${() => {
                                this.dispatchEvent(new CustomEvent('add-shoplist-item', {detail: cocktail}))
                                toast('Cocktail added from the shopping list.', 'success');
                            }}>+ Add to shop list</div>
                        `}
                    </div>
                </div>
            </div>
        </div>
        <app-modal .open=${isViewIngredientsModalOpen} .onClose=${() => setIsViewIngredientsModalOpen(false)}>
            <div class="text-sm">
                ${ingredients.length > 0 ? html`
                    <ul style="text-align: left">
                        ${ingredients.map(item => html`
                            <li>${item.ingredient} - ${item.measurement}</li>
                        `)}
                    </ul>
                ` : html`
                    <div>No ingredient selected yet.</div>
                `}
            </div>
        </app-modal>
    `;
}

customElements.define('cocktail-card', component(CocktailCard));
