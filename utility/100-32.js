const qirqibOl = (txt) => {
  let text = txt.split("");
  text.splice(100, 32);
  console.log(text.length);
  return text.join("");
};

module.exports = qirqibOl;
