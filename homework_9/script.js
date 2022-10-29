const fibonacci = function fib(n) {
    if (n === 0) {
        return n;
    }
    let a = 1;
    let b = 1;
    for (let i = 2; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
};

for (i = 0; i < 5; i++) {
    console.log(fibonacci(i));
}
