var TRANSLATE = {

    init : function() {
        document.querySelector("#caption-list").addEventListener("click", this.scriptSelect.bind(this));
        document.querySelector("#deleteBtn").addEventListener("click", this.scriptDelete);
        document.querySelector("#moveBtn").addEventListener("click", this.scriptMove.bind(this));
        setInterval(this.getCurrentScript.bind(this), 1000);
    },

    scriptSelect : function(e) {
        if (e.target.tagName === "LI") {
            this.changeSelectState(e.target);
        }
    },

    changeSelectState : function(item) {
        var curSelectedLi = document.querySelector(".selected");
        if (curSelectedLi != null) {
            curSelectedLi.classList.remove("selected");
        }
        item.classList.add("selected");
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

            this.changeSelectState(document.querySelector("[data-start-time='" + curScript.startTime + "']"));
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    TRANSLATE.init();
})