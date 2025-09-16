function fnLimiter(fn,limit){
// beacouse of clousure it retirns the same function
    let totalCalled= 0;

return function(){
    if(totalCalled < limit){
        totalCalled++;
        fn();
    }
    else{
        console.log('limit exceeded')
    }

}

}

var limiter = fnLimiter(function(){
    console.log('hello')
},3)
limiter()
limiter()
limiter()
limiter()
limiter()