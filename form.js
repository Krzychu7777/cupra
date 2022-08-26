const forms = document.querySelectorAll('form');
const inputs = document.querySelectorAll('input');
let checkBoxes = document.querySelectorAll('input[name="contact[]"]');
let agreeCheckRemove = document.querySelectorAll('input[name="private-politics"]');
let emails = document.querySelectorAll('input[name="email"]');
let userName = document.querySelectorAll('input[name="name"]');
let phoneNumber = document.querySelectorAll('input[name="phone"]');
let lastNameInput = document.querySelectorAll('input[name="last-name"]');

const subBtnSlide = document.getElementById("btn__top");
const subBtn = document.getElementById("btn");
const openConnectError = document.querySelectorAll(".connect-error");
const closeError = document.querySelectorAll(".close-error");



function showErrors(Error, Succes) {
    Error.classList.remove("hidden");
    Succes.classList.remove("success");
}

function validateInputs(input, inputError, inputSucces) {
    if (input.validity.valid) {
        if(inputError) {
            inputError.classList.add("hidden");
            inputSucces.classList.add("success");
        }
    } else if(input.validity.tooShort) {
        showErrors(inputError, inputSucces);
    } else if(input.validity.typeMismatch) {
        showErrors(inputError, inputSucces);
    } else if(input.validity.patternMismatch) {
        showErrors(inputError, inputSucces);
    } else {
        showErrors(inputError, inputSucces);
    }
};

function inputCheckValid(input, inputError) {
    if(!input.validity.valid) {
        inputError.classList.remove("hidden");
        return false;
    } else {
        if(inputError) {
            inputError.classList.add("hidden");
        }
        return true;
    }
}

function checkBoxAgreeValid(checkBoxAgree, contactsError) {
    if(checkBoxAgree.checked === false) {
        contactsError.classList.remove("hidden");
        checkBoxAgree.style.borderColor = "red";
        return false;
    } else {
        if(contactsError) {
            contactsError.classList.add("hidden");
        }
    }
    return true;
}

function checkBoxContactValid(checkBoxContact, checkBoxContactError) {
    const checkedBoxes = [...checkBoxContact].filter((item) => {
        return item.checked;
    });

    if(checkedBoxes == "") {
        checkBoxContactError.classList.remove("hidden");
        for(let i=0; i < checkBoxContact.length; i++) {
            checkBoxContact[i].style.borderColor = "red";
        }
        return false;
    } else {
        if(checkBoxContactError) {
            checkBoxContactError.classList.add("hidden");
        }
    }
    return true;
}
    
userName.forEach((username) => { 
username.addEventListener('input', (e) => {
    userName = e.target;

    const userError = userName.parentNode.querySelector('.name-error');
    const userSucces = userName.parentNode.querySelector('.name-success');
    validateInputs(username, userError, userSucces);
    });
});

lastNameInput.forEach((lastName) => { 
lastName.addEventListener('input', (e) => {
    lastNameInput = e.target;

    const lastNameError = lastNameInput.parentNode.querySelector('.last-name-error');
    const lastNameSucces = lastNameInput.parentNode.querySelector('.last-name-success');
    validateInputs(lastName, lastNameError, lastNameSucces);
    });
});

emails.forEach((item) => {
    item.addEventListener('input', (e) => {
        emails = e.target;
        
        const emailError = emails.parentNode.querySelector('.email-error');
        const emailSucces = emails.parentNode.querySelector('.email-success');
        validateInputs(emails, emailError, emailSucces);
    });
});

phoneNumber.forEach((item) => {
    item.addEventListener('input', (e) => {
        phoneNumber = e.target;

        const ErrorPhone = phoneNumber.parentNode.querySelector('.phone-error');
        const SuccessPhone = phoneNumber.parentNode.querySelector('.phone-success');

        validateInputs(phoneNumber, ErrorPhone, SuccessPhone)
        item.value=item.value.replace(' ', '');
        item.value=item.value.replace(/[^\d, +,' ']/, '');
        });
})

//check box agree error remove
agreeCheckRemove.forEach((item) => { 
    item.addEventListener('change', (e) => {
        agreeCheckRemove = e.target;

        const errorAgree = e.target.parentNode.parentNode.querySelector('.agree-error');
        errorAgree.classList.add("hidden");

        agreeCheckRemove.style.borderColor = "";
        });
    });


//check box contact error remove
checkBoxes.forEach((item) => {
    item.addEventListener('change', (e) => {
        checkBoxes = e.target.parentNode.parentNode;

        const contactCheckError = checkBoxes.querySelector('.contact-error');
        contactCheckError.classList.add("hidden");

        const checkBoxItem = checkBoxes.querySelectorAll('input[name="contact[]"]');
        for(let i=0; i < checkBoxItem.length; i++) {
            checkBoxItem[i].style.borderColor = "";
        }
            
        });
    });

function openError() {
    openConnectError.forEach((item) => {
        item.classList.remove("hidden");
    });

    closeError.forEach((item) => {
        item.addEventListener('click', closeErrorPopUp);
    });

    main.addEventListener('click', closeErrorPopUp);
}

function closeErrorPopUp() {
    openConnectError.forEach((item) => {
        item.classList.add("hidden");
    });
}


function popUpclose() {
    popUp.classList.add("hidden");
    if(openSlideform === 0) {
    body.classList.remove("body--overflow");
    }
}

function openPopUp() {
    popUp.classList.remove("hidden");
    body.classList.add("body--overflow");

    closePopUp.addEventListener('click', popUpclose);

    main.addEventListener('click', popUpclose);
}

let counter = 0;

function testDriveSend(e) {
    const form = e.target;
    const btnSubmit = form.querySelector('button');

    let testDriveForm = {
        name: form.querySelector('input[name="name"]'),
        lastName: form.querySelector('input[name="last-name"]'),
        email: form.querySelector('input[name="email"]'),
        phone: form.querySelector('input[name="phone"]'),
        checkAgree: form.querySelector('input[name="private-politics"]'),
        checkContacts: form.querySelectorAll('input[name="contact[]"]')
    };

    let testDriveErrors = {
        nameError: form.querySelector('.name-error'),
        lastNameError: form.querySelector('.last-name-error'),
        emailError: form.querySelector('.email-error'),
        phoneError: form.querySelector('.phone-error'),
        agreeError: form.querySelector('.agree-error'),
        contactError: form.querySelector('.contact-error')
    };

    const nameCheck = inputCheckValid(testDriveForm.name, testDriveErrors.nameError);
    const LastNameCheck = inputCheckValid(testDriveForm.lastName, testDriveErrors.lastNameError);
    const emailCheck = inputCheckValid(testDriveForm.email, testDriveErrors.emailError);
    const phoneCheck = inputCheckValid(testDriveForm.phone, testDriveErrors.phoneError);

    const agreeCheck = checkBoxAgreeValid(testDriveForm.checkAgree, testDriveErrors.agreeError);
    const contactCheck = checkBoxContactValid(testDriveForm.checkContacts, testDriveErrors.contactError);

    if (nameCheck && LastNameCheck && emailCheck && phoneCheck && agreeCheck && contactCheck) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    Selected_car: inputCarValueSelect.value,
                    Name: testDriveForm.name.value,
                    Surname: testDriveForm.lastName.value,
                    Email: testDriveForm.email.value,
                    Phone_number: testDriveForm.phone.value,
            }),
                headers: {
                'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((json) => {
                // openError();
                // setTimeout(closeErrorPopUp, 10000);
                // location.href = "#connect-error";
                openPopUp();
                    });
        change = false;    
        testDriveForm.name.value = "";
        testDriveForm.lastName.value = "";
        testDriveForm.email.value = "";
        testDriveForm.phone.value = "";
        testDriveForm.checkAgree.checked = false;
        testDriveForm.checkContacts.forEach((item) => {
            item.checked = false;
        })
        const success = form.querySelectorAll('.succes-active');
        success.forEach((item) => {
            item.classList.remove("success");
        })

        change = 1;
    }

    if(change === 1) {
        if(btnSubmit) {
        btnSubmit.disabled = true;
        }
    }

    if(openSlideform === 1) {
        location.href = "#slide-form";
    } else {
        location.href = "#jazda-probna";
    }
}

forms.forEach((item) => {
    item.addEventListener('submit', (e) => {
        e.preventDefault();
        testDriveSend(e);

    })
});


