const getRequestById = (userId) => {
  try {
    return fetch(`https://api.github.com/users/${userId}`).then((response) =>
      response.json()
    );
  } catch (err) {
    console.log(err);
  }
};

export const getUsersBlogs = async (users) => {
  const arrOfPromise = users.map((user) => getRequestById(user));
  const resolvedPromises = await Promise.all(arrOfPromise);

  const linkList = resolvedPromises.map((el) => el.blog);
  return linkList;
};

// getUsersBlogs(['facebook', 'github', 'google']).then((linkList) =>
//   console.log(linkList)
// );
