exports.checkUserExists = async (User, { username }) => {
  return await User.findOne()
    .where('username')
    .equals(username);
};

exports.compareUserAndPassword = async (User, { username, password }) => {
  return await User.findOne()
    .where('username')
    .equals(username)
    .where('password')
    .equals(password);
};
