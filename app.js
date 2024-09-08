var _a, _b;
// contact info toggle
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
// Cerate resume button 
// let createResumeBtn = document.getElementById('createResumeBtn')
// let exampleResume = document.getElementById("main-container")
var element1 = document.getElementById('main-container');
var element2 = document.getElementById('form-container');
function toggleForm() {
    console.log("1222");
    element1.style.display = 'none';
    element2.style.display = 'block';
}
(_b = document.getElementById('createResumeBtn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    toggleForm();
    console.log("object");
});
