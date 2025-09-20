const form = document.getElementById("rsvp-form");
const thankyou = document.getElementById("thanks");

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch('php/koneksi.php', {
        method: 'POST',
        body: formData
    })
    .then(res => res.text())
    .then(data => {
        if (data.includes("sukses")) {
            form.style.display = "none";
            thankyou.style.display = "block";
        } else {
            alert("gagal menyimpan data : " + data);
        }
    })
    .catch (err => {
        alert("Terjadi error : " + err);
    });
});