const users = { 'John Doe': 19, Bob: 18 };

const copyObj = (userObj) => Object.assign({}, userObj);

// examples
console.log(copyObj(users)); // ==> ['John Doe': 19, Bob: 18]
