import { html } from 'lit';
import {component, useEffect, useState} from '@pionjs/pion';

// Services
import { searchCocktails } from "./services/api-service";

// Styles
import { appStyles } from "./styles/app.css";
import {themeStyles} from "./styles/theme.css";

// Custom components
import './components/search-bar';
import './components/cocktail-card';
import './components/shopping-list';
import './components/toast';
import {toast} from "./utils/toast";

function App()
{
    const [cockTails, setCockTails] = useState([]);
    const [shopList, setShopList] = useState([]);
    const [searchQuery, setSearchQuery] = useState(null);
    const [loadingCocktails, setLoadingCocktails] = useState(false);

    const handleAddCocktailToShopList = (e) => {
        let tempShopList = [...shopList];
        tempShopList.push(e.detail);
        setShopList(tempShopList);
    }

    const handleRemoveCocktailFromShopList = (e) => {
        let tempShopList = [...shopList];
        tempShopList = tempShopList.filter(item => item.idDrink !== e.detail.idDrink);
        setShopList(tempShopList);
    }

    // Handle cocktail search
    useEffect(() => {
        if (searchQuery) {
            setLoadingCocktails(true);
            toast('Loading cocktails...');
            searchCocktails(searchQuery).then(data => {
                setCockTails(data);
                setLoadingCocktails(false);
                toast('Cocktails loaded!', 'success');
            })
        } else {
            setCockTails([]);
        }
    }, [searchQuery])

    return html`
        <style>
            ${themeStyles}
            ${appStyles}
        </style>
        <div id="app-container">
            <div id="app-header" class="flex">
                <div id="app-logo">Plumelo Cocktails</div>
            </div>
            <div class="flex flex-col p-2">
                <search-bar class="w-full" query=${searchQuery} @search="${(e) => {setSearchQuery(e.detail)}}"></search-bar>
            </div>
            <div class="flex p-2">
                <div class="cocktails-container flex flex-col text-center">
                    ${loadingCocktails ? html `
                        <div class="text-xs" style="color:darkgray">Loading...</div>
                    ` : html`
                        ${!searchQuery && cockTails.length === 0 ? html`
                            <div class="text-xs" style="color:darkgray">Search for cocktails on the search bar</div>
                            ` : (searchQuery && cockTails.length === 0) ? html`
                                <div class="text-xs" style="color:darkgray">No cocktails found for <b>${searchQuery}</b> keyword</div>
                            ` : html`
                                ${cockTails.map((cocktail) => html`
                                    <cocktail-card .cocktail=${cocktail} 
                                                   .shoplist=${shopList}
                                                   @add-shoplist-item=${(e) => handleAddCocktailToShopList(e)}
                                                   @remove-shoplist-item=${(e) => handleRemoveCocktailFromShopList(e)}>
                                    </cocktail-card>
                                `)}
                            `
                        }
                    `}
                </div>
                <div class="flex">
                    <!-- Shopping list component -->
                    <shopping-list .shoplist=${shopList} class="flex p-2"></shopping-list>
                </div>
            </div>
            <!-- Toast Component -->
            <app-toast></app-toast>
        </div>
    `;
}

customElements.define('app-root', component(App));
