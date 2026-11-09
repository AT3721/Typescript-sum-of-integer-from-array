// Định nghĩa hàm kiểm tra số nguyên tố
function isPrime(number: number): boolean {
    let isPrime = true;
    if (number < 2) {
        isPrime = false;
    } else if (number > 2) {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}

// Khai báo mảng số nguyên và biến tính tổng
let array: number[] = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
let sum: number = 0;

// Lặp qua mảng, kiểm tra và tính tổng các số nguyên tố
for (let number of array) {
    if (isPrime(number)) {
        sum += number;
    }
}

console.log("Tổng các số nguyên tố trong mảng trên là: " + sum);