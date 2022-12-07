var fab = document.getElementById('fab');
function showFab(){
    fab.classList.remove('mdui-fab-hide');
}
function hideFab(){
    fab.classList.add('mdui-fab-hide');
}
var pageHeight =16;
window.onscroll =function () {
    var backTop = document.documentElement.scrollTop || 
    document.body.scrollTop;
    if(backTop > pageHeight){
        showFab();
    }else{
        hideFab();
    }
    if(backTop > 0){
        document.getElementsByTagName('header')[0].classList.add('mdui-shadow-4');
    }else{
        document.getElementsByTagName('header')[0].classList.remove('mdui-shadow-4');
    }
}