let countInternal
let countEnternal
let x = []
let y
function matix(...arr) {
    for (let i = 0; i < arr.length; i++) {
        x.push(arguments[i])
        countInternal = arr[i].length
        countEnternal = arr.length
        y = arr[i]
    }
    if (countInternal < countEnternal) {
        for (let i = 0; i < x.length; i++) {
            x[i].push(0)
            console.log(x);
        }
    } else if (countInternal == countEnternal) {
        console.log(arguments);
    }
}
matix([1, 20], [8, 5], [45, 25])