function parse(inputStr) {
    let value = 0;
    let output = [];

    for (let char of inputStr) {
        switch (char) {
            case 'p':
                value += 1;
                break;
            case 'm':
                value -= 1;
                break;
            case 's':
                value = value * value;
                break;
            case 'o':
                output.push(value);
                break;
            default:
                break;
        }
    }

    return output;
}

// Test case
console.log(parse("ppppsmoso")); 
