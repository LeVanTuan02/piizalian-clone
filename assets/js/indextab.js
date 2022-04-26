function changetab(event, element){
    var tabcontent = document.getElementsByClassName('content__product-tab');
    for(var i = 0; i<tabcontent.length; i++){
        tabcontent[i].style.display = 'none';
    }
    document.getElementById(element).style.display = 'flex';

    var tablinks = document.getElementsByClassName('content__menu-food-item');
    for(var i = 0; i<tablinks.length; i++){
        tablinks[i].classList.remove('item-active');
    }
    event.classList.add('item-active');
}
document.getElementById('tabdefault-menu').click();

function changetabmenu(event, element){
    var tabcontent = document.getElementsByClassName('content__menu-full-tab');
    for(var i = 0; i<tabcontent.length; i++){
        tabcontent[i].style.display = 'none';
    }
    document.getElementById(element).style.display = 'flex';

    var tablinks = document.getElementsByClassName('content__menu-full-item');
    for(var i = 0; i<tablinks.length; i++){
        tablinks[i].classList.remove('content__menu-full--active');
    }
    event.classList.add('content__menu-full--active');
}
document.getElementById('tabdefault').click();