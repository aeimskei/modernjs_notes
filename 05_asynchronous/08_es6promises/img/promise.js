const posts = [
  {title: 'First Post', body: 'This is my first post!'},
  {title: 'Second Post', body: 'This is my second post!'}
];

function createPost(post) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      posts.push(post);
      resolve();
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Third Post', body: 'This is the third body.'}).then(getPosts);