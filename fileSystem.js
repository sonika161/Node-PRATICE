const myfileSystem =require("fs");

//---------------------------Write a file
//Sync---
//myfileSystem.writeFileSync("./test.txt","hello, its write file testing.... scond testing")

//---Asyn 
//myfileSystem.writeFile("./asyn.txt","hello", (err)=>{})

//-----------------------READ a file
// const myfile=myfileSystem.readFileSync("./FileToRead.txt","utf-8")
// console.log("read syn file",myfile);

// const asynFile=myfileSystem.readFile("./FileToRead.txt","utf-8",(err,result)=>{
//   if(result){
//    console.log("result is with file read Asyn",result);
//   }else{
//     console.log("error",err);
//   }
// })

//----------------append
myfileSystem.appendFileSync("./asyn.txt",`The date is ${Date.now()}  \n`)

//-----------------copy file
myfileSystem.cpSync("./asyn.txt","./newAsyn.txt")

//-----delete a file
//myfileSystem.unlinkSync ("./newAsyn.txt");

//----------------status
//console.log(myfileSystem.statSync("./asyn.txt"));

//-------make a folder/directory
myfileSystem.mkdirSync("./newFolder/one/two",{recursive:true})
