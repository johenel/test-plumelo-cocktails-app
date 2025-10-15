import {css} from "lit";

export const modalStyles = css`
    .modal-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }

    .modal-container {
        background: white;
        padding: 1.5rem;
        border-radius: 5px;
        position: relative;
        min-width: 280px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        animation: fadeIn 0.2s ease-in-out;
    }

    .close-btn {
        position: absolute;
        top: 0.5rem;
        right: 0.75rem;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scale(0.9);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;
