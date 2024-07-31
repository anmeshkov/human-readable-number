module.exports = function toReadable (number) {
  // 1. Названия для чисел
  const simple = [
    { value: 0, title: "" },
    { value: 1, title: "one" },
    { value: 2, title: "two" },
    { value: 3, title: "three" },
    { value: 4, title: "four" },
    { value: 5, title: "five" },
    { value: 6, title: "six" },
    { value: 7, title: "seven" },
    { value: 8, title: "eight" },
    { value: 9, title: "nine" },
    { value: 10, title: "ten" },
    { value: 11, title: "eleven" },
    { value: 12, title: "twelve" },
    { value: 13, title: "thirteen" },
    { value: 14, title: "fourteen" },
    { value: 15, title: "fifteen" },
    { value: 16, title: "sixteen" },
    { value: 17, title: "seventeen" },
    { value: 18, title: "eighteen" },
    { value: 19, title: "nineteen" },
  ];

  const tens = [
    { value: 2, title: "twenty" },
    { value: 3, title: "thirty" },
    { value: 4, title: "forty" },
    { value: 5, title: "fifty" },
    { value: 6, title: "sixty" },
    { value: 7, title: "seventy" },
    { value: 8, title: "eighty" },
    { value: 9, title: "ninety" },
  ];

  const toString = () => {
    // если число равно 0 возвращаем zero
    if (number === 0) {
      return "zero";
    }

    // если число равно от 0 до 19 возвращаем название числа из массива simple
    if (number <= 19) {
      return simple.find((n) => n.value === number).title;
    }

    // если число равно от 20 до 999 возвращаем название числа из массива
    if (number <= 999) {
      const ten = number % 100;
      const hundred = Math.trunc(number / 100);

      let strTens = "";
      let strHundreds = "";

      if (ten <= 19) {
        strTens = simple.find((n) => n.value === ten).title;
      } else if (ten <= 99) {
        strTens = `${tens.find((n) => n.value === (Math.trunc(ten / 10))).title} ${simple.find((n) => n.value === (ten % 10)).title}`
      }

      if (hundred) {
        strHundreds = `${simple.find((n) => n.value === hundred).title} hundred`
      }

      return `${strHundreds} ${strTens}`.replace(/ +/g, ' ').trim()
    }
  };

  return toString();
}