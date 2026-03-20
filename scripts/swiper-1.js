//swiper-1.js
const wrap = document.querySelector('#wrap');
const web = document.querySelector('.web');
const grapic = document.querySelector('.grapic');


const wrapSwiper = new Swiper(wrap,{
    //옵션:값, 옵션:{옵션,값,}
    mousewheel:true,
    speed:200,
    direction:'vertical',
});

const webProjectSwiper = new Swiper(web,{
    //옵션:값, 옵션:{옵션,값,}
    speed:200,
    loop:true,
    autoplay : {
        delay : 10000000000,
    },
    pagination : {
        //페이지 대상 html 연결, 모양, 동적옵션
        el:'.web + .web_page', //부모선택자 1~2개는 작성해서 구분해주기
        type:'fraction', //기본값 'bullets', 'fraction':페이지 번호형
        //dynamicBullets:true, //type이 bullets(기본값)일때만 가능
    },
});

const grapicProjectSwiper = new Swiper(grapic,{
    //옵션:값, 옵션:{옵션,값,}
    speed:200,
    loop:true,
    autoplay : {
        delay : 10000000000,
    },
    pagination : {
        //페이지 대상 html 연결, 모양, 동적옵션
        el:'.project2 .group .grapic_page', //부모선택자 1~2개는 작성해서 구분해주기
        type:'bullets', //기본값 'bullets', 'fraction':페이지 번호형
        //dynamicBullets:true, //type이 bullets(기본값)일때만 가능
    },
});
console.log(wrap);