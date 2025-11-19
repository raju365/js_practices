
let usernameInput = document.querySelector('.usernameInput')
let searchBtn = document.querySelector('.searchBtn')
let card = document.querySelector('.card')

const getUserProfileData = (username) =>{
    return fetch(`https://api.github.com/users/${username}`)
    .then((rowData)=>{
            if(!rowData.ok) throw new Error('User not found')
            return rowData.json()
        })
    
}


const getRepos = (username) =>{
    return fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
    .then((rowData)=>{
        if(!rowData.ok) throw new Error('User repos not found')
        return rowData.json()
        
    })
    
}

const decorateProfileData =(details) =>{
    console.log(details);
    
    let profileDiv = `<div class="flex flex-col md:flex-row items-center gap-6">
          <img
            src="${details.avatar_url}"
            alt="GitHub Avatar"
            class="w-32 h-32 rounded-full border border-gray-300 shadow"
          />

          <div class="flex-1">
            <h2 class="text-2xl font-bold text-gray-900 flex items-center gap-2">
              ${details.name}
              <span class="text-gray-400 text-lg font-medium">@${details.login}</span>
            </h2>

            <p class="text-gray-600 mt-2 max-w-md">
              ${details.bio ? details.bio : 'This user has no bio.'}
            </p>

            <div class="grid grid-cols-3 gap-4 mt-6">
              <div class="bg-gray-100 p-4 rounded-xl text-center">
                <p class="text-lg font-bold text-gray-900">${details.public_repos}</p>
                <p class="text-gray-500 text-sm">Repositories</p>
              </div>

              <div class="bg-gray-100 p-4 rounded-xl text-center">
                <p class="text-lg font-bold text-gray-900">${details.followers}</p>
                <p class="text-gray-500 text-sm">Followers</p>
              </div>

              <div class="bg-gray-100 p-4 rounded-xl text-center">
                <p class="text-lg font-bold text-gray-900">${details.following}</p>
                <p class="text-gray-500 text-sm">Following</p>
              </div>
            </div>

            <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <p class="text-gray-500 text-sm">Location</p>
                <p class="text-gray-900 font-semibold">${details.location?details.location:"NA"}</p>
              </div>

              <div class="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <p class="text-gray-500 text-sm">Company</p>
                <p class="text-gray-900 font-semibold">${details.company?details.company:"NA"}</p>
              </div>
            </div>
          </div>
        </div>`

    card.innerHTML = profileDiv;
}


searchBtn.addEventListener('click',()=>{
    let username = usernameInput.value.trim();
    if(username.length>0){
        getUserProfileData(username).then((details)=>{
            decorateProfileData(details);
        })
        
        
    }
    else{
        alert('Please enter a valid username')
    }
})