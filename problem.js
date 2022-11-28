let convertNum = (num) => {
  let units = ["M", "B", "T", "k"];
  let unit = Math.floor((num / 1.0e1).toFixed(0).toString().length);
  let r = unit % 3;
  let x = Math.abs(Number(num)) / Number("1.0e+" + (unit - r)).toFixed(2);
  return x.toFixed(0) + " " + units[Math.floor(unit / 3) - 2];
};

const res = convertNum(16555000);
console.log(res);
