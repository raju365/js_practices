// impliment a function that throttles another function(HOF+Closure).
function throttles(fn,delay){ //accept a function and delay time as parameters
   let lastCall = 0; //to keep track of the last call time
    return function(){ //return an inner function that is a closure
    let current = Date.now();
        if(current - lastCall >= delay){ //check if the delay time has passed
            lastCall = current;
            fn(); //call the function
        }
    }
}
var newfnc = throttles(function(){
    console.log("will run in 2 seconds");
},2000);
newfnc();

