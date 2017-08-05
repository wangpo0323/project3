$(document).ready(function() {
    var initialLangCode = 'en';
    /* initialize the external events
    -----------------------------------------------------------------*/
    $('#external-events div.external-event').each(function() {

        // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
        // it doesn't need to have a start or end
        var eventObject = {
            title: $.trim($(this).text()) // use the element's text as the event title
        };
        // store the Event Object in the DOM element so we can get to it later
        $(this).data('eventObject', eventObject);
        // make the event draggable using jQuery UI
        $(this).draggable({
            zIndex: 999,
            revert: true,      // will cause the event to go back to its
            revertDuration: 0  //  original position after the drag
        });

    });

    /* initialize the calendar
    -----------------------------------------------------------------*/

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        editable: true,
        droppable: true, // this allows things to be dropped onto the calendar !!!
        drop: function(date, allDay) { // this function is called when something is dropped
            // retrieve the dropped element's stored Event Object
            var originalEventObject = $(this).data('eventObject');
            // we need to copy it, so that multiple events don't have a reference to the same object
            var copiedEventObject = $.extend({}, originalEventObject);
            // assign it the date that was reported
            copiedEventObject.start = date;
            copiedEventObject.allDay = allDay;
            // render the event on the calendar
            // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
            $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);
            // is the "remove after drop" checkbox checked?
            if ($('#drop-remove').is(':checked')) {
                // if so, remove the element from the "Draggable Events" list
                $(this).remove();
            }

        }
    });
    /*---click---*/
    var tds=document.getElementsByClassName('fc-widget-content');
    var kuang=document.getElementsByClassName('tanChu')[0];
    var body=document.getElementById('body');
    var clienH=document.documentElement.clientHeight;
    for(var i=0;i<tds.length;i++){
        (function(i){
            tds[i].onclick=function(){
                kuang.style.display='block';
                kuang.style.top='20%'
                body.style.cssText='background:rbga(128,128,128,.6) !important';
                $(".ok").on('click',function(){
                    kuang.style.display='none';
                    tds[i].insertBefore('1');
                })
            }
        })(i)
    }
    /*点击小时*/
    $(".button").on('click',function(){
        kuang.style.display='none';
    })
    $(".cancel").on('click',function(){
        kuang.style.display='none';
    })

})

