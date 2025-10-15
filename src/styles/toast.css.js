import {css} from "lit";

export const toastStyles = css`
    .toast-container {
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        z-index: 2000;
    }

    .toast {
        min-width: 220px;
        padding: 30px;
        letter-spacing: 2px;
        border-radius: 8px;
        color: white;
        font-size: 14px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        animation: slideIn 0.3s ease;
    }

    .toast.success { 
        background: green; 
    }
    
    .toast.error { 
        background: red; 
    }
    
    .toast.info { 
        background: gray;
    }
    
    .toast.warning {
        background: yellow; 
    }

    @keyframes slideIn {
        from { 
            opacity: 0; 
            transform: 
            translateX(50px);
        }
        to { 
            opacity: 1; 
            transform: translateX(0); 
        }
    }
`
