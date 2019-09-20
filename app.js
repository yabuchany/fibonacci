// 'use strict';
// function fib(n) {
//     if(n === 0){
//         return 0;   //   ガード句
//     }else if(n ===1){
//         return 1;
//     }
//     // return null;
//     return fib(n-1)+fib(n-2);
// }
// const length = 40;
// for(let i = 0;i <=length;i++){
//     console.log(fib(i));
// }
// // console.log(fib(0));
// // console.log(fib(2));
// // console.log(fib(20));
// // console.log(fib(3));


// 連想配列 Map を利用

'use strict';
const memo = new Map();
memo.set(0,0);
memo.set(1,1);
function fib(n){
    if(memo.has(n)){
        return memo.get(n);
    }
    const value = fib(n-1)+fib(n-2);
    memo.set(n,value);
    return value;
}
const length = 40;
for(let i = 0;i<length;i++){
    console.log(fib(i));
}