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



function addCard () {
    let title = document.querySelector('.card_title').value
    let text = document.querySelector('.card_text').value

let currentDate = new Date
let date = currentDate.getFullYear() + '.' + (Number(currentDate.getMonth())+1) + '.' + currentDate.getDate()
    const card = {
        'title': title,
        'text': text,
        'date' : date,
        }
let cardBlock = document.createElement('div')
cardBlock.classList.add('card')
cardBlock.insertAdjacentHTML('beforeend',`<div class="card_number">1</div>
            <div class="card_info">
            <div class="card_title">${card.title}</div>
            <div class="card_text">${card.text}</div>
            <div class="card_date">${card.date}</div>` )
        cardArr.push(card)
        let wrapper = document.querySelector('.wrapper')
        wrapper.insertAdjacentElement('beforeend', cardBlock)

}
