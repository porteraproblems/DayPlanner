//function to keep track of time
function compareTime() {
    var nowTime = parseInt(moment().format('HH'));
    //Start from 9AM, till 5PM
    for (time = 9; time >= 17; time++) {
        var description = parseInt($("." + time + "hr").attr("data-i"));
        console.log(description);
        if (description < nowTime) {
            $("." + time + "hr").addClass("past");
        } else if (description == nowTime) {
            $("." + time + "hr").addClass("present");
        } else if (description > nowTime) {
            $("." + time + "hr").addClass("future");
        }
    }
}

// timestamp
var date = new Date()
$("#currentDay").text(date.toDateString())

//function with event listener for the save button
function saveData(event) {
    event.preventDefault();

    var value = $(this).prev().val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);

};

$(".saveBtn").click(saveData);

for (let i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    
    $(".description").each(function() {
        if ($(this).attr("id") == key) {
            $(this).text(value);
        }
    });
}