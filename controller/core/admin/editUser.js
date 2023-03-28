const { EditUser } = require("../../../main");
const User = require("../../../model/user");
const isAdmin = require("../../../utility/isAdmin");
const { keyboardMain, adminKeyboard } = require("../../../utility/keyboard");
EditUser.hears(/^\d+$/, async (ctx) => {
  const id = ctx.update.message.from.id;
  const txt = ctx.update.message.text;
  let shart = await isAdmin(id);
  if (!shart) {
    return ctx.reply("Siz admin emassiz");
  }
  const editUser = await User.findOne({
    telegramId: txt,
  });
  if (!editUser) {
    return ctx.telegram.sendMessage(
      id,
      "Bunday foydalanuvchi mavjud emas\n iltmos qaytadan urinib ko'ring"
    );
  }
  const options = {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Edit Role",
            callback_data: `editRole:${editUser.telegramId}`,
          },
          {
            text: "Edit active",
            callback_data: `editActive:${editUser.telegramId}`,
          },
        ],
        [
          {
            text: "Cancel",
            callback_data: "cancel",
          },
        ],
      ],
    },
  };

  let sendMessageText = `<b>id: ${editUser.id} </b><b>${editUser.name}</b> \t <i> activ: <b>${editUser.active}</b>  <b>role:  <i>${editUser.role}</i></b></i>\n\n TelegramId : <code>${editUser.telegramId}</code>\n\n`;

  ctx.telegram.sendMessage(id, sendMessageText, options);
});
EditUser.action(/\beditRole/g, async (ctx) => {
  const id = ctx.update.callback_query.from.id;
  const updateId = ctx.update.callback_query.id;
  const messageId = ctx.update.callback_query.message?.message_id;

  const txt = ctx.update.callback_query.data.split(":")[1];
  const editUser = await User.findOne({
    telegramId: txt,
  });
  const role = editUser.role === "admin" ? "user" : "admin";

  await editUser.updateOne(
    {
      role: role,
    },
    { telegramId: txt },
    {
      new: true,
      runValidators: true,
    }
  );
  const editedUser = await User.findOne({
    telegramId: txt,
  });
  let sendMessageText = `<b>id: ${editedUser.id} </b><b>${editedUser.name}</b> \t <i> activ: <b>${editedUser.active}</b>  <b>role:  <i>${editedUser.role}</i></b></i>\n  TelegramId : <code>${editedUser.telegramId}</code>\n\n`;
  const options = {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Edit Role",
            callback_data: `editRole:${editedUser.telegramId}`,
          },
          {
            text: "Edit active",
            callback_data: `editActive:${editedUser.telegramId}`,
          },
        ],
        [
          {
            text: "Cancel",
            callback_data: "cancel",
          },
        ],
      ],
    },
  };
  ctx.telegram.editMessageText(
    id,
    messageId,
    updateId,
    sendMessageText,
    options
  );
});
EditUser.action(/\beditActive/, async (ctx) => {
  const id = ctx.update.callback_query.from.id;
  const updateId = ctx.update.callback_query.id;
  const messageId = ctx.update.callback_query.message?.message_id;

  const txt = ctx.update.callback_query.data.split(":")[1];
  const editUser = await User.findOne({
    telegramId: txt,
  });
  const role = editUser.active === true ? false : true;

  await editUser.updateOne(
    {
      active: role,
    },
    { telegramId: txt },
    {
      new: true,
      runValidators: true,
    }
  );
  const editedUser = await User.findOne({
    telegramId: txt,
  });
  let sendMessageText = `<b>id: ${editedUser.id} </b><b>${editedUser.name}</b> \t <i> activ: <b>${editedUser.active}</b>  <b>role:  <i>${editedUser.role}</i></b></i>\n  TelegramId : <code>${editedUser.telegramId}</code>\n\n`;
  const options = {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Edit Role",
            callback_data: `editRole:${editedUser.telegramId}`,
          },
          {
            text: "Edit active",
            callback_data: `editActive:${editedUser.telegramId}`,
          },
        ],
        [
          {
            text: "Cancel",
            callback_data: "cancel",
          },
        ],
      ],
    },
  };
  ctx.telegram.editMessageText(
    id,
    messageId,
    updateId,
    sendMessageText,
    options
  );
});
EditUser.action("cancel", async (ctx) => {
  const id = ctx.update.callback_query.from.id;
  const updateId = ctx.update.callback_query.id;
  const messageId = ctx.update.callback_query.message?.message_id;

  ctx.telegram.editMessageText(
    id,
    messageId,
    updateId,
    "Cancel.\n\nSiz bosh menyudasiz",
    adminKeyboard
  );
  return ctx.wizard.selectStep(0);
});
