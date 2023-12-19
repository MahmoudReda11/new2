var ball1 = document.getElementById('ball1');
var ball2 = document.getElementById('ball2');
var imgChang = document.getElementById('imgChang');
var deltaX = 5; 
var deltaY = 5; 

var deltaX2 = 5;
var deltaY2 = 5; 

function moveBall() {
  var ballRect = ball1.getBoundingClientRect();
  var ballRect2 = ball2.getBoundingClientRect();
  var screenWidth = 600;
  var screenHeight = 400;

  
  if (ballRect.left + deltaX < 0 || ballRect.right + deltaX > screenWidth) {
    deltaX = -deltaX;

  if (imgChang.src.endsWith('imgs/p1.png')) {

    imgChang.src = 'imgs/p2.png';
  } else {

    imgChang.src = 'imgs/p1.png'; 
}
  }


  if (ballRect.top + deltaY < 0 || ballRect.bottom + deltaY > screenHeight) {
    deltaY = -deltaY;
    if (imgChang.src.endsWith('imgs/p1.png')) {

    imgChang.src = 'imgs/p2.png';
  } else {
 
    imgChang.src = 'imgs/p1.png'; 
}
  }



     if (ballRect2.left + deltaX2 < 0 || ballRect2.right + deltaX2 > screenWidth) {
    deltaX2 = -deltaX2;

    if (imgChang.src.endsWith('imgs/p1.png')) {
  
    imgChang.src = 'imgs/p2.png';
  } else {

    imgChang.src = 'imgs/p1.png'; 
}
  }

  if (ballRect2.top + deltaY2 < 0 || ballRect2.bottom + deltaY2 > screenHeight) {
    deltaY2 = -deltaY2;

    if (imgChang.src.endsWith('imgs/p1.png')) {

    imgChang.src = 'imgs/p2.png';
  } else {

    imgChang.src = 'imgs/p1.png'; 
}
  }


  ball1.style.left = ballRect.left + deltaX + 'px';
  ball1.style.top = ballRect.top + deltaY + 'px';

 
    ball2.style.left = ballRect2.left + deltaX2 + 'px';
  ball2.style.top = ballRect2.top + deltaY2 + 'px';

  requestAnimationFrame(moveBall);
}
moveBall();



// size balls


  rangeInput1.addEventListener('input', function() {
    var widthValue = rangeInput1.value + 'px';

    // تحديث عرض الكورتين بناءً على قيمة الإدخال
    ball1.style.width = widthValue;
    ball1.style.height = widthValue;

    localStorage.setItem('inputValue', rangeInput1.value);
    console.log(rangeInput1.value)

});

document.addEventListener('DOMContentLoaded', function() {

    var rangeInput1 = document.getElementById('rangeInput1');
    var ball1 = document.getElementById('ball1');


    rangeInput1.addEventListener('input', function() {
        // عند تغيير القيمة، قم بتحديث عنصر العرض
    
        // قم بإرسال القيمة إلى الصفحة الأخرى باستخدام localStorage أو cookies أو AJAX أو أي وسيلة أخرى
        // هنا يتم استخدام localStorage كمثال
        localStorage.setItem('inputValue', rangeInput1.value + 'px');


        var storedValue = localStorage.getItem('inputValue');
        console.log( rangeInput1.value + ' rang input')
        console.log( storedValue)
      });


    var storedValue = localStorage.getItem('inputValue');

    if (storedValue) {

      rangeInput1.value = storedValue;

      ball1.style.width = storedValue;
      console.log("aboreda")
    }

});




document.addEventListener('DOMContentLoaded', function() {
    var rangeInput1 = document.getElementById('rangeInput1');
    var ball1 = document.getElementById('ball1');
  
    rangeInput1.addEventListener('input', function() {
      // عند تغيير القيمة، قم بتحديث عنصر العرض
      var inputValue = rangeInput1.value + 'px';
      
      // قم بإرسال القيمة إلى الصفحة الأخرى باستخدام localStorage
      localStorage.setItem('inputValue', inputValue);
    var storedValue = localStorage.getItem('inputValue');

    console.log(storedValue)
  
      // قم بتحديث عرض العنصر ball1
      ball1.style.width = inputValue;
    });
  
    var storedValue = localStorage.getItem('inputValue');
    if (storedValue !== "") {
      // قم بتحديث قيمة الإدخال وعرض العنصر ball1 إذا كانت القيمة موجودة في localStorage
      rangeInput1.value = storedValue;
      ball1.style.width = storedValue;
    console.log(storedValue)

    }

});

console.log("a7a")































// var rangeInput2 = document.getElementById('rangeInput2');
//   var ball2 = document.getElementById('ball2');

//   rangeInput2.addEventListener('input', function() {
//     var widthValue = rangeInput2.value + 'px';

//     // تحديث عرض الكورتين بناءً على قيمة الإدخال
//     ball2.style.width = widthValue;
//     ball2.style.height = widthValue;

// });

