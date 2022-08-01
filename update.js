function update(){
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("updateDate").innerHTML =  "更新日期：" + myObj.updateDate;
    document.getElementById("updateChange").innerHTML =  "新版变化：<br>" + myObj.change;
	document.getElementById("updateNote").innerHTML =  myObj.note;
	document.getElementById("updateSpinner").style = myObj.spinner;
	if (myObj.versionCode > 220801){
    	document.getElementById("updateAvailable").style = "display: block;";
	}
	if (myObj.versionCode == 220801){
    	document.getElementById("alreadyUpdate").style = "display: block;";
	}
  }
};
xmlhttp.open("GET", "https://burgerstudio.github.io/version.json", true);
xmlhttp.send();
}