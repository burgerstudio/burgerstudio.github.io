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
        showFab()
    }else{
        hideFab()
    }
}