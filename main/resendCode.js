const randomUser = require("./randomUser");
const axios = require("axios");

const resendCode = async (url, urlRef, otpKey) => {
  const headers = {
    "Content-Type": "application/json",
    Cookie:
      "i18n_redirected=uz; smart_top=1; SameSite=None; route=042296d1a4e883d23faee94700cf6600; JSESSIONID=BDD1A09C40E5BC8F1470CD19974FA479; ADRUM_BTa=R:72|g:0f704267-5711-49fc-88fb-89279599ba69|n:customer1_9c28b63e-99cb-4969-b91e-d0d7809dc215; ADRUM_BT1=R:72|i:6747|e:5",
    "User-Agent": randomUser(),
    Referer: urlRef,
  };
  const data = {
    otpKey: otpKey,
  };

  const res = await axios.post(url, data, { headers: headers });
  console.log(res.data);
  return res.data;
};

module.exports = resendCode;
