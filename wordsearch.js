// pair programing @pformb and @svaronc
const { transpose } = require("./matrix_transposition");

const wordSearch = (letters, word) => {
  if (letters.length <= 0) {
    return undefined;
  } else {
    const horizontalJoin = letters.map((ls) => ls.join(""));
    const reverseL = word.split("").reverse().join("");
    const transposeLetters = transpose(letters).map((ls) => ls.join(""));
    for (let l of horizontalJoin) {
      if (l === word || l === reverseL) {
        return true;
      }
    }
    console.log(transposeLetters);

    for (let letter of transposeLetters) {
      if (letter === word || letter === reverseL) {
        return true;
      }
    }
  }
  return false;
};

module.exports = wordSearch;
