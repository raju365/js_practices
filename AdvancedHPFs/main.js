//Q1 create a function which takes a callback and executes it after every 'n' seconds indefinitely.
function executeAfterInterval(callback, n) {
    setInterval(callback, n * 1000);

}

executeAfterInterval(() => {
    console.log("Callback executed");
},2000)