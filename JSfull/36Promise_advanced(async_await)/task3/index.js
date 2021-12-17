export const getUsersBlogs = async arr => {
  const link = `https://api.github.com/users/`;

  const workWithArray = id =>
    fetch(link + id)
      .then(response => response.json())
      .catch(e => {
        console.error(e);
      });
  const resultArray = await Promise.all(arr.map(el => workWithArray(el)));
  const blogArray = resultArray.map(el => el.blog);
  return blogArray;
};

getUsersBlogs(['google', 'facebook', 'gaearon']).then(linksList => console.log(linksList));
