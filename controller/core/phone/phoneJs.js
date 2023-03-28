const { Phone, arr } = require("../../../main.js");
const getCatpcha = require("../../../main/getCatpcha.js");
const User = require("../../../model/user.js");
const fs = require("fs");
const qirqibOl = require("../../../utility/100-32.js");
const { keyboardMain } = require("../../../utility/keyboard.js");

Phone.hears(
  /^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/,
  async (ctx) => {
    const id = ctx.from.id;
    const user = await User.findOne({ telegramId: id });
    const phone = ctx.message.text;

    await user.updateOne(
      { phone: phone },
      {
        _id: user._id,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    ctx.reply(arr[1][1]);
    let image;
    try {
      image = await getCatpcha(process.env.URLCATPCHA, process.env.REFURL);
    } catch (err) {
      console.log(err);
      return;
    }
    let text = qirqibOl(image.image);
    let data = Buffer.from(text, "base64");

    // const data = fs.readFileSync("catpcha.png");
    ctx.telegram.sendPhoto(
      id,
      {
        source: data,
        filename: "catpcha.png",
      },
      {
        caption: arr[1][2],
      }
    );

    console.log(image.captchaKey);
    await user.updateOne(
      { catpcha: image.captchaKey },
      {
        _id: user._id,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    return ctx.wizard.selectStep(2);
  }
);

Phone.hears("Bekor qilish", async (ctx) => {
  const id = ctx.from.id;
  ctx.telegram.sendMessage(id, arr[2], keyboardMain);
  return ctx.wizard.selectStep(0);
});

Phone.hears("/start", async (ctx) => {
  const id = ctx.from.id;
  ctx.telegram.sendMessage(id, arr[0], keyboardMain);
  return ctx.wizard.selectStep(0);
});

Phone.on("message", async (ctx) => {
  id = ctx.from.id;
  ctx.telegram.sendMessage(id, arr[3]);
});
