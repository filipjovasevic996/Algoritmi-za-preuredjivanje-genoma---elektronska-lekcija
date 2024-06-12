export const applySortingReversals = (P: number[], k: number): number[] => {
  const n: number = P.length;

  for (let i = k; i < n; i++) {
    if (Math.abs(P[i]) === k + 1) {
      // na indeksu k treba da stoji element sa abs vrednoscu k+1
      const Left: number[] = P.slice(0, k);
      const Mid: number[] = P.slice(k, i + 1);
      const Right: number[] = P.slice(i + 1);

      return Left.concat(Mid.map((x) => -x).reverse(), Right);
    }
  }
  // Handle cases where the condition is never met
  return P;
};
