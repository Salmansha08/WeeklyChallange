function checkCats(CatsTuti, CatsNining) {
  /* 
  Kasus 1: Tuti mengetahui bahwa pemilik dari Kucing Pertama
  dan dua Kucing Terakhir sebenarnya memiliki anjing, bukan
  kucing! Jadi, buatlah salinan dari array milik Tuti, dan
  hapus usia kucing dari array yang disalin tersebut.
  */
  const correctedCatsTuti = CatsTuti.slice();
  correctedCatsTuti.splice(0, 1); // Hapus usia kucing pertama
  correctedCatsTuti.splice(-2);    // Hapus dua usia kucing terakhir

  /* 
  Kasus 2: Buatlah sebuah array yang berisi data Tuti (yang
  sudah dikoreksi) dan data Nining
  */
  const allCats = correctedCatsTuti.concat(CatsNining);

  /*
	Untuk setiap Kucing Yang tersisa, tampilkan di konsol
	apakah itu Kucing Dewasa Kucing Nomorl adalah Kucing 
	Dewasa, dan berusia 5 tahun") atau Kucing Kecil ("Kucing
	Nomor 2 masih anak-anak")
  */
  for (let i = 0; i < allCats.length; i++) {
    if (allCats[i] >= 3) {
      console.log(`Kucing Nomor ${i + 1} adalah Kucing Dewasa, dan berusia ${allCats[i]} tahun.`);
    } else {
      console.log(`Kucing Nomor ${i + 1} masih anak-anak.`);
    }
  }
}

// Data uji 1
const CatsTuti1 = [3, 5, 2, 12, 7];
const CatsNining1 = [4, 1, 15, 8, 3];
console.log("Data Uji 1:");
checkCats(CatsTuti1, CatsNining1);

// Data uji 2
const CatsTuti2 = [9, 16, 6, 8, 3];
const CatsNining2 = [10, 5, 6, 1, 4];
console.log("\nData Uji 2:");
checkCats(CatsTuti2, CatsNining2);
