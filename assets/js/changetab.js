function opentab(event, element){
    var tabcontent = document.getElementsByClassName('content__menu-list');
    for(var i = 0; i<tabcontent.length; i++){
        tabcontent[i].style.display = 'none';
    }
    document.getElementById(element).style.display = 'flex';

    var tablinks = document.getElementsByClassName('content__menu-tabs-item');
    for(var i = 0; i<tablinks.length; i++){
        tablinks[i].classList.remove('content__menu-tabs-item-active');
    }
    event.classList.add('content__menu-tabs-item-active');
}

document.getElementById('tabdefault').click();

function tabmenuhot(event, element){
    var tabcontent = document.getElementsByClassName('content__menu-hot-tab');
    for(var i = 0; i<tabcontent.length; i++){
        tabcontent[i].style.display = 'none';
    }
    document.getElementById(element).style.display = 'flex';

    var tablinks = document.getElementsByClassName('content__menu-hot-menu-item');
    for(var i = 0; i<tablinks.length; i++){
        tablinks[i].classList.remove('hot-item--active');
    }
    event.classList.add('hot-item--active');
}
document.getElementById('tabdefault-menu').click();