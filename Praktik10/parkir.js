function hitungParkir(){
    // dapatkan nilai inputan user
    let masuk = document.getElementById('masuk').value
    let keluar = document.getElementById('keluar').value

    // dapatkan elemen utk menampilkan hasil
    let hasilDurasi = document.querySelector("#hasilDurasi")
    let hasilBiaya = document.querySelector("#hasilBiaya")

    // hitung durasi
    let durasi = keluar - masuk

    // hitung biaya
    let biaya = 3000

    // menambah biaya 1000 setiap  setelah 2 jam pertama
    if(durasi > 2) {
        biaya += (durasi - 2) * 1000
    }

    console.log(biaya);
    console.log(durasi);

    // menampilkan ke html
    hasilDurasi.innerHTML = durasi + "Jam"
    hasilBiaya.innerHTML = "Rp." + biaya
}