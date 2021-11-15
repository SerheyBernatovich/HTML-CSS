const user = { 'John Doe': 19, Tom: 17, Bob: 18 };

const getAdults = (userObj) => {
  const arr = Object.entries(userObj);
  console.log(arr);
  const resalt = arr.filter((user) => user[1] >= 18);
  console.log(resalt);
  const name = resalt.map((user) => user[0]);
  return name;
};

// examples
console.log(getAdults(user)); // ==> ['John Doe', 'Bob']
