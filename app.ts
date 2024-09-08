
// contact info toggle
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


// Cerate resume button 
// let createResumeBtn = document.getElementById('createResumeBtn')
// let exampleResume = document.getElementById("main-container")

let element1: any   = document.getElementById('main-container')
let element2: any   = document.getElementById('form-container')
function toggleForm(){
    console.log("1222")
    element1.style.display ='none'
    element2.style.display ='block'
}
document.getElementById('createResumeBtn')?.addEventListener('click', () => {
    toggleForm();
    console.log("object")
});
