// fechUserProfile = (username) =>{
//     return fetch(`https://api.github.com/users/${username}`)
//     .then(rowData => rowData.json())
    
// }

// fechUserProfile('raju365')
// .then((data)=> console.log(data))

fechUserRepos = (username) =>{
    return fetch(`https://api.github.com/users/${username}/repos`)
    .then(rowData => rowData.json())
    
}

fechUserRepos('raju365')
.then((data)=> console.log(data))