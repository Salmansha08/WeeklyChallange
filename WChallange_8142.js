function hitungKubus(panjangKubus) {
  for (let i = 1; i <= panjangKubus; i++) {
    const kubus = i * i * i;
    console.log(`Current Number is: ${i} and the cube is ${kubus}`);
  }
}

const panjangKubus = 6;
hitungKubus(panjangKubus);