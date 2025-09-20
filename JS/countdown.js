const targetDate = new Date("Oct 20, 2025 00:00:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Hitung sisa waktu
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Tampilkan ke HTML
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // Jika countdown selesai
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("timer").innerHTML = "<h3>Acara Dimulai 🎊</h3>";
  }
}, 1000);
