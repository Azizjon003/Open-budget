const { Balance, arr } = require("../../../main");
const Wallet = require("../../../model/payment");
const User = require("../../../model/user");
const Zayafka = require("../../../model/zayafka");
const { keyboardMain, keyboardConfirm } = require("../../../utility/keyboard");
Balance.hears("Bekor qilish", async (ctx) => {
  const id = ctx.from.id;
  ctx.telegram.sendMessage(id, arr[2], keyboardMain);
  return ctx.wizard.selectStep(0);
});

Balance.hears("/start", async (ctx) => {
  const id = ctx.from.id;
  ctx.telegram.sendMessage(id, arr[0], keyboardMain);
  return ctx.wizard.selectStep(0);
});
Balance.on("message", async (ctx) => {
  const id = ctx.from.id;
  // const balance = await Balance.getBalance(id);
  const txt = ctx.message.text;
  const user = await User.findOne({ telegramId: id });
  const wallet = user.wallet;
  console.log(wallet);
  if (!wallet) {
    ctx.reply(arr[4], keyboardMain);
    return ctx.wizard.selectStep(0);
  } else {
    const wall = await Wallet.findOne({ _id: wallet });
    console.log(wall);
    let amount = wall.amount;

    if (amount >= 8000) {
      let text = `<b>Qabul Qilindi</b>.\n<b>Sizning hisobingizda 0 so'm qoldi.To'lov kutish jarayonida</b>`;
      keyboardMain.parse_mode = "HTML";
      await ctx.reply(text, keyboardMain);
      await wall.updateOne(
        { amount: 0 },
        {
          _id: wallet,
        },
        {
          new: true,
          runValidators: true,
        }
      );
      const zayafka = await Zayafka.create({
        user: user._id,
        phone: txt,
        amount: amount,
      });

      const keyboard = keyboardConfirm(zayafka._id);
      let groupId = process.env.GROUPID;
      let text2 = `<b>Yangi Zayafka</b>.\n<b>Telefon raqami: ${txt}</b>.\n<b>Hisobdagi miqdor: ${amount} so'm</b>.
      \n <i> Diqqatli bo'ling siz to'lov qilgandan so'ng Confirm tugmasini bosing shunda muammo bo'lmaydi.Agar cantactda muammo bo'lsa Cancel tugmasini bosing shunda pul qaytib tushadi va userga ogohlantirish boradi</i>`;

      ctx.telegram.sendMessage(groupId, text2, keyboard);
      return ctx.wizard.selectStep(0);
    } else {
      ctx.reply(arr[6], keyboardMain);
      return ctx.wizard.selectStep(0);
    }
  }
});
