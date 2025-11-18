function getUserInfo(){
    return new Promise((resolve, reject) => {
        resolve({id:1,name:"raju"})
    });
}

function getUserPics(id){
    return new Promise((res,rej)=>{
        setTimeout(()=>{

            res(["pic1","pic2"])
        },2000)
    })
}
getUserInfo().then((data)=>{
    console.log(data);
    return getUserPics(data.id)
    
}).then((data)=>{
    console.log(data);
})