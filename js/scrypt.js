"use strict"

const textSlider = document.querySelector('.slider__text');

let text = ['Привет, я искусственный интелект.', 'Меня закрыли внутри этого блока.', 'Помогите...']



//textSlider.innerHTML = k

function changeText() {
    let i = 0
    textSlider.innerHTML = text[i]
    function counter() {
        textSlider.innerHTML = text[i]
        i++;
        if (i == text.length) {
            i = 0;
        }
    }
    setInterval(counter, 2000)
}
changeText()