function quicksort(array) {
    let stack = [];
    stack.push(0);
    stack.push(array.length - 1);

    while (stack.length > 0) {
        let end = stack.pop();
        let start = stack.pop();

        if (start < end) {
            let pivotIndex = partition(array, start, end);

            
            stack.push(start);
            stack.push(pivotIndex - 1);
            stack.push(pivotIndex + 1);
            stack.push(end);
        }
    }
    return array;
}

function partition(array, low, high) {
    let pivot = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (array[j] <= pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    return i + 1;
}
