const nucleotideMapper = {
  A: 'T',
  T: 'A',
  G: 'C',
  C: 'G',
};

export const isKmer = (substring1: string, substring2: string) => {
  if (substring1 === substring2) {
    return true;
  }
  const substring2Complement = substring2
    .split('')
    .map((nucleotide) => nucleotideMapper[nucleotide])
    .join('');

  return substring1 === substring2Complement;
};
