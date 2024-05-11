const express=require('express')
const http=require('http')
const app=express()

app.get('/',(req,res)=>{
  return res.send('hello from home page')
})
app.get('about',(req,res)=>{
  return res.send('hello from about page')
})
const myserver=http.createServer(app);
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
