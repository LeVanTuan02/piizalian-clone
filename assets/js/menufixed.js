window.onscroll = function(){
    var getWidth = window.innerWidth;
    if(getWidth > 1024){
        var domBody = document.body;
        var domHTML = document.documentElement;
        var heightHeader = document.getElementsByClassName('header-top')[0].clientHeight;
        var headerfixed = document.getElementsByClassName('header__menu-wrap')[0];
        if(domHTML.scrollTop > heightHeader || domBody.scrollTop > heightHeader){
            headerfixed.classList.add('position-fixed');
        }else{
            headerfixed.classList.remove('position-fixed');
        }
    }
}