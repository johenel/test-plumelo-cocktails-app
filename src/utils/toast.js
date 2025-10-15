export function toast(message, type = 'info', duration = 3000) {
    window.dispatchEvent(
        new CustomEvent('toast', {
            detail: { id: Date.now(), message, type, duration },
        })
    );
}
