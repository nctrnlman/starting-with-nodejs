// own modules
let { perjumlahan, pengurangan } = require("./myModule");

console.log(perjumlahan(10, 5));
console.log(pengurangan(10, 5));

// javascript modules
let timers = require("timers");

timers.setTimeout(
  (waktu = () => {
    console.log("Hello");
  }),
  2000
);

let url = require("url");
let link = "http://lin.id/data.html?tgl=12&bln=november";

let parsing = url.parse(link, true);

console.log("Host : ", parsing.host);
console.log("Path :", parsing.pathname);
console.log("Query :", parsing.search);

// NPM Modules

let colors = require("colors");

console.log("hello".red);
console.log("hello".rainbow);
console.log("hello".bgWhite.black);

let moment = require("moment");

let today = moment().format("dddd,MMMM do YYYY, h:mm:ss a");

console.log(today);
