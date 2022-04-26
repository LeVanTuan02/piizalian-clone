var index = 0;
var run;

var arrImg = [];
arrImg[0] = "./assets/img/slider01.jpg";
arrImg[1] = "./assets/img/slider02.jpg";
arrImg[2] = "./assets/img/slider03.jpg";

// function auto(){
//     var sliderImg = document.getElementsByClassName('slider__img')[0];
//     if(index == arrImg.length - 1){
//         index = -1;
//     }
//     index++;
//     sliderImg.style.backgroundImage = "url(" + arrImg[index] + ")";
//     run = setTimeout(auto, 5000);
// }

function auto(){
    var sliderImg = document.getElementById('slider__img');
    if(index == arrImg.length - 1){
        index = -1;
    }
    index++;
    sliderImg.src = arrImg[index];
    run = setTimeout(auto, 3000);
}

window.onload = function(){
   run = setTimeout(auto, 3000);
//     var sliderImg = document.getElementsByClassName('slider__img')[0];
//     sliderImg.style.backgroundImage = "url(" + arrImg[2] + ")";
//     console.log(sliderImg.style.backgroundImage)
}