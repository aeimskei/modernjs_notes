// instantiate github bc it's a Class
const github = new GitHub;

// instantiate the UI Class
const ui = new UI;

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
        // console.log(data); // test fetched data log

        // check if profile exists
        if (data.profile.message === 'Not Found') {
          // clear template DOM if no matched User
          ui.clearProfile();
          // then show an alert (create in ui.js Class)
          ui.showAlert('User not found', 'badge error red lighten-2')
        } else {
          // hide alert
          if (data.profile.message !== 'Not Found') {
            ui.clearAlert();
          }
          // show profile (create in ui.js Class)
          ui.showProfile(data.profile);
          // show repo (create in ui.js Class)
          ui.showRepo(data.repos);
        }
      })
  } else {
    // if true, clear profile info on DOM (create in ui.js Class)
    ui.clearProfile();
    // if search bar empty, remove alert
    ui.clearAlert();
  }
});
