function repeatStr (number, string) {
    let result='';
    for (let index = 0; index < number; index++) {
        result += string;
    }
    return result;
  }

  console.log(repeatStr(5,"hi"))