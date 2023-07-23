function positiveSum(array) {
    // let sum = 0;
    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
    //     if (element > 0)
    //         sum += element;
    // }
    // return sum;
    const filteredList = array.filter((element => element>0))
    return filteredList.reduce((acc,current)=> acc+current, 0)
}

console.log(positiveSum([-50,10,-20,20,0,-50]))