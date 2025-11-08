function orderFood(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            let chance = Math.random() < 0.7;
            if(chance) res();
            else rej();
        },2000)
    })
}
orderFood().then(()=>{
    console.log("pizza 🍕 delivered");
})
.catch(()=>{
    console.log("🚫 Delivery failed ");
})