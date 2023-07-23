function twoHighest(arr) {
    if (arr == null || !arr || arr.length == 0) {
        return 0;
    }
    //get max
    let result = 0;
    function getMaxElement(array) {
        let max = array[0];

        let correctIndex = 0;
        for (let index = 0; index < array.length; index++) {
            if (array[index] > max) {
                max = array[index];
                correctIndex = index;
            }
        }
        return correctIndex;
    }
    function getMinElement(array) {
        let correctIndex = 0;
        let min = array[0];
        for (let index = 0; index < array.length; index++) {
            if (array[index] < min) {
                correctIndex = index;
                min = array[index];
            }
        }
        return correctIndex;
    }
    const max = getMaxElement(arr);
    console.log("max index => ", max);
    arr.splice(max, 1);
    console.log("arr => ", arr);

    const min = getMinElement(arr);
    console.log("min index => ", min);
    arr.splice(min, 1);
    console.log("after splice => ", arr);

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        result += element;
    }
    return result;
}
console.log(twoHighest([ -6, 20, -1, 10, -12 ]))