function countExtraCharacters(inputStr) {
    let extraCount = 0;

    for (let char of inputStr) {
        if (char < 'a' || char > 'n') {
            extraCount += 1;
        }
    }

    return extraCount;
}

// Test cases
console.log(countExtraCharacters("aaabdbnhaikjjm"));
console.log(countExtraCharacters("abaxbdbbyyhwawiwjjjwem")); 
