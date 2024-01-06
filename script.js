const hamburger = function () {
    document.querySelector(".hamburger .open").addEventListener("click", function () {
        document.querySelector(".hamburger .open").style.display = "none";
        document.querySelector(".hamburger .close").style.display = "block";
        document.querySelector("header nav").style.display = "block";
        document.querySelector(".crew_active").style.display = "none";
    })
    document.querySelector(".hamburger .close").addEventListener("click", function () {
        document.querySelector(".hamburger .open").style.display = "block";
        document.querySelector(".hamburger .close").style.display = "none";
        document.querySelector("nav").style.display = "none";
        document.querySelector(".crew_active").style.display = "block";
    })
}
hamburger();
