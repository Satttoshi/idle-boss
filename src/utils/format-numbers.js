export default function formatNumbers(money) {
  if (money < 1000000) {
    return money.toLocaleString("de-DE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  const moneyString = Math.floor(money).toString();

  function addComma(numberString) {
    let newString = "";
    for (let i = 0; i < numberString.length; i++) {
      if (i % 3 === 0 && i !== 0) {
        newString = "," + newString;
      }
      newString = numberString[numberString.length - i - 1] + newString;
    }
    return newString;
  }

  if (moneyString.length > 30) {
    return (
      addComma(moneyString.slice(0, moneyString.length - 27)) + " Decillion"
    );
  } else if (moneyString.length > 27) {
    return (
      addComma(moneyString.slice(0, moneyString.length - 24)) + " Nonillion"
    );
  } else if (moneyString.length > 24) {
    return (
      addComma(moneyString.slice(0, moneyString.length - 21)) + " Septillion"
    );
  } else if (moneyString.length > 21) {
    return (
      addComma(moneyString.slice(0, moneyString.length - 18)) + " Sextillion"
    );
  } else if (moneyString.length > 18) {
    return (
      addComma(moneyString.slice(0, moneyString.length - 15)) + " Quintillion"
    );
  } else if (moneyString.length > 15) {
    return (
      addComma(moneyString.slice(0, moneyString.length - 12)) + " Quadrillion"
    );
  } else if (moneyString.length > 12) {
    return addComma(moneyString.slice(0, moneyString.length - 9)) + " Trillion";
  } else if (moneyString.length > 9) {
    return addComma(moneyString.slice(0, moneyString.length - 6)) + " Billion";
  } else if (moneyString.length > 6) {
    return addComma(moneyString.slice(0, moneyString.length - 3)) + " Million";
  } else {
    return addComma(moneyString);
  }
}
