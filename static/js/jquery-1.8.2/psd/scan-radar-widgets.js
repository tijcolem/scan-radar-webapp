<script>
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
        //      $("#ArchiveDateID").datetimepicker();



        //  $( "#Opacityslider" ).bind("changed", function(){ alert("Changed")});




    });
</script>
