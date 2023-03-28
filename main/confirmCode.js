const randomUser = require("./randomUser");
const axios = require("axios");

const confirmCode = async (url, refUrl, code, otpKey, id) => {
  const headers = {
    "Content-Type": "application/json",
    Cookie:
      "i18n_redirected=uz; smart_top=1; oldRangeValue=0; route=042296d1a4e883d23faee94700cf6600; JSESSIONID=4590CF2A9648644BE748CC45305FEECF; XSRF-TOKEN=c0752061-8703-4f13-bd8c-2aadc5f3a3e2",
    "User-Agent": randomUser(),
    Referer: refUrl,
    Host: "openbudget.uz",
  };
  const data = {
    initiativeId: id,
    otpKey: otpKey,
    otpCode: code,
    subinitiativesId: [],
  };
  console.log(data);
  const res = await axios.post(url, data, { headers: headers });
  console.log(res.data);
  return res.data;
};

module.exports = confirmCode;
