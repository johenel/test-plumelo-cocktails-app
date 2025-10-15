import {css} from "lit";

export const appStyles = css`
    #app-container {
        max-width: 1024px;
        min-height: 100vh;
        margin: auto;
        position: relative;
        background: white;
    }
    
    #app-header {
        padding: 30px 16px;
        margin-bottom: 20px;
        justify-content: center;
    } 
    
    #app-logo {
        font-size: 1.2rem;
        letter-spacing: 2px;
        font-weight: bold;
        color: indigo;
         font-family: "Playwrite DE SAS", cursive;
        font-optical-sizing: auto;
    }
    
    .cocktails-container {
        min-height: 300px;
        padding: 20px;
    }
`;
