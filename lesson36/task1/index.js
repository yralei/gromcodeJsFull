export const fetchUser = async (USERID) => {
  try {
    const response = await fetch(`https://api.github.com/users/${USERID}`);
    if (response.status === 404) {
      return null;
    }
    const userData = await response.json();
    return userData;
  } catch (err) {
    throw new Error('Failed to fetch user');
  }
};
