const searchEl = document.querySelector('.search');

// const searchInputEl = document.querySelector('.search input');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
  // Logic 입력
  searchInputEl.focus();
});

// 포커스 추가
searchInputEl.addEventListener('focus', function(){
  // Logic 입력
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

// 포커스 제거
searchInputEl.addEventListener('blur', function(){
  // Logic 입력
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

// 드롭다운 메뉴 스크롤 내리면 사라지게 하기
const badgeEl = document.querySelector('header .badges');

const toTopEl = document.querySelector('#to-top');

toTopEl.addEventListener('click', function(){
  gsap.to(window, .7 , {
    scrollTo : 0
  });

});

window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      //배지 숨기기
      // gsap.to(요소, 지속시간, 옵션);
      gsap.to(badgeEl, .6, {
        opacity : 0,
        display : 'none' // js에서는 숫자는 숫자로 해도 되는데 문자는 따옴표를 붙여줘야함
      });
      //버튼 보이기
      gsap.to(toTopEl, .2 ,{
        x: 0
      });
    } else {
      //배지 보이기
      gsap.to(badgeEl, .6, {
        opacity : 1,
        display : 'block'
      });
      // 버튼 숨기기
      gsap.to(toTopEl , .2 ,{
        x: 100
      });
    }
}, 300));
// _.throttle(함수, 시간) : 스크롤 제어



const fadeEls = document.querySelectorAll('.visual .fade-in');
 // gsap.to(요소, 지속시간, 옵션);
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay : (index+1) * 0.7, // 0.7 1.4 2.1 2.8 순서대로 출현
    opacity : 1
  });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction : 'vertical',
  autoplay : true,
  loop : true
});

new Swiper('.promotion .swiper-container' ,{
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween : 10, // 슬라이드 사이 여백
  centeredSlides : true, // 슬라이드 가운데 출력
  loop : true, // 반복 재생
  autoplay : {
    delay : 5000
  },
  pagination : {
    el : '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable : true // 사용자의 페이지 번호 요소 제어
  },
  navigation : {
    prevEl : '.promotion .swiper-prev',
    nextEl : '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container', {
  autoplay : true,
  loop : true,
  spaceBetween : 30,
  slidesPerView: 5,
  navigation : {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
  
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion //반대값
  if (isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add('hide');

  } else {
    // 보임 처리
    promotionEl.classList.remove('hide');
  }
});
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


function floatingObject(selector, delay, size) {
  gsap.to(selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    { //옵션
      y: 20,
      repeat: -1, //무한반복
      yoyo : true, // 다시 위로 올라갈 수 있게 해줌
      ease: Power1.easeInOut,
      delay : random(0, delay)
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여줌 여부를 감시할 요소를 지정
      triggerHook : 0.8 // 한 영역의 0.8을 보이는순간 작동
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2021