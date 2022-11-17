const HTMLtime = document.querySelector('.time');
const HTMLDate = document.querySelector('.date');
const HTMLGreeting = document.querySelector('.greeting')
const HTMLName = document.querySelector('.name')
HTMLName.placeholder = '[Enter name]';

//Функция вывода времени
function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    HTMLtime.textContent = currentTime;
    setTimeout(showTime, 1000)
    showDate();
    addGreetingToHtml();
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

//Функция получения времени суток
function getTimeOfDay(){
    const date = new Date();
    const hour = date.getHours();
    
    if(hour >= 8 && hour <= 12){
        return 'morning'
    } else if(hour > 12 && hour <= 17){
        return 'afternoon'
    } else if(hour > 17 && hour < 24){
        return 'evening'
    } else{
        return 'night'
    }
}

//Функция формирования строки приветствия и добавления ее в dom
function addGreetingToHtml (){
    const timeOfDay = getTimeOfDay();
    const greetingText = `Good, ${timeOfDay},`;
    HTMLGreeting.textContent = greetingText;
}

//Функция сохраняющая данные в localStorage
function setLocalStorage() {
    localStorage.setItem('name', HTMLName.value);
}
window.addEventListener('beforeunload', setLocalStorage);

//Функция получения данных из localStorage
function getLocalStorage() {
    if(localStorage.getItem('name')){
        HTMLName.value = localStorage.getItem('name', HTMLName.value);
    }
}
window.addEventListener('load', getLocalStorage);