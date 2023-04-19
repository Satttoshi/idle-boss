export default function formatNumbers(money) {
  if (money < 100000000) {
    return money.toLocaleString("de-DE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  const moneyString = Math.floor(money).toString();

  function addDots(numberString) {
    let newString = "";
    for (let i = 0; i < numberString.length; i++) {
      if (i % 3 === 0 && i !== 0) {
        newString = "." + newString;
      }
      newString = numberString[numberString.length - i - 1] + newString;
    }
    return newString;
  }

  if (moneyString.length > 32) {
    return (
      addDots(moneyString.slice(0, moneyString.length - 30)) + " Decillion"
    );
  } else if (moneyString.length > 29) {
    return (
      addDots(moneyString.slice(0, moneyString.length - 27)) + " Nonillion"
    );
  } else if (moneyString.length > 26) {
    return (
      addDots(moneyString.slice(0, moneyString.length - 24)) + " Septillion"
    );
  } else if (moneyString.length > 23) {
    return (
      addDots(moneyString.slice(0, moneyString.length - 21)) + " Sextillion"
    );
  } else if (moneyString.length > 20) {
    return (
      addDots(moneyString.slice(0, moneyString.length - 18)) + " Quintillion"
    );
  } else if (moneyString.length > 17) {
    return (
      addDots(moneyString.slice(0, moneyString.length - 15)) + " Quadrillion"
    );
  } else if (moneyString.length > 14) {
    return addDots(moneyString.slice(0, moneyString.length - 12)) + " Trillion";
  } else if (moneyString.length > 11) {
    return addDots(moneyString.slice(0, moneyString.length - 9)) + " Billion";
  } else if (moneyString.length > 8) {
    return addDots(moneyString.slice(0, moneyString.length - 6)) + " Million";
  } else {
    return addDots(moneyString);
  }
}
