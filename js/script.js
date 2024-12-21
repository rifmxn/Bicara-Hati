const token = '6168893975:AAHElJdasdeUJaZM63Arm9B-JioJH9AIK-Y';
const group_id = '-4744108887';

const form = document.getElementById('form-telegram');
form.addEventListener('submit', async function (event) {
  event.preventDefault(); // Mencegah form diarahkan ke halaman lain

  // Ambil data dari form
  const username = document.getElementById('Username').value;
  const email = document.getElementById('Email').value;
  const phone = document.getElementById('nombor').value;
  const message = document.getElementById('Message').value;

  // Membuat pesan yang akan dikirim ke bot Telegram
  const text = `
  **Username:** ${username}
  **Email:** ${email}
  **No. Telefon:** ${phone}
  **Pesan:** ${message}
  `;

  // Kirim data ke Telegram menggunakan Bot API
  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: group_id,
        text: text,
        parse_mode: 'Markdown' // Mengaktifkan format Markdown untuk teks yang lebih kaya
      })
    });

    const data = await response.json();

    if (data.ok) {
      alert('Formulir berhasil dikirim!');
      form.reset(); // Reset form setelah pengiriman berhasil
    } else {
      alert('Gagal mengirim formulir. Coba lagi nanti.');
    }
  } catch (error) {
    alert('Terjadi kesalahan saat mengirim formulir. Periksa internet Anda.');
    console.error('Error:', error);
  }
});

