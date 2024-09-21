'use strict';
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btn = document.querySelector('.close-modal')
const btnsopen = document.querySelectorAll('.show-modal')
console.log(btnsopen);

const openmodel = () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
for (let i = 0; i < btnsopen.length; i++)
    btnsopen[i].addEventListener('click', openmodel)

const closemodel = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}
btn.addEventListener('click', closemodel)
overlay.addEventListener('click', closemodel)

document.addEventListener('keydown', (e) => {
    console.log(e.key);
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closemodel()
    }
})