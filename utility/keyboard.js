const { Markup } = require("telegraf");

const keyboardMain = Markup.keyboard([
  ["📲 Telefon raqamni yuborish"],
  ["💳 Hisobim", "🔄 Pul yechib olish"],
])
  .resize()
  .placeholder("Tanlang");
const keyboardCancel = Markup.keyboard([["Bekor qilish"]]).resize();
const keyboardConfirm = (data) => {
  let keyboard = Markup.inlineKeyboard([
    [{ text: "Confirm ✅", callback_data: `confirm:${data}` }],
    [{ text: "Cancel ❌", callback_data: `cancel:${data}` }],
  ]);
  keyboard.parse_mode = "HTML";
  return keyboard;
};
const adminKeyboard = Markup.keyboard([
  ["📲 Telefon raqamni yuborish"],
  ["💳 Hisobim", "🔄 Pul yechib olish"],
  ["📊 Statistika", "Foydalanuvchilarni ko'rish"],
  ["📝 Xabar yuborish"],
  ["Foydalanuvchini o'zgartirish"],
])
  .resize()
  .oneTime(true)
  .placeholder("Admin xush Kelibsiz");
module.exports = {
  keyboardMain,
  keyboardCancel,
  keyboardConfirm,
  adminKeyboard,
};
