import {css} from "lit";

export const cocktailCardStyles = css`
    .cocktail-card-container {
        box-shadow: 2px 2px 2px #eee;
        margin-bottom: 20px;
        border-radius: 10px;
        overflow:hidden;
        max-width: 600px;
    }
    
    .cocktail-card-container:hover {
        border: solid 1px #eee;
    }
    
    .cocktail-thumb {
        width: 200px;
        min-width: 200px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    
    .cocktail-name {
        margin-bottom: 4px;
        color:black;
        font-weight: bold;
    }
    
    .cocktail-info {
        max-height: 200px;
    }
    
    .cocktail-sub-info {
        color: darkgray;
    }
    
    .cocktail-instructions {
        color: #ddd;
    }
    
    .cocktail-ingredients-btn {
        color: blue;
        cursor: pointer;
    }
    
    .cocktail-ingredients-btn:hover {
        color: lightblue;
    }
    
    .cocktail-shopping-btn {
        cursor: pointer;
    }
    
    .cocktail-add-shop-list-item-btn:hover {
        color: green;
    }
    
    .cocktail-remove-shop-list-item-btn {
        color: red
    }
`;
