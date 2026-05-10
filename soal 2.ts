function cetakDeretAritmatika(start: number, beda: number, jumlah: number): void {
  console.log(`Start : ${start} | Beda : ${beda} | Jumlah : ${jumlah}`);
  console.log("=".repeat(40));

  const deret: number[] = [];
  for (let i = 0; i < jumlah; i++) {
    deret.push(start + i * beda);
  }
  console.log(deret.join(", "));
  console.log("=".repeat(40));
}

const nim: string = "053276192";
const duaDigitAkhir: number = parseInt(nim.slice(-2));
const digitKetigaDariBelakang: number = parseInt(nim[nim.length - 3]);
const start: number = duaDigitAkhir;
const beda: number = digitKetigaDariBelakang + 1;

console.log(`NIM                    : ${nim}`);
console.log();
cetakDeretAritmatika(start, beda, 10);