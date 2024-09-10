"use strict";
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
document.getElementById('Btn')?.addEventListener('click', () => {
    toggleVisibility();
});
// Cerate resume button 
let element1 = document.getElementById('main-container');
let element2 = document.getElementById('form-container');
function toggleForm() {
    element1.style.display = 'none';
    element2.style.display = 'block';
}
document.getElementById('createResumeBtn')?.addEventListener('click', () => {
    toggleForm();
});
//form add mores
//edu
let eduAddmore = document.getElementById('eduAddmore');
let addMoreEduForm = document.getElementById('addMoreEduForm');
function addmoreedu() {
    let newelement = document.createElement("div");
    newelement.classList.add('edu-input-group');
    newelement.classList.add('mb-3');
    newelement.classList.add('input-group');
    newelement.innerHTML = `  <input type="text" id="schoolName" class="form-control" placeholder="School" aria-label="schoolName">
                
                <input type="text" id="degreeName" class="form-control" placeholder="Degree" aria-label="degreeName">
                
                <select class="form-select" id="degreeFrom" aria-label="degreeFrom">
                    <option selected>From</option>
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option>
                    <option value="2006">2006</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    
                  </select>
                <select class="form-select" id="degreeTo" aria-label="degreeTo">
                    <option selected>To</option>
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option>
                    <option value="2006">2006</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                  </select>`;
    addMoreEduForm?.appendChild(newelement);
}
eduAddmore?.addEventListener('click', () => {
    addmoreedu();
});
// Function to submit all forms and display their values
function submitAllForms() {
    const eduoutput = document.querySelector('#degreesCont');
    const eduformGroups = document.querySelectorAll('.edu-input-group');
    let eduhtmlContent = '';
    eduformGroups.forEach((formGroup, index) => {
        const schoolInput = formGroup.querySelector(`input[aria-label="schoolName"]`);
        const degreeInput = formGroup.querySelector(`input[aria-label="degreeName"]`);
        const startYearSelect = formGroup.querySelector(`select[aria-label="degreeFrom"]`);
        const endYearSelect = formGroup.querySelector(`select[aria-label="degreeTo"]`);
        const schoolValue = schoolInput ? schoolInput.value : '';
        const degreeValue = degreeInput ? degreeInput.value : '';
        const startYearValue = startYearSelect ? startYearSelect.value : '';
        const endYearValue = endYearSelect ? endYearSelect.value : '';
        eduhtmlContent += `
                  <div class="material">
        <h4>${schoolValue}</h4>
        <h6>Degree - ${degreeValue}</h6>
        <p>From ${startYearValue} to ${endYearValue}</p>
        </div>
      `;
    });
    eduoutput.innerHTML = eduhtmlContent;
    // exp
    const expformGroups = document.querySelectorAll('.exp-input-group');
    const expoutput = document.querySelector('#expCont');
    let exphtmlContent = '';
    expformGroups.forEach((formGroup, index) => {
        const companyName = formGroup.querySelector(`input[aria-label="companyName"]`);
        const companyPosition = formGroup.querySelector(`input[aria-label="companyPosition"]`);
        const companyFrom = formGroup.querySelector(`select[aria-label="companyFrom"]`);
        const companyTo = formGroup.querySelector(`select[aria-label="companyTo"]`);
        const companyNameValue = companyName ? companyName.value : '';
        const companyPositionValue = companyPosition ? companyPosition.value : '';
        const companyFromValue = companyFrom ? companyFrom.value : '';
        const companyToValue = companyTo ? companyTo.value : '';
        exphtmlContent += `
                    <div class="material">
                  <h4>${companyPositionValue}</h4>
                  <h6>Company - ${companyNameValue}</h6>
                  <p>From ${companyFromValue} to ${companyToValue}</p>
              </div>
        `;
    });
    expoutput.innerHTML = exphtmlContent;
    //skill
    const skillformGroups = document.querySelectorAll('.ski-input-group');
    const skilloutput = document.querySelector('#skillCont');
    let skillhtmlContent = '';
    skillformGroups.forEach((formGroup, index) => {
        const skillName = formGroup.querySelector(`input[aria-label="skillName"]`);
        const skillLevel = formGroup.querySelector(`select[aria-label="skillLevel"]`);
        const skillLevelValue = skillLevel ? skillLevel.value : '';
        const skillNameValue = skillName ? skillName.value : '';
        skillhtmlContent += `
                    <p><img src="icons/dot.png" alt="">${skillLevelValue} - ${skillNameValue}</p>
        `;
    });
    skilloutput.innerHTML = skillhtmlContent;
    //language
    const langformGroups = document.querySelectorAll('.lan-input-group');
    const langoutput = document.querySelector('#langCont');
    let langhtmlContent = '';
    langformGroups.forEach((formGroup, index) => {
        const languageName = formGroup.querySelector(`input[aria-label="languageName"]`);
        const langugeLevel = formGroup.querySelector(`select[aria-label="langugeLevel"]`);
        const languageNamelValue = languageName ? languageName.value : '';
        const langugeLevelValue = langugeLevel ? langugeLevel.value : '';
        langhtmlContent += `
                    <p><img src="icons/dot.png" alt="">${langugeLevelValue} - ${languageNamelValue}</p>
        `;
    });
    langoutput.innerHTML = langhtmlContent;
}
//wor experience
let expAddmore = document.getElementById('expAddmore');
let addMoreExpForm = document.getElementById('addExpForm');
function addmoreexp() {
    let newelement = document.createElement("div");
    newelement.classList.add('input-group');
    newelement.classList.add('exp-input-group');
    newelement.classList.add('mb-3');
    newelement.innerHTML = `
                <input type="text" class="form-control" placeholder="Company" aria-label="companyName">
                
                <input type="text" class="form-control" placeholder="Position" aria-label="companyPosition">
                
                <select class="form-select" aria-label="companyFrom">
                    <option selected>From</option>
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option>
                    <option value="2006">2006</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    
                  </select>
                <select class="form-select" aria-label="companyTo">
                    <option selected>To</option>
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option>
                    <option value="2006">2006</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                  </select>`;
    addMoreExpForm?.appendChild(newelement);
}
expAddmore?.addEventListener('click', () => {
    addmoreexp();
});
// skills
let skillAddmore = document.getElementById('skillAddmore');
let addMoreSkillForm = document.getElementById('addSkillFrom');
function addmoreskill() {
    let newelement = document.createElement("div");
    newelement.classList.add('input-group');
    newelement.classList.add('ski-input-group');
    newelement.classList.add('mb-3');
    newelement.innerHTML = `  <input type="text" class="form-control" placeholder="Skill" aria-label="skillName">
                
                <select class="form-select" aria-label="skillLevel">
                    <option selected>Level</option>
                    <option value="Basic">Basic     </option>
                    <option value="Intermidiate">Intermidiate </option>
                    <option value="Expert">Expert </option>
                  </select>`;
    addMoreSkillForm?.appendChild(newelement);
}
skillAddmore?.addEventListener('click', () => {
    addmoreskill();
});
//languages
let languageAddmore = document.getElementById('languageAddmore');
let addMoreLanguageForm = document.getElementById('addLanguageForm');
function addmorelanguage() {
    let newelement = document.createElement("div");
    newelement.classList.add('input-group');
    newelement.classList.add('lan-input-group');
    newelement.classList.add('mb-3');
    newelement.innerHTML = `  <input type="text" class="form-control" placeholder="Language" aria-label="languageName">
                  
                  <select class="form-select" aria-label="langugeLevel">
                      <option selected>Level</option>
                      <option value="Level">Basic</option>
                      <option value="Intermidiate">Intermidiate </option>
                      <option value="Fluent">Fluent </option>
                      <option value="Native">Native </option>
                    </select>`;
    addMoreLanguageForm?.appendChild(newelement);
}
languageAddmore?.addEventListener('click', () => {
    addmorelanguage();
});
// creation of resume
//Form Input
let pictureInput = document.getElementById('PictureInput');
let profilepic = document.getElementById('profileOutput');
let fullname = document.getElementById('fullname');
let jobTitle = document.getElementById('jobTitle');
let joibDescription = document.getElementById('jobDescription');
let emailAdress = document.getElementById('emailAdress');
let phoneNo = document.getElementById('phoneNo');
let adress = document.getElementById('adress');
function createResume() {
    let cvfullname = document.getElementById('cvfullname');
    cvfullname.innerHTML = `${fullname.value}`;
    let cvjobDescription = document.getElementById('cvjobDescription');
    cvjobDescription.innerHTML = `${joibDescription.value}`;
    let cvjobTitle = document.getElementById('cvjobTitle');
    cvjobTitle.innerHTML = `${jobTitle.value}`;
    let cvemailAdress = document.getElementById('cvemailAdress');
    cvemailAdress.innerHTML = `${emailAdress.value}`;
    let cvphoneNo = document.getElementById('cvphoneNo');
    cvphoneNo.innerHTML = `${phoneNo.value}`;
    let cvadress = document.getElementById('cvadress');
    cvadress.innerHTML = `${adress.value}`;
    // profile pic
    if (pictureInput === undefined || pictureInput.files.length === 0) {
        profilepic.src = "icons/Guest-user.png";
    }
    else {
        profilepic.src = URL.createObjectURL(pictureInput.files[0]);
    }
    //editable text
    if (cvfullname) {
        cvfullname.addEventListener('dblclick', () => {
            cvfullname.setAttribute('contenteditable', 'true');
            cvfullname.focus();
        });
    }
    if (cvjobDescription) {
        cvjobDescription.addEventListener('dblclick', () => {
            cvjobDescription.setAttribute('contenteditable', 'true');
            cvjobDescription.focus();
        });
    }
    if (cvjobTitle) {
        cvjobTitle.addEventListener('dblclick', () => {
            cvjobTitle.setAttribute('contenteditable', 'true');
            cvjobTitle.focus();
        });
    }
    if (cvemailAdress) {
        cvemailAdress.addEventListener('dblclick', () => {
            cvemailAdress.setAttribute('contenteditable', 'true');
            cvemailAdress.focus();
        });
    }
    if (cvphoneNo) {
        cvphoneNo.addEventListener('dblclick', () => {
            cvphoneNo.setAttribute('contenteditable', 'true');
            cvphoneNo.focus();
        });
    }
    if (cvadress) {
        cvadress.addEventListener('dblclick', () => {
            cvadress.setAttribute('contenteditable', 'true');
            cvadress.focus();
        });
    }
    let togglecreateresume = document.getElementById('createResumeBtn');
    togglecreateresume.innerHTML = 'Edit Your Resume';
    element1.style.display = 'block';
    let note = document.getElementById('note');
    note.innerHTML = 'You can edit name, title, descrption and contact info by double clicking on it.';
    element2.style.display = 'none';
}
document.getElementById('create')?.addEventListener('click', () => {
    createResume();
    submitAllForms();
});
