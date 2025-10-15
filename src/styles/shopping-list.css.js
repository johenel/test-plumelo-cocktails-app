import {css} from "lit";

export const shoppingListStyles = css`
    .shopping-list-wrapper {
        background: #ffeac5;
        box-shadow: 3px 3px 3px #eee;
        max-width: 280px;
        min-width: 280px;
        height: 400px;
        padding: 20px;
        border-radius: 10px;
    }
    
    .shopping-list-footer button {
        padding: 5px 10px;
        letter-spacing: 1px;
        border-radius: 5px;
        border: none;
        background: orange;
        color: white;
        cursor: pointer
    }
    
    .shopping-list-footer button:hover {
        background: #ee6f3e;
    }
`
