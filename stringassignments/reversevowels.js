function reverseVowels(a) {

    const vowelsToReverse = a.match(/[aeiouAEIOU]/g) !== null ? a.match(/[aeiouAEIOU]/g) : [];
    console.log("Vowels to Reverse: "+vowelsToReverse);

    if (vowelsToReverse.length > 0) {
        const arr = a.split('');
        let lastIndex = vowelsToReverse.length - 1;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].match(/[aeiouAEIOU]/) !== null) {
                arr[i] = vowelsToReverse[lastIndex];
                lastIndex--;
            }
        }
        return arr.join('');
    } else {
        return a;
    }
}

console.log(reverseVowels("Hello!"));
console.log(reverseVowels("Tomatoes"));
console.log(reverseVowels("Reverse Vowels In A String"));
console.log(reverseVowels("aeiou"));
console.log(reverseVowels("why try, shy fly?"));