/*Создать html-страницу с таблицей. 
При наведении мышкой на ячейку таблицы, у этой ячейки 
должен меняться фон. Учтите, что когда мышку уводят с ячейки, 
то ее фон возвращается к прежнему. 
Выполнить задание с помощью JS, а не с помощью CSS.*/

let table = document.getElementById('table')
function backlight(event) {
    if(event.target.closest('td') || event.target.closest('th')) {
        event.target.classList.add('active')
    }
} 
function clearing(event) {
    event.target.classList.remove('active')
}
table.addEventListener('mouseover' , backlight)
table.addEventListener('mouseout' , clearing)
// -------------------------------------------------------------------------

/* Создать html-страницу с любым содержимым и запретить 
пользователю выделять текст и вызывать контекстное меню кли-
ком правой кнопки.*/

let blogCont = document.querySelector('.blog-cont')
let textBlog = document.getElementById('textBlog')
textBlog.addEventListener('mouseover' , () => {textBlog.style.cssText = 'user-select: none'})  // больше ничего не придумал. решение глупое конечно.
blogCont.addEventListener('contextmenu', (evet) => evet.preventDefault())
// -----------------------------------------------------------------------------

/* Создать html-страницу с кнопкой Like, при нажатии на кото-
рую увеличивается счетчик лайков. */

let counter = document.querySelector('#counter')
let btn = document.querySelector('.btn')
function addLike(e) {
    if(e.target.closest('.btn')) {
        console.log(counter.textContent)
        counter.textContent = parseInt(counter.textContent) + 1
    }
}
btn.addEventListener('click', addLike)
// !!!!!!!!!!!!!!!! вопрос хочу чтобы при нажатии и удержании кнопки мыши кнопка с лайками была например красного цвета. как только нажатую кнопку мыши отпустили . она вернулась первоначальное состояни
// ---------------------------------------------------------------------------------------------




/*Создать html-страницу «Калькулятор». Реализовать его функ-
циональность.*/


let dataOutput = document.querySelector('#dataOutput')
let keyboardContainer = document.querySelector('#keyboardContainer')
let regexp = new RegExp ('\\d', '')              // почему с флагом g не работает?   создадим регулярное выражение для отсева цифр 
let rez

function getOutputResult(e) {
    if(!e.target.closest('span')) {               // делегирование
        return
    }

    let selectedButton = e.target.dataset.value

    if(regexp.test(selectedButton)) {             // отсортеруем цифры 
        dataOutput.textContent += selectedButton  // сформируем из цифр число и содовим в dataOutput
    } 




    switch (true) {
        case selectedButton == "+":

        break
    }

    if(selectedButton == "=") {
        console.log(rez )

    }

}
keyboardContainer.addEventListener('click', getOutputResult)

// не удалось.
//////////////////////////////////////////////////////////////

/*Создать html-страницу с меню, которое имеет выпадающие 
списки. Список с элементами подменю должен появляться по 
щелчку на соответствующий элемент меню.*/

let menu = document.querySelector('#menu')
menu.addEventListener('click', (e) => {
    if(!e.target.closest('li')) {     // делегирование
        // menu.children..classList.remove('closed')   !!!!! как убирать класс у при клике не на элемент li
        return
    }
    e.target.firstElementChild.classList.toggle('closed')   // тут примения универсальность и обращаюсь к предку элемента на который кликнули. 
    
})


//////////////////////////////////////////////////////////////

let btnTop =  document.querySelector('.btn-top')

window.addEventListener('scroll', function() {
    if(pageYOffset > 100 ) {
        btnTop.classList.remove('none-btn')
    } else {
        btnTop.classList.add('none-btn')
    }
    btnTop.innerHTML = Math.floor(pageYOffset) + 'px' ;
});
function scrollUp() {
    window.scrollTo(0,0)
}
btnTop.addEventListener('click', scrollUp)
