export const chromosomeToCycle = (chromosome: number[]): number[] => {
  const n: number = chromosome.length;
  const cycle: number[] = new Array(2 * n).fill(0);

  for (let i = 0; i < n; i++) {
    const j: number = chromosome[i];

    // pozitivno orijentisanu granu obilazimo od polaznog_cvora do dolaznog_cvora
    if (j > 0) {
      cycle[2 * i] = 2 * j - 1;
      cycle[2 * i + 1] = 2 * j;
    } else {
      // negativno orijentisanu granu obilazimo od dolaznog_cvora do polaznog_cvora
      cycle[2 * i] = -2 * j;
      cycle[2 * i + 1] = -2 * j - 1;
    }
  }
  return cycle;
};

export const cycleToChromosome = (cycleNodes: number[]): number[] => {
  const m: number = cycleNodes.length;
  const chromosome: number[] = new Array(m / 2).fill(0);

  for (let j = 0; j < m; j += 2) {
    // pozitivno orijentisanu granu smo obilazili od polaznog_cvora do dolaznog_cvora
    if (cycleNodes[j] < cycleNodes[j + 1]) {
      chromosome[j / 2] = cycleNodes[j + 1] / 2;
    } else {
      // negativno orijentisanu granu smo obilazili od dolaznog_cvora do polaznog_cvora
      chromosome[j / 2] = -cycleNodes[j] / 2;
    }
  }
  return chromosome;
};

export const coloredEdges = (P: number[][]): [number, number][] => {
  const edges: [number, number][] = [];

  for (const chromosome of P) {
    const cycleNodes: number[] = chromosomeToCycle(chromosome);
    const m: number = cycleNodes.length;

    for (let j = 1; j < m - 1; j += 2) {
      edges.push([cycleNodes[j], cycleNodes[j + 1]]);
    }

    edges.push([cycleNodes[m - 1], cycleNodes[0]]);
  }

  return edges;
};

export const blackEdges = (P: number[][]): [number, number][] => {
  const edges: [number, number][] = [];

  for (const chromosome of P) {
    const cycleNodes: number[] = chromosomeToCycle(chromosome);
    const m: number = cycleNodes.length;

    for (let j = 0; j < m; j += 2) {
      edges.push([cycleNodes[j], cycleNodes[j + 1]]);
    }
  }

  return edges;
};
