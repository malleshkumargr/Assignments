const arr = ['a', 'b', 'c','d','e','f','g','h','i','j'];

function divideArr(arr,eleDispCount) {
    const arrLen = arr.length;
    const noOfPages = Math.ceil(arrLen / eleDispCount);
    let pageArr = [];
    let perPageArr = [];
    let index = 0;
    let condition = 0;
    let remainingEleInArr = 0;
        
    for(let i = 0; i < noOfPages; i++) {
        
        if(i === 0) {
            index = 0;
            condition = eleDispCount;
        }
        for(let j = index; j < condition; j++) {
            perPageArr.push(arr[j]);
        }
        pageArr.push(perPageArr);
        if(i === 0) {
            remainingEleInArr = arrLen - perPageArr.length;
        } else {
            remainingEleInArr = remainingEleInArr - perPageArr.length;
        }

        if(remainingEleInArr > 0) {
            if(remainingEleInArr > eleDispCount) {
                index = index + eleDispCount;
                condition = condition + eleDispCount;
            } else {
                index = index + perPageArr.length;
                condition = condition + remainingEleInArr;
            }
        }
        perPageArr = [];
    }
    return pageArr;
}

console.log(divideArr(arr,3));
console.log(divideArr(arr,4));
console.log(divideArr(arr,10));
console.log(divideArr(arr,1));
console.log(divideArr(arr,9));
console.log(divideArr(arr,5));
console.log(divideArr(arr,8)[0].indexOf('a'));
//console.log(divideArr(arr,0));