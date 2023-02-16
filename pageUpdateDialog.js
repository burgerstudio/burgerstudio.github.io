var updateDialog = document.getElementById('updateDialog');

function openUpdateDialog() {
    updateDialog.style.transform = "translateX(-316px)";
}

function hideUpdateDialog() {
    updateDialog.style.transform = "translateX(0)";
}

function closeUpdateDialog() {
    updateDialog.style.transform = "translateX(-316px) scale(0.7)"
    window.setTimeout('updateDialog.style.transform = "translateX(-316px) scale(0.7) translateY(-64px)"', 300)
    window.setTimeout('updateDialog.style.opacity = "0"', 300)
    window.setTimeout('updateDialog.style.display = "none"', 800)
    localStorage.setItem("doNotShowUpdate" + page + pageUpdateDate, "true");
}
if (localStorage.getItem("doNotShowUpdate" + page + pageUpdateDate) != "true") {
    window.setTimeout('openUpdateDialog();', 1500)
    window.setTimeout('hideUpdateDialog();', 11500)
}