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
}