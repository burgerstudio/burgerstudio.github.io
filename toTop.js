var header = document.getElementsByTagName('header')[0];
var fab = document.getElementById('fab');
var toolbar = document.getElementById('toolbar');
var headline = document.getElementById('headline');

function showFab() {
    fab.classList.remove('mdui-fab-hide');
}

function hideFab() {
    fab.classList.add('mdui-fab-hide');
}
var pageHeight = 16;
window.onscroll = function() {
    var backTop = document.documentElement.scrollTop ||
        document.body.scrollTop;
    if (backTop > pageHeight) {
        showFab();
    } else {
        hideFab();
    }
    if (backTop > 0 && page != "Index") {
        header.classList.add('mdui-shadow-4');
    } else if (backTop <= 0 && page != "Index") {
        header.classList.remove('mdui-shadow-4');
    } else if (backTop > 80 && page == "Index") {
        header.classList.add('mdui-shadow-4');
        toolbar.classList.add('mdui-color-theme-50');
        headline.style.opacity = 1;
    } else if (backTop <= 80 && page == "Index") {
        header.classList.remove('mdui-shadow-4');
        toolbar.classList.remove('mdui-color-theme-50');
        headline.style.opacity = 0;
    }
}