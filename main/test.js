const dotenv = require("dotenv");
dotenv.config();
const fs = require("fs");
const getCatpcha = require("./getCatpcha");
const getSmsReq = require("./getSmsReq");
const confirmCode = require("./confirmCode");
const resendCode = require("./resendCode");

const URL = process.env.URLCATPCHA;
const URLCHECK = process.env.URLCHECK;
const urlRef = process.env.REFURL;
const URLCONFIRM = process.env.URLCONFIRM;
const URLRESEND = process.env.URLRESEND;
const ID = process.env.ID;

const catpcha = async () => {
  const data = await getCatpcha(URL, urlRef);
  fs.writeFileSync("catpcha.json", JSON.stringify(data));
};
const sms = async (phone, result, catpchaKey) => {
  getSmsReq(URLCHECK, urlRef, phone, result, catpchaKey);
};

const verifyCode = async (otpKey, code) => {
  confirmCode(URLCONFIRM, urlRef, code, otpKey, ID);
};
const resendCodes = async (otpKey) => {
  resendCode(URLRESEND, urlRef, otpKey);
};
catpcha();

// sms("998931563442", "23", "9c01e69e6d374769871d6ee0");

// resendCodes("812cb9fc-ad0b-42aa-b4e0-de10c9963f2e");
// verifyCode("a798eaa4-c302-4423-b1a5-54e165677c84", "670506");
