const randomUser = require("./randomUser");
const axios = require("axios");

const getSmsReq = async (url, urlRef, phone, result, catpchaKey) => {
  const headers = {
    "Content-Type": "application/json",
    Cookie:
      "i18n_redirected=uz; smart_top=1; oldRangeValue=0; route=042296d1a4e883d23faee94700cf6600; JSESSIONID=4590CF2A9648644BE748CC45305FEECF; XSRF-TOKEN=c0752061-8703-4f13-bd8c-2aadc5f3a3e2",
    "User-Agent": randomUser(),
    referer: urlRef,
    origin: "https://openbudget.uz",
    "x-xsrf-token": "c0752061-8703-4f13-bd8c-2aadc5f3a3e2",
  };
  const data = {
    phoneNumber: phone,
    captchaResult: result,
    captchaKey: catpchaKey,
    boardId: 1,
  };

  console.log(headers);
  console.log(data);
  const res = await axios.post(url, data, { headers: headers });
  console.log(res.data);
  return res.data;
};

module.exports = getSmsReq;
