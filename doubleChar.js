function doubleChar(str) {
    let result = '';
    for (let index = 0; index < str.length; index++) {
        const char = str[index];
        for (let index = 0; index < 2; index++) {
            result += char;
        }
    }
    return result;
  }
  console.log(doubleChar('String'))