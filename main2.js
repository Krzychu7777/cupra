const toggle = document.querySelector('.toggler');
const mobileMenu = document.querySelector('.mobile-menu');
const main = document.querySelector('main');
const hamburger = document.querySelector('.hamburger-menu');
const logo = document.getElementById('image-mobile');

const body = document.querySelector('body');
const offerToggler = document.querySelector('.offer-toggler');
const testDriveBtn = document.querySelectorAll('.test--drive--btn');
const testDriveCard = document.querySelector('.test--drive--card');

const popUp = document.getElementById("pop-up");
const closePopUp = document.getElementById("close-popup");

const dropDownItems = document.querySelectorAll('.item');
const selectedItem = document.querySelectorAll('.item__selected');
let element;
let change = false;
let inputCarValueSelect = document.getElementById("car-name");

const forms = document.querySelectorAll('form');
let checkBoxes = document.querySelectorAll('input[name="contact[]"]');
let agreeCheckRemove = document.querySelectorAll('input[name="private-politics"]');
let agreeChecekError = document.querySelectorAll('.agree-error');
let emails = document.querySelectorAll('input[name="email"]');
let userName = document.querySelectorAll('input[name="name"]');
let phoneNumber = document.querySelectorAll('input[name="phone"]');
let lastNameInput = document.querySelectorAll('input[name="last-name"]');




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
        event.preventDefault();
    } else {
        menuClose()
    }
});



//drop down
function dropDown(dropDownList, dropDownArrow) {

    dropDownArrow.forEach(arrow => {
        arrow.classList.toggle("arrow--active");
    });

    dropDownList.forEach((item) => {
    item.classList.toggle('container__items--active');
    });
}

function changeDropDownValue({ currentTarget }) {
    const newImg = currentTarget.querySelector('img').src;
    const newName = currentTarget.querySelector("p").textContent;
    const selectedImage = currentTarget.parentNode.parentNode.querySelector('.image-select');
    const selectedText = currentTarget.parentNode.parentNode.querySelector('.text-select');

    const inputListCarValue = currentTarget.querySelector('input[name="car_list"]').value;
    inputCarValueSelect.value = inputListCarValue;

    if (change) {
        element.style.display = "";
      }
    
      element = currentTarget;
      element.style.display = "none";
      change = true;
    
      selectedImage.src = `${newImg}`;
      selectedText.textContent = newName;
}


selectedItem.forEach(select => {
    select.addEventListener('click', (e) => {
        const dropDownContainer = e.target.parentNode.parentNode;
        const dropDownList = dropDownContainer.querySelectorAll('.container__items');
        const dropDownArrow = dropDownContainer.querySelectorAll('.arrow');
        dropDown(dropDownList, dropDownArrow);
    });
});

dropDownItems.forEach((item) => {
    item.addEventListener('click', (event) => {
        changeDropDownValue(event);

        const items = event.currentTarget.parentNode.parentNode;
        const dropDownContainerItems = items.querySelector('.container__items');
        const dropDownItemsArrow = items.querySelector('.arrow');
        const options = [...items.querySelectorAll(".options")];
        
        const test = options.filter((element) => {
            return element.classList.contains("hidden");
        });

        if(test.length > 0) {
            test[0].classList.remove("hidden");
        }

        dropDownContainerItems.classList.toggle('container__items--active');
        dropDownItemsArrow.classList.toggle("arrow--active");
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

function requiredInputs(inputs, errors, textError) {
    if(!fdsfsddf.validity.valid) {
        errors.innerHTML =  textError;
        return false;
    } 
    return true;
};

function agreeCheck(agreeCheck, agreeCheckError) {
    if(agreeCheck.checked == false) {
       agreeCheckError.innerHTML = "Zaznacz pola wymagane!";
       agreeCheck.style.borderColor = "red";
       return false;
    } 
    return true;
};

//agree remove error 

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
    validateInputs(emails, emailSucces[0], emailError[0], "Podaj e-mail!");
    });
});


userName.forEach((username) => { 
username.addEventListener('input', (e) => {
    userName = e.target;
    const userError = userName.parentNode.querySelectorAll('.name-error');
    const userSucces = userName.parentNode.querySelectorAll('.name-success');
    validateInputs(username, userSucces[0], userError[0], "Podaj swoje imie!");
    });
});

phoneNumber.forEach((phone) => { 
phone.addEventListener('input', (e) => {
    phoneNumber = e.target;
    const phoneError = phoneNumber.parentNode.querySelectorAll('.phone-error');
    const phoneSucces = phoneNumber.parentNode.querySelectorAll('.phone-success');
    validateInputs(phone, phoneSucces[0], phoneError[0], "Podaj numer telefonu!");
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
        checkContactError.innerHTML = "Wybierz formę kontaktu!";
       e.preventDefault();
       for(let i=0; i < checkBoxContact.length; i++) {
           checkBoxContact[i].style.borderColor = "red";
       }

    }
}

function testDriveForm1(e) {
    const targets = e.target;


    TestDriveForm = {
        name: targets.querySelector('input[name="name"]'),
        lastName: targets.querySelector('input[name="last-name"]'),
        email: targets.querySelector('input[name="email"]'),
        phone: targets.querySelector('input[name="phone"]'),
        checkAgree: targets.querySelector('input[name="private-politics"]'),
        checkContacts: targets.querySelectorAll('input[name="contact[]"]')
    };

    let TestDriveErrors = {
        nameError: targets.querySelector('.name-error'),
        lastNameError: targets.querySelector('.last-name-error'),
        emailError: targets.querySelector('.email-error'),
        phoneError: targets.querySelector('.phone-error'),
        agreeError: targets.querySelector('.agree-error'),
        contactError: targets.querySelector('.contact-error')
    };
    
    requiredInputs(TestDriveForm.name, TestDriveErrors.nameError, "Podaj swoje imie!", e);
    requiredInputs(TestDriveForm.email, TestDriveErrors.emailError, "Podaj e-mail!", e);
    requiredInputs(TestDriveForm.phone, TestDriveErrors.phoneError, "Podaj numer telefonu!", e);

    agreeCheck(TestDriveForm.checkAgree, TestDriveErrors.agreeError, e);

    contactCheckErrors(TestDriveForm.checkContacts, TestDriveErrors.contactError, e);

    location.href = "#jazda-probna";
};

function popUpclose() {
    popUp.classList.add("hidden");
    body.classList.remove("body--overflow");
}

function openPopUp() {
    popUp.classList.remove("hidden");
    body.classList.add("body--overflow");

    closePopUp.addEventListener('click', popUpclose);

    main.addEventListener('click', popUpclose);
}

let counter = 0;

forms.forEach((forms) => { 
    forms.addEventListener('submit', (e) => {
        e.preventDefault();

        testDriveForm1(e);

        var formData = new FormData(form);

        for (var [key, value] of formData.entries()) { 
        console.log(key, value);
        }

        
        fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: TestDriveForm.name[0].value,
                    body: TestDriveForm.name[0].value,
                    userId: 1,
            }),
                headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
                    .then((response) => response.json())
                    .then((json) => {
                    openPopUp();
                    counter = 1;
                    }
                    );


        // fetch('https://jsonplaceholder.typicode.com/posts', {
        //     method: 'POST',
        //     headers: {
        //             'Content-Type': 'application/json',
        //         },
        //     body: formData,
        //         })
        //         .then(response => response.json())
        //         .then(data => {
        //             // openPopUp();
        //             // if(counter == 1) {
        //             //     counter++;
        //             // } else {
        //             //     document.getElementById("btn").disabled=true;
        //             // }
        // });

    if(counter == 1) {
        const btnSubmit = form.querySelector('button[type="submit"]');
        if(btnSubmit) {
            btnSubmit.disabled = true;
            btnSubmit.style.opacity = "0.2";
        }
        } 
    
    });
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