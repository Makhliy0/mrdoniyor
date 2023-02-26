let button = document.querySelector(".header__wrapper__menu")
let block = document.querySelector(".header__nav__popup__menu")
let menuclose = document.querySelector(".header__nav__popup__menu__close")

button.onclick = () =>{
    block.classList.add("header__wrapper__menu_active")
}
menuclose.onclick = () =>{
    block.classList.remove("header__wrapper__menu_active")
}
console.log(button, block, menuclose)