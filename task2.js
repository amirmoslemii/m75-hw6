let count = 0
let avrage;
function starRating(arr) {
    for (let i = 0; i < arr.length; i++) {
        let totalNum = count += arr[i]
        avrage = totalNum / arr.length
    }
}
starRating([5, 3, 4, 1, 0])
let star = '*'
let decimals = avrage - Math.floor(avrage); // get decimal
decimals = Math.round(decimals)
let res = avrage + decimals
console.log([avrage], star.repeat(res));
