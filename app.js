function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if(resultConversion === 'as-number'){
    //   return +result;
    // } else {
    //   return result.toString();  
    // }
}
var combinedAges = combine(30, 26, 'as-number'); //56
console.log(combinedAges);
var combinedStringAges = combine('30', '26', 'as-number'); //3026
console.log(combinedStringAges);
var combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
// 유니언타입을 만들면 유니언타입이라는것만 알지 그안에 뭐가 있는진 정확히 모른다
