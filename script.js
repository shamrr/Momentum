const HTMLtime = document.querySelector('.time');
const HTMLDate = document.querySelector('.date');
const HTMLGreeting = document.querySelector('.greeting')
const HTMLName = document.querySelector('.name')
HTMLName.placeholder = '[Enter name]';
const HTMLBody = document.querySelector('body');
const HTMLSlidePrev = document.querySelector('.slide-prev')
const HTMLSlideNext = document.querySelector('.slide-next')

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

let rand;
//Функция получения рандомного числа в промежутке
function getRandomNum(min, max) {
    rand = String(Math.floor(min + Math.random() * (max + 1 - min)));
    if(rand.length === 1){
        return rand.padStart(2, "0");
    }
    return rand;
}

//Функция изменния фона в зависимости от времени суток
function setBg(timeOfDay, bgNum) {
    console.log(bgNum);
    HTMLBody.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg)`;
}

setBg(getTimeOfDay(), getRandomNum(1,20));

//Слайдер вперед
function getSlideNext() {
    if(rand > 0 && rand < 20){
        rand = String(rand);
        if(rand.length == 1){
            setBg(getTimeOfDay(), String((++rand)).padStart(2, "0"));
        } else{
            setBg(getTimeOfDay(), ++rand);
        }
    } else {
        rand = '0';
        rand = String(rand);
        if(rand.length == 1){
            setBg(getTimeOfDay(), String((++rand)).padStart(2, "0"));
        } else{
            setBg(getTimeOfDay(), ++rand);
        }
    }
}
HTMLSlideNext.addEventListener('click', getSlideNext);

// Слайдер назад
function getSlidePrev() {
    if(rand > 0){
        setBg(getTimeOfDay(), String((--rand)).padStart(2, "0"));
    } else {
        rand = '21';
        rand = String(rand);
        if(rand.length == 1){
            setBg(getTimeOfDay(), String((--rand)).padStart(2, "0"));
        } else{
            setBg(getTimeOfDay(), --rand);
        }
    }
}
HTMLSlidePrev.addEventListener('click', getSlidePrev);

