window.addEventListener('error', function onUnhandledError(err) {
  console.error('error', err.message);
});

let userParsingResult;

try {
  const userr = '{"name":"Tom"}';
  const user = JSON.parse(userr);
  console.log('User data: ', user);
  userParsingResult = 'success';
} catch (e) {
  userParsingResult = 'error';
} finally {
  console.log(`User parsing finished with ${userParsingResult}`);
}

let productParsingResult;
const product = '{"name":"milk"}';
try {
  const product = JSON.parse(product); // data is correct but it fails because variable already declared inside function
  console.log('Product data: ', product); // product have same name as variable that we trow inside function
  productParsingResult = 'success';
} catch (e) {
  productParsingResult = 'error';
} finally {
  console.log(`Product parsing finished with ${productParsingResult}`);
}
