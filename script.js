let displayDate = $("#currentDay")

        let time = moment()
        time = time.format("dddd, MMMM Do YYYY hh:mm a")
        displayDate.text("Today's date is " + time)

        $(".save-btn").on("click", function (){
var userInput = $(this).siblings("textarea").val()
var time = $(this).parent().attr("id")
localStorage.setItem(time,userInput)
        });

        // $("#9 textarea").val(localStorage.getItem("9"))
        // $("#10 textarea").val(localStorage.getItem("10"))
        // $("#11 textarea").val(localStorage.getItem("11"))
        // $("#12 textarea").val(localStorage.getItem("12"))
        // $("#13 textarea").val(localStorage.getItem("13"))
        // $("#14 textarea").val(localStorage.getItem("14"))
        // $("#15 textarea").val(localStorage.getItem("15"))
        // $("#16 textarea").val(localStorage.getItem("16"))
        // $("#17 textarea").val(localStorage.getItem("17"))

        var checkTime = function () {

                       
        
                var hour = moment().hour();
                                for (var i = 9; i < 18; i++) {
                        $(`#${i} textarea`).val(localStorage.getItem(i))
                        console.log(i)
                        if (i < hour) { 
                                $(`#${i} textarea`).addClass("past")
                                console.log("past")
                        } else if (i===hour) {
                                $(`#${i} textarea`).addClass("present")
                                console.log("present")
                        } else { // ( i greater than hour)
                                $(`#${i} textarea`).addClass("future")
                                console.log("future")  
                        }
       
                }
        
        }
        
        checkTime()