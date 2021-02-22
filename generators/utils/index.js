module.exports.toProperCase = string => {
  let output = '';
  let words = string.split(' ');
  words.forEach(word => {
    word
      .toLowerCase()
      .split('')
      .forEach((char, i) => {
        if (i === 0) {
          output += char.toUpperCase();
        } else output += char;
      });
  });
  return output;
};

module.exports.toCamelCase = string => {
  let output = '';
  let words = string.split(' ');
  words.forEach((word, i) => {
    word
      .toLowerCase()
      .split('')
      .forEach((char, ii) => {
        if (ii === 0 && i !== 0) {
          output += char.toUpperCase();
        } else output += char;
      });
  });
  return output;
};
