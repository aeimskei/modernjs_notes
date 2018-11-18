// access to GitHub API keys (you need to register)
const myid = config.CLIENT_ID;
const mysecret = config.CLIENT_SECRET;

class GitHub {
  constructor() {
    this.client_id = myid;
    this.client_secret = mysecret;
  }

  // async await to get User and Repos (2 different urls we'll use)
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    // grab profile data
    const profileData = await profileResponse.json();

    // rather than just profile data, return an object bc will aslo return repo later
    return {
      profile: profileData
    }
  }
}