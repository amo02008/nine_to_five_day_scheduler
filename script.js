let displayDate = $("#currentDay")

        let time = moment()
        time = time.format("dddd, MMMM Do YYYY hh:mm a")
        displayDate.text("Today's date is " + time)

        $(".save-btn").on("click", function (){
var userInput = $(this).siblings("textarea").val()
var time = $(this).parent().attr("id")
localStorage.setItem(time,userInput)
        });

        $("#9 textarea").val(localStorage.getItem("9"))
        $("#10 textarea").val(localStorage.getItem("10"))

        
        // get current time from moment then loop