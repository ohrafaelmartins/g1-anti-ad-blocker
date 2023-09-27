function g1() {
    const dialogContainer = document.querySelector('.fc-dialog-container');
    if (dialogContainer) {
        const cancelIcon = dialogContainer.querySelector('i');
        if (cancelIcon) {
            cancelIcon.click();
        }
    }
    requestAnimationFrame(g1);
}
g1();
