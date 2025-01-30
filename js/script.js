// Fungsi untuk menghitung BMI
function calculateBmi() {
    // Ambil nilai input dari form
    const beratBadan = parseFloat(document.getElementById('input-berat-badan').value);
    const usia = parseInt(document.getElementById('input-usia').value);
    const tinggiBadan = parseFloat(document.getElementById('input-tinggi-badan').value) / 100; // Convert cm to meters

    // Validasi input
    if (isNaN(beratBadan) || isNaN(usia) || isNaN(tinggiBadan)) {
        alert('Mohon masukkan semua data dengan benar!');
        return;
    }

    // Hitung BMI
    const bmi = beratBadan / (tinggiBadan * tinggiBadan);
    const bmiValueElement = document.getElementById('result-bmi');
    bmiValueElement.innerText = bmi.toFixed(2); // Format 2 angka desimal

    // Menampilkan hasil BMI
    showBmiResult(bmi);

    // Tampilkan saran berdasarkan kategori BMI
    displayBmiAdvice(bmiNote);
}

// Fungsi untuk menampilkan saran berdasarkan kategori BMI
function displayBmiAdvice(bmi) {
    const underweight = document.getElementById('underweight');
    const normal = document.getElementById('normal');
    const overweight = document.getElementById('overweight');
    const bmiNote = document.getElementById('bmiNote');
    const bmiAdvice = document.getElementById('bmiAdvice');

    // Menyembunyikan semua kategori BMI
    underweight.style.display = 'none';
    normal.style.display = 'none';
    overweight.style.display = 'none';

    // Menampilkan pesan kategori BMI yang sesuai
    if (bmi < 18.5) {
        underweight.style.display = 'block';
        bmiNote.innerText = "BMI Anda menunjukkan bahwa Anda kurang berat badan.";
        bmiAdvice.innerText = "Cobalah untuk memperbaiki pola makan Anda dan konsultasikan dengan dokter atau ahli gizi.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        normal.style.display = 'block';
        bmiNote.innerText = "BMI Anda berada dalam kisaran normal.";
        bmiAdvice.innerText = "Pertahankan gaya hidup sehat dengan pola makan seimbang dan olahraga rutin.";
    } else {
        overweight.style.display = 'block';
        bmiNote.innerText = "BMI Anda menunjukkan bahwa Anda kelebihan berat badan.";
        bmiAdvice.innerText = "Pertimbangkan untuk melakukan perubahan gaya hidup yang sehat, seperti diet dan olahraga.";
    }
}

// Fungsi untuk mereset form
function resetForm() {
    // Reset form input
    document.querySelector('form').reset();

    // Reset nilai BMI dan teks terkait
    document.getElementById('result-bmi').innerText = '0';
    document.getElementById('bmiNote').innerText = '';
    document.getElementById('bmiAdvice').innerText = '';

    // Sembunyikan kategori berat badan
    document.getElementById('underweight').style.display = 'none';
    document.getElementById('normal').style.display = 'none';
    document.getElementById('overweight').style.display = 'none';

    // Reset bagian hasil BMI di bawah perhitungan
    document.getElementById('bmiValueBottom').innerText = ''; // Reset hasil nilai BMI di bawah
    document.getElementById('bmiAdvice').innerText = ''; // Reset saran/penyakit terkait BMI
}


// Fungsi untuk menampilkan hasil BMI
function showBmiResult(bmi) {
    const bmiValueBottom = document.getElementById('bmiValueBottom');
    if (bmi) {
        bmiValueBottom.innerText = `Hasil BMI: ${bmi.toFixed(2)}`;
    }
}
