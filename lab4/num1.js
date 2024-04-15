function findMin(numArr, num1) {
    numArr.push(num1);
    return Math.min(...numArr)
}
console.log(findMin([1, 2], 3));
console.log(findMin(1, 3));
