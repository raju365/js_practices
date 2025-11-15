// chained promises : user -> posts -> comments
//task:
// 1. create getUser() -> resolves with {id:1, name:"harsh"}
// 2. getPosts(userId) -> resolves with list of post titles
// 3. getComments(postId) -> resolves with comments

function getUser(){
    return new Promise((res, rej)=>{
        setTimeout(() =>{
            res({id:1, name:"harsh"})

        },1000)
    })
}
function getPosts(userId){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res(["title1", "title2"])

        },1000)
    })
}

function getComments(postId){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res(["great post","amazing content","tou rocked"])
        },1000)
    })
}

getUser()
.then(function(data){
    console.log("user data", data)
   return getPosts(data.id)

})
.then(function(titles){
    console.log("posts titles", titles)
    return getComments("kya hal hai")
})
.then(function(comments){
    console.log("comments", comments)
})
.finally(()=>{
    console.log("operation completed")
})