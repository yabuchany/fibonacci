'use strict';
function fib(n) {
    if(n === 0){
        return 0;   //   ガード句
    }else if(n ===1){
        return 1;
    }
    // return null;
    return fib(n-1)+fib(n-2);
}
const length = 40;
for(let i = 0;i <=length;i++){
    console.log(fib(i));
}
// console.log(fib(0));
// console.log(fib(2));
// console.log(fib(20));
// console.log(fib(3));
