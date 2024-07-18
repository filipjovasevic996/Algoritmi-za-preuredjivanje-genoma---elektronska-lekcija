export const isValidDNASequence = (sequence: string): boolean =>
  /^[ATCG]*$/.test(sequence);
