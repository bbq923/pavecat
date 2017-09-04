var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function extractVideoId(url) {
    return url.split("watch?v=")[1].split("&")[0];
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: "422",
        width: "630",
        videoId: extractVideoId(localStorage.getItem("sourceURL")),
        events: {
            "onReady": onPlayerReady,
        }
    });
}

function onPlayerReady(e) {
    e.target.playVideo();
}