export default function hasValuesFromArray(set, arr) {
  return arr.every((e) => set.has(e));
}
