$(document).ready(function () {
  var currentFloor = 2; // переменная, где хранится текущий этаж
  var floorPath=$(".home-image path"); // каждый отдельный этаж в svg
  var counterUp = $(".counter-up"); /* кнопка увеличения этажа*/ 
  var counterDown = $(".counter-down"); /* кнопка уменьшения этажа*/
  var modal=$(".modal"); /* переменнная,которая хранит модальное окно*/
  var modalCloseButton=$(".modal-close-button"); /* переменнная,которая хранит кнопку закрыть окно*/
  var viewFlatsButton=$(".view-flats"); /*при клике на кнопку,вызываем модальное окно*/


  //функция при наведении мышки на этаж 
  floorPath.on('mouseover',function(){
    floorPath.removeClass('current-floor'); //удаляем активный класс у этажей
  currentFloor = $(this).attr("data-floor"); // получаем значения текущего этажа
  $(".counter").text(currentFloor); // записываем значение этажа в счетчик справа
  })

  floorPath.on('click',toggleModal); /* при клике на этаж, вызвать модальное окно*/


/* при клике на кнопку "Закрыть",  модальное окно будет закрываться*/
   modalCloseButton.on('click',toggleModal);

   viewFlatsButton.on('click',toggleModal);/* при клике на кнопку, вызвать модальное окно*/



  counterUp.on("click", function() { // отслеживаем клик по кнопке вверх
   if(currentFloor<18){ //проверяем значение этажа, оно не должно быть больше 18
      currentFloor++; // прибавляем один этаж
    usCurrentFloor = currentFloor.toLocaleString('en-Us',{minimumIntegerDigits:2, useGrouping:false});//форматируем переменную с этажом, чтобы было 01, а не 1
    $(".counter").text(usCurrentFloor); // записываем значение этажа в счетчик справа
    floorPath.removeClass('current-floor'); //удаляем активный класс у этажей
    $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); //подсвечиваем текущий этаж
   }
  });
counterDown.on("click", function(){
   if(currentFloor>2){
     currentFloor--;
     usCurrentFloor = currentFloor.toLocaleString('en-Us',{minimumIntegerDigits:2, useGrouping:false});
    $(".counter").text(usCurrentFloor);
    floorPath.removeClass('current-floor');
    $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
}
})

function toggleModal(){  //функция открыть=закрыть модальное окно
    modal.toggleClass('is-open');

  }
});