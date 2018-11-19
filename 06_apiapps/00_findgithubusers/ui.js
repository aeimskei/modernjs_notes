class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    // console.log(user); // test log user

    // template to display on DOM
    this.profile.innerHTML = `
      <div class="row">
        <div class="col m3 s12">
          <img src="${user.avatar_url}" alt="User Profile Image" class="responsive-img">
          <a href="${user.html_url}" target="_blank" class="waves-effect waves-light btn">View Profile</a>
        </div>
        <div class="col m9">
          <div class="row">
            <div class="col l5 m9 s12">
              <span class="new badge green">Public Repos: ${user.public_repos}</span>
            </div>
            <div class="col l5 m9 s12">
              <span class="new badge red">Public Gist: ${user.gist}</span>
            </div>
            <div class="col l5 m9 s12">
              <span class="new badge blue">Public Followers: ${user.followers}</span>
            </div>
            <div class="col l5 m9 s12">
              <span class="new badge purple">Public Following: ${user.following}</span>
            </div>
          </div>
          <ul class="collection">
            <li class="collection-item">Company: ${user.company}</li>
            <li class="collection-item">Website/Blog: ${user.blog}</li>
            <li class="collection-item">Location: ${user.location}</li>
            <li class="collection-item">Member Since: ${user.create_at}</li>
          </ul>
        </div>
      </div>
      <h5>Latest Repos</h5>
      <div id="repos"></div>
    `;
  }

  // Function to clear profile (will be used in app.js)
  clearProfile() {
    this.profile.innerHTML = '';
  }

  // Function to show alert message when user not found (will be used in app.js)
  showAlert(message, className) {
    // clear any remaining alerts
    this.clearAlert();

    // create an alert div from scratch
    const div = document.createElement('div');
    // add class to the div
    div.className = className;
    // add text with textNode
    div.appendChild(document.createTextNode(message));
    // get parent called searchContainer to insert the alert
    const container = document.querySelector('.searchContainer');
    // get the search box
    const search = document.querySelector('.search');
    // insert alert
    container.insertBefore(div, search);

    // timeout after 3 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 3000)
  }

  // Function to clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.error');
    // check to see if there is a message alert
    if (currentAlert) {
      currentAlert.remove();
    }
  }
}