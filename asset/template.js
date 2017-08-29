var source = document.getElementById("script-list-template").innerHTML;
var template = Handlebars.compile(source);

var Translation;

$.getJSON("asset/script.json", function(data) {
    Translation = data;
    document.getElementById("caption-list").innerHTML = template(Translation);
});