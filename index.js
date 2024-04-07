function filterGreator(number) {
    return number.filter(function (number) { return number > 10; });
}
var numbers = [4, 13, 12, 5, 16, 78, 0, 89];
console.log(filterGreator(numbers));
