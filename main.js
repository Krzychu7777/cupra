const toggle = document.querySelector('.toggler');
const mobileMenu = document.querySelector('.mobile-menu');
const main = document.querySelector('main');
const hamburger = document.querySelector('.hamburger-menu');
const logo = document.getElementById('image-mobile');

const body = document.querySelector('body');
const offerToggler = document.querySelector('.offer-toggler');
const testDriveBtn = document.querySelectorAll('.test--drive--btn');
const testDriveCard = document.querySelector('.test--drive--card');

const dropDownItems = document.querySelectorAll('.item');
const dropDownList = document.querySelectorAll('.container__items');
const dropDownArrow = document.querySelectorAll('.arrow');
const selectedItem = document.querySelectorAll('.item__selected');
const selectedImg = document.getElementById('image-selected');
const selectedName = document.getElementById('text-select');
const selectedImgTop = document.getElementById('image-selected__top');
const selectedNameTop = document.getElementById('text-select__top');

// const form = document.getElementById('form');
const form = document.querySelectorAll('form');
const username = document.getElementById('name');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const btnSubmit = document.getElementById('btn');

const formTop = document.getElementById('form__top');
const usernameTop = document.getElementById('name__top');
const lastNameTop = document.getElementById('lastname__top');
const emailTop = document.getElementById('email__top');
const phoneTop = document.getElementById('phone__top');
const btnSubmitTop = document.getElementById('btn__top');

//errors Input
// const errorEmail = document.getElementById('error-email');
// const errorName = document.getElementById('error-name');
// const errorPhone = document.getElementById('error-phone');
// const errorLastName = document.getElementById('error-lastname');

const errorEmailTop = document.getElementById('error-email__top');
const errorNameTop = document.getElementById('error-name__top');
const errorPhoneTop = document.getElementById('error-phone__top');
const errorLastNameTop = document.getElementById('error-lastname__top');

//success Input
const successName = document.getElementById('success-name');
const successLastName = document.getElementById('success-lastname');
const successEmail = document.getElementById('success-email');
const successPhone = document.getElementById('success-phone');

const successNameTop = document.getElementById('success-name__top');
const successLastNameTop = document.getElementById('success-lastname__top');
const successEmailTop = document.getElementById('success-email__top');
const successPhoneTop = document.getElementById('success-phone__top');

//checkbox
const agree = document.getElementById('dane-osobowe');
const agreeError = document.getElementById('error-agree');
const contactError = document.getElementById('error-contact');

const agreeTop = document.getElementById('dane-osobowe__top');
const agreeErrorTop = document.getElementById('error-agree__top');
const checkboxsTop = document.getElementsByName('contact__top');

const contactEmailTop = document.getElementById('mail__top')
const contactPhoneTop = document.getElementById('contact-phone__top')
const contactMessageTop = document.getElementById('message__top')
const contactErrorTop = document.getElementById('error-contact__top');

let checkBoxes = document.querySelectorAll('input[name="contact[]"]');



//menu
toggle.addEventListener('click',  () => {
    hamburger.classList.toggle('hamburger--active');
    mobileMenu.classList.toggle('active');
});

function menuClose() {
    hamburger.classList.remove('hamburger--active');
    mobileMenu.classList.remove('active');
}
logo.addEventListener('click', menuClose);
main.addEventListener('click', menuClose);

mobileMenu.addEventListener('click', (event) => {
    if (event.target.tagName === "DIV") {
        preventDefault();
    } else {
        menuClose()
    }
});



//drop down
function dropDown(dropDownContainer) {

    dropDownArrow.forEach(arrow => {
        arrow.classList.toggle("arrow--active");
    });

    dropDownList.forEach((item) => {
    item.classList.toggle('container__items--active');
    });
}

function changeDropDownValue({ currentTarget }) {
    const dropDownContainer = currentTarget.parentNode.parentNode;
    const newImg = currentTarget.querySelector('img').src;
    const newName = currentTarget.querySelector("p").textContent;

    selectedImgTop.src = `${newImg}`;
    selectedNameTop.textContent = newName;

    selectedImg.src = `${newImg}`;
    selectedName.textContent = newName;

    dropDown(dropDownContainer);
}

   selectedItem.forEach(select => {
    select.addEventListener('click', (e) => {
        const dropDownContainer = e.currentTarget.parentNode.parentNode;
        dropDown(dropDownContainer);
    });
});

dropDownItems.forEach((item, index) => {
        item.addEventListener('click', (event) => {
            changeDropDownValue(event);
        });
});



//validation
function setSuccess(successClass, errorAlert) {
    successClass.classList.add('success');
    errorAlert.classList.add('hidden')
    successClass.innerHTML = "";
    // btnSubmit.style.opacity = "";
};
function setError(errorClass, successClass, errorInformation) {
    errorClass.innerHTML = errorInformation;
    successClass.classList.remove('success');
    errorClass.classList.remove('hidden');
    // btnSubmit.style.opacity = "0.3";
};

function validateInputs(input, success, error, infoErorr) {
    if (input.validity.valid) {
        setSuccess(success, error);
    } else if(input.validity.tooShort) {
        setError(error, success, "Nieprawidłowa liczba znaków!");
    } else if(input.validity.typeMismatch) {
        setError(error, success, "Nieprawidłowy format!");
    } else if(input.validity.patternMismatch) {
        setError(error, success, "Prawidłowy format: 111-111111");
    } else {
        setError(error, success, infoErorr);
    }
};

function agreeValidate(agreeCheck, agreeErrors) {
    if(agreeCheck.checked) {
        agreeErrors.innerHTML = "";
        agreeCheck.style.borderColor = "";
     } 
};

function requiredInputs(inputs, errors, event) {
    inputs.forEach((input) => { 
    if(!input.validity.valid) {
        errors.innerHTML = "To pole jest wymagane!";
        event.preventDefault();
    }
    });
};

function agreeCheck(agreeCheck, agreeCheckError, event) {
    agreeCheck.forEach((agree) => {
    if(agree.checked == false) {
       agreeCheckError.innerHTML = "Zaznacz pola wymagane!";
       agree.style.borderColor = "red";
       event.preventDefault();
    } 
})
};

//agree remove error 
let agreeCheckRemove = document.querySelectorAll('input[name="private-politics"]');
let agreeChecekError = document.querySelectorAll('.agree-error');
let emails = document.querySelectorAll('input[name="email"]');
let userName = document.querySelectorAll('input[name="name"]');
let phoneNumber = document.querySelectorAll('input[name="phone"]');
let lastNameInput = document.querySelectorAll('input[name="last-name"]');

agreeCheckRemove.forEach((agree, index) => { 
agree.addEventListener('change', (e) => {
    agreeCheckRemove = e.target;
    agreeValidate(agreeCheckRemove, agreeChecekError[index]);
    });
});

//remove contacts error
checkBoxes.forEach((item) => {
    item.addEventListener('change', (e) => {
        checkBoxes = e.target.parentNode.parentNode;
        const contactCheckError = checkBoxes.querySelectorAll('.contact-error');
        contactCheckError[0].innerHTML = "";
        const checkBoxItem = checkBoxes.querySelectorAll('input[name="contact[]"]');
        for(let i=0; i < checkBoxItem.length; i++) {
            checkBoxItem[i].style.borderColor = "";
        }
        
    });
});

emails.forEach((email) => {
    email.addEventListener('input', (e) => {
        emails = e.target;
        const emailError = emails.parentNode.querySelectorAll('.email-error');
        const emailSucces = emails.parentNode.querySelectorAll('.email-success');
    validateInputs(emails, emailSucces[0], emailError[0], "To pole jest wymagane!");
    });
});


userName.forEach((username) => { 
username.addEventListener('input', (e) => {
    userName = e.target;
    const userError = userName.parentNode.querySelectorAll('.name-error');
    const userSucces = userName.parentNode.querySelectorAll('.name-success');
    validateInputs(username, userSucces[0], userError[0], "To pole jest wymagane!");
    });
});

phoneNumber.forEach((phone) => { 
phone.addEventListener('input', (e) => {
    phoneNumber = e.target;
    const phoneError = phoneNumber.parentNode.querySelectorAll('.phone-error');
    const phoneSucces = phoneNumber.parentNode.querySelectorAll('.phone-success');
    validateInputs(phone, phoneSucces[0], phoneError[0], "To pole jest wymagane!");
    phone.value=phone.value.replace(' ', '');
    phone.value=phone.value.replace(/[^\d, +,' ']/, '');   
    });
});

lastNameInput.forEach((lastName) => { 
lastName.addEventListener('input', (e) => {
    lastNameInput = e.target;
    const lastNameError = lastNameInput.parentNode.querySelectorAll('.last-name-error');
    const lastNameSucces = lastNameInput.parentNode.querySelectorAll('.last-name-success');
    validateInputs(lastName, lastNameSucces[0], lastNameError[0], "");
    });
});

function contactCheckErrors(checkBoxContact, checkContactError, e) {
    const checkedBoxes = [...checkBoxContact].filter((item) => {
        return item.checked;
    });
    if(checkedBoxes == "") {
        checkContactError.innerHTML = "Zaznacz formę kontaktu!";
        // checkBoxContact.style.borderColor = "red";
       e.preventDefault();
       for(let i=0; i < checkBoxContact.length; i++) {
           checkBoxContact[i].style.borderColor = "red";
       }

    }
}

function testDriveForm1(e) {
    const targets = e.target;

    let TestDriveForm = {
        name: targets.querySelectorAll('input[name="name"]'),
        lastName: targets.querySelectorAll('input[name="last-name"]'),
        email: targets.querySelectorAll('input[name="email"]'),
        phone: targets.querySelectorAll('input[name="phone"]'),
        checkAgree: targets.querySelectorAll('input[name="private-politics"]'),
        checkContacts: targets.querySelectorAll('input[name="contact[]"]')
    };

    const testError = document.querySelector('.name-error');
    
    let TestDriveErrors = {
        nameError: targets.querySelectorAll('.name-error'),
        lastNameError: targets.querySelectorAll('.last-name-error'),
        emailError: targets.querySelectorAll('.email-error'),
        phoneError: targets.querySelectorAll('.phone-error'),
        agreeError: targets.querySelectorAll('.agree-error'),
        contactError: targets.querySelectorAll('.contact-error')
    };
    
    requiredInputs(TestDriveForm.name, TestDriveErrors.nameError[0], e);
    requiredInputs(TestDriveForm.email, TestDriveErrors.emailError[0], e);
    requiredInputs(TestDriveForm.phone, TestDriveErrors.phoneError[0], e);

    agreeCheck(TestDriveForm.checkAgree, TestDriveErrors.agreeError[0], e);

    contactCheckErrors(TestDriveForm.checkContacts, TestDriveErrors.contactError[0], e);


    location.href = "#jazda-probna";
};


form.forEach((forms) => { 
forms.addEventListener('submit', (e) => testDriveForm1(e))
});



//open test drive
offerToggler.addEventListener('click', () => {
    testDriveCard.classList.remove('test--drive--active');
    body.classList.remove('body--overflow');
});

testDriveBtn.forEach(openCard => {
    openCard.addEventListener('click', () => {
        testDriveCard.classList.add('test--drive--active');
        body.classList.add('body--overflow');
    });
});



//slider
var splide = new Splide( '#auta', {
    type   : 'loop',
    perPage: 3,
    focus  : 'center',
    perPage    : 2,
    breakpoints: {
        1536: {
                    perPage: 1,
                },
        1024: {
            drag: false,
        },
            },
    pagination: false,
    speed: 1500,
    autoplay: true,
} );
splide.mount();

var splide = new Splide( '#galeria', {
  type: 'loop',  
  perPage: 3,
  breakpoints: {
        1250: {
                    perPage: 2,
                },
        510: {
            perPage: 1,
        },
        1024: {
            drag: false,
        },
            },
  rewind : true,
  speed: 1400
} );

splide.mount();

var splide = new Splide( '#slider1', {
    type: 'loop',
    pagination: false,
    breakpoints: {
        1024: {
            drag: false,
        },
            },
    speed: 1100
});

splide.mount();

var splide = new Splide( '#slider2', {
    type: 'loop',
    pagination: false,
    breakpoints: {
        1024: {
            drag: false,
        },
            },
    speed: 1100
});

splide.mount();

var splide = new Splide( '#slider3', {
    type: 'loop',
    pagination: false,
    breakpoints: {
        1024: {
            drag: false,
        },
            },
    speed: 1100
});

splide.mount();

