// Начало: 05.06.2023
const firstSumm = 750;

let start = new Date("06.05.2023 00:00");
let now = new Date();

document.querySelector('.dates').innerHTML = "Начало - 05.06.2023 <br>" + "Сегодня - " + getButtyDate(now);
const diff = now - start;
const daysGone = parseInt(getGoneDays(diff));
document.querySelector('.days__gone').innerHTML = `Прошло: ${daysGone} дней`;


const payouts = [100, 15];
const takes = [10];



let currSumm = firstSumm + daysGone;

for (let i = 0; i < payouts.length; i++) {
    currSumm -= payouts[i];
}

for (let i = 0; i < takes.length; i++) {
    currSumm += takes[i];
}


document.querySelector('.itog').innerHTML = `Итого долг: ${parseInt(currSumm)}грн`;




function getGoneDays(differ) {
    return differ / 86400000;
}

function getButtyDate(date) {
    let day = "";
    if ((date.getDate()) < 10) {
        day = "0" + date.getDate();
    } else {
        day = date.getDate();
    }


    let month = "";
    if ((date.getMonth() + 1) < 10) {
        month = "0" + (date.getMonth() + 1);
    } else {
        month = (date.getMonth() + 1);
    }

    return day + "." + month + "." + date.getFullYear();
}

function getButtyTime(date) {
    let hour = "";
    if ((date.getHours()) < 10) {
        hour = "0" + date.getHours();
    } else {
        hour = date.getHours();
    }

    let minute = "";
    if ((date.getMinutes()) < 10) {
        minute = "0" + date.getMinutes();
    } else {
        minute = date.getMinutes();
    }

    return hour + ":" + minute;
}