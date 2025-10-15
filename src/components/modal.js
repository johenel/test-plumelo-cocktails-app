import {html} from "lit";
import {component, useEffect} from "@pionjs/pion";
import {themeStyles} from "../styles/theme.css";
import {modalStyles} from "../styles/modal.css";

function Modal({open = false, onClose = () => {}})
{
    // Close on Escape key
    useEffect(() => {
        const handleKey = (e) => e.key === 'Escape' && onClose();
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, []);

    if (!open) {
        return html``;
    }

    return html`
        <style>
            ${themeStyles}
            ${modalStyles}
        </style>
        <div class="modal-backdrop" @click=${onClose}>
            <div class="modal-container" @click=${(e) => e.stopPropagation()}>
                <slot></slot>
                <button class="close-btn" @click=${onClose}>×</button>
            </div>
        </div>
    `;
}

customElements.define('app-modal', component(Modal));

