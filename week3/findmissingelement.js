const arr = [1,2,3,5];
const arr1 = [19,18,16,15];
const arr2 = [100,101,102,104];

// function findMissingEle(arr) {
//     let sortedArr = arr.sort();
//     let missingNumber = 0;
//     for(let i = 0; i < sortedArr.length; i++) {
//         if(sortedArr[i + 1] - sortedArr[i] > 1) {
//             missingNumber = sortedArr[i] + 1;
//         }
//     }   

//     return missingNumber;
// }



function findMissingEle(arr) {
  //  let sortedArr = arr.sort();
    let n = arr.length + 1;
    let a = arr[0];
    let l = arr[arr.length - 1];
    let missingNumber = 0;
    for(let i = 0; i < sortedArr.length; i++) {
        if(sortedArr[i + 1] - sortedArr[i] > 1) {
            missingNumber = sortedArr[i] + 1;
        }
    }   

    return missingNumber;
}

console.log(findMissingEle(arr2));
