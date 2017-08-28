var Translation;

var TRANSLATE = {
    URLTemplate : "https://www.youtube.com/embed/",

    init : function() {
        this.urlLoad();
        this.getScript.apply(this);
        document.querySelector("#caption-list").addEventListener("click", this.scriptSelect);
        document.querySelector("#deleteBtn").addEventListener("click", this.scriptDelete);
        document.querySelector("#moveBtn").addEventListener("click", this.scriptMove.bind(this));
    },

    getScript : function() {
        $.getJSON("asset/script.json", function(data) {
            Translation = data;
        })
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
    },

    scriptDelete : function() {
        var curSelectedLi = document.querySelector(".selected");
        curSelectedLi.nextElementSibling.classList.add("selected");
        curSelectedLi.parentNode.removeChild(curSelectedLi);
    },

    scriptMove : function(e) {
        var curSelectedLi = document.querySelector(".selected");
        var curSelectedScript = Translation["script-" + curSelectedLi.dataset.id];
        var text = curSelectedScript.text;
        var captionArea = document.querySelector("#caption-area p");
        captionArea.innerHTML = text;

        console.log("start time : " + curSelectedScript.startTime);
        console.log("end time : " + curSelectedScript.endTime);

    }
}

document.addEventListener("DOMContentLoaded", function() {
    TRANSLATE.init();
})