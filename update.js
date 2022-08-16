function update(){
    var version = 220816;
    document.getElementById("updateDate").innerHTML =  "";
    document.getElementById("updateChange").innerHTML =  "";
	document.getElementById("updateNote").innerHTML =  "";
	document.getElementById("updateSpinner").style = "display: block;margin-top: 25%;";
	document.getElementById("updateAvailable").style = "display: none;";
	document.getElementById("alreadyUpdate").style = "display: none;";
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("updateDate").innerHTML =  "更新日期：" + myObj.updateDate;
    document.getElementById("updateChange").innerHTML =  "新版变化：<br>" + myObj.change;
	document.getElementById("updateNote").innerHTML =  myObj.note;
	document.getElementById("updateSpinner").style = myObj.spinner;
	if (myObj.versionCode > version){
    	document.getElementById("updateAvailable").style.display = "block";
	}
	if (myObj.versionCode == version){
    	document.getElementById("alreadyUpdate").style.display = "block";
	}
  }
};
xmlhttp.open("GET", "https://burgerstudio.github.io/version.json", true);
xmlhttp.send();
}