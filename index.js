const fetchUsers = async(url)=> {
    const response = await fetch(url);
    const users = await response.json();
    //console.log(users); 
    return users;
  }

const usersElement = document.querySelector(".users");
const makeCard = async()=>{
   const users = await fetchUsers("https://jsonplaceholder.typicode.com/users");
   users.map((user)=>{
      console.log(user);
    const userElement = document.createElement("div");
    userElement.classList.add("user");
    userElement.innerHTML = `

    <div>
    <h3>Name :</h3> 
    <p class="userInfo">${user.name}</p>
    </div>

    <div>
    <h3>Email:</h3>
    <p class="userInfo">${user.email}</p>
    </div>

    <div>
    <h3>Phone:</h3>
    <p class="userInfo">${user.phone}</p>
    </div>

    <div>
    <h3>Username:</h3>
    <p class="userInfo">${user.username}</p>
    </div>

    <div>
    <h3>Hometown:</h3>
    <p class="userInfo">${user.address.city}</p>
    </div>

    <br>
    <button onclick="remove(this)">Remove</button>
    `;
    usersElement.appendChild(userElement);
   })
}; 

makeCard();

function remove(element){
    alert("You clicked to delete a user");
    element.parentNode.remove(element);
  }

