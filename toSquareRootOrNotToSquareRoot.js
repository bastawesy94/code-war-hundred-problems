function squareOrSquareRoot(array) {
    let result = []
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(element)
        console.log(Math.sqrt(element));
        console.log(Math.ceil(Math.sqrt(element)));
        if (Math.sqrt(element) == Math.ceil(Math.sqrt(element))) {
            result.push(Math.sqrt(element));
        }
        else
            result.push(element * element);
    }
    return result;
}
console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]))
