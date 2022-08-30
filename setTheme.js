if (localStorage.getItem('darkTheme') == 'bySystem'){
    document.body.classList.add("mdui-theme-layout-auto");
	document.getElementById('setDarkTheme1').checked = 'checked';
}
if (localStorage.getItem('darkTheme') == 'disabled'){
	document.getElementById('setDarkTheme2').checked = 'checked';
}
if (localStorage.getItem('darkTheme') == 'enabled'){
	document.body.classList.add("mdui-theme-layout-dark");
	document.getElementById('setDarkTheme3').checked = 'checked';
}
if (localStorage.getItem('darkTheme') == 'byTime'){
	document.getElementById('setDarkTheme4').checked = 'checked';
	listenTime();
}
if (!localStorage.darkTheme){
    document.body.classList.add("mdui-theme-layout-auto");
	localStorage.setItem("darkTheme","bySystem");
	document.getElementById('setDarkTheme1').checked = 'checked';
}
if (localStorage.primaryTheme){
    document.body.classList.add("mdui-theme-primary-" + localStorage.getItem("primaryTheme"));
	document.getElementById('setPrimaryTheme' + localStorage.getItem("primaryTheme")).checked = 'checked';
}
if (!localStorage.primaryTheme){
    document.body.classList.add("mdui-theme-primary-blue-grey");
	localStorage.setItem("primaryTheme","blue-grey");
	document.getElementById('setPrimaryThemeblue-grey').checked = 'checked';
}
if (localStorage.accentTheme){
    document.body.classList.add("mdui-theme-accent-" + localStorage.getItem("accentTheme"));
	document.getElementById('setAccentTheme' + localStorage.getItem("accentTheme")).checked = 'checked';
}
if (!localStorage.accentTheme){
    document.body.classList.add("mdui-theme-accent-blue");
	localStorage.setItem("accentTheme","blue");
	document.getElementById('setAccentThemeblue').checked = 'checked';
}
function setDarkTheme(option){
    if (option == "bySystem"){
    	document.body.classList.add("mdui-theme-layout-auto");
		document.body.classList.remove("mdui-theme-layout-dark");
		localStorage.setItem("darkTheme","bySystem");
	}
	if (option == "disabled"){
		document.body.classList.remove("mdui-theme-layout-auto", "mdui-theme-layout-dark");
		localStorage.setItem("darkTheme","disabled");
	}
	if (option == "enabled"){
		document.body.classList.remove("mdui-theme-layout-auto");
		document.body.classList.add("mdui-theme-layout-dark");
		localStorage.setItem("darkTheme","enabled");
	}
	if (option == "byTime"){
		document.body.classList.remove("mdui-theme-layout-auto", "mdui-theme-layout-dark");
		localStorage.setItem("darkTheme","byTime");
		listenTime();
	}
}
function setPrimaryTheme(color){
	document.body.classList.remove("mdui-theme-primary-red", "mdui-theme-primary-pink", "mdui-theme-primary-purple", "mdui-theme-primary-deep-purple", "mdui-theme-primary-indigo", "mdui-theme-primary-blue", "mdui-theme-primary-light-blue", "mdui-theme-primary-cyan", "mdui-theme-primary-teal", "mdui-theme-primary-green", "mdui-theme-primary-light-green", "mdui-theme-primary-lime", "mdui-theme-primary-yellow", "mdui-theme-primary-amber", "mdui-theme-primary-orange", "mdui-theme-primary-deep-orange", "mdui-theme-primary-brown", "mdui-theme-primary-grey", "mdui-theme-primary-blue-grey");
    document.body.classList.add("mdui-theme-primary-" + color);
    localStorage.setItem("primaryTheme",color);
}
function setAccentTheme(color){
	document.body.classList.remove("mdui-theme-accent-red", "mdui-theme-accent-pink", "mdui-theme-accent-purple", "mdui-theme-accent-deep-purple", "mdui-theme-accent-indigo", "mdui-theme-accent-blue", "mdui-theme-accent-light-blue", "mdui-theme-accent-cyan", "mdui-theme-accent-teal", "mdui-theme-accent-green", "mdui-theme-accent-light-green", "mdui-theme-accent-lime", "mdui-theme-accent-yellow", "mdui-theme-accent-amber", "mdui-theme-accent-orange", "mdui-theme-accent-deep-orange");
    document.body.classList.add("mdui-theme-accent-" + color);
    localStorage.setItem("accentTheme",color);
}
function resetTheme(){
    document.body.classList.remove("mdui-theme-layout-auto", "mdui-theme-layout-dark");
    document.body.classList.remove("mdui-theme-primary-red", "mdui-theme-primary-pink", "mdui-theme-primary-purple", "mdui-theme-primary-deep-purple", "mdui-theme-primary-indigo", "mdui-theme-primary-blue", "mdui-theme-primary-light-blue", "mdui-theme-primary-cyan", "mdui-theme-primary-teal", "mdui-theme-primary-green", "mdui-theme-primary-light-green", "mdui-theme-primary-lime", "mdui-theme-primary-yellow", "mdui-theme-primary-amber", "mdui-theme-primary-orange", "mdui-theme-primary-deep-orange", "mdui-theme-primary-brown", "mdui-theme-primary-grey", "mdui-theme-primary-blue-grey");
    document.body.classList.remove("mdui-theme-accent-red", "mdui-theme-accent-pink", "mdui-theme-accent-purple", "mdui-theme-accent-deep-purple", "mdui-theme-accent-indigo", "mdui-theme-accent-blue", "mdui-theme-accent-light-blue", "mdui-theme-accent-cyan", "mdui-theme-accent-teal", "mdui-theme-accent-green", "mdui-theme-accent-light-green", "mdui-theme-accent-lime", "mdui-theme-accent-yellow", "mdui-theme-accent-amber", "mdui-theme-accent-orange", "mdui-theme-accent-deep-orange");
    document.body.classList.add("mdui-theme-layout-auto");
    document.body.classList.add("mdui-theme-primary-blue-grey");
    document.body.classList.add("mdui-theme-accent-blue");
	localStorage.setItem("darkTheme","bySystem");
   	localStorage.setItem("primaryTheme","blue-grey");
   	localStorage.setItem("accentTheme","blue");
	document.getElementById('setDarkTheme1').checked = 'checked';
	document.getElementById('setPrimaryThemeblue-grey').checked = 'checked';
	document.getElementById('setAccentThemeblue').checked = 'checked';
}
function listenTime(){
    var hours = new Date().getHours();
    if (hours >= 22 && hours < 24){
        if (localStorage.getItem('darkTheme') == 'byTime'){
    	    document.body.classList.add('mdui-theme-layout-dark');
    	    setTimeout("listenTime()",1000);
    	}
	}else if(hours >= 0 && hours < 6){
	    if (localStorage.getItem('darkTheme') == 'byTime'){
    	    document.body.classList.add('mdui-theme-layout-dark');
    	    setTimeout("listenTime()",1000);
    	}
	}else if (hours >= 6 && hours < 22){
	    if (localStorage.getItem('darkTheme') == 'byTime'){
    	    document.body.classList.remove('mdui-theme-layout-dark');
    	    setTimeout("listenTime()",1000);
    	}
	}
}