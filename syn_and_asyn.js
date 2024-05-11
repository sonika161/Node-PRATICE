 let myVariable=require("fs");

//--------------Blocking(Synchronus operations)------------
// console.log("1");
// console.log("2");


// const read=myVariable.readFileSync("test.txt","utf-8");
// console.log(read);
// console.log("4");

//-----O/P
// 1
// 2
// hello, its write file testing.... scond testing
// 4
//========================================================================================================================
//------------Non Blocking(Asynchronious Operations)
myVariable
console.log("1a");
console.log("2");
myVariable.readFile("test.txt","utf-8",(err,res)=>{{
  if(err){
    console.error("error");
  }else{
    console.log(res);
  }
}})
console.log("4");

//-------------o/p
// 1a 
// 2
// 3
// 4 
// hello, its write file testing.... scond testing 
