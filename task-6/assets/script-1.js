function declOfNum(number, words, numberNeeded = true) {
    const numberWord = numberNeeded ? `${number} ` : '';
    return `${numberWord}${words[(number % 100 > 4 && number % 100 < 20)
        ? 2
        : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10 : 5]]}`;
}

function getDays(day) {
    const date = new Date(day);
    const now = Date.now();
    let remaining = date - now;
    remaining /= 1000; // секунды до даты
    remaining /= 60;    // минуты до даты
    remaining /= 60;    // часы до даты
    remaining /= 24;
    return declOfNum(Math.round(remaining), ['день', 'дня', 'дней']);
}

const paragraph = document.querySelector('.form-element p');

paragraph.innerText = getDays('2136-01-01 00:00:00')+' до 1 января 2136 года.';


