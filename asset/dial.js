YUI().use('dial', function(Y) {

    setStartTime = function(e) {
        document.querySelector("#dial-start-time").value = e.newVal;
        document.querySelector("#start-time").value = e.newVal;
        player.seekTo(e.newVal, true);
    }

    var dial = new Y.Dial({
        min: 0,
        max: 1000, // player.getDuration() 을 부르니까 not a function 나오는데 아마 player가 로드되기 전에 실행되어 그런듯
        stepsPerRevolution: 60,
        value: 0,
        diameter: 150,
        minorStep: 1,
        majorStep: 10,
        decimalPlaces: 2,
        strings: {label: 'start time in seconds:', resetStr: 'Reset', tooltipHandle: 'Drag to set'},
        // construction-time event subscription
        after : {
            valueChange: Y.bind( setStartTime, dial )
        }
    });
    dial.render("#dial");
});