export default number => {
  const stringReverse = str => {
    return str
      .split('')
      .reverse()
      .join('');
  };
  const ref = parseFloat(number)
    .toFixed(2)
    .split('.');
  let [preComma] = ref;
  const [, postComma] = ref;
  preComma = stringReverse(
    stringReverse(preComma)
      .match(/.{1,3}/g)
      .join('.')
  );
  return `${preComma},${postComma} €`;

  /* toLocaleString won't work with testing with jest node browser,
     So, I have implemented another way to format the number.
    return parseFloat(number).toLocaleString('de-DE', {
      maximumFractionDigits: 2,
      style: 'currency',
      currency: 'EUR'
    });
  */
};
