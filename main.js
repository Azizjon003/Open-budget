const dotenv = require("dotenv");
dotenv.config();
const fs = require("fs");
const path = require("path");
const arr = JSON.parse(
  fs.readFileSync(path.join(__dirname, "/data/main.json"), "utf-8")
);
const { Telegraf, Composer, session, Scenes } = require("telegraf");
const TOKEN = process.env.TOKEN;
const connection = require("./model/index");
connection();

const bot = new Telegraf(TOKEN);
const newWizart = new Composer();
const Phone = new Composer();
const ConfirmCode = new Composer();
const Vote = new Composer();
const Balance = new Composer();
const Admin = new Composer();
const EditUser = new Composer();
module.exports = {
  arr,
  bot,
  newWizart,
  Phone,
  ConfirmCode,
  Vote,
  Balance,
  Admin,
  EditUser,
};
require("./controller/core/phone/phone.js");
require("./controller/core/phone/phoneJs.js");
require("./controller/core/phone/confirmCode.js");
require("./controller/core/phone/vote.js");
require("./controller/core/balance/balance.js");
require("./controller/core/admin/admin.js");
require("./controller/core/admin/editUser.js");
const menuSchema = new Scenes.WizardScene(
  "sceneWizard",
  newWizart,
  Phone,
  ConfirmCode,
  Vote,
  Balance,
  Admin,
  EditUser
);

const stage = new Scenes.Stage([menuSchema]);

bot.use(session());
bot.use(stage.middleware());

bot.catch((error, ctx) => {
  console.log(error);
  const id = ctx?.from?.id;
  console.log(error.stack);
  // if (id != "1953925296") {
  //   bot.telegram.forwardMessage("1953925296", id, String(error.message));
  // }
  if (id) {
    ctx.telegram.sendMessage(id, "Xatolik yuz berdi /start ni bosing ");
  }
});

require("./controller/start"); // Start
console.log("Bot is running");
bot.launch().then(() => {
  console.log("Bot is running");
});
