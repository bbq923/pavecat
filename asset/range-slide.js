var startSlider = document.getElementById('time-sync');
var slider = noUiSlider.create(startSlider, {
	start: [0, 100],
	range: {
		'min': [ -50 ],
		'max': [ 150 ]
	}
});

startSlider.noUiSlider.on('change', function(e){

    var changeStartTime = e[0];
    var changeEndTime = e[1];
    var ele = document.querySelector(".selected");
    var startTime = parseInt(ele.dataset.startTime);
    var endTime = parseInt(ele.dataset.endTime);

    var val = (endTime - startTime)/100;
    
    var reviseStartTime = startTime + changeStartTime * val;
    var reviseEndTime = endTime + (changeEndTime - 100) * val;

    document.querySelector("#start-time").value = reviseStartTime;
    document.querySelector("#end-time").value = reviseEndTime;

    //document.querySelector("#start-time").value = 
});

// seleted