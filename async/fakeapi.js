// 3. Fake API delay

// task
//write a functon fakeApiCall(endpoint) that
// * Accepts a string like "users" or "posts"
// * Resolves with some dummy data after a 2 second delay

function fakeApiCall(endpoint) {
    const data ={
         users : ["harsh","shivam","raghav"],
         posts : ["hey namaste","great going","you rocked it"]

    }
    
    let delay = Math.random() * 2000 + 1000
    return new Promise((res,rej)=>{
        setTimeout(() => {
        res(data[endpoint]);

        },delay);
    })
}
fakeApiCall("users")
.then((data)=>{
    console.log(data);
})
fakeApiCall("posts")
.then((data)=>{
    console.log(data);
})