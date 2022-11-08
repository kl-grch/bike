'use strict';

window.addEventListener('DOMContentLoaded', () => {

    //tabs

    const tabItems = Array.from(document.querySelectorAll('.tabs'));
    const contentItems = Array.from(document.querySelectorAll('.catalog__content'));
    
    const clearActiveClass = (element, className = 'tabs__active') => {
      element.find(item => item.classList.remove(`${ className }`));
    };
    
    const setActiveClass = (element, index, className = 'tabs__active') => {
      element[index].classList.add(`${ className }`);
    };
    
    const checkoutTabs = (item, index) => {
      item.addEventListener('click', () => {
        
        if (item.classList.contains('tabs__active')) {
            return console.log(item);
        }
      
        clearActiveClass(tabItems);
        clearActiveClass(contentItems, 'catalog__content_active');
        
        setActiveClass(tabItems, index);
        setActiveClass(contentItems, index, 'catalog__content_active');
      });
    };
    
    tabItems.forEach(checkoutTabs);

    //Form

    const addCharacter = document.querySelector('.input');
    const btnAdd = document.querySelector('.button');
    const li = document.createElement('li');
    const listItems = document.querySelector('.catalog__characteristics ol');
    const form = document.querySelector('.catalog__add form');


    btnAdd.addEventListener('click', (e) => {
        li.innerHTML = addCharacter.value;
        if (addCharacter.value === '') {
            e.preventDefault();
        } else {
            listItems.append(li);
            form.reset();
        }
    });


});