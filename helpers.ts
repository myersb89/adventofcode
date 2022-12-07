import axios from 'axios';
import * as chrome from 'chrome-cookies-secure';

export function getInput(day: number, callback) {
    chrome.getCookies('https://adventofcode.com', 'header', function(err, cookies) {
        
        axios.request({
            url: `https://adventofcode.com/2022/day/${day}/input`,
            method: "get",
            headers:{
                Cookie: cookies
            }
        }).then(function(response) {
            //console.log(response)
            callback(response.data) //how do I get this function to return this as a response!?!?!?!
        })
    });
}
