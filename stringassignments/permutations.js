function permut(string) {
    if (string.length < 2) return string; // This is our break condition

    var permutations = []; // This array will hold our permutations

    for (var i=0; i<string.length; i++) {
        var char = string[i];
        console.log("char: "+char);

        // Cause we don't want any duplicates:
        if (string.indexOf(char) != i) // if char was used already
            continue;           // skip it this time

        var remainingString = string.slice(0,i) + string.slice(i+1,string.length); //Note: you can concat Strings via '+' in JS
        console.log("remainingString: "+remainingString);

        for (var subPermutation of permut(remainingString))
            permutations.push(char + subPermutation)

    }
    return permutations;
}



// function getPermutations(string) {
//     var results = [];

//     if (string.length === 1) 
//     {
//       results.push(string);
//       return results;
//     }

//     for (var i = 0; i < string.length; i++) 
//     {
//       var firstChar = string[i];
//       var otherChar = string.substring(0, i) + string.substring(i + 1);
//       var otherPermutations = getPermutations(otherChar);
      
//       for (var j = 0; j < otherPermutations.length; j++) {
//         results.push(firstChar + otherPermutations[j]);
//       }
//     }
//     return results;
//   }
  
//   var permutation = getPermutations('xyz');
//   console.log("Total permutation: "+permutation.length);
//   console.log(permutation);


console.log(permut("xyz"));