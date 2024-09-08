

function toggleVisibility(): void {
    let element = document.getElementById('contact-info')
    if (element) {
        if (element.style.display === 'none') {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    }
}
document.getElementById('Btn')?.addEventListener('click', () => {
    toggleVisibility();
});
