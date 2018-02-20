// run the currently selected effect
function runEffect() {
    // get effect type from 

    // most effect types need no options passed by default
    // some effects have required parameters

    var options;

    // run the effect
    $("#Map1LatestTimeStamp").css('color', 'red');
    $("#Map2LatestTimeStamp").css('color', 'red');

    callback1();
    callback2();
};

function toggleCalInput(option) {

    if (option == "show") {

        $('#CalendarID').show();

    }

    if (option == "hide") {

        $('#CalendarID').hide();

    }

}


function toggleDownloadStatus(option) {

    if (option == "show") {

        $('#DownloadStatusID').show();

    }

    if (option == "hide") {

        $('#DownloadStatusID').hide();

    }

}



//callback function to bring a hidden box back
function callback1() {
    setTimeout(function() {
        $("#Map1LatestTimeStamp").css('color', 'black');
    }, 5000);
};

function callback2() {
    setTimeout(function() {
        $("#Map2LatestTimeStamp").css('color', 'black');
    }, 5000);
};





    $(function() {

        $("#slider").slider({
            value: -500,
            min: -1000,
            max: -10
        });


        $("#Opacityslider").slider({
            value: 50,
            min: 1,
            max: 100
        });



        $("#Opacityslider").slider({
            value: 50,
            min: 1,
            max: 100,
            stop: function(event, ui) {
                updateOpacity();
            }

        });


        var now = new Date();
        var now_utc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
        var CurrentDate = new Date();
        //      var BeginFileDate = new Date(1353110400000);
        var BeginFileDate = new Date(1331596800000);


        $('#ArchiveDateID').datetimepicker({
            dateFormat: 'yy-mm-dd',
            defaultValue: CurrentDate.toCalendarString(),
            alwaysSetTime: 'true',
            minDateTime: BeginFileDate,
            maxDateTime: now_utc

        });

        $("#stepforward").button({
            text: false,
            icons: {
                primary: "ui-icon-arrowthick-1-e"
            }
        })


        $("#stepreverse").button({
            text: false,
            icons: {
                primary: "ui-icon-arrowthick-1-w"
            }
        })



        $("#play").button({
            text: false,
            icons: {
                primary: "ui-icon-circle-triangle-e"
            }
        })



        $("#stop").button({
            text: false,
            icons: {
                primary: "ui-icon-stop"
            }
        });

        $("#reverse").button({
            text: false,
            icons: {
                primary: "ui-icon-circle-triangle-w"
            }
        });



        $('#CalendarID').hide();

        $('#MapSynch1').click(function() {
            snapView(2, 1)
        });
        $('#MapSynch2').click(function() {
            snapView(1, 2)
        });


    });
