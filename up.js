/*const person = {
    "name" : 'Volodimir',
    "age" : 20,
    'nickname' : 'volodya',
}
console.log(person)
*/

let cardArr = [];
let createBtn = document.querySelector('.btn_create')
createBtn.addEventListener('click', addCard)
let num  = 1;
let draggebleCard

function addCard () {
    let title = document.querySelector('.card_title').value
    let text = document.querySelector('.card_text').value
if ( title == '' || text == '' || title.length >= 20 || text.length >= 20) return
let currentDate = new Date
let date = currentDate.getFullYear() + '.' + (Number(currentDate.getMonth())+1) + '.' + currentDate.getDate()
    const card = {
        'title': title,
        'text': text,
        'date' : date,
        }
let cardBlock = document.createElement('div')
cardBlock.classList.add('card') 
cardBlock.setAttribute('draggable', true)                                       
cardBlock.insertAdjacentHTML('beforeend',`<div class="card_number">${num}</div>
            <div class="card_info">
            <div class="card_title">${card.title}</div>
            <div class="card_text">${card.text}</div>
            <div class="card_date">${card.date}</div>` )
            num++
        cardArr.push(card)
        let wrapper = document.querySelector('.wrapper')
        wrapper.insertAdjacentElement('beforeend', cardBlock)
        document.querySelector('.card_title').value = ''
        document.querySelector('.card_text').value = ''
        cardBlock.addEventListener('dragstart', dragStart)
cardBlock.addEventListener('dragend', dragEnd)
}

function dragStart () {
    draggebleCard = this
}
function dragEnd () {
   draggebleCard = null
}
let wrappers = document.querySelectorAll('.wrapper')

wrappers.forEach(wrapper => {
   wrapper.addEventListener('dragover', dragOver)
});
function dragOver() {
   this.insertAdjacentElement('beforeend', draggebleCard)
}
