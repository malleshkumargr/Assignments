// function binaryToNumber(a){
//     //type code here
//         let intValue = 0;
//         for (let i = 0, j = a.length-1; i < a.length; i++,j--) {
//             intValue = intValue + (a[i] * Math.pow(2, j));
//         }
//         return intValue;
//     }

//     console.log(binaryToNumber([0, 1, 0, 1]));



//     function fakeBinary(a){
//         //type code here
//             let intValue = '';
//             for (let i = 0; i < a.length; i++) {
//                 if(Number(a.charAt(i)) < 5) {
//                     intValue += '0';
//                 } else {
//                     intValue += '1';
//                 }
//             }
//             return intValue;
//         }


//         console.log(fakeBinary('3457'));



        // function isDigit(a){
        //     //type code here
        //     console.log(Number(a));
        // //    console.log(typeof Number(a));
        //         // if (typeof Number(a) === number) {
        //         //     return true;
        //         // } else {
        //         //     return false;
        //         // }
        //     }

        //     console.log(isDigit("3"));
        //     console.log(isDigit("  3  "));
        //     console.log(isDigit("-3.23"));


        //     console.log(isDigit("3-4"));
        //     console.log(isDigit("  3   5"));
        //     console.log(isDigit("3 5"));
        //     console.log(isDigit("zero"));


        function findUnique(a){
            //type code here
            console.log(a.u)
                let uniqueNum = null;
                const obj = a.reduce(function (countObj, num) {
                    if (num in countObj) {
                        countObj[num] = countObj[num] + 1;
                    } else {
                        countObj[num] = 1;
                    }
                    return countObj;
                }, {});
            
                for (let key in obj) {
                    if (obj[key] === 1) {
                        uniqueNum = key;
                    }
                }
            
                return uniqueNum;
            }

            console.log(findUnique([ 1, 8, 4, 4, 6, 1, 8]));

