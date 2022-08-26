const form = document.querySelector('form');

const checkBoxes = document.querySelector('input[name="contact[]"]');
const agreeCheckRemove = document.querySelector('input[name="private-politics"]');
const emails = document.querySelector('input[name="email"]');
const userName = document.querySelector('input[name="name"]');
const phoneNumber = document.querySelector('input[name="phone"]');
const lastNameInput = document.querySelector('input[name="last-name"]');

const btn = document.getElementById('btn');
const error = document.querySelectorAll('.error');
const input = document.querySelectorAll('.siema');


function inputCheckValidate(input) {
    if(!input.validity.valid) {
        return false;
    } 
    return true;
}

input.forEach((item) => {
    item.addEventListener('input', (e) => {
        const targets = e.target;
        
    })
})

let change = 0;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let name = inputCheckValidate(userName);
    let email = inputCheckValidate(emails);
    let phone = inputCheckValidate(phoneNumber);


    if(name && email && phone) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: userName.value,
                    body: emails.value,
                    userId: phoneNumber.value,
            }),
                headers: {
                'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                    });
        userName.value = "";
        emails.value = "";
        phoneNumber.value = "";

        change = 1;
    }

    if(change === 1) {
        btn.disabled = true;
    }
});
