const fs = require("node:fs");
const http = require("node:http");
const url = require("node:url");

/////////////////////////////////////////////
/////////////////FILES

//Blocking, Synchronous way
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");

// console.log(textIn);

// const textOut = `This is what we know about the avocado: ${textIn}. \nCreated on ${Date.now()}`;

// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File written!");

//Non-Blocking, Synchronous way
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   console.log(data1);
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
//       console.log(data3);
//       fs.writeFile(
//         "./txt/final.txt",
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
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, {
  encoding: "utf-8",
});

const dataObj = JSON.parse(data);

const server = http.createServer((request, response) => {
  const pathName = request.url;
  if (pathName === "/" || pathName === "/overview") {
    response.end("This is the OVERVIEW");
  } else if (pathName === "/product") {
    response.end("This is the PRODUCT");
  } else if (pathName === "/api") {
    response.writeHead(200, {
      "Content-type": "application/json",
    });
    response.end(data);
  } else {
    response.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "Hello-world",
    });
    response.end("Page not  found!");
  }
});

server.listen(4200, "127.0.0.1", () => {
  console.log("Server listening for request");
});
