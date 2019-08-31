const person = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
];
console.log(person);

person.sort(function(a,b){
    return a.year - b.year;
});

// person.sort(function(a,b){
//     let x = a.type.toLowerCase();
//     let y = b.type.toLowerCase();
//     if(x < y) {
//         return -1;
//     } else if(x > y) {
//         return 1;
//     } else {
//         return 0;
//     }
// });

console.log(person);