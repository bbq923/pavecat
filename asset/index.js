var MAIN = {
    init : function() {
        document.getElementById("search-btn").addEventListener("click", this.search);
    },

    search : function(e) {
        var url = document.querySelector("input").value;
        localStorage.setItem("sourceURL", url);
        location.href = "translate.html";
    }
} 

document.addEventListener("DOMContentLoaded", function() {
    MAIN.init();
})