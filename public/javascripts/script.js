// const { param } = require("../../routes");

async function getData(data) { 
    //sending a POST request to get a bunch of information about the user
    const URL = 'http://localhost:3000/run';
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
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function run(){
    console.log("Attempting to run code...");
    fast_code = ace.edit("fast-code-editor").getValue();
    slow_code = ace.edit("slow-code-editor").getValue();
    generator_code = ace.edit("generator-code-editor").getValue();
    let input = {
        fast: fast_code,
        slow: slow_code,
        generator: generator_code
    };
    console.log(input);
    getData(input).then(
        function(value) {
            // outputs response in browser console
            console.log(value);
        }
    );
}


function stop(){
    console.log("Terminating process...");
}