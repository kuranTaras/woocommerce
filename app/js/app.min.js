const next = $('.customers-next')
const prev = $('.customers-prev')
const slides = $('.customers__slides')
const slide = $('.customers__slide')
let count = 1

next.click(() => {
    if (count !== slide.length) {
        slide.each(() => {
            $(slide).removeClass('customers__active')
        })
        slide.eq(count).addClass('customers__active')
        count++
    }
})

prev.click(() => {
    if (count !== 1) {
        slide.each(() => {
            $(slide).removeClass('customers__active')
        })
        slide.eq(count-2).addClass('customers__active')
        count--
    }
})

const burger = $('.header__burger')
const menu = $('.header__menu')
const logo = $('.header__logo')
const height = menu.height()

burger.on('click', () => {
    burger.toggleClass('header__burger-active')
    menu.addClass('header__menu-active').slideToggle('300')
})





