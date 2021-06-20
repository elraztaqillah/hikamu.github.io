// #memberikan teks sederhana
// alert('hatihati di jalan');

// #bisa menginput Text 
// prompt('nama kamu');
// var nama = prompt('nama kamu');
// alert('Selamat Datang ' + nama );
// confirm(nama);


// confirm; untuk mengkonfirmasi, tapi bisa menentukan jika user menekan tombol ok / cancel
// var tes = confirm('yakin');
// alert(tes);

// var tes = confirm('yakin');
// if (tes == true) {
//     alert('Sampai Jumpa Kembali');
// } else {
//     alert('terimakasih');
// }

// alert('Selamat Datang')
// var nama = prompt('Silahkan Masukkan Nama Kamu');
// alert('Hai ' + nama);

alert('Selamat Datang');
var lagi = true;

while (lagi == true) {
    var nama = prompt('Masukkan Nama');
    alert('Halo ' + nama + ' Jaga Kesehatan yaa <3');

    lagi = confirm('coba lagi');
}

alert('Thank You!');

