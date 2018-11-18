// instantiate github bc it's a Class
const github = new GitHub;

// grab search input from UI
const searchUser = document.getElementById('searchUser');

// add event listener on search input
searchUser.addEventListener('keyup', (e) => {
  // get input text
  const userText = e.target.value;

  // check to make sure input is not blank
  if (userText !== '') {
    // console.log(userText); // test event listener

    // make HTTP call
    github.getUser(userText)
      // returns a promise with .then & will give data
      .then(data => {
        console.log(data); // test fetched data log
      })
  }
});
