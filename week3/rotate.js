function rotate(a,b){
    for(let i = 0; i < b; i++) {
        a.unshift(a.pop());
    }
    return a;
}

console.log(rotate([22, 11, 500, 92], 2))
console.log(rotate([11, 15, 28, 9, 10], 0));