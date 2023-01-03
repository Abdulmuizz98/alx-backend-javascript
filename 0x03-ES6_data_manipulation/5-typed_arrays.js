export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);

  const int8d = new Int8Array(buffer);

  try {
    int8d[position] = value;
  } catch (e) {
    throw new RangeError();
  }

  return new DataView(buffer);
}
