const { Admin } = require("../../../main");
const isAdmin = require("../../../utility/isAdmin");
const { keyboardMain, adminKeyboard } = require("../../../utility/keyboard");

const User = require("../../../model/user");
Admin.on("message", async (ctx) => {
  const id = ctx.from.id;
  const shart = await isAdmin(id);
  if (!shart) {
    return ctx.reply("Siz admin emassiz");
  }
  const text = ctx.update.message.text.trim();
  const users = await User.find();

  for (let i = 0; i < users.length; i++) {
    try {
      await ctx.telegram.sendMessage(users[i].telegramId, text, {
        parse_mode: "HTML",
      });
    } catch (error) {
      console.log(error);
      await ctx.telegram.sendMessage(id, `Xatolik yuz berdi ${error.message}`);
    }
  }

  ctx.telegram.sendMessage(
    id,
    "Buyruqlar bajarildi menga Ruxsat Admin  😎.Siz bosh menyudasiz",
    adminKeyboard
  );
  return ctx.wizard.selectStep(0);
});
