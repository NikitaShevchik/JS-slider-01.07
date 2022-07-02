"use strict"

const textSlider = document.querySelector('.slider__text');
const arrowLeft = document.querySelector('.arrows_left');
const arrowRight = document.querySelector('.arrows_right');

let text = ['Привет, я искусственный интелект.', 'Меня закрыли внутри этого блока.', 'Помогите...']

//textSlider.innerHTML = k

// function changeText() {
//     let i = 0
//     textSlider.innerHTML = text[i]
//     function counter() {
//         textSlider.innerHTML = text[i]
//         i++;
//         if (i == text.length) {
//             i = 0;
//         }
//     }
//     setInterval(counter, 2000)
// }
// changeText()

/*-------------Слайдер который "упирается" в левый и правый крайние текста---------------*/
function sliderWithEnd() {
    var i = 0;
    var textLength = text.length - 1;
    function setText(number) {
        textSlider.innerHTML = text[number];
        if (number == 0) {
            arrowLeft.classList.add('_last')
        } else if (number == textLength) {
            arrowRight.classList.add('_last')
        } else {
            arrowLeft.classList.remove('_last')
            arrowRight.classList.remove('_last')
        }
    }
    setText(i)
    function textLeft() {
        if (i > 0) {
            i--;
            setText(i)
        }
    }
    function textRight() {
        if (i < textLength) {
            i++;
            setText(i)
        }
    }
    arrowLeft.addEventListener('click', textLeft);
    arrowRight.addEventListener('click', textRight);
}
/*-------------Слайдер который бесконечно крутит текст по кругу--------------*/
function sliderEndless() {
    var i = 0;
    var textLength = text.length - 1;
    function setText(number) {
        textSlider.innerHTML = text[number];
    }
    setText(i);
    function slideLeft() {
        i--;
        if (i >= 0) {
            setText(i);
        } else {
            i = textLength;
            setText(i);
        }
    }
    function slideRight() {
        i++;
        if (i <= textLength) {
            setText(i);
        } else {
            i = 0;
            setText(i);
        }
    }
    arrowLeft.addEventListener('click', slideLeft);
    arrowRight.addEventListener('click', slideRight);
}
/*-------Запуск "упирающегося" слайдера-------*/
// sliderWithEnd()

/*-------Слайдер с картинками-------*/
function sliderImages() {
    const sliderImage = document.querySelector('.slider__image')
    let images = ['1.jpg', '2.jpg', '3.jpg']
    function setImage(i) {
        sliderImage.setAttribute('src', `img/${images[i]}`)
    }
    var i = 0;
    var maxI = images.length - 1;
    function autoImageSlider() {
        i++;
        if (i <= maxI) {
            setImage(i)
        } else {
            i = 0;
            setImage(i)
        }
    }
    setInterval(autoImageSlider, 2000)
    function imageLeft() {
        i--;
        if (i >= 0) {
            setImage(i)
        } else {
            i = maxI;
            setImage(i)
        }
    }
    function imageRight() {
        i++;
        if (i <= maxI) {
            setImage(i)
        } else {
            i = 0;
            setImage(i)
        }
    }
    arrowLeft.addEventListener('click', imageLeft);
    arrowRight.addEventListener('click', imageRight);
    autoImageSlider(i)
}

/*-------Слайдер с картинками из HTML-------*/
const sliderBlockImages = document.querySelector('.slider__boss');
const allImages = sliderBlockImages.querySelectorAll('.slider__image')
const allImagesItems = sliderBlockImages.querySelectorAll('.slider__item');


function setSliderImages() {
    var i = 0;
    var allImagesItemsLength = allImagesItems.length;
    var prev = 0;
    function setFirst() {
        allImagesItems[i].classList.add('z_10')
        i++;
    }
    setFirst()
    function slideImage() {
        function previ() {
            if (i == 0) {
                prev = allImagesItemsLength - 1;
            } else if (i == allImagesItemsLength) {
                prev = allImagesItemsLength - 1;
            } else {
                prev = i - 1;
            }
        }
        previ() // поиск индекса предыдущей картинки
        if (i == allImagesItemsLength) {
            i = 0;
            allImagesItems[i].classList.add('z_10')
            setTimeout(() => allImagesItems[prev].classList.remove('z_10'), 500)
            i++;

        } else {
            allImagesItems[i].classList.add('z_10')
            setTimeout(() => allImagesItems[prev].classList.remove('z_10'), 500)
            i++;
        }
    }
    setInterval(slideImage, 4000)
}

setSliderImages()