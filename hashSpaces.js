// create a function that converts hashtags to spaces. E.g if we have my#name#is#chuks the result should br "my name is chuks"

const noSpaces = (text) => {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "#") {
      result += " ";
    } else {
      result += text[i];
    }
  }
  return result;
};

const name = "my#name#is#chuks";
const finale = noSpaces(name);
console.log(finale);
