import {html} from "lit";
import {component, useState} from "@pionjs/pion";
import {searchBarStyles} from "../styles/search-bar.css";
import {themeStyles} from "../styles/theme.css";

function SearchBar({query = null})
{
    const [searchQuery, setSearchQuery] = useState(query);

    const handleSearchInput = (e) => {
        setSearchQuery(e.target.value);
    }

    const handleKeyEnter = (e) => {
        if (e.key === 'Enter') {
            setSearchQuery(e.target.value);
            this.dispatchEvent(new CustomEvent('search', {detail: searchQuery}))
        }
    }

    return html`
        <style>
            ${themeStyles}
            ${searchBarStyles}
        </style>
        <div class="flex w-full search-bar-container">
            <span class="px-1">&#128269;</span>
            <input class="search-bar" 
                   type="text" 
                   placeholder="Find cocktail recipes..." 
                   value=${searchQuery} 
                   @keydown=${handleKeyEnter}
                   @input=${handleSearchInput}>
            <button class="search-btn" @click=${() => {
                this.dispatchEvent(new CustomEvent('search', {detail: searchQuery}))
            }}>Search</button>
        </div>
    `
}

customElements.define('search-bar', component(SearchBar))
