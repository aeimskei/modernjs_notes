// grab search input from UI
const searchUser = document.getElementById('searchUser');

// add event listener on search input
searchUser.addEventListener('keyup', (e) => {
  // get input text
  const userText = e.target.value;

  // check to make sure input is not blank
  if (userText !== '') {
    console.log(userText);
  }
})
