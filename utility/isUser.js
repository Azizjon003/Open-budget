const User = require("../model/user");
const Wallet = require("../model/payment");
const isUser = async (id, name) => {
  const user = await User.findOne({ telegramId: id });
  if (user) {
    return true;
  } else {
    let user = await User.create({
      name: name,
      telegramId: id,
    });

    const wallet = await Wallet.create({
      amount: 0,
    });
    user.wallet = wallet._id;
    await user.save();
    return true;
  }
};

module.exports = isUser;
