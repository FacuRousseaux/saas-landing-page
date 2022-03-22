const precingBtnLeft = document.querySelector('.left');
const precingBtnRight = document.querySelector('.right');
const precingPremium = document.querySelector('.precingPremium')
const precingEnterprise = document.querySelector('.precingEnterprise')
const navToggle = document.querySelector('.nav__toggle');
const body = document.querySelector('body');
const navList = document.querySelector('.nav__list');

precingBtnLeft.addEventListener('click', (e) => {
    e.preventDefault();
    if(precingBtnLeft.classList == 'active') {
       return;
    } else {
        precingBtnLeft.classList.add('active');
        precingBtnRight.classList.remove('active');
        precingPremium.innerHTML = '$29<small>/month</small>'
        precingEnterprise.innerHTML = '$49<small>/month</small>'
    }
})

precingBtnRight.addEventListener('click', (e) => {
    e.preventDefault();
    if(precingBtnRight.classList == 'active') {
       return;
    } else {
        precingBtnRight.classList.add('active');
        precingBtnLeft.classList.remove('active');
        precingPremium.innerHTML = '$31<small>/month</small>'
        precingEnterprise.innerHTML = '$52<small>/month</small>'
    }
})

navToggle.addEventListener('click', () => {
    if(body.classList.contains('overflow')) {
        body.classList.remove('overflow');
        navList.classList.remove('mobile__active');
    } else {
        body.classList.add('overflow');
        navList.classList.add('mobile__active');
        navList.addEventListener('click', () => {
            body.classList.remove('overflow');
            navList.classList.remove('mobile__active');
        })
    }
})

