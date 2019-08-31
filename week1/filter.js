let arr = [12, 5, 8, 130,5,8,130,12, 44];
let uniqueNumber = null;

function isBigEnough(arr) {
    let filteredArr = arr.filter(function(num,index,array1){
        return array1.indexOf(num) !== index;
    });
    // if(arr.includes(filteredArr))
 
    arr.forEach(function(num) {
        if(!filteredArr.includes(num)) {
            uniqueNumber = num;
        }
    });
    return uniqueNumber;
}

console.log(isBigEnough(arr));



// function findUnique(a){
//     //type code here
//         let uniqueNum = null;
//         const obj = a.reduce(function (countObj, num) {
//             if (num in countObj) {
//                 countObj[num] = countObj[num] + 1;
//             } else {
//                 countObj[num] = 1;
//             }
//             return countObj;
//         }, {});
    
//         for (let key in obj) {
//             if (obj[key] === 1) {
//                 uniqueNum = key;
//             }
//         }
    
//         return uniqueNum;
//     }

