function countPositivesSumNegatives(input) {
    // let negativesCount = 0;
    // for (let index = 0; index < input.length; index++) {
        //     if (input[index] < 0)
    //         negativesCount += input[index];
    
    // }
    let positivesCount = input.filter(element => element > 0).length;
    let negativesSum = input.filter(element => element < 0).reduce((acc,curr)=>acc + curr , 0);
    return [positivesCount, negativesSum];
}
console.log(countPositivesSumNegatives([]))