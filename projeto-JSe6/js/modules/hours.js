import {
  active
} from './config.js';

export default function initHours() {
  const operatingHours = document.querySelector('[data-weekend]');
  const weekendDays = operatingHours.dataset.weekend.split(',').map(Number);
  // console.log(weekendDays);
  const weekendHours = operatingHours.dataset.hour.split(',').map(Number);
  // console.log(weekendHours)
  const dataNow = new Date()
  // console.log(dataNow)
  const dayNow = dataNow.getDay();
  // console.log(dayNow)
  const hourNow = dataNow.getUTCHours() - 3; //getHours() também funciona, mas pega hora do PC
  // console.log(hourNow)
  const openWeekend = weekendDays.indexOf(dayNow) !== -1
  // console.log(openWeekend)
  const openHour = (hourNow >= weekendHours[0] && hourNow < weekendHours[1]);
  // console.log(openHour)

  if (openWeekend && openHour)
    operatingHours.classList.add('open');
}