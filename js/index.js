function app() {
  const $days = document.getElementById('days');
  const $hours = document.getElementById('hours');
  const $minutes = document.getElementById('minutes');
  const $seconds = document.getElementById('seconds');

  let countDown = 777341000;

  const counter = setInterval(function() {

    let days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    let hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    if (String(days).length == 1) {
      days = `0${days}`
    }
    if (String(hours).length == 1) {
      hours = `0${hours}`
    }
    if (String(minutes).length == 1) {
      minutes = `0${minutes}`
    }
    if (String(seconds).length == 1) {
      seconds = `0${seconds}`
    }

    $days.dataset.digit = days;
    $hours.dataset.digit = hours;
    $minutes.dataset.digit = minutes;
    $seconds.dataset.digit = seconds;

    countDown -= 1000;

    if (countDown <= 0) {
      clearInterval(counter);
    }
  }, 1000);
}

app();
