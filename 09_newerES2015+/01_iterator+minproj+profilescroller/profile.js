// Create the Data
const data = [
  {
    name: 'Lucky McKenna',
    age: 28,
    gender: 'female',
    location: 'Santa Ana, CA',
    image: 'https://randomuser.me/api/portraits/women/10.jpg'
  },
  {
    name: 'John Jacobs',
    age: 32,
    gender: 'male',
    location: 'Orange Country, CA ',
    image: 'https://randomuser.me/api/portraits/men/10.jpg'
  },
  {
    name: 'James Alckman',
    age: 30,
    gender: 'male',
    location: 'Oakland, CA',
    image: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
];

// Create profile variable
const profiles = profileIterator(data);

// Call first profile maually
nextProfile();

// Next Event Listener
document.getElementById('next').addEventListener('click', nextProfile);

// Function for nextProfile - to display profiles
function nextProfile() {
  // need to iterate with profiles.next().value
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    // display profile details
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Gender: ${currentProfile.gender}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
      </ul>
    `;

    // display image
    document.getElementById('imageDisplay').innerHTML = `
      <img src="${currentProfile.image}">
    `;
  } else {
    // no more profiles
    window.location.reload();
  }
}


// Create Iterator Function for Profile Iterator

function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ? 
      { value: profiles[nextIndex++], done: false } : 
      { done: true}
    }
  }
}

