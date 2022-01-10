
const numberAtom = (n) => (op) => {
    if (op) {
        return op(n);
    }

    return n;
};

const binaryOperator = (operation) => (rhs) => (lhs) => operation(lhs, rhs);

const zero = numberAtom(0);
const one = numberAtom(1);
const two = numberAtom(2);
const three = numberAtom(3);
const four = numberAtom(4);
const five = numberAtom(5);
const six = numberAtom(6);
const seven = numberAtom(7);
const eight = numberAtom(8);
const nine = numberAtom(9);

const plus = binaryOperator((lhs, rhs) => lhs + rhs);
const minus = binaryOperator((lhs, rhs) => lhs - rhs);
const times = binaryOperator((lhs, rhs) => lhs * rhs);
const dividedBy = binaryOperator((lhs, rhs) => parseInt(lhs / rhs));

console.log(seven(times(five()))); // must return 35
console.log(four(plus(nine()))); // must return 13
console.log(eight(minus(three()))); // must return 5
console.log(six(dividedBy(two()))); // must return 3
