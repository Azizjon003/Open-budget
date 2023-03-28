const { Vote, arr } = require("../../../main");
const confirmCode = require("../../../main/confirmCode");
const Wallet = require("../../../model/payment");
const Phone = require("../../../model/phones");
const User = require("../../../model/user");
const { keyboardMain } = require("../../../utility/keyboard");

Vote.hears(/\b\d{6}\b/, async (ctx) => {
  const id = ctx.from.id;
  const code = ctx.message.text;
  const user = await User.findOne({ telegramId: id });
  console.log(user);
  let wallet = user?.wallet;
  console.log(wallet);
  try {
    const data = await confirmCode(
      process.env.URLCONFIRM,
      process.env.REFURL,
      code,
      user.otpKey,
      process.env.ID
    );
    console.log(data);
    if (!wallet) {
      const wall = await Wallet.create({
        amount: 4000,
      });
      await user.updateOne(
        {
          wallet: wall._id,
        },
        {
          _id: user._id,
        },
        {
          new: true,
          runValidators: true,
        }
      );
    } else {
      let wall = await Wallet.findOne({ _id: wallet });
      let amount = wall.amount + 4000;

      await wall.updateOne(
        {
          amount: amount,
        },
        {
          _id: wallet,
        },
        {
          new: true,
          runValidators: true,
        }
      );
    }

    await ctx.reply(arr[1][5]);

    await Phone.create({
      phone: user.phone,
      user: user._id,
    });
    await ctx.telegram.sendMessage(id, arr[0], keyboardMain);
    return ctx.wizard.selectStep(0);
  } catch (err) {
    console.log(err);
    ctx.reply(arr[1][4]);
  }
});
Vote.hears("Bekor qilish", async (ctx) => {
  const id = ctx.from.id;
  ctx.telegram.sendMessage(id, arr[2], keyboardMain);
  return ctx.wizard.selectStep(0);
});

Vote.hears("/start", async (ctx) => {
  const id = ctx.from.id;
  ctx.telegram.sendMessage(id, arr[0], keyboardMain);
  return ctx.wizard.selectStep(0);
});

Vote.on("message", async (ctx) => {
  const id = ctx.from.id;
  ctx.telegram.sendMessage(id, arr[3]);
});
