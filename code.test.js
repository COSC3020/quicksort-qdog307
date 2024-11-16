const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const testSort =
    jsc.forall("array nat", function(arr) {
        var a1 = JSON.parse(JSON.stringify(arr));
        var a2 = JSON.parse(JSON.stringify(arr));
        return JSON.stringify(quicksort(a1)) ==
            JSON.stringify(a2.sort(function(a, b)
                { return a - b; }));
    });

jsc.assert(testSort);

console.log(quicksort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])); 
console.log(quicksort([1, 2, 3, 4, 5])); 
console.log(quicksort([5, 4, 3, 2, 1])); 
console.log(quicksort([])); 
console.log(quicksort([42])); 
console.log(quicksort([5, 1, 2, 5, 1])); 
console.log(quicksort([-3, -1, -4, -1, -5, -9, -2, -6, -5, -3, -5])); 
