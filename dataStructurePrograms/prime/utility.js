var array = [2, 3];

function primeCheck() {
    for (var i = 5; i <= 1000; i += 2) {
        if (array.every(function (p) {
                return i % p;
            })) {
            array.push(i);
        }
    }
}

function storeArray() {

    let arr1=[];
    let i = 0;
    let k = 0;
    let m=[];
    //arr1 = Array.from(Array(10), () => new Array(50));
    for (let j = 0; j <array.length; j++) {
        if ((i + 1) * 100 < array[j]) {
            arr1.push(m);
            m=[];
            i++;
        }
        else
        m.push(array[j]);
    }
    return arr1;
}

function primeDisplay()
{
    var result = array;
    //console.log(result);
    return result;
}
module.exports = {
    primeCheck,
    storeArray,
    primeDisplay
};