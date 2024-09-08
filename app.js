var _a;
function toggleVisibility() {
    var element = document.getElementById('contact-info');
    if (element) {
        if (element.style.display === 'none') {
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';
        }
    }
}
(_a = document.getElementById('Btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    toggleVisibility();
});
