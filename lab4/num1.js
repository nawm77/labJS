function findMin(numArr, num1) {
    numArr.push(num1);
    return Math.min(...numArr); // Распаковываем массив в список аргументов
}
console.log(findMin([1, 2], 3));
