const fs = require("node:fs");
const http = require("node:http");

/////////////////////////////////////////////
/////////////////FILES

//Blocking, Synchronous way
// const textIn = fs.readFileSync("node-farm/txt/input.txt", "utf-8");

// console.log(textIn);

// const textOut = `This is what we know about the avocado: ${textIn}. \nCreated on ${Date.now()}`;

// fs.writeFileSync("node-farm/txt/output.txt", textOut);
// console.log("File written!");

//Non-Blocking, Synchronous way
// fs.readFile("node-farm/txt/start.txt", "utf-8", (err, data1) => {
//   console.log(data1);
//   fs.readFile(`node-farm/txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile(`node-farm/txt/append.txt`, "utf-8", (err, data3) => {
//       console.log(data3);
//       fs.writeFile(
//         "node-farm/txt/final.txt",
//         `${data2}\n${data3}`,
//         "utf-8",
//         (err) => {
//           console.log("Your file has written😎");
//         }
//       );
//     });
//   });
// });
// console.log("Will read file");

///////////////////////////////////////////
////////////////////SERVER
const server = http.createServer((request, response) => {
  console.log(request);
  response.end("Hello from the server");
});

server.listen(4200, "127.0.0.1", () => {
  console.log("Server listening for request");
});
