// function flattenArray(a){
//     //type code here
//    let flattenArr =  a.flat();
//    return flattenArr;
// }


// console.log(flattenArray([1, [2], [3, [4,5]]]));
var arr1 = [1, 2, [3, 4]];


const newArr = arr1.reduce((acc, val) => acc.concat(val), []);// [1, 2, 3, 4]

//or
const flatSingle = arr => [].concat(...arr1);

console.log(newArr);
console.log(flatSingle());


var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']


var array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());
// expected output: "1,2,a,1a"



//to enable deep level flatten use recursion with reduce and concat
var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];

function flattenDeep(arr1) {
   return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}
flattenDeep(arr1);// [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]




//non recursive flatten deep using a stack
var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];
function flatten(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    // pop value from stack
    const next = stack.pop();
    if (Array.isArray(next)) {
      // push back array items, won't modify the original input
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  //reverse to restore input order
  return res.reverse();
}
flatten(arr1);// [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]




//recursive flatten deep
function flatten(array) {
    var flattend = [];
    !(function flat(array) {
      array.forEach(function(el) {
        if (Array.isArray(el)) flat(el);
        else flattend.push(el);
      });
    })(array);
    return flattend;
  }
