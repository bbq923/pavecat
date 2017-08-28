var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: "422",
        width: "630",
        videoId: localStorage.getItem("sourceURL").split("watch?v=")[1],
        events: {
            "onReady": onPlayerReady,
        }
    });
}

function onPlayerReady(e) {
    e.target.playVideo();
}