// chained promises : user -> posts -> comments
//task:
// 1. create getUser() -> resolves with {id:1, name:"harsh"}
// 2. getPosts(userId) -> resolves with list of post titles
// 3. getComments(postId) -> resolves with comments

function getUser(){
    return new Promise((res, rej)=>{
        res({id:1, name:"harsh"})
    })
}
function getPosts(userId){
    return new Promise((res, rej)=>{
        res(["title1", "title2"])
    })
}
getUser().then(function(data){
    console.log(`data fetched : ${data.name}`);
})