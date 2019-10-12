setInterval(setclock, 1000);
const hour = document.querySelector('[data-hour]');
const minute = document.querySelector('[data-minute]');
const second = document.querySelector('[data-second]');

function setclock() {
    const nowdate = new Date;
    const sR = nowdate.getSeconds() / 60;
    const mR = (sR + nowdate.getMinutes()) / 60;
    const hR = (mR + nowdate.getHours()) / 60;
    setRotation(hour, hR);
    setRotation(minute, mR);
    setRotation(second, sR);
}
function setRotation(element, rR) {
    element.style.setProperty('--r', (rR * 360));
}
setclock();