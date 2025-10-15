import { css } from "lit";

export const searchBarStyles = css`
    .search-bar {
        background: white;
        outline: none;
        border:none;
        width: 100%;
        letter-spacing: 2px;
    }
    
    .search-bar-container {
        max-width: 700px;
        border: solid 1px #eee;
        margin: auto;
        padding: 10px 20px;
        border-radius: 20px;
        box-shadow: 0px 4px 14px #eee;
    }
    
    .search-btn {
        border:none;
        border-radius: 20px;
        background: #eee;
        padding: 6px 10px;
        letter-spacing: 1px;
        cursor:pointer;
    }
    
    .search-btn:hover {
        background:#ddd;
    }
`;

