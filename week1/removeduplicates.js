function removeDuplicates(a) {
	let duplicateValuesArray = [];
	let uniqueValuesArray = [];
	
	for(let i = 0; i < a.length; i++) {
	  if(!uniqueValuesArray.includes(a[i])){
        uniqueValuesArray.push(a[i]);
	  } else {
	  	duplicateValuesArray.push(a[i])
	  }
	
	}
	
    console.log(duplicateValuesArray);
    console.log(uniqueValuesArray);

    return !uniqueValuesArray.includes(duplicateValuesArray);


}

console.log(removeDuplicates([10,20,30,10,20,40,50,57,60,30]))