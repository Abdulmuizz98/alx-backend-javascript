export default function cleanset(set, startString) {
  let text = '';
  if (!startString) return text;

  const result = [...set].filter((x) => x.startsWith(startString));
  for (const elem of result) { text += `${elem.substring(startString.length)}-`; }
  return text.substring(0, text.length - 1);
}
