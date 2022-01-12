// inp Object
// out undefined
const saveUser = userData => {
  console.log(JSON.stringify(userData));
  // inp string, obj
  // out promise
  const httpPromise = fetch('https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(),
  });
  // inp callback
  // out promise
  httpPromise
    .then(
      // _____inp promise result
      // _____out promise RANDOM
      response => response.json(),
    )
    .then(res => {
      console.log(res);
      alert(JSON.stringify(res));
    })
    .catch(e => {
      // ....
    });
};

const user = {
  email: 'test@gmail.com',
  userName: 'user111',
  password: ' ssss',
};
saveUser(user);
