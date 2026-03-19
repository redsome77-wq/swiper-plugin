//index.js
const heroBnr = document.querySelector('.hero_bnr');
const heroBnrNew = document.querySelector('.hero_bnr2');

const heroSlide = new Swiper(heroBnr,{
    //옵션:값,
    //옵션:{옵션:값, 옵션:값,},
    loop:true, /* 슬라이드 끝->시작 반복 true , false */
    //direction:'horizontal', //슬라이드방향 : horizontal 수평(기본값), vertical 수직
    //제자리 나타나기 사라지기 할때는 direction적용 해제
    effect: 'fade', // fade, cube, flip
    //mousewheel:true, //마우스 휠로 이동(수평,수직 가능)
    //자동재생
    autoplay:{
        delay:1000, //1000=1초
        pauseOnMouseEnter:true, //마우스가 올라오면 일시정지
        disableOnInteraction:true, //마우스 상호작용 후 멈출건지, 움직일건지(false) 옵션
    },
});

const heroSlideNew = new Swiper(heroBnrNew,{
    loop:true,
    effect:'fade',
    autoplay:{
        delay:1000,
        pauseOnMouseEnter:true,
        disableOnInteraction:false,
    }
});