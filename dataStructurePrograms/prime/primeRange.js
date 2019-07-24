function start() {
    var array = [2, 3];
    for (var i = 5; i <= 1000; i += 2) {
        if (array.every(function (p) {
                return i % p;
            })) {
            array.push(i);
        }
    }
    i = 0;
    k = 0;
    arr1 = Array.from(Array(10), () => new Array(50));
    for (j = 0; j < array.length; j++) {
        if ((i + 1) * 100 < array[j]) {
            i++;
            k = 0;
        }
        arr1[i][k] = array[j];
        k++;
    }
    console.log(arr1);
}
start();