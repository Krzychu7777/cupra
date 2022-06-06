const toggle = document.querySelector('.toggler');
const mobileMenu = document.querySelector('.mobile-menu');
const main = document.querySelector('main');
const hamburger = document.querySelector('.hamburger-menu');
const logo = document.getElementById('image-mobile');

const body = document.querySelector('body');
const offerToggler = document.querySelector('.offer-toggler');
const testDriveBtn = document.querySelectorAll('.test--drive--btn');
const testDriveCard = document.querySelector('.test--drive--card');

let dropDownOpen=1;
const dropDownItems = document.querySelectorAll('.item');
const dropDownArrow = document.querySelectorAll('.arrow');
const selectedItem = document.querySelectorAll('.item__selected');
const selectedImg = document.getElementById('image-selected');
const selectedName = document.getElementById('text-select');
const selectedImgTop = document.getElementById('image-selected__top');
const selectedNameTop = document.getElementById('text-select__top');

const form = document.getElementById('form');
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
const errorEmail = document.getElementById('error-email');
const errorName = document.getElementById('error-name');
const errorPhone = document.getElementById('error-phone');
const errorLastName = document.getElementById('error-lastname');

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
const checkboxs = document.getElementsByName('contact');

const contactEmail = document.getElementById('mail')
const contactPhone = document.getElementById('contact-phone')
const contactMessage = document.getElementById('message')
const contactError = document.getElementById('error-contact');
let checked = false;


const agreeTop = document.getElementById('dane-osobowe__top');
const agreeErrorTop = document.getElementById('error-agree__top');
const checkboxsTop = document.getElementsByName('contact__top');

const contactEmailTop = document.getElementById('mail__top')
const contactPhoneTop = document.getElementById('contact-phone__top')
const contactMessageTop = document.getElementById('message__top')
const contactErrorTop = document.getElementById('error-contact__top');


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

    dropDownItems.forEach((item) => {
        item.classList.toggle('option--active');
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
    btnSubmit.style.opacity = "";
};
function setError(errorClass, successClass, errorInformation) {
    errorClass.innerHTML = errorInformation;
    successClass.classList.remove('success');
    errorClass.classList.remove('hidden');
    btnSubmit.style.opacity = "0.3";
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

function agreeValidate() {
    if(agree.checked) {
        agreeError.innerHTML = "";
        agree.style.borderColor = "";
     } 
};

checkboxs.forEach((checkboxs) => {
    checkboxs.addEventListener('change', () => {
        if(checkboxs.checked == true) {
            contactError.innerHTML = "";            
        }
    });
});

function requiredInputs(inputs, errors, event) {
    if(!inputs.validity.valid) {
        errors.innerHTML = "To pole jest wymagane!";
        event.preventDefault();
    }
};

function contactCheck(check1, check2, check3, event) {
    if(check1.checked == true) {
        checked = true;
    } else if (check2.checked == true) {
        checked = true;
    } else if(check3.checked == true) {
        checked = true;
    } else {
        checked = false;
        contactError.innerHTML = "Zaznacz formę kontaktu!";
        event.preventDefault();
    }

    if (checked == false) {
        event.preventDefault();
    }
};


// const checkedBox = [...checkboxs].filter((item) => 
//     item.classList.contains()
// );

// console.log(checkedBox);


function agreeCheck(agreeCheck, agreeCheckError, event) {
    if(agreeCheck.checked == false) {
       agreeCheckError.innerHTML = "Zaznacz pola wymagane!";
       agreeCheck.style.borderColor = "red";
       event.preventDefault();
    } 
};

agree.addEventListener('change', () => {
    agreeValidate();
})
email.addEventListener('input', () => {
    validateInputs(email, successEmail, errorEmail, "To pole jest wymagane!");
});
username.addEventListener('input', () => {
    validateInputs(username, successName, errorName, "To pole jest wymagane!");
});
phone.addEventListener('input', () => {
    validateInputs(phone, successPhone, errorPhone, "To pole jest wymagane!");
    phone.value=phone.value.replace(' ', '');
    phone.value=phone.value.replace(/[^\d, +,' ']/, '');   
});
lastName.addEventListener('input', () => {
    validateInputs(lastName, successLastName, errorLastName, "")
});

form.addEventListener('submit', (e) => {
    console.log(e);
    contactCheck(contactEmail, contactPhone, contactMessage, e);
    agreeCheck(agree, agreeError, e);
    requiredInputs(email, errorEmail, e);
    requiredInputs(username, errorName, e);
    requiredInputs(phone, errorPhone, e);
    location.href = "#jazda-probna";
});


//validation form Top

agree.addEventListener('change', () => {
    agreeValidate();
})
email.addEventListener('input', () => {
    validateInputs(emailTop, successEmailTop, errorEmailTop, "To pole jest wymagane!");
});
username.addEventListener('input', () => {
    validateInputs(usernameTop, successNameTop, errorNameTop, "To pole jest wymagane!");
});
phone.addEventListener('input', () => {
    validateInputs(phoneTop, successPhoneTop, errorPhoneTop, "To pole jest wymagane!");
    phoneTop.value=phoneTop.value.replace(' ', '');
    phoneTop.value=phoneTop.value.replace(/[^\d, +,' ']/, '');   
});
lastName.addEventListener('input', () => {
    validateInputs(lastNameTop, successLastNameTop, errorLastNameTop, "")
});

formTop.addEventListener('submit', (e) => {
    console.log(e);
    contactCheck(contactEmailTop, contactPhoneTop, contactMessageTop, e);
    agreeCheck(agreeTop, agreeErrorTop, e);
    requiredInputs(emailTop, errorEmailTop, e);
    requiredInputs(usernameTop, errorNameTop, e);
    requiredInputs(phoneTop, errorPhoneTop, e);
    location.href = "#jazda-probna";
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
            },
  rewind : true,
  speed: 1400
} );

splide.mount();

var splide = new Splide( '#slider1', {
    type: 'loop',
    pagination: false,
    speed: 1100
});

splide.mount();

var splide = new Splide( '#slider2', {
    type: 'loop',
    pagination: false,
    speed: 1100
});

splide.mount();

var splide = new Splide( '#slider3', {
    type: 'loop',
    pagination: false,
    speed: 1100
});

splide.mount();

