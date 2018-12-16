/*
try {
  // (1) will be a Reference Error
  // myFunction();

  // (2) will create a Type Error
  // null.myFunction();

  // (3) will create Syntax Error
  // console.log(eval('4+4'));
  // console.log(eval('"Hello There!"'))

  // (4) will create a URI Error
  decodeURIComponent('%');

} catch(error) {
  console.log(error)
  // console.log(error.message)
  // console.log(error.name)
  // console.log(error instanceOf TypeError)

  // console.log(`${error.name}: Null is the issue!`)
} finally {
  console.log('Finally runs regardless of result')
}

console.log('Program continues...')
*/

// Create own error messages

const user = {email: 'johndoe@gmail.com'};

// check to make sure this user has a name (currently doesn't, only email)
try {
  if (!user.name) {
    // throw 'User does not have a name';
    throw new SyntaxError('User has no name');
  }
} catch(error) {
  // console.log(error);
  console.log(`User Error: ${error.message}`);
}