function camelCase(inputStr, delimiter) {
    const words = inputStr.split(delimiter);

    let camelCased = words[0][0].toUpperCase() === words[0][0]
        ? words[0]
        : words[0].toLowerCase();

    for (let i = 1; i < words.length; i++) {
        camelCased += words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    return camelCased;
}

// Test cases
console.log(camelCase("the-test-case", "-"));
console.log(camelCase("The_First_Word_Capital", "_"));     
