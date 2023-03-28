const { ConfirmCode, arr } = require("../../../main");
const getSmsReq = require("../../../main/getSmsReq");
const User = require("../../../model/user");
const { keyboardMain } = require("../../../utility/keyboard");

ConfirmCode.hears(/([0-9]|[1-9][0-9]|[1-9][0-9][0-9])/, async (ctx) => {
  const id = ctx.from.id;
  const result = ctx.message.text;

  const user = await User.findOne({ telegramId: id }).select("phone catpcha");
  console.log(user);
  try {
    const data = await getSmsReq(
      process.env.URLCHECK,
      process.env.REFURL,
      user.phone,
      result,
      user.catpcha
    );
    ctx.reply(arr[1][3]);
    await user.updateOne(
      { otpKey: data.otpKey },
      {
        _id: user._id,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    return ctx.wizard.selectStep(3);
  } catch (err) {
    console.log(err);
    ctx.reply(arr[1][4]);
  }
});

ConfirmCode.hears("Bekor qilish", async (ctx) => {
  const id = ctx.from.id;
  ctx.telegram.sendMessage(id, arr[2], keyboardMain);
  return ctx.wizard.selectStep(0);
});

ConfirmCode.hears("/start", async (ctx) => {
  const id = ctx.from.id;
  ctx.telegram.sendMessage(id, arr[0], keyboardMain);
  return ctx.wizard.selectStep(0);
});

ConfirmCode.on("message", async (ctx) => {
  const id = ctx.from.id;
  ctx.telegram.sendMessage(id, arr[3]);
});
