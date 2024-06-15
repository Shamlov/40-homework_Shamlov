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
function setBg () {
    btn.style.background = btn.style.background === 'red' ? 'green' : 'red'
}
btn.addEventListener('mouseup' , setBg )
btn.addEventListener('mousedown' , setBg )
btn.addEventListener('click', addLike)
// ---------------------------------------------------------------------------------------------

/*Создать html-страницу «Калькулятор». Реализовать его функ-
циональность.*/


let dataOutput = document.querySelector('#dataOutput')
let keyboardContainer = document.querySelector('#keyboardContainer')
let state = {
    num1: '',
    num2: '',
    operation: null,
    rezult: null,
}

function clear() {
    state.num1 = ''
    state.num2 = ''
    state.operation = null
    state.rezult = null
}

function handelUerNumberAction(number) {
    if(!state.operation) {
        if(!state.num1) {
            dataOutput.textConten = ''
        }
        state.num1 += number
        dataOutput.textContent = state.num1
    } else {
        state.num2 += number
        dataOutput.textContent += state.num2
    }
}

function handelUerOperationAction(operation) {
    if(state.operation) {
        return
    }
    state.operation = operation
    dataOutput.textContent += state.operation
}

function handelUerRezultAction() {
    if(!state.operation || state.num2.length < 1 ) {
        return
    }
    let rezult = 0
    switch(state.operation) {
        case '+': rezult = +state.num1 + +state.num2; break;
        case '-': rezult = +state.num1 - +state.num2; break;
        case '/': rezult = +state.num1 / +state.num2; break;
        case '*': rezult = +state.num1 * +state.num2; break;
    }

    state.rezult = rezult
    dataOutput.textContent += `= ${rezult}`
    clear()
}


function onCalcButtonClick(e) {
    if(!e.target.dataset.value) {              
        return
    }

    let userAction = e.target.dataset.value
    let inNumberAction = /\d/.test(userAction)
    let inOperationAction = /[+-/*]/.test(userAction)

    if(inNumberAction) {
        handelUerNumberAction(e.target.dataset.value)
    } else if (inOperationAction) {
        handelUerOperationAction(e.target.dataset.value)
    } else {
        handelUerRezultAction()
    }

}
keyboardContainer.addEventListener('click', onCalcButtonClick)
//////////////////////////////////////////////////////////////







/*Создать html-страницу с меню, которое имеет выпадающие 
списки. Список с элементами подменю должен появляться по 
щелчку на соответствующий элемент меню.*/



let menu = document.querySelector('#menu')

function hidesubmenus(exceptThisSubMenu) {
    menu.querySelectorAll('.submenu').forEach((sub) => {
        if(exceptThisSubMenu && sub === exceptThisSubMenu) {
            return
        }
        sub.classList.add('closed')
    })
}

menu.addEventListener('click', (e) => {
    if(!e.target.closest('li.dropdown')) {   
        hidesubmenus() 
        return
    }
    hidesubmenus(e.target.closest('li.dropdown').querySelector('.submenu')) 
    e.target.firstElementChild.classList.toggle('closed')   // тут примения универсальность и обращаюсь к предку элемента на который кликнули. 
    
})

//////////////////////////////////////////////////////////////

let btnTop =  document.querySelector('.btn-top')

window.addEventListener('scroll', function() {
    if(window.scrollY > 100 ) {
        btnTop.classList.remove('none-btn')
    } else {
        btnTop.classList.add('none-btn')
    }
    btnTop.innerHTML = Math.floor(window.scrollY ) + 'px' ;
});
function scrollUp() {
    window.scrollTo(0,0)
}
btnTop.addEventListener('click', scrollUp)
