var Translation;

var TRANSLATE = {

    init : function() {
        this.getScript.apply(this);
        document.querySelector("#caption-list").addEventListener("click", this.scriptSelect);
        document.querySelector("#deleteBtn").addEventListener("click", this.scriptDelete);
        document.querySelector("#moveBtn").addEventListener("click", this.scriptMove.bind(this));
        setInterval(this.getCurrentScript, 1000);
    },

    getScript : function() {
        $.getJSON("asset/script.json", function(data) {
            Translation = data;
        })
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
        console.log(curSelectedLi.dataset.startTime);
        var curSelectedScript = Translation["script-" + curSelectedLi.dataset.startTime];
        var text = curSelectedScript.text;
        var captionArea = document.querySelector("#caption-area p");
        captionArea.innerHTML = text;

        console.log("start time : " + curSelectedScript.startTime);
        console.log("end time : " + curSelectedScript.endTime);

        player.seekTo(curSelectedScript.startTime, true);
    },

    // 현재시간이 특정 자막의 start time일 경우 해당 자막을 script.json에서 읽어와서 caption area에 표시한다
    getCurrentScript : function() {
        var currentTime = Math.trunc(player.getCurrentTime());
        var curScript = Translation["script-" + currentTime];
        if (curScript != null) {
            document.querySelector("#caption-area p").innerHTML = curScript.text;

            // TODO : 따로 함수로 분리해내야 함
            //
            // change selected li item
            document.querySelector(".selected").classList.remove("selected");
            document.querySelector("[data-start-time='" + currentTime + "']").classList.add("selected");
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    TRANSLATE.init();
})