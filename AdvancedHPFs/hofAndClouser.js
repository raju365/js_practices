// impliment a function that takes a callback and only exicutes it once(HOF+Closure).
function onlyOneCaller(callback) { //accept a callback function as parameter
   let executed = false; //to keep track if the callback has been executed
    return function(){ //return an inner function that is a closure
        if(!executed){ //check if the callback has not been executed
            executed = true; //set executed to true
            callback(); //call the callback function
        }
    }
}

var newfnc = onlyOneCaller(function(){
    console.log("only once called");
}); 

newfnc(); 
newfnc(); 
newfnc(); 