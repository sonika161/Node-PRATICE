function sum(a ,b){
 return a+b;
}
function subtract(a ,b){
  return a+b;
 }
 function multiply(a ,b){
  return a+b;
 }
module.exports="sonika me problems"; //exposts strinng

//module.exposts can use only one time its over ride the values
//----------way1------------------
// module.exports={
//   sumFn:sum,
//   subtractFn:subtract,
//   mulFn:multiply
// };

//----------way 2-------------------
// module.exports={
//   sum,
//   subtract,
//   multiply
// };

//-----------------way 3-----Can use multiple time----------
exports.sum=(a,b)=>a+b;
