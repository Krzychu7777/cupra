const toggle = document.querySelector('.toggler');

const mobileMenu = document.querySelector('.mobile-menu');

toggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
})

console.log(mobileMenu);

const selectList = document.getElementById("select-list");
const selectImg = document.getElementById("select-image").src;
const selectText = document.getElementById("select-text");
const options = document.getElementsByClassName("options");


for(option of options){
    option.onclick = function() {
        selectText.innerHTML = this.textContent;
        selectImg.innerHTML = imge.src;
    }
};