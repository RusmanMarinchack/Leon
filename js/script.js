'use strict'

// Slider Swiper =========
if(document.querySelector('#slider-header')) {
    let swiperSliderHeader = new Swiper('#slider-header', {
        spaceBetween: 5,
        pagination: {
            el: ".header-content-body__swiper-scrollbar",
            type: "progressbar",
          },
    })
}

if(document.querySelector('#our-products-wrapper')) {
    let swiperOurProduct = new Swiper('#our-products-wrapper', {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            0: {
                spaceBetween: 20,
                slidesPerView: 1.3,
              },
            500: {
                spaceBetween: 20,
                slidesPerView: 1.5,
              },
              669.98: {
                spaceBetween: 20,
                slidesPerView: 2.5,
              },
            991.98: {
              spaceBetween: 0,
            },
          },
    });


function mobSliderActive() {
    let sliodes = document.querySelectorAll('#our-products-wrapper .our-products__item');

    sliodes.forEach(item => {
        if(window.matchMedia("(min-width: 991.98px)").matches) {
            item.classList.remove('swiper-slide');
            
        } else {
            item.classList.add('swiper-slide');
        };
    });
};

window.addEventListener('resize', function() {
    mobSliderActive();
});
mobSliderActive();
}

if(document.querySelector('#catalog-colors')) {
    let swiperCatalogColors = new Swiper('#catalog-colors', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.colors-swiper-button-next',
            prevEl: '.colors-swiper-button-prev',
          },
        breakpoints: {
            0: {
                spaceBetween: 20,
                slidesPerView: 3.9,
              },
            500: {
                spaceBetween: 20,
                slidesPerView: 4.9,
              },
            669.98: {
                spaceBetween: 20,
                slidesPerView: 5.9,
              },
            991.98: {
              spaceBetween: 20,
              slidesPerView: 8,
            },
            1099.98: {
                spaceBetween: 20,
                slidesPerView: 9.9,
              },
          },
    });
}

if(document.querySelector('#block-slider-big')) {
    let swiperBlockSliderBig = new Swiper('#block-slider-big', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.block-slider__swiper-button-next',
            prevEl: '.block-slider__swiper-button-prev',
          },
          breakpoints: {
            0: {
                spaceBetween: 20,
                slidesPerView: 1.3,
              },
            500: {
                spaceBetween: 20,
                slidesPerView: 1.5,
              },
            649.98: {
                spaceBetween: 20,
                slidesPerView: 2.3,
              },
            767.98: {
                spaceBetween: 20,
                slidesPerView: 2.5,
              },
            799.98: {
              spaceBetween: 0,
              slidesPerView: 1,
            },
          },
        thumbs: {
            swiper: {
                el: '#block-slider-mini',
                slidesPerView: 4,
                spaceBetween: 20,
            }
        }
    });
}

if(document.querySelector('#about-slider')) {
    let swiperAboutSlider = new Swiper('#about-slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.block-slider__swiper-button-next',
            prevEl: '.block-slider__swiper-button-prev',
          },
          breakpoints: {
            0: {
                spaceBetween: 20,
                slidesPerView: 1.3,
              },
            500: {
                spaceBetween: 20,
                slidesPerView: 1.5,
              },
            649.98: {
                spaceBetween: 20,
                slidesPerView: 2.3,
              },
            767.98: {
                spaceBetween: 20,
                slidesPerView: 2.5,
              },
            799.98: {
              spaceBetween: 0,
              slidesPerView: 1,
            },
          },
        thumbs: {
            swiper: {
                el: '#about-slider-mini',
                slidesPerView: 4,
                spaceBetween: 20,
            }
        }
    });
}

if(document.querySelector('#hit-sale-wrapper')) {
    let swiperHitSale = new Swiper('#hit-sale-wrapper', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.hit-sale-wrapper__swiper-button-next',
            prevEl: '.hit-sale-wrapper__swiper-button-prev',
          },
        breakpoints: {
            0: {
                spaceBetween: 20,
                slidesPerView: 1.3,
              },
            500: {
                spaceBetween: 20,
                slidesPerView: 1.5,
              },
            669.98: {
                spaceBetween: 20,
                slidesPerView: 2.5,
              },
            991.98: {
              spaceBetween: 0,
              slidesPerView: 4,
            },
          },
    });
}

if(document.querySelector('#brends-swiper')) {
    mobSliderActiveBrends();
let swiperBrends = new Swiper('#brends-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        0: {
            spaceBetween: 20,
            slidesPerView: 3,
          },
          669.98: {
            spaceBetween: 20,
            slidesPerView: 4,
          },
        767.98: {
          spaceBetween: 0,
        },
      },
});


// Блок з брендами на мобільній версіїї робимо слайдер.
function mobSliderActiveBrends() {
    let sliodes = document.querySelectorAll('#brends-swiper .brends__item');
    // let sliderWrapper = document.querySelectorAll('.our-products__swiper');

    sliodes.forEach(item => {
        if(window.matchMedia("(min-width: 767.98px)").matches) {
            item.classList.remove('swiper-slide');
            
        } else {
            item.classList.add('swiper-slide');
        };
    });
};

window.addEventListener('resize', function() {
    mobSliderActiveBrends();
});
}

if(document.querySelector('#product-slider')) {
    let swiperproductSlider = new Swiper('#product-slider', {
        spaceBetween: 10,
        slidesPerView: 1,
        navigation: {
            nextEl: '.product-wrapper__swiper-button-next',
            prevEl: '.product-wrapper__swiper-button-prev',
          },
    })
}

if(document.querySelector('#colors-product-slider')) {
    let swiperProductColorMob = new Swiper('#colors-product-slider', {
        spaceBetween: 15,
        slidesPerView: 4,
        breakpoints: {
            0: {
                spaceBetween: 20,
                slidesPerView: 3.5,
              },
              669.98: {
                spaceBetween: 20,
                slidesPerView: 5,
              },
            767.98: {
              spaceBetween: 0,
            },
          },
    })
    
    function mobSliderActiveProductColor() {
        let sliodes = document.querySelectorAll('#colors-product-slider .colors__item');
        // let sliderWrapper = document.querySelectorAll('.our-products__swiper');
    
        sliodes.forEach(item => {
            if(window.matchMedia("(min-width: 767.98px)").matches) {
                item.classList.remove('swiper-slide');
                
            } else {
                item.classList.add('swiper-slide');
            };
        });
    };
    
    window.addEventListener('resize', function() {
        mobSliderActiveProductColor();
    });
    mobSliderActiveProductColor();
}

// ==================






function rangeBtn() {
    let slider = document.getElementById('slider');
    let from = document.querySelector('.catalog-filter__from-to .from span');
    let to = document.querySelector('.catalog-filter__from-to .to span');
    
    if (slider) {
        let uiSlider = new noUiSlider.create(slider, {
            start: [20, 80],
            connect: true,
            range: {
                'min': 1659,
                'max': 20000
            },
            start: [1659, 15000]
        });
    
        
    
        uiSlider.on('update', function(value, handler) {
            from.innerHTML = Number(value[0]).toFixed(0);
            to.innerHTML = Number(value[1]).toFixed(0);
        })
    };
};
rangeBtn();

// Вішаїм кдік на кнопки () і меню моб версії.
function burgerMenu() {
    let mobBtns = document.querySelectorAll('.mob-btn');
    let filterBtnClose = document.querySelector('.catalog-filter__btn');

    if(mobBtns.length) {
        mobBtns.forEach(btn => {
            btn.addEventListener('click', function() {

                let id = this.dataset.mobBtn;
                let menu = document.querySelector(`#${id}`);

                if(id === 'search-mob') {
                    document.querySelector('.form-search .form-search__item input').focus();
                }

                if(id && menu) {
                    if(this.classList.contains('active')) {
                        document.querySelector('html').classList.remove('look');
                        this.classList.remove('active');
                        menu.classList.remove('active');

                        if (id === 'burger-menu') {
                            document.querySelector('.search-btn button').classList.remove('active');
                            document.querySelector('#search-mob').classList.remove('active');
                        }
                    } else {
                        document.querySelector('html').classList.add('look');
                        this.classList.add('active');
                        menu.classList.add('active');
                    };
                };
            });
        });

        if(filterBtnClose) {
            filterBtnClose.addEventListener('click', function() {
                document.querySelector('.filter__btn').classList.remove('active');
                document.querySelector('.catalog-filter').classList.remove('active');
            });
        };
    };
};

burgerMenu();



// При фокусі на інпут додаємо для обгортки (.item-focus) класс .focus
function itemFocusAddClass() {
    let input = document.querySelectorAll('.input-focus');

    if(input.length) {
        input.forEach(item => {
            item.addEventListener('focus', function() {
                if(this.parentNode.classList[1] === 'item-focus') {
                    this.parentNode.classList.add('focus');
                };
            });

            item.addEventListener('blur', function() {
                if(this.parentNode.classList[1] === 'item-focus') {
                    this.parentNode.classList.remove('focus');
                };
            });
        });
    };
};
itemFocusAddClass();


// Виводимо текст в міні корзині якщо вона пуста.
// function emptyMiniBasket() {
//     let miniBasked = document.querySelector('.mini-basked');

//     if(miniBasked) {
//         let miniBaskedWrapper = miniBasked.querySelector('.mini-basked__wrapper');
//         let btnMiniBasket = document.querySelector('.actions__item.basked .actions__link');
    
//         let text = 'Ваш кошик порожній';
    
//         if(miniBaskedWrapper) {
    
//             if(miniBaskedWrapper.innerHTML.trim() === '') {
//                 miniBasked.innerHTML = `<p class="mini-basked__text">${text}</p>`;
//             }
    
//             if(btnMiniBasket) {
//                 btnMiniBasket.addEventListener('click', function(e) {
//                     e.preventDefault()
//                 });
//             };
//         };
//     }



// };



// Робимо широну для sub menu  (.catalog-sub-menu)
function widthSubMenuCatalog() {
    let navMenu = document.querySelector('.nav');
    let catalogSubMenu = document.querySelectorAll('.catalog-sub-menu');

    if (window.matchMedia("(min-width: 991.98px)").matches) {
        if(navMenu) {
            if(catalogSubMenu) {
                catalogSubMenu.forEach(item => {
                    window.addEventListener('resize', function() {
                        item.style.width = `${navMenu.clientWidth}px`;
                    })
    
                    item.style.width = `${navMenu.clientWidth}px`;
                })            
            }
        }
    }
}

widthSubMenuCatalog();



// Перевірка на сенсорні екрани, і додаємо класс для body.
const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBorry: function() {
        return navigator.userAgent.match(/BlackBorry/i);
    },
    IOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (
            isMobile.Android() ||
            isMobile.BlackBorry() ||
            isMobile.IOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
};

if (isMobile.any()){
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');
}

let events = document.body.classList.contains('_touch') ? 'click' : 'mousemove';
// ====


// Робимо клік на пункти категорії, і відкриваємо підкатегорію.
function catalogSubCategory() {
    let categoryItem = document.querySelectorAll('.block-catalog__item');
    let subCategoryBtn = document.querySelectorAll('.catalog-sub-menu__title');
    let categorySubMenu = document.querySelectorAll('.catalog-sub-menu');
    let catalogWrapper = document.querySelector('.block-catalog__inner');
    let catalogShadow = document.querySelector('.header-content__shadow');
    let btnBackOne = document.querySelectorAll('.catalog-sub-menu__btn');
    let btnBackTwo = document.querySelectorAll('.sub-wrap__btn');


    
 
    if(categoryItem) {
        categoryItem.forEach(item => {
                item.addEventListener(events, function() {
                    let dataSubCatalog = this.dataset.subCatalog;

                    if(dataSubCatalog) {
                        let subMneuCatalog = document.querySelector(`.catalog-sub-menu_${dataSubCatalog}`);
    
                        if(subMneuCatalog) {
                            removeClasActiveLevelOne()
                            catalogShadow.classList.add('active');
                            this.classList.add('active')
                            subMneuCatalog.classList.add('active');
                            
                        };
                    };
                });
        });



        // Робимо клік на підкатегорію і відкриваємо ще один рівень підкатегорії.
        if(subCategoryBtn) {
            if(window.matchMedia("(max-width: 991.98px)").matches) {
                subCategoryBtn.forEach(item => {
                    item.addEventListener('click', function() {
                        let wrapper = this.parentNode;
                        let dataSubCatalogMenu = this.dataset.subCatalogMenu;

                        if(dataSubCatalogMenu) {
                            let twoLevelSubCategory = wrapper.querySelector(`.sub-wrap_${dataSubCatalogMenu}`);

                            if(twoLevelSubCategory) {
                                twoLevelSubCategory.classList.add('active');
                            };
                        };
                    });
                });
            };
        };



        if(catalogShadow) {
            
            catalogShadow.addEventListener(events, function() {
                this.classList.remove('active');
                catalogWrapper.classList.remove('active');
                removeClasActiveLevelOne()
            });
        };

        if(btnBackOne) {
            btnBackOne.forEach(item => {
                item.addEventListener('click', function() {
                    this.classList.remove('active');
                    removeClasActiveLevelOne()
                });
            })
        }

        if(btnBackTwo) {
            btnBackTwo.forEach(item => {
                item.addEventListener('click', function() {
                    this.parentNode.classList.remove('active');
                });
            });
        };


        function removeClasActiveLevelOne() {
            categorySubMenu.forEach(item => {
                item.classList.remove('active');
            });

            categoryItem.forEach(item => {
                item.classList.remove('active');
            });
        };
    };
};

catalogSubCategory();


// Робимо клік на кнопку каталог на мобільній версії або якщо є класс .button

function clickCatalogBtn() {
    let catalogBtn = document.querySelector('.block-catalog__header');
    let categorySubMenu = document.querySelectorAll('.catalog-sub-menu');
    let catalogWrapper = document.querySelector('.block-catalog__inner');
    let categoryItem = document.querySelectorAll('.block-catalog__item');
    let catalogShadow = document.querySelector('.header-content__shadow');
    let btnBackOne = document.querySelector('.catalog-sub-menu__btn');
    let levelTwoSubCatalog = document.querySelectorAll('.catalog-sub-menu__sub-wrap')

    if(catalogBtn) {
            catalogBtn.addEventListener('click', function() {
                if(catalogWrapper) {
                    catalogWrapper.classList.toggle('active');

                    if(window.matchMedia("(max-width: 991.98px)").matches || catalogBtn.classList.contains('button')) {
                        catalogShadow.classList.add('active');
                    }

                    if(!catalogWrapper.classList.contains('active')) {
                        removeClasActive();
                        catalogShadow.classList.remove('active');
                    };
                };
            });


        function removeClasActive() {
            categorySubMenu.forEach(item => {
                item.classList.remove('active');
            });

            categoryItem.forEach(item => {
                item.classList.remove('active');
            });

            levelTwoSubCatalog.forEach(item => {
                if(item.classList.contains('active')) {
                    item.classList.remove('active');
                }
            });
        };
    };
};

clickCatalogBtn();


// Робимо активну іконку (.selected-btn) впродукті що сподоьався.
function likeProduct() {
    let selectedBtn = document.querySelectorAll('.selected-btn');

    if(selectedBtn) {
        selectedBtn.forEach(item => {
            item.addEventListener('click', function() {
                this.classList.toggle('like');
            });
        });
    };
};

likeProduct();


// На моб версіїї робимо відступ зверху наступному елементу після .header
function elementMarginTop() {
    let header = document.querySelector('.header');

    if(header) {
        let headerWrap = header.querySelector('.header__wrap');
        let catalogBtn = header.querySelector('.block-catalog__header');
    
        if(header) {
            if(window.matchMedia("(max-width: 991.98px)").matches) {
                document.body.style.marginTop = `${headerWrap.clientHeight + catalogBtn.clientHeight}px`;
            };  
        };
    }

}; 

elementMarginTop();


// Робимо прокрутку до всіх зарактеристик на сторінці product.

function scrollAllCharacteristics() {
    let btn = document.querySelector('.characteristics__btn');
    let headerWrap = document.querySelector('.header__wrap');
    let catalogBtn = document.querySelector('.block-catalog__header');

    

    if(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault()

            let retreat = (window.matchMedia("(max-width: 991.98px)").matches ? (headerWrap.clientHeight + catalogBtn.clientHeight + 10) : 10);
            console.log(retreat)
            let section = document.querySelector(`#${this.dataset.id}`);

            window.scrollBy({
                top: (section.getBoundingClientRect().top - retreat),
                behavior: 'smooth'
            })
        });
    };
};
scrollAllCharacteristics();


// Вішаємо клік на кнопки і відкриваємо попапи по сайту.

function popupActive() {
    let btnsPopup = document.querySelectorAll('.btn-popup');

    if(btnsPopup.length) {
        btnsPopup.forEach(item => {
            item.addEventListener('click', function() {
                let popup = document.querySelector(`#${item.dataset.popup}`);

                if(popup) {
                    popup.classList.add('active');
                    document.querySelector('html').classList.add('look');
    
                    document.addEventListener('click', function(e) {
                        if(e.target.classList[0] === 'modal' || e.target.classList[0] === 'cloce') {
                            popup.classList.remove('active');
                            document.querySelector('html').classList.remove('look');
                        }
                    })
                };
            });
        });
    };
};

popupActive();


// Робимо аккордеон в кабінеті в пункті мої замовлкння.
function officeAccordeon() {
    let wrapperAccordeons = document.querySelectorAll('.accordeon');

    if(wrapperAccordeons.length) {
        wrapperAccordeons.forEach(item => {
            let btn = item.querySelector('.accordeon-btn');
            let body = item.querySelector('.accordeon-body');

            if(btn) {
                btn.addEventListener('click', function() {
                    if(body) {

                        if(item.classList.contains('active')) {
                            item.classList.remove('active')
                            body.style.height = `0px`;   
                        } else if ((item.classList.contains('active') === false)) {
                            item.classList.add('active');
                            body.style.height = `${body.scrollHeight}px`;
                        };                                            
                    };
                });
            };
        });
    };
};

officeAccordeon()



// В кабінеті в пункті особисті дані замінняємо дані на імпути для редагування.

function officeEdit() {
    let wrapper = document.querySelectorAll('.personal-data__item');
    let form = document.querySelector('.personal-data__form');
    let btnEdit = document.querySelector('.personal-data__btn.edit');


    if(btnEdit) {
        let btnSave = form.querySelector('.personal-data__btn.save');
        let btnCancel = form.querySelector('.personal-data__btn.cancel');

        btnEdit.addEventListener('click', function() {
            if(wrapper.length) {
                wrapper.forEach(item => {
                    let paragraph = item.querySelector('p');
                    let data = paragraph.innerText;
                    let input = item.querySelector('input');

                    form.classList.add('edit');

                    input.value = data;

                    if (input.type === 'number') {
                        input.value = Number(data);
                    }


                    input.addEventListener("input", () => {
                        if(input.value !== data && input.value !== '') {
                            btnSave.classList.add("active");
                        } else {
                            btnSave.classList.remove("active");
                        }
                    });

                    btnSave.addEventListener('click', function() {
                        if (item.querySelector('input').type === 'date') {
                            if(item.querySelector('input').value === '') {
                                return
                            };
                        };

                        paragraph.innerHTML = input.value;
                        this.classList.remove('active');
                        form.classList.remove('edit');
                    });

                    btnCancel.addEventListener('click', function() {
                        paragraph.innerHTML = data;
                        btnSave.classList.remove('active');
                        form.classList.remove('edit');
                    });
                });



                let inputPhone = document.querySelector('#data-phone');
                if(inputPhone) {
                   let masckOptions = {
                    mask: '+{38} (000) 0000 000'
                   }

                   let mask = new IMask(inputPhone, masckOptions)
                }
            };
        });
    };
};

officeEdit();


// Робемо перевірку в формах чи не пустий інпут і додаємо класс .error
function inputError() {
    let forms = document.querySelectorAll('.forms');

    if(forms.length) {
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                let inputs = form.querySelectorAll('.input');

                if(inputs.length) {
                    inputs.forEach(input => {
                        if(input.value === '') {
                            e.preventDefault();

                            input.classList.add('error');
                        } 

                        input.addEventListener('input', function() {
                            if(input.value !== '') {
                                input.classList.remove('error');
                            }
                            
                        })
                    });
                };
            })
        });
    };
};

inputError();


// Показуємо в інпуті пароль в кабінеті.
function showPasword() {
    let items = document.querySelectorAll('.item-password');

    if(items.length) {
        items.forEach(item => {
            let btn = item.querySelector('.btn-eye');

            if(btn) {
                btn.addEventListener('click', function(e) {
                    e.preventDefault()

                    this.classList.toggle('show');
                    let input = item.querySelector('input');
                    console.log(input)

                    if(input) {
                        if(this.classList.contains('show')) {
                            input.type = 'text';
                        } else {
                            input.type = 'password';
                        }    
                    };
                });
            };
        });
    };
};

showPasword();


// Робоми аккордеон навігація по офісу.
// function accordeon