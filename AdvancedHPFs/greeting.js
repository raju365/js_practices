//impliment a fuction that returns a fuction with a preset greeting(closure).
function greeting(greet) {
    return function(name) {
        console.log(`${greet}`+` ${name}`);
        
    }

}

var greetingfnc = greeting("hello")
greetingfnc("raju")
