let counter = 0;
export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  counter += 1;
  if (counter === 5) { throw new Error('Endpoint load is high'); }
  weakMap.set(endpoint, counter);
}
