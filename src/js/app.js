// *Проверка поддержки Webp
import * as andreyFunctions from "./modules/functions.js";

andreyFunctions.isWebp();
// =======================================================================================================
// * Меню бургер
const burger = document.querySelector('.burger');

if (burger) {
    const menuBody = document.querySelector('.menu__body');
    burger.addEventListener('click', (e) => {
        document.body.classList.toggle('_lock');
        burger.classList.toggle('_active');
        menuBody.classList.toggle('_active');

        if (burger.classList.contains('_active')) {
            const menuLinks = document.querySelectorAll('.menu__link');

            menuLinks.forEach(link => link.addEventListener('click', (e) => {
                document.body.classList.remove('_lock');
                burger.classList.remove('_active');
                menuBody.classList.remove('_active');
            }));
        }
    });
}

// * Фиксация шапки
const header = document.querySelector('.header');
const headerBody = document.querySelector('.header__body');

window.addEventListener("scroll", (e) => {
    const scrollPos = window.scrollY;

    if (scrollPos >= 30) {
        header.classList.add('_active');
        headerBody.classList.add('_active');
    } else {
        header.classList.remove('_active');
        headerBody.classList.remove('_active');
    }
});

// =======================================================================================================
// * Swiper
// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// example init Swiper:
new Swiper('.works__slider', {
    modules: [Navigation, Pagination],
    // about
    speed: 800,
    spaceBetween: 18,
    slidesPerView: 1.2,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1.2,
        },
        1100: {
            slidesPerView: 1.2,
        },
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-arrow-next',
        prevEl: '.swiper-arrow-prev',
    },
});

// https://swiperjs.com/ - документация

// =======================================================================================================
// * noUiSlider
/*import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

const mainRangeSlider = document.getElementById('main-range-slider');

if (mainRangeSlider) {
    noUiSlider.create(mainRangeSlider, {
        start: [500, 1000],
        step: 50,
        connect: true,
        range: {
            'min': 500,
            'max': 1000
        }
    });
}*/

// https://refreshless.com/nouislider/ - документация

// =======================================================================================================
// * Spoller
/*const spollerButtons = document.querySelectorAll('._spoller-button');
const spollerBody = document.querySelectorAll('._spoller-body');
const spollerArrow = document.querySelectorAll('._spoller-arrow');
const spollerLinks = document.querySelectorAll('._spoller-link');

spollerButtons.forEach(i => {
    spollerBody.forEach(j => {
        if (i.getAttribute('data-spoller-button') === j.getAttribute('data-spoller-path')) {
            i.addEventListener('click', (e) => {
                i.classList.toggle('_active');
                j.classList.toggle('_active');

                if (i.classList.contains('_active')) {
                    i.setAttribute('aria-expanded', 'true');
                    j.setAttribute('aria-hidden', 'false');

                    if (j.querySelector('[data-spoller-link]')) {
                        spollerLinks.forEach(p => {
                            if (i.getAttribute('data-spoller-button') === p.getAttribute('data-spoller-link')) {
                                p.setAttribute('tabindex', '0');
                            }
                        });
                    }
                } else {
                    i.setAttribute('aria-expanded', 'false');
                    j.setAttribute('aria-hidden', 'true');

                    if (j.querySelector('[data-spoller-link]')) {
                        spollerLinks.forEach(p => {
                            if (i.getAttribute('data-spoller-button') === p.getAttribute('data-spoller-link')) {
                                p.setAttribute('tabindex', '-1');
                            }
                        });
                    }
                }

                if (i.nextElementSibling.hasAttribute('data-spoller-arrow')) {
                    spollerArrow.forEach(k => {
                        if (k.getAttribute('data-spoller-arrow') === i.getAttribute('data-spoller-button')) {
                            k.classList.toggle('_active');
                        }
                    });
                }
            });
        }
    });
});*/

// =======================================================================================================
// * Modal
/*const modal = document.querySelectorAll('.modal');
const modalOpen = document.querySelectorAll('._modal-open');
const modalClose = document.querySelectorAll('._modal-close');

modalOpen.forEach(item => item.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-modal-path');
    document.querySelector(`[data-modal-target="${path}"]`).classList.add('_active');

    modal.forEach(item => {
        if (item.classList.contains('_active')) {
            item.showModal();
            document.body.classList.add('_lock');
        }
    });
}));

modalClose.forEach(item => item.addEventListener('click', (e) => {
    if (e.target == item) {
        modal.forEach(item => {
            item.close();
            item.classList.remove('_active');
        });
        document.body.classList.remove('_lock');
    }
}));

modal.forEach(item => item.addEventListener('click', ({ currentTarget, target }) => {
    const dialog = currentTarget;
    const isOnOverlayClick = target === dialog;
    if (isOnOverlayClick) {
        modal.forEach(item => {
            item.close();
            item.classList.remove('_active');
        });
        document.body.classList.remove('_lock');
    }
}));

modal.forEach(item => item.addEventListener('cancel', () => {
    if (item.classList.contains('_active')) {
        item.close();
        item.classList.remove('_active');
        document.body.classList.remove('_lock');
    }
}));*/

// =======================================================================================================
// *tab
const tab = document.querySelectorAll('._tab');

tab.forEach(tab => {
    const tabButtons = tab.querySelectorAll('._tab-button');
    const tabContents = tab.querySelectorAll('._tab-content');

    tabButtons.forEach(tabButton => {
        tabButton.addEventListener('click', e => {
            // 1. Убираю класс _active у кнопки и у контента таба и выключаем aria-selected на false
            tabButtons.forEach(tabButton => {
                tabButton.classList.remove('_active');
                tabButton.setAttribute('aria-selected', 'false');
            });
            tabContents.forEach(tabContent => {
                tabContent.classList.remove('_active')
            });

            // 2 Добавление класса _active кнопки и меняем значение у aria-selected на true
            e.currentTarget.classList.add('_active');
            e.currentTarget.setAttribute('aria-selected', 'true');

            // 3 Показываем нужный контент в табе
            let valueTabButtons = e.currentTarget.getAttribute('data-tab-path');
            let valueAttrTabContent = tab.querySelector(`[data-tab-target="${valueTabButtons}"]`).getAttribute('data-tab-target');
            let objectTabContent = tab.querySelector(`[data-tab-target="${valueTabButtons}"]`);

            if (valueTabButtons === valueAttrTabContent) {
                objectTabContent.classList.add('_active');
            }
        });
    });
});