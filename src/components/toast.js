import { html } from 'lit';
import { component, useState, useEffect } from '@pionjs/pion';
import {toastStyles} from "../styles/toast.css";

function Toast() {
    const [toasts, setToasts] = useState([]);

    // Handle global toast events
    useEffect(() => {
        const handleToast = (e) => {
            const toast = e.detail;
            setToasts((prev) => [...prev, toast]);

            // Auto-remove
            setTimeout(() => {
                setToasts((prev) => prev.filter((t) => t.id !== toast.id));
                }, toast.duration || 3000);
            };

        window.addEventListener('toast', handleToast);

        return () => window.removeEventListener('toast', handleToast);
    }, []);

    return html`
        <style>${toastStyles}</style>
        <div class="toast-container">
            ${toasts.map((toast) => html`
                <div class="toast ${toast.type}">
                    <span class="text-sm">${toast.message}</span>
                </div>`
            )}
        </div>
    `;
}

customElements.define('app-toast', component(Toast));
