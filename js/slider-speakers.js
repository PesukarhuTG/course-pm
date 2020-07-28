/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("speaker");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}















/*let next = document.querySelector('.next');

let slides = document.querySelectorAll('.mySlides');

let i = 0;

next.addEventListener('click', function() {
  ++i;
  if (i >= slides.length) {
    slides[i-1].classList.remove('block');
    i = 0;
    slides[i].classList.add('block');
  } else {
    slides[i-1].classList.remove('block');
    slides[i].classList.add('block');
  }
});

let prev = document.querySelector('.prev');

prev.addEventListener('click', function() {
  --i;
  if (i <= slides.length) {

    slides[i+1].classList.remove('block');
    i = slides.length;
    slides[i].classList.add('block');
  }
})*/





/*var arrows = document.querySelectorAll('.spiker-arrow');

arrows.forEach(function (arrow) {
  arrow.addEventListener('click', showSlides);

  var slideIndex = 1;

  showSlides(slideIndex);

  function showSlides(n) {
    var slides = document.getElementsByClassName('mySlides'); //откуда получаем переменные

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

  }
})*/


/*var arrows = document.querySelectorAll('.spiker-arrow');

arrows.forEach(function(arrow) {
  arrow.addEventListener('click', showSlides);

  var slideIndex = 1;

  showSlides(slideIndex);

  function showSlides(n) {
    var slides = document.querySelectorAll('.mySlides'); //откуда получаем переменные
    slides.forEach(function(slide) {

      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
  
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
  
      slides[slideIndex - 1].style.display = "block";

    })

  }
})*/

/*var next = document.getElementById('next');
var prev = document.getElementById('prev');

var slides = document.getElementsByClassName('mySlides');

for (var i = 0; i < slides.length; i++) {
  slides[i].style.zIndex = slides.length - 1; //устанавливаем индекс для каждого элемента
}

next.onclck = function() {
  var activeEl = document.querySelector('.active'); //получаем элемент с классов active
  if(activeEl.nextElementSibling) { //если у нашего элемента есть сосед справа
     activeEl.style.left = "-100%"; //сдвигаем наш элемент налево
     activeEl.classList.remove('active'); //удаляем класс актвиности
     activeEl.nextElementSibling.classList.add('active'); //а у соседа ставим класс active

     this.classList.remove('no_active'); //для кнопко удаляем класс неактивности???
     prev.classList.remove('no_active'); //для кнопко удаляем класс неактивности???

     if(!activeEl.nextElementSibling.nextElementSibling) { //если соседа справа не существует
      this.classList.add('no_active'); //для кнопки устанавливаем класс неактивности
     }

  }
}

prev.onclck = function() {
  var activeEl = document.querySelector('.active'); //получаем элемент с классов active
  if(activeEl.previousElementSibling) { //если у нашего элемента есть сосед слева
     activeEl.previousElementSibling.style.left = "0%"; //сдвигаем наш элемент направо
     activeEl.classList.remove('active'); //удаляем класс актвиности
     activeEl.previousElementSibling.classList.add('active'); //а у соседа ставим класс active

     this.classList.remove('no_active'); //для кнопко удаляем класс неактивности???
     next.classList.remove('no_active'); //для кнопко удаляем класс неактивности???

     if(!activeEl.previousElementSibling.previousElementSibling) { //если соседа справа не существует
      this.classList.add('no_active'); //для кнопки устанавливаем класс неактивности
     }

  }
}*/