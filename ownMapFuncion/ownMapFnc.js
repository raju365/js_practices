var arr = [1, 2, 3, 4, 5];

function ownMap(arr, callback) {
var newArr = [];
for (var i = 0 ; i< arr.length; i++){
    newArr.push(callback(arr[i]))
}
return newArr;
}
var ans = ownMap(arr,function(value){
    return value*2;
})