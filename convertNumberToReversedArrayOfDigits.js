function digitize(number) {
    if(number == 0 ) return [0];
    const result = [];
    while (number) {
        let rest = number % 10;//1
        result.push(rest);
        number = Math.floor(number / 10);//3523
    }
    return result;
}
//35231
console.log(digitize(0));