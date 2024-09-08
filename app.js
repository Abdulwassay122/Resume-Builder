"use strict";
var _a, _b, _c;
// contact info toggle
function toggleVisibility() {
    let element = document.getElementById('contact-info');
    if (element) {
        if (element.style.display === 'none') {
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';
        }
    }
}
(_a = document.getElementById('Btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    toggleVisibility();
});
// Cerate resume button 
let element1 = document.getElementById('main-container');
let element2 = document.getElementById('form-container');
function toggleForm() {
    element1.style.display = 'none';
    element2.style.display = 'block';
}
(_b = document.getElementById('createResumeBtn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
    toggleForm();
});
// creation of resume
let fullname = document.getElementById('fullname');
console.log(fullname.value);
function createResume() {
    // element1.style.display ='none'
    // element2.style.display ='block'
}
(_c = document.getElementById('create')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
    createResume();
});
