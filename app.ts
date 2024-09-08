
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

let element1: any   = document.getElementById('main-container')
let element2: any   = document.getElementById('form-container')
function toggleForm(){
  
    element1.style.display ='none'
    element2.style.display ='block'
}
document.getElementById('createResumeBtn')?.addEventListener('click', () => {
    toggleForm();
  
});


// creation of resume
let fullname:any = document.getElementById('fullname')
console.log(fullname.value)

function createResume(){
    
      
      
    // element1.style.display ='none'
    // element2.style.display ='block'
}
document.getElementById('create')?.addEventListener('click', () => {
    createResume();
});
