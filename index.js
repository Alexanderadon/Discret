
  // Вставить в браузер для работы

  // 1

  function findRationalNumber() {
    const numerator = 320229;
    const denominator = 999;
    const rationalNumber = numerator / denominator;
    return rationalNumber;
  }

  const rationalNumber = findRationalNumber();
  console.log("The rational number is:", rationalNumber);

  // 2

  function calculateQuotientAndRemainder(dividend, divisor) {
    const quotient = Math.floor(dividend / divisor);
    const remainder = dividend % divisor;
    return { quotient, remainder };
  }

  // a) 19 деленное на 7
  const divisionA = calculateQuotientAndRemainder(19, 7);
  console.log("Quotient for 19 divided by 7:", divisionA.quotient);
  console.log("Remainder for 19 divided by 7:", divisionA.remainder);

  // b) -111 деленное на 11
  const divisionB = calculateQuotientAndRemainder(-111, 11);
  console.log("Quotient for -111 divided by 11:", divisionB.quotient);
  console.log("Remainder for -111 divided by 11:", divisionB.remainder);

  // c) 789 деленное на 23
  const divisionC = calculateQuotientAndRemainder(789, 23);
  console.log("Quotient for 789 divided by 23:", divisionC.quotient);
  console.log("Remainder for 789 divided by 23:", divisionC.remainder);

  // d) 1001 деленное на 13
  const divisionD = calculateQuotientAndRemainder(1001, 13);
  console.log("Quotient for 1001 divided by 13:", divisionD.quotient);

  // 3

  function calculateModulo(b) {
    const bMod7 = b % 7; // Вычисляем b mod 7
    const result = (5 * bMod7) % 7; // Вычисляем 5b mod 7
    return result;
  }

  const b = 4; // Предположим, что b mod 7 = 4
  const result = calculateModulo(b);
  console.log("5b mod 7:", result);

  // 4

  function gcd(a, b) {
    if (b === 0) return a;
    else return gcd(b, a % b);
  }

  function areCoprime(a, b) {
    return gcd(a, b) === 1;
  }

  function findCoprimesTo30() {
    const coprimes = [];
    for (let i = 1; i < 30; i++) {
      if (areCoprime(i, 30)) {
        coprimes.push(i);
      }
    }
    return coprimes;
  }

  const coprimesTo30 = findCoprimesTo30();
  console.log(
    "Положительные целые числа меньше 30, взаимно простые 30:",
    coprimesTo30
  );

  // 5

  // a)

  function gcd(a, b) {
    if (b === 0) return a;
    else return gcd(b, a % b);
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  const numA = 41 * 43 * 53;
  const gcdA = gcd(numA, numA);
  const lcmA = lcm(numA, numA);

  console.log("a) НОД:", gcdA);
  console.log("   НОК:", lcmA);

  // b)

  function gcd(a, b) {
    if (b === 0) return a;
    else return gcd(b, a % b);
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  const numB1 = 313 * 517;
  const numB2 = 212 * 721;
  const gcdB = gcd(numB1, numB2);
  const lcmB = lcm(numB1, numB2);

  console.log("b) НОД:", gcdB);
  console.log("   НОК:", lcmB);

  // c)

  function gcd(a, b) {
    if (b === 0) return a;
    else return gcd(b, a % b);
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  const numC1 = 1111;
  const numC2 = 0;
  const gcdC = gcd(numC1, numC2);
  const lcmC = (numC1 * numC2) / gcdC; // НОК(1111, 0) = 0, так как 0 является делителем любого числа.

  console.log("c) НОД:", gcdC);
  console.log("   НОК:", lcmC);
