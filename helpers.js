"use strict";
exports.__esModule = true;
exports.getInput = void 0;
var axios_1 = require("axios");
var chrome = require("chrome-cookies-secure");
function getInput(day, callback) {
    chrome.getCookies('https://adventofcode.com', 'header', function (err, cookies) {
        axios_1["default"].request({
            url: "https://adventofcode.com/2022/day/".concat(day, "/input"),
            method: "get",
            headers: {
                Cookie: cookies
            }
        }).then(function (response) {
            //console.log(response)
            callback(response.data); //how do I get this function to return this as a response!?!?!?!
        });
    });
}
exports.getInput = getInput;
