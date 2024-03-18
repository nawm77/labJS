function attachEventsListeners() {
    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');
    daysBtn.addEventListener('click', function() {
        convertTime('days');
    });
    hoursBtn.addEventListener('click', function() {
        convertTime('hours');
    });
    minutesBtn.addEventListener('click', function() {
        convertTime('minutes');
    });
    secondsBtn.addEventListener('click', function() {
        convertTime('seconds');
    });
}

function convertTime(unit) {
    let value = parseFloat(document.getElementById(unit).value);
    let days, hours, minutes, seconds;
    switch (unit) {
        case 'days':
            days = value;
            hours = value * 24;
            minutes = value * 24 * 60;
            seconds = value * 24 * 60 * 60;
            break;
        case 'hours':
            days = value / 24;
            hours = value;
            minutes = value * 60;
            seconds = value * 60 * 60;
            break;
        case 'minutes':
            days = value / (24 * 60);
            hours = value / 60;
            minutes = value;
            seconds = value * 60;
            break;
        case 'seconds':
            days = value / (24 * 60 * 60);
            hours = value / (60 * 60);
            minutes = value / 60;
            seconds = value;
            break;
        default:
            break;
    }
    document.getElementById('days').value = days.toFixed(2);
    document.getElementById('hours').value = hours.toFixed(2);
    document.getElementById('minutes').value = minutes.toFixed(2);
    document.getElementById('seconds').value = seconds.toFixed(2);
}
