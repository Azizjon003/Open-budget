const User = require("../model/user");

const isAdmin = async (id) => {
  const user = await User.findOne({ telegramId: id });
  if (user.role == "admin") {
    return true;
  } else {
    return false;
  }
};

module.exports = isAdmin;
