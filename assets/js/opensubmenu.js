// mở submenu
var iconlist = document.getElementsByClassName("mobile__nav-list-icon");
for(var i = 0; i < iconlist.length; i++){
    iconlist[i].addEventListener('click', function(){
        var submenu = this.parentElement.parentElement.querySelector('.mobile-sub-menu');
        submenu.classList.toggle("mobile-sub-menu-show");
        this.classList.toggle("changeicon");
    });
}


// mở nav
var headerbar = document.querySelector(".header-navbar-icon-bars");
var mobilenav = document.querySelector(".mobile__nav");
var navcontent = document.querySelector(".mobile__nav-content");
var overlay = document.querySelector(".mobile__nav-overlay");
headerbar.onclick = function(){
    mobilenav.style.display = 'block';
    navcontent.style.display = 'block';
    overlay.style.display = 'block';
}

// đóng nav
var iconclose = document.querySelector(".mobile__nav-close");
iconclose.onclick = function(){
    mobilenav.style.display = 'none';
    navcontent.style.display = 'none';
    overlay.style.display = 'none';
}

// khi click vào overlay
overlay.onclick = function(){
    mobilenav.style.display = 'none';
    navcontent.style.display = 'none';
    overlay.style.display = 'none';
}