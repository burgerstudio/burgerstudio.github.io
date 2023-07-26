var version = 230726;

function update() {
    document.getElementById("updateDate").innerHTML = "";
    document.getElementById("updateChange").innerHTML = "";
    document.getElementById("updateNote").innerHTML = "";
    document.getElementById("updateSpinner").style = "display: block;margin-top: 25%;";
    document.getElementById("updateAvailable").style = "display: none;";
    document.getElementById("alreadyUpdate").style = "display: none;";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var VersionInfo = JSON.parse(this.responseText);
            document.getElementById("updateDate").innerHTML = "更新日期：" + VersionInfo.updateDate;
            document.getElementById("updateChange").innerHTML = "新版变化：<br>" + VersionInfo.change;
            document.getElementById("updateNote").innerHTML = VersionInfo.note;
            document.getElementById("updateSpinner").style = VersionInfo.spinner;
            if (VersionInfo.versionCode > version) {
                document.getElementById("updateAvailable").style.display = "block";
            }
            if (VersionInfo.versionCode == version) {
                document.getElementById("alreadyUpdate").style.display = "block";
            }
        }
    };
    xmlHttp.open("GET", "https://burgerstudio.github.io/version.json", true);
    xmlHttp.send();
}