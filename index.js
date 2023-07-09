//бургер
const burger = document.querySelector('.header__burger');
const links = document.querySelector('.header__nav')

function openBurger() {
  links.classList.add('header__nav_open')
  burger.classList.add('header__burger_open')
  window.addEventListener('resize', closeBurgerForResize)
}

function closeBurger() {
  links.classList.remove('header__nav_open')
  burger.classList.remove('header__burger_open')
  window.removeEventListener('resize', closeBurgerForResize)
}

function closeBurgerForResize() {
  if (document.documentElement.clientWidth >= '1280' && burger.classList.contains('header__burger_open')) {
    console.log('hi')
    links.classList.remove('header__nav_open')
    burger.classList.remove('header__burger_open')
  }
}

let i = 0;
burger.addEventListener('click', () => {
  i++
  if (document.documentElement.clientWidth < '1280' && i > 0) {
    openBurger()
  i = -1;
  } else {
    closeBurger()
  }
})

//Рекламка
const dot1 = document.querySelector('.slider__dot_type_first');
const dot2 = document.querySelector('.slider__dot_type_secons');
const dot3 = document.querySelector('.slider__dot_type_third');
const titleSlider = document.querySelector('.slider__title');
const textSlider = document.querySelector('.slider__description');

const titlefordot1 ='Трофейная рыбалка';
const titlefordot2 = 'Наши правила';
const titlefordot3 = 'Знай Наших';

const textfordot1 = 'Поймайте рыбу свыше 5 кг, вызовите егеря, зарегистрируйте свою удачу, отпустите рыбу и получите бесплатную рыбалку на следующее посещение. Акция действует только при условии отпуска рыбы в водоем БЕЗ травм.'
const textfordot2 = 'Приезжайте в Макарье с фиременной наклейкой на Вашем автомобиле и получите скидку 15% на весь асортимент наших товаров и услуг. Акция действует только на владельца автомобиля с фирменной наклейкой.'
const textfordot3 = 'Превыше всего, безопасность и Комфорт. Ознакомьтесь с правилами отдыха. Соблюдая правила Вы обеспечиваете себе и другим посетителям отличный отдых с незабываемыми впечатлениями.'

const backImage = document.querySelector('.page__slider')
let n = 0;
function swipe() {
  if (n === 0) {
    dot1.classList.add('slider__dot_active')
    dot3.classList.remove('slider__dot_active')
    dot2.classList.remove('slider__dot_active')
    backImage.style.backgroundImage = `url(./images/banner_1.png)`
    titleSlider.textContent = titlefordot1
    textSlider.textContent = textfordot1
    n++
    return
  }
  if (n === 1) {
    dot1.classList.remove('slider__dot_active')
    dot2.classList.add('slider__dot_active')
    dot3.classList.remove('slider__dot_active')
    backImage.style.backgroundImage = 'url(./images/banner_2.png)'
    titleSlider.textContent = titlefordot2
    textSlider.textContent = textfordot2
    n++
    return
  }
  if (n === 2) {
    dot1.classList.remove('slider__dot_active')
    dot2.classList.remove('slider__dot_active')
    dot3.classList.add('slider__dot_active')
    backImage.style.backgroundImage = 'url(./images/banner_3.png)'
    titleSlider.textContent = titlefordot3
    textSlider.textContent = textfordot3
    n = 0
    return
  }
}
dot1.addEventListener('click', () => {
  n=0;
  swipe()
})

dot2.addEventListener('click', () => {
  n=1;
  swipe()
})

dot3.addEventListener('click', () => {
  n=2;
  swipe()
})
swipe()

setInterval(swipe, 5000)

//Свайпер
new Swiper('.swiper', {
  navigation: {
    prevEl: '.location__button-prev',
    nextEl: '.location__button-next'
  }
})

//Анимация
const fishs = document.querySelectorAll('.bestiary__fish')
const seaweeds = document.querySelectorAll('.bestiary__seaweed')

function animate(items, cl) {
  if (items.length > 0) {
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll() {
      for (let index = 0; index < items.length; index++) {
        const animItem = items[index];
        const animItemHeght = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 2;

        let animItemPoint = window.innerHeight - animItemHeght / animStart;
        if (animItemHeght > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeght) ) {
          animItem.classList.add(`${cl}_active`)
        } else {
          animItem.classList.remove(`${cl}_active`)
        }
      }
      function offset(el) {
        const rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
      }
    }
  }
}

animate(fishs, 'bestiary__fish')
animate(seaweeds, 'bestiary__seaweed')
