        function openDialog(element, coverClose) {
            document.querySelector(element).style.display = "block";
            window.setTimeout(function() {
                document.querySelector(element).style.opacity = "1";
                if (document.querySelector(element).classList.contains("burger-dialog-bottom")) {
                    document.querySelector(element).style.transform = "translateY(0)";
                } else {
                    document.querySelector(element).style.transform = "scale(1)";
                }
                document.querySelector(element).style.zIndex = 9999;
            }, 0);
            var cover = document.createElement("div");
            document.body.appendChild(cover);
            cover.classList.add("cover");
            window.setTimeout(function() {
                cover.style.opacity = "1";
            }, 0);
            cover.addEventListener('touchmove', function(e) {
                e.preventDefault();
            }, {
                passive: false
            });
            document.querySelector(element).addEventListener('touchmove', function(e) {
                e.preventDefault();
            }, {
                passive: false
            });
            if (coverClose == true) {
                cover.addEventListener("click", function() {
                    closeDialog(element);
                });
            } else if (coverClose != false) {
                cover.addEventListener("click", function() {
                    closeDialog(element);
                });
            }
            var h = document.querySelector(element).clientHeight;
            if (!document.querySelector(element).classList.contains("burger-dialog-bottom")) {
                document.querySelector(element).style.top = "calc(50% - " + (h / 2 + 16) + "px)";
            }
        }

        function closeDialog(element) {
            var cover = document.querySelector(".cover");
            document.querySelector(element).style.opacity = "0";
            window.setTimeout(function() {
                document.querySelector(element).style.display = "none";
                if (document.querySelector(element).classList.contains("burger-dialog-bottom")) {
                    document.querySelector(element).style.transform = "translateY(100%)";
                } else {
                    document.querySelector(element).style.transform = "scale(.85)";
                }
                document.querySelector(element).style.zIndex = -1;
            }, 300);
            cover.style.opacity = "0";
            window.setTimeout(function() {
                document.body.removeChild(cover);
            }, 300);
            cover.removeEventListener('touchmove', function(e) {
                e.preventDefault();
            }, {
                passive: false
            });
            document.querySelector(element).removeEventListener('touchmove', function(e) {
                e.preventDefault();
            }, {
                passive: false
            });
            document.querySelector(".cover").removeEventListener("click", closeDialog);
        }