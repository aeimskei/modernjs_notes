// access to GitHub API keys (you need to register)
const myid = config.CLIENT_ID;
const mysecret = config.CLIENT_SECRET;

class GitHub {
  constructor() {
    this.client_id = myid;
    this.client_secret = mysecret;
    this.repos_count = 5; // will limit the # of repos to show
    this.repos_sort = 'created: asc'  // we also want it to sort (can be used as query strings in our url)
  }

  // async await to get User and Repos (2 different urls we'll use)
  async getUser(user) {
    // fetch profile
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    // grab profile data
    const profileData = await profileResponse.json();

    // fetch repos
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);
    // grab repos data
    const repoData = await repoResponse.json();

    // rather than just profile data, return an object bc will aslo return repo later
    return {
      profile: profileData,
      repos: repoData
    }
  }
}