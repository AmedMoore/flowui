export function indices<T>(array: Array<T>): number[] {
  const indices: number[] = [];
  for (let i = 0; i < array.length; i++) {
    indices.push(i);
  }
  return indices;
}
