const sffHero = document.querySelector ('.sff_hero')
const brandZone = document.querySelector ('.brand_swiper')
console.log(sffHero, brandZone)

const heroSwiper = new Swiper(sffHero, {
    loop:true,
    slidesPerView: 3, //한번에 보이는 슬라이드 수
    spaceBetween: 3.5, //사이 여백
    autoplay:{delay:2000,},
    navigation: {
        nextEl:'.swiper .next',
        prevEl:'.swiper .prev',
    },
})

const brandSwiper = new Swiper(brandZone, {
    loop:true,
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
        nextEl:'.p_right .next',
        prevEl:'.p_right .prev',
    },
})
