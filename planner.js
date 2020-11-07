//function to keep track of time
function compareTime() {
    // var nowTime = parseInt(moment().format('HH'));
var nowTime = moment().hour();
var colorTime = $("textarea");

//Start from 9AM, till 5PM
colorTime.each(function () {
    var description = parseInt($(this).attr("id"));
    if (description < 9) {
        description += 12;
    }
    console.log(nowTime, description);
    let time = $(this)[0];
            if (nowTime === description) {
                $(time).addClass("present");
            } else if (nowTime > description) {
                $(time).addClass("past");
            } else if (nowTime < description) {
                $(time).addClass("future");
            }

});
}

compareTime();

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