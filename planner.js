//function to keep track of time
// function compareTime() {
//     var nowTime = parseInt(moment().format('HH'));
//     //Start from 9AM, till 5PM
//     for (time = 9; time >= 17; time++) {
//         var timeBlock = parseInt($("#" + time + "hr").attr("data-index"));
//         console.log(timeBlock);
//         if (timeBlock < nowTime) {
//             $("#" + time + "hr").addClass("past");
//         } else if (timeBlock == nowTime) {
//             $("#" + time + "hr").addClass("present");
//         } else if (timeBlock > nowTime) {
//             $("#" + time + "hr").addClass("future");
//         }
//     }
// }

//function with event listener for the save button