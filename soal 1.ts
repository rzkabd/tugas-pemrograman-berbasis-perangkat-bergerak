function cetakSegitigaAngka(tinggi: number): void {
  console.log(`Pola Segitiga Angka (tinggi = ${tinggi})`);
  console.log("=".repeat(30));
  for (let baris = 1; baris <= tinggi; baris++) {
    let barisStr = "";
    for (let angka = 1; angka <= baris; angka++) {
      barisStr += angka;
      if (angka < baris) barisStr += " ";
    }
    console.log(barisStr);
  }
  console.log("=".repeat(30));
}

const nim: string = "053276192";
const tinggi: number = parseInt(nim[nim.length - 1]);

console.log(`NIM         : ${nim}`);
console.log(`Digit Akhir : ${tinggi}`);
console.log();
cetakSegitigaAngka(tinggi);