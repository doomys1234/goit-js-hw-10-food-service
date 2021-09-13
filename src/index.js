import './sass/main.scss';
import menu from './menu.json'
import itemsTemplate from './templates/gallery-cards.hbs'

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
 
const galleryMarkup = itemsTemplate(menu)
const listItem = document.querySelector('.js-menu')
listItem.innerHTML = galleryMarkup

const themeSwitcher = document.querySelector('.theme-switch__toggle')
themeSwitcher.addEventListener('change', onThemeSwitcherClick)
const inputSwitchChecker = document.querySelector('.theme-switch__toggle')
 
function onThemeSwitcherClick(evt) {
    const inputChecked = themeSwitcher.checked
    if (inputChecked ) {
        document.body.classList.remove('light-theme')
        document.body.classList.add('dark-theme')
        inputSwitchChecker.setAttribute('checked', true)
        localStorage.setItem("theme", Theme.DARK)
        console.log(localStorage);
    } else {
         document.body.classList.remove('dark-theme')
        document.body.classList.add('light-theme')
        inputSwitchChecker.setAttribute('checked', false)
         localStorage.setItem("theme", Theme.LIGHT)
   }
}

function getThemeLocalStorage() {
    const currentTheme = localStorage.getItem('theme')
    document.body.classList.add(currentTheme)
    if (currentTheme === 'dark-theme') {
     inputSwitchChecker.setAttribute('checked', true)

    }


}

getThemeLocalStorage()

