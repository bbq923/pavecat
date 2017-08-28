var TRANSLATE = {
    URLTemplate : "https://www.youtube.com/embed/",

    init : function() {
        this.urlLoad();
        document.querySelector("#caption-list").addEventListener("click", this.scriptSelect);
    },

    urlLoad : function() {
        var sourceURL = localStorage.getItem("sourceURL");
        var embedURL = this.URLTemplate + sourceURL.split("watch?v=")[1];
        console.log(embedURL);
        document.getElementById("video-box").setAttribute("src", embedURL);
    },

    scriptSelect : function(e) {
        if (e.target.tagName === "LI") {
            var curSelectedLi = document.querySelector(".selected");
            curSelectedLi.classList.remove("selected");
    
            e.target.classList.add("selected");
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    TRANSLATE.init();
})

document.getElementById("video-box").onload = function () {
    console.log("click event!");
    document.querySelector("div.ytp-cued-thumbnail-overlay > button").click();
}