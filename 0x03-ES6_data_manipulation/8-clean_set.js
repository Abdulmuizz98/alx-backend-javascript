export default function cleanset(set, startString) {
  if (!startString || (typeof startString) !== 'string') return [].join('-');

  let result = [...set].filter((x) => x && x.startsWith(startString));
  result = result.map((elem) => elem.substring(startString.length));

  return result.join('-');
}
