1st attempt
for (let i = 0; i < numbers.length; i++) {
    let ci = i - 1;
    let pi = i - 2;
    while (true) {
        if ((sorted.length == 0 || numbers[i] > sorted[ci]) || (sorted.length == 1 && sorted[ci] < numbers[i])) {
            sorted.push(numbers[i]);
            break;
        } else if ((sorted.length == 1 && sorted[ci] > numbers[i]) || (typeof sorted[pi] == "undefined") && sorted[ci] > numbers[i]) {
            sorted.unshift(numbers[i]);
            break;
        } else if (sorted[ci] > numbers[i] && sorted[pi] < numbers[i]){
            sorted.splice(ci, 0, numbers[i]);
            break;
        } else {
            ci--;
            pi--;
        }
    }
}
