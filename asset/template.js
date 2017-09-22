var source = document.getElementById("script-list-template").innerHTML;
var template = Handlebars.compile(source);

var Translation;

$.getJSON("asset/script.json", function(data) {
    Translation = data;
    document.getElementById("caption-list").innerHTML = template(Translation);
});

// var url = "http://localhost:7777/" + localStorage.getItem("sourceURL").split("watch?v=")[1].split("&")[0].trim();

// $.ajax({
//     type : 'get',
//     url : url,
//     beforeSend : function(xhr) {
//         xhr.setRequestHeader("Access-Control-Allow-Origin","http://localhost:7777/");
//         xhr.setRequestHeader("Access-Control-Allow-Origin","http://localhost:7777/");
//     },
//     error: function(xhr, status, error) {
//         alert(error);
//     },
//     success : function(data) {
//         Translation = data;
//         document.getElementById("caption-list").innerHTML = template(Translation);
//     }
// });