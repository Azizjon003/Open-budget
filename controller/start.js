const isUser = require("../utility/isUser");
const { bot, arr } = require("../main");
const { keyboardMain, adminKeyboard } = require("../utility/keyboard");
const isAdmin = require("../utility/isAdmin");
const Zayafka = require("../model/zayafka");
const User = require("../model/user");
const Wallet = require("../model/payment");
keyboardMain.parse_mode = "HTML";
console.log(keyboardMain);

bot.on("my_chat_member", async (ctx) => {
  console.log(ctx.update);
});
bot.use(async (ctx, next) => {
  const message = ctx.update.message || ctx.update.callback_query.message;
  console.log(message.chat.type == "group");
  if (!(ctx.update.message?.text && message.chat.type == "group")) {
    console.log("Continue");

    return next();
  }
});
bot.action(/\bconfirm/g, async (ctx) => {
  const id = ctx.from.id;
  const updateId = ctx.update.callback_query.from.id;

  const admin = await isAdmin(id);
  if (!admin) {
    return ctx.answerCbQuery("Siz admin emassiz", {
      show_alert: true,
    });
  }
  const adminjon = await User.findOne({ telegramId: id });
  const data = ctx.update.callback_query.data.split(":")[1];

  const zayafka = await Zayafka.findOne({ _id: data });

  const user = await User.findOne({ _id: zayafka.user });
  const text =
    ctx.update.callback_query.message.text +
    `\n\n<b>Admin to'lovni tasdiqladi:Kim :${adminjon.name}</b>`;

  ctx.editMessageText(text, {
    parse_mode: "HTML",
  });

  ctx.telegram.sendMessage(
    user.telegramId,
    "Sizning zayafkaingiz bajarildi",
    keyboardMain
  );

  await ctx.telegram.sendMessage(
    process.env.CHANNELID,
    `<b>Zayafka bajarildi</b>\n\n<b>Foydalanuvchi</b>:${user.name} \n<b>Karta yoki telefon raqam</b>:<i>${zayafka.phone}</i>\n\n${zayafka.amount} so'm`,
    {
      parse_mode: "HTML",
    }
  );

  await zayafka.updateOne(
    { active: "bajarildi" },
    {
      _id: data,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  return ctx.scene.enter("sceneWizard");
});

bot.action(/\bcancel/g, async (ctx) => {
  const id = ctx.from.id;
  const admin = await isAdmin(id);
  if (!admin) {
    return ctx.answerCbQuery("Siz admin emassiz", {
      show_alert: true,
    });
  }

  const data = ctx.update.callback_query.data.split(":")[1];

  const zayafka = await Zayafka.findOne({ _id: data });
  const user = await User.findOne({ _id: zayafka.user });
  const wallet = await Wallet.findOne({ _id: user.wallet });
  console.log(wallet);
  wallet.amount += zayafka.amount;
  await wallet.save();
  zayafka.active = "cancel";
  await zayafka.save();
  const adminjon = await User.findOne({ telegramId: id });
  const text =
    ctx.update.callback_query.message.text +
    `\n\n<b>Admin to'lovni bekor qildi:Kim :${adminjon.name}</b>`;

  ctx.editMessageText(text, {
    parse_mode: "HTML",
  });

  ctx.telegram.sendMessage(
    user.telegramId,
    "Sizning zayafkaingiz bekor qilindi.Hisobingizni tekshirib ko'ring"
  );
});
bot.hears("/start", async (ctx) => {
  console.log(ctx);
  const id = ctx.from.id;
  const name = ctx.from.first_name;
  await isUser(id, name);
  const shart = await isAdmin(id);
  if (shart) {
    ctx.telegram.sendMessage(id, arr[0], adminKeyboard);
  } else {
    ctx.telegram.sendMessage(id, arr[0], keyboardMain);
  }

  return ctx.scene.enter("sceneWizard");
});
