console.log("hello");
// console.log(window);   only for frontend

// modeule :  file based , build in , third party.

// let a = 400;
// console.log(a);
// module.exports=a;

// let a = {
//     average:(a,b)=>{
//         console.log((a+b)/2);
//     },
//     percent:(a,b)=>{
//         console.log((a/b)*100);
//     },
// }

// module.exports=a;

// build in 
// const { isUtf8 } = require("buffer");
// let fs = require("fs");
// console.log(fs);  // file system

// fs.readFile("./sample.txt","utf-8",(err,data)=>{    
    // asynchronous function = iske baad bali file excute ho jayegi agar isme time lagta h to
//     if(err){
//         throw err;
//     }
//     console.log(data);
// });

// console.log("i'm first");


// const a = fs.readFileSync("./sample.txt","utf-8");
// console.log(a);
// console.log("i'm first");


// const {readFileSync} = require("fs");
// const a = readFileSync("./sample.txt","utf-8");
// console.log(a);
// console.log("i'm first");


// const fs = require("fs");
// const a = "This is gaurav";
// fs.writeFile("./sample2.txt",a,()=>{          // file create kar deta h
//     console.log("written");
// });
// console.log("i'm first");

// const path = require("path");
// // const a = path.extname("./NODE/index.js");
// const a = path.basename(
//     "D:/Desktop/Gaurav Jangam/node>"
// );
// console.log(a);

// const path = require("path");
// const a = path.dirname(
//     "D:/Desktop/Gaurav Jangam/node>"
// );
// b= "/6pp";
// const a = path.join(
//     "D:/Desktop/Gaurav Jangam/node>"+
//     b
// );
// console.log(a);

// const os = require("os");
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.hostname());


// const http = require("http");
// const fs = require("fs");

// const PORT = 2000;
// const hostname = "localhost";
// const home = fs.readFileSync("./index.html","utf-8");

// const server = http.createServer((req,res)=>{
//     if(req.url === "/"){
//        return res.end(home);
//     }
//     if(req.url === "/about"){
//         return res.end("<h1>ABOUT PAGE</h1>");
//     }
//     if(req.url === "/contact"){
//         return res.end("<h1>CONTACT PAGE</h1>");
//     }
//     if(req.url === "/service"){
//         return res.end("<h1>SERVICE PAGE</h1>");
//     }else{
//         return res.end("<h1>404 PAGE NOT FOUND</h1>");
//     }
// });

// server.listen(PORT,hostname,()=>{
//     console.log(`server is working on http://${hostname}:${PORT})`);
// });
