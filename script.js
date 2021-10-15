// display current day
var todayDate = moment().format('ddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function() {

    function time() {

        var currentHour = moment.hour();

        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);
            console.log(blockTime, currentHour)

            if (blockTime < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            } else if (blockTime === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    };

    

    time();
})