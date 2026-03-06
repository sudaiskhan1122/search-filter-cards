// sare user show karana
//filter karna har baar input karne par
//show karna filter 
const users = [
  { name: "Ali Khan", pic: "https://picsum.photos/200/300?1", bio: "Frontend developer who loves building responsive websites." },
  { name: "Ahmed Raza", pic: "https://picsum.photos/200/300?2", bio: "JavaScript enthusiast and UI designer." },
  { name: "Ubaid Ullah", pic: "https://picsum.photos/200/300?3", bio: "Backend developer working with Node.js and databases." },
  { name: "Kashif Ali", pic: "https://picsum.photos/200/300?4", bio: "React developer passionate about modern web apps." },
  { name: "Usman Tariq", pic: "https://picsum.photos/200/300?5", bio: "Full stack developer who enjoys solving complex problems." },
  { name: "Hassan Raza", pic: "https://picsum.photos/200/300?6", bio: "UI/UX designer with a love for clean interfaces." },
  { name: "Zain Ahmad", pic: "https://picsum.photos/200/300?7", bio: "Web developer focusing on performance and optimization." },
  { name: "Bilal Khan", pic: "https://picsum.photos/200/300?8", bio: "Creative coder and animation lover." },
  { name: "Hamza Malik", pic: "https://picsum.photos/200/300?9", bio: "Passionate about JavaScript frameworks and libraries." },
  { name: "Sufyan Ahmed", pic: "https://picsum.photos/200/300?10", bio: "Software engineer building scalable applications." },
  { name: "Farhan Ali", pic: "https://picsum.photos/200/300?11", bio: "Frontend specialist working with HTML CSS and JS." },
  { name: "Danish Khan", pic: "https://picsum.photos/200/300?12", bio: "Tech enthusiast exploring new programming tools." },
  { name: "Saad Ahmed", pic: "https://picsum.photos/200/300?13", bio: "Developer who enjoys building creative projects." },
  { name: "Talha Raza", pic: "https://picsum.photos/200/300?14", bio: "Problem solver with strong debugging skills." },
  { name: "Ahsan Malik", pic: "https://picsum.photos/200/300?15", bio: "Web designer focused on modern UI styles." },
  { name: "Imran Khan", pic: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Imran_Khan_2019.jpg", bio: "Pakistani politician, former Prime Minister of Pakistan (2018–2022), and founder of Pakistan Tehreek-e-Insaf (PTI)." },
  { name: "Shahid Ali", pic: "https://picsum.photos/200/300?17", bio: "Coding mentor and technology blogger." },
  { name: "Rizwan Ahmed", pic: "https://picsum.photos/200/300?18", bio: "Passionate about building interactive websites." },
  { name: "Fahad Khan", pic: "https://picsum.photos/200/300?19", bio: "Full stack developer working with modern tools." },
  { name: "Adnan Raza", pic: "https://picsum.photos/200/300?20", bio: "Learner who enjoys coding and problem solving." }
];

// Function to display users
function showUsers(arr){
  const container = document.querySelector('.card-container');
  container.innerHTML = ''; // Clear existing cards

  arr.forEach(user => {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = user.pic;
    
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const h3 = document.createElement('h3');
    h3.textContent = user.name;

    const p = document.createElement('p');
    p.textContent = user.bio;

    overlay.appendChild(h3);
    overlay.appendChild(p);
    card.appendChild(img);
    card.appendChild(overlay);
    container.appendChild(card);
  });
}

// Initial display
showUsers(users);

let inp = document.querySelector("input");
inp.addEventListener("input", function() {
  const searchTerm = inp.value.toLowerCase();

  // Filter users by name startsWith (case-insensitive)
  const newUser = users.filter(user => {
    return user.name.toLowerCase().startsWith(searchTerm);
  });

  // Clear container
  document.querySelector('.card-container').innerHTML = "";
  // Show filtered users
  showUsers(newUser);
});



