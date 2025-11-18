// fetch("https://api.github.com/users/asynchronousJavaScriptor")
//     .then(res => res.json()).then(data => {
//         console.log(data);
        
//     })


document.querySelector("#fetchbtn")
.addEventListener("click", ()=>{
    fetch("https://api.github.com/users/async")
    .then(rowData => rowData.json())
    .then(data => console.log(data)
    )
});