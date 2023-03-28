const { newWizart, arr } = require("../../../main.js");
const Wallet = require("../../../model/payment.js");
const User = require("../../../model/user.js");
const Phone = require("../../../model/phones.js");
const isAdmin = require("../../../utility/isAdmin.js");
const { keyboardCancel, keyboardMain } = require("../../../utility/keyboard");

newWizart.hears("📲 Telefon raqamni yuborish", async (ctx) => {
  const id = ctx.from.id;

  ctx.telegram.sendMessage(id, arr[1][0], keyboardCancel);
  return ctx.wizard.selectStep(1);
});
newWizart.hears("💳 Hisobim", async (ctx) => {
  const id = ctx.from.id;
  const user = await User.findOne({ telegramId: id });
  const wallet = user.wallet;
  console.log(user);
  if (!wallet) {
    ctx.reply(arr[4]);
  } else {
    const wall = await Wallet.findOne({ _id: wallet });
    console.log(wall);
    let text = `<b>Sizning hisobingizda</b>:\n ${wall.amount} so'm bor`;
    ctx.reply(text, {
      parse_mode: "HTML",
    });
  }
});
newWizart.hears("🔄 Pul yechib olish", async (ctx) => {
  const id = ctx.from.id;

  await ctx.reply(arr[5], keyboardCancel);
  return ctx.wizard.selectStep(4);
});

newWizart.hears("📊 Statistika", async (ctx) => {
  const id = ctx.from.id;
  const shart = await isAdmin(id);

  if (!shart) {
    return ctx.reply("Siz admin emassiz");
  }

  const users = await User.find();
  const Phones = await Phone.find();

  const text = `<b>📊 Statistika</b>\n\n<b>Foydalanuvchilar soni:</b> ${users.length}\n\n<b>Telefon raqamlar soni:</b> ${Phones.length}`;

  await ctx.reply(text, {
    parse_mode: "HTML",
  });
});
newWizart.hears("Foydalanuvchilarni ko'rish", async (ctx) => {
  const id = ctx.from.id;
  const shart = await isAdmin(id);

  if (!shart) {
    return ctx.reply("Siz admin emassiz");
  }
  const UserActive = await User.find({ active: true });
  let textMessage = `Faol userlar ro'yxati:\n`;
  let text = "";
  let sana = 0;
  for (let e of UserActive) {
    sana++;
    text += `<b>id: <code>${e.id}</code> </b>\nname<b>${e.name}</b> \t <i> \nactiv: <b>${e.active}</b>  \n<b>role:  <i>${e.role}</i></b></i>\n TelegramId : <code>${e.telegramId}</code>\n\n`;
    if (sana == 5) {
      await ctx.telegram.sendMessage(id, textMessage + text, {
        parse_mode: "HTML",
      });
      text = "";
      sana = 0;
    }
  }
  await ctx.telegram.sendMessage(id, textMessage + text, {
    parse_mode: "HTML",
  });
});

newWizart.hears("📝 Xabar yuborish", async (ctx) => {
  const id = ctx.from.id;
  const shart = await isAdmin(id);

  if (!shart) {
    return ctx.reply("Siz admin emassiz");
  }

  await ctx.reply(arr[7], keyboardCancel);
  return ctx.wizard.selectStep(5);
});

newWizart.hears("Foydalanuvchini o'zgartirish", async (ctx) => {
  const id = ctx.from.id;
  const shart = await isAdmin(id);

  if (!shart) {
    return ctx.reply("Siz admin emassiz");
  }

  await ctx.reply(arr[8], keyboardCancel);
  return ctx.wizard.selectStep(6);
});
