// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")


// isDigit("3-4")
// isDigit("  3   5")
// isDigit("3 5")
// isDigit("zero")



console.log("zero".trim());
console.log(Number("-3.23"));
console.log(Number("  3  "));
console.log(Number("3 5"));
function isDigit(a) {
    if(Number(a)) {
        return true;
    } else {
        return false;
    }
} 


console.log(isDigit("  3   5"));