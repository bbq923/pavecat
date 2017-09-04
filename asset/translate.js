var TRANSLATE = {

    init : function() {
        document.querySelector("#caption-list").addEventListener("click", this.scriptSelect.bind(this));
        document.querySelector("#deleteBtn").addEventListener("click", this.scriptDelete);
        document.querySelector("#moveBtn").addEventListener("click", this.scriptMove.bind(this));
        document.querySelector(".edit-button").addEventListener("click", this.scriptEdit.bind(this));
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
        this.displayScript(Translation["script-" + item.dataset.startTime]);
    },

    scriptAdd : function() {

    },

    // start-time, end-time, text(번역 내용)를 변경할 수 있다.
    scriptEdit : function(e) {
        e.preventDefault();

        var startTimeAvailable = 0;
        var endTimeAvailable = Math.trunc(player.getDuration());

        var curScriptElement = document.querySelector(".selected");

        curScriptElement.dataset.startTime = document.querySelector("#start-time").value;
        curScriptElement.dataset.endTime = document.querySelector("#end-time").value;
        curScriptElement.innerHTML = document.querySelector(".text-edit").value;
    
    },

    // 자막 표시 시간을 수정할 때 유효한 시간인지 체크한다. 
    // startTime > previousSibling.endtime && endTime < nextSibling.startTime
    timeRangeValidation(startTime, endTime, curScript) {

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

            this.displayScript(curScript);
            this.changeSelectState(document.querySelector("[data-start-time='" + curScript.startTime + "']"));
        }
    },

    // 현재 재생중인 스크립트를 edit-form 영역에 뿌려준다
    displayScript : function(script) {
        document.querySelector("#start-time").value = script.startTime;
        document.querySelector("#end-time").value = script.endTime;
        document.querySelector(".text-edit").value = script.text;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    TRANSLATE.init();
})