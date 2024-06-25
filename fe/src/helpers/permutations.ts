export const isPermutationIncomplete = (permutation: number[]) =>
  permutation.some((permutationNumber) => permutationNumber === 0);

export const uniquePermutation = (permutation: number[]) => {
  const uniqueNumbers = new Set();

  for (const number of permutation) {
    const absNum = Math.abs(number);
    if (uniqueNumbers.has(absNum)) {
      return false;
    }
    uniqueNumbers.add(absNum);
  }

  return true;
};
