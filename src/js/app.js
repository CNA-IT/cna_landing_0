AOS.init()

// const mobBtn = document.querySelector('.header__mob')
// const mobBtnText = document.querySelector('.header__mob-text')
// const headerMobList = document.querySelector('.header__mob-list')

// mobBtn.addEventListener('click', () => {
//   mobBtn.classList.toggle('header__mob--active')
//   mobBtnText.classList.toggle('header__mob-text--active')
//   headerMobList.classList.toggle('header__mob-list--active')
// })
//
// const mobItems = document.querySelectorAll('.header__mob-item')
// mobItems.forEach((item) => {
//   item.addEventListener('click', () => {
//     mobBtn.classList.remove('header__mob--active')
//     mobBtnText.classList.remove('header__mob-text--active')
//     headerMobList.classList.remove('header__mob-list--active')
//   })
// })

const searchBtn = document.querySelector('.top__input-btn')
searchBtn.addEventListener('click', () => {
  const inputValue = document.querySelector('.top__input')?.value
  console.log(inputValue)
  const params = new URLSearchParams('')
  params.set('textParams', JSON.stringify([{text: inputValue, kind: 'any'}]))
  const link = document.createElement('a')
  link.target = '_top'
  link.href = '/search?' + params.toString()
  link.click()
})

const animItems = document.querySelectorAll('.top__info-animbox')

if (window.innerWidth <= 965) {
  setTimeout(() => {
    animItems.forEach((item) => {
      item.style.opacity = '1'
      item.style.transform = 'translateY(0)'
    })
  }, 200)
} else {
  setTimeout(() => {
    animItems.forEach((item) => {
      item.style.opacity = '1'
      item.style.transform = 'translateY(0)'
    })
  }, 800)
}

const topSwiper = new Swiper('.top__slider', {
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 4000
  },
  creativeEffect: {
    prev: {
      // will set `translateZ(-400px)` on previous slides
      translate: [0, 0, -400]
    },
    next: {
      // will set `translateX(100%)` on next slides
      translate: ['100%', 0, 0]
    }
  }
})
const possSwiperOne = new Swiper('.possibilities__slider-one', {
  slidesPerView: 1.2,
  grid: {
    rows: 1
  },
  autoHeight: false,
  spaceBetween: 20,
  pagination: {
    el: '.possibilities__pagination-1',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    440: {
      slidesPerView: 1.8
    },
    660: {
      slidesPerView: 2.4
    },
    1025: {
      slidesPerView: 3,
      grid: {
        rows: 2
      }
    }
  }
})
const possSwiperTwo = new Swiper('.possibilities__slider-two', {
  slidesPerView: 1.2,
  autoHeight: false,
  spaceBetween: 20,
  pagination: {
    el: '.possibilities__pagination-2',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    440: {
      slidesPerView: 1.8
    },
    660: {
      slidesPerView: 2.4
    },
    1025: {
      slidesPerView: 3
    }
  }
})
const possSwiperThree = new Swiper('.possibilities__slider-three', {
  slidesPerView: 1.2,
  autoHeight: false,
  spaceBetween: 20,
  pagination: {
    el: '.possibilities__pagination-3',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    440: {
      slidesPerView: 1.8
    },
    660: {
      slidesPerView: 2.4
    },
    1025: {
      slidesPerView: 3
    }
  }
})
const rateSwiper = new Swiper('.rates__slider', {
  slidesPerView: 1.2,
  autoHeight: false,
  spaceBetween: 20,
  pagination: {
    el: '.rates__pagination',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    440: {
      slidesPerView: 1.8
    },
    660: {
      slidesPerView: 2.4
    },
    1025: {
      slidesPerView: 3
    }
  }
})

const btnNextPartners = document.querySelector('.clients__mob-btn'),
  itemsPartners = document.querySelectorAll('.clients__item')
btnNextPartners.addEventListener('click', () => {
  itemsPartners.forEach((item) => {
    item.classList.remove('clients__item-next')
    btnNextPartners.classList.add('clients__mob-btn--hidden')
  })
})

const emailInput = document.querySelector('.news__input')
const emailBtn = document.querySelector('.news__btn')
const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

const newsEmpty = document.querySelector('.news__form-error-empty')
const newsInvalid = document.querySelector('.news__form-error-invalid')

emailInput.addEventListener('input', function () {
  setTimeout(() => {
    if (this.value === '') {
      emailInput.classList.add('news__input-empty')
      emailInput.classList.remove('news__input-invalid')

      newsEmpty.classList.add('news__form-error-empty--active')
      newsInvalid.classList.remove('news__form-error-invalid--active')
    } else if (!emailRegex.test(this.value)) {
      emailInput.classList.add('news__input-invalid')
      emailInput.classList.remove('news__input-empty')

      newsInvalid.classList.add('news__form-error-invalid--active')
      newsEmpty.classList.remove('news__form-error-empty--active')
    } else {
      emailInput.classList.remove('news__input-invalid')
      emailInput.classList.remove('news__input-empty')

      newsInvalid.classList.remove('news__form-error-invalid--active')
      newsEmpty.classList.remove('news__form-error-empty--active')
    }
  }, 1000)
})

emailBtn.addEventListener('click', (event) => {
  event.preventDefault()
  const inputValue = emailInput.value
  if (!emailRegex.test(inputValue)) {
    return
  }
  window.parent.postMessage({ type: 'SUBSCRIBE', data: inputValue }, '*');
  emailInput.value = ''
})
