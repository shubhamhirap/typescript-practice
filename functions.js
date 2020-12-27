var add = function (num1, num2) { return num1 + num2; };
add(5, 10);
// ? - represents optional parameter, optional parameter must be after the required parameter
function subtract(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log(subtract(10));
// default parameter
function mul(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 * num2;
}
console.log(mul(2, 3));
console.log(mul(3));
