let oldArr;
let res = []
let count = 0
function accumulatingArr(arr) {
    oldArr = arr
    if (arguments === [] || arr.length < 0) {
        alert('[]');
    } else {
        for (let i = 0; i < arr.length; i++) {
            count += arr[i]
            res.push(count)
        }
    }
}

accumulatingArr([1, 2, 3, 4])
console.log(oldArr);
console.log(res);
