const HTMLtime = document.querySelector('.time');
const HTMLDate = document.querySelector('.date');
const HTMLGreeting = document.querySelector('.greeting')

//Функция вывода времени
function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    HTMLtime.textContent = currentTime;
    setTimeout(showTime, 1000)
    showDate();
}
showTime();

//Функция вывода даты
function showDate() {
    const date = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    const currentDate = date.toLocaleDateString('en-US', options);
    HTMLDate.textContent = currentDate;
}

//Функция для отображения дня недели
// function getWeekDay(date){
//     let day = date.getDay();
//     switch(day){
//         case 0:
//             return 'Sunday'
//         case 1:
//             return 'Monday'
//         case 2:
//             return 'Tuesday'
//         case 3:
//             return 'Wednesday'
//         case 4:
//             return 'Thursday'
//         case 5:
//             return 'Friday'
//         case 6:
//             return 'Saturday'
        
//     }
// }
