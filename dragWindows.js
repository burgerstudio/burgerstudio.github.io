// 窗口拖拽源码来自：https://blog.csdn.net/hangGe0111/article/details/81288379
const PASSIVE = function(e) {
    e.preventDefault();
}
var clockTool = document.querySelector('#clock');
var clockTitle = document.querySelector('#clockTitle');
var countdownTool = document.querySelector('#countdown');
var countdownTitle = document.querySelector('#countdownTitle');
var temperatureTool = document.querySelector('#temperature');
var temperatureTitle = document.querySelector('#temperatureTitle');
var navigatorTool = document.querySelector('#navigator');
var navigatorTitle = document.querySelector('#navigatorTitle');
var playerTool = document.querySelector('#player');
var playerTitle = document.querySelector('#playerTitle');
var translateTool = document.querySelector('#translate');
var translateTitle = document.querySelector('#translateTitle');
var noteTool = document.querySelector('#note');
var noteTitle = document.querySelector('#noteTitle');
var editNoteTool = document.querySelector('#editNote');
var editNoteTitle = document.querySelector('#editNoteTitle');
var unknownTool = document.querySelector('#unknown');
var unknownTitle = document.querySelector('#unknownTitle');
var passwordTool = document.querySelector('#password');
var passwordTitle = document.querySelector('#passwordTitle');
var QRCodeTool = document.querySelector('#QRCode');
var QRCodeTitle = document.querySelector('#QRCodeTitle');
var BMITool = document.querySelector('#BMI');
var BMITitle = document.querySelector('#BMITitle');
var UnicodeTool = document.querySelector('#Unicode');
var UnicodeTitle = document.querySelector('#UnicodeTitle');
var textOrderTool = document.querySelector('#textOrder');
var textOrderTitle = document.querySelector('#textOrderTitle');

function dragWindow(tool, title) {

    //移动端（触屏）效果

    //手指触摸开始，记录div的初始位置
    title.addEventListener('touchstart', function(e) {
        var ev = e || window.event;
        var touch = ev.targetTouches[0];
        oL = touch.clientX - tool.offsetLeft;
        oT = touch.clientY - tool.offsetTop;
        document.addEventListener("touchmove", defaultEvent, false);
        //禁止屏幕滚动
        document.body.style.overflow = 'hidden';
        document.addEventListener('touchmove', PASSIVE, {
            passive: false,
        });
        //激活窗口
        document.getElementById('clock').classList.add('tool-unactive');
        document.getElementById('countdown').classList.add('tool-unactive');
        document.getElementById('temperature').classList.add('tool-unactive');
        document.getElementById('navigator').classList.add('tool-unactive');
        document.getElementById('player').classList.add('tool-unactive');
        document.getElementById('translate').classList.add('tool-unactive');
        document.getElementById('note').classList.add('tool-unactive');
        document.getElementById('editNote').classList.add('tool-unactive');
        document.getElementById('unknown').classList.add('tool-unactive');
        document.getElementById('password').classList.add('tool-unactive');
        document.getElementById('QRCode').classList.add('tool-unactive');
        document.getElementById('Unicode').classList.add('tool-unactive');
        document.getElementById('textOrder').classList.add('tool-unactive');
        tool.classList.remove('tool-unactive');
        //缩小窗口
        tool.style.transform = "scale(0.85) translateY(" + tool.clientHeight * -0.075 + "px)";
    });
    //触摸中的位置记录
    title.addEventListener('touchmove', function(e) {
        var ev = e || window.event;
        var touch = ev.targetTouches[0];
        var oLeft = touch.clientX - oL;
        var oTop = touch.clientY - oT;

        tool.style.left = oLeft + 'px';
        tool.style.top = oTop + 'px';

    });
    //触摸结束时的处理
    title.addEventListener('touchend', function() {
        document.removeEventListener("touchmove", defaultEvent);
        //允许屏幕滚动
        document.body.style.overflow = 'auto';
        document.removeEventListener('touchmove', PASSIVE, {
            passive: false,
        });
        //还原窗口大小
        tool.style.transform = "scale(1) translateY(0)";
    });

    //桌面端（鼠标）效果

    //按下鼠标键，记录div的初始位置
    title.addEventListener('mousedown', function(e) {
        listenMouseMove();
        listenMouseUp();
        var ev = e || window.event;
        oL = ev.clientX - tool.offsetLeft;
        oT = ev.clientY - tool.offsetTop;
        document.addEventListener("mousemove", defaultEvent, false);
        //禁止屏幕滚动
        document.body.style.overflow = 'hidden';
        document.addEventListener('mousemove', PASSIVE, {
            passive: false,
        });
        //激活窗口
        document.getElementById('clock').classList.add('tool-unactive');
        document.getElementById('countdown').classList.add('tool-unactive');
        document.getElementById('temperature').classList.add('tool-unactive');
        document.getElementById('navigator').classList.add('tool-unactive');
        document.getElementById('player').classList.add('tool-unactive');
        document.getElementById('translate').classList.add('tool-unactive');
        document.getElementById('note').classList.add('tool-unactive');
        document.getElementById('editNote').classList.add('tool-unactive');
        document.getElementById('unknown').classList.add('tool-unactive');
        document.getElementById('password').classList.add('tool-unactive');
        document.getElementById('QRCode').classList.add('tool-unactive');
        document.getElementById('BMI').classList.add('tool-unactive');
        document.getElementById('Unicode').classList.add('tool-unactive');
        document.getElementById('textOrder').classList.add('tool-unactive');
        tool.classList.remove('tool-unactive');
        //缩小窗口
        tool.style.transform = "scale(0.85) translateY(" + tool.clientHeight * -0.075 + "px)";
    });
    //移动鼠标中的位置记录
    function listenMouseMove() {
        document.addEventListener('mousemove', mouseMove);
    }

    function mouseMove(e) {
        var ev = e || window.event;
        var oLeft = ev.clientX - oL;
        var oTop = ev.clientY - oT;

        tool.style.left = oLeft + 'px';
        tool.style.top = oTop + 'px';

    }
    //松开鼠标键时的处理
    function listenMouseUp() {
        document.addEventListener('mouseup', mouseUp);
    }

    function mouseUp() {
        document.removeEventListener("mousemove", defaultEvent);
        document.removeEventListener('mousemove', mouseMove);
        document.removeEventListener('mouseup', mouseUp);
        //允许屏幕滚动
        document.body.style.overflow = 'auto';
        document.removeEventListener('mousemove', PASSIVE, {
            passive: false,
        });
        //还原窗口大小
        tool.style.transform = "scale(1) translateY(0)";
    }

    //阻止默认事件
    function defaultEvent(e) {
        e.preventDefault();
    }
}
dragWindow(clockTool, clockTitle);
dragWindow(countdownTool, countdownTitle);
dragWindow(temperatureTool, temperatureTitle);
dragWindow(navigatorTool, navigatorTitle);
dragWindow(playerTool, playerTitle);
dragWindow(translateTool, translateTitle);
dragWindow(noteTool, noteTitle);
dragWindow(editNoteTool, editNoteTitle);
dragWindow(unknownTool, unknownTitle);
dragWindow(passwordTool, passwordTitle);
dragWindow(QRCodeTool, QRCodeTitle);
dragWindow(BMITool, BMITitle);
dragWindow(UnicodeTool, UnicodeTitle);
dragWindow(textOrderTool, textOrderTitle);

function activeWindow(tool) {
    document.getElementById('clock').classList.add('tool-unactive');
    document.getElementById('countdown').classList.add('tool-unactive');
    document.getElementById('temperature').classList.add('tool-unactive');
    document.getElementById('navigator').classList.add('tool-unactive');
    document.getElementById('player').classList.add('tool-unactive');
    document.getElementById('translate').classList.add('tool-unactive');
    document.getElementById('note').classList.add('tool-unactive');
    document.getElementById('editNote').classList.add('tool-unactive');
    document.getElementById('unknown').classList.add('tool-unactive');
    document.getElementById('password').classList.add('tool-unactive');
    document.getElementById('QRCode').classList.add('tool-unactive');
    document.getElementById('BMI').classList.add('tool-unactive');
    document.getElementById('Unicode').classList.add('tool-unactive');
    document.getElementById('textOrder').classList.add('tool-unactive');
    document.getElementById(tool).classList.remove('tool-unactive');
}