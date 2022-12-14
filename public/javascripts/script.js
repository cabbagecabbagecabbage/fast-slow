// const { param } = require("../../routes");

const res = require('express/lib/response');

async function getData(data) { 
    //sending a POST request to get a bunch of information about the user
    const URL = 'https://fast-slow-debugger.herokuapp.com/run';
    console.log(JSON.stringify(data))
    fetch(URL, {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            document.getElementById('result').innerHTML = data.result.replaceAll("\n","<br>").substring(0, 600);
            document.getElementById('fast-code-output').innerHTML = data.fast_ans.replaceAll("\n","<br>").substring(0, 600);
            document.getElementById('slow-code-output').innerHTML = data.slow_ans.replaceAll("\n","<br>").substring(0, 600);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

}

function run(){
    var element = document.getElementById('stop');
    element.style.opacity = "0.9";
    console.log("Attempting to run code...");
    fast_code = ace.edit("fast-code-editor").getValue();
    slow_code = ace.edit("slow-code-editor").getValue();
    generator_code = ace.edit("generator-code-editor").getValue();
    let input = {
        fast: fast_code,
        slow: slow_code,
        generator: generator_code
    };
    console.log(JSON.stringify(input))
    console.log("HELLO")
    getData(input).then(
        function(value) {
            // outputs response in browser console
            element.style.opacity = "0.5";
            console.log(value);
        }
    );
}


function stop(){
    console.log("Terminating process...");
}