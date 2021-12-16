export const fetchUser = async user => {
  try {
    const response = await fetch(`https://api.github.com/users/${user}`);
    if (!response.ok || response.status === 400) {
      return null;
    }
    const userData = await response.json();
    return userData;
  } catch (e) {
    throw new Error(`Failed to fetch user`);
  }
};

// fetchUser('github');
// fetchUser('github').then(data => console.log(data));
