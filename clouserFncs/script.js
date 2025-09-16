// clouser = a function that retuns another  function
function counter(){
   let count = 0;
   return function(){
    count++;
    console.log(count);
   }
}
let makeCount = counter();
makeCount();
makeCount();
makeCount();
makeCount();
makeCount();