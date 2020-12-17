function app() {
  const date = 'Dec 25, 2020 00:00:00';

  const $days = document.getElementById('days');
  const $hours = document.getElementById('hours');
  const $minutes = document.getElementById('minutes');
  const $seconds = document.getElementById('seconds');
  const $counter = document.getElementById('counter');
  const $title = document.getElementById('title');
  const $top_card_days = document.getElementById('top_card_days');
  const $top_card_hours = document.getElementById('top_card_hours');
  const $top_card_minutes = document.getElementById('top_card_minutes');
  const $top_card_seconds = document.getElementById('top_card_seconds');

  const countDownDate = new Date(date).getTime();

  const countdown = setInterval(() => {

    const now = new Date().getTime();

    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $days.textContent = days;
    $hours.textContent = hours;
    $minutes.textContent = minutes;
    $seconds.textContent = seconds;
    
    $top_card_seconds.classList.add('count')

    if (distance <= 0) {
      $counter.style.display = 'none';
      $title.textContent = 'LAUNCH!';
      clearInterval(countdown);
    }
  }, 1000);
}

app();
