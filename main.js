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