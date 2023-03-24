export const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]

// const reversed = numbers.reverse();
// const sortd = numbers.sort();

function compare(a,b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return +1;
    }
    return 0
}

numbers.reverse().sort(compare)
console.log(numbers)