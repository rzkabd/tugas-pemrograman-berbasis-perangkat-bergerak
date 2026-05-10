function isPrima(n: number): boolean {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function cetakBilanganPrima(batas: number): void {
  console.log(`Bilangan Prima dari 1 sampai ${batas}`);
  console.log("=".repeat(40));

  const prima: number[] = [];
  for (let i = 2; i <= batas; i++) {
    if (isPrima(i)) prima.push(i);
  }
  console.log(prima.join(", "));
  console.log(`\nTotal bilangan prima: ${prima.length}`);
  console.log("=".repeat(40));
}

const nim: string = "053276192";
const duaDigitAkhir: number = parseInt(nim.slice(-2)); // 92
const batas: number = duaDigitAkhir + 10;              // 102

console.log(`NIM              : ${nim}`);
console.log(`2 digit terakhir : ${duaDigitAkhir}`);
console.log(`Batas akhir      : ${duaDigitAkhir} + 10 = ${batas}`);
console.log();
cetakBilanganPrima(batas);