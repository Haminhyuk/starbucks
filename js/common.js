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

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2021