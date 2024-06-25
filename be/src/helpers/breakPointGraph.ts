export const initializeGraph = (
  edges: [number, number][],
): Record<number, number[]> => {
  const adjacencyList: Record<number, number[]> = {};
  edges.forEach(([u, v]) => {
    if (!adjacencyList[u]) {
      adjacencyList[u] = [];
    }
    if (!adjacencyList[v]) {
      adjacencyList[v] = [];
    }
    adjacencyList[u].push(v);
    adjacencyList[v].push(u);
  });

  return adjacencyList;
};

export const getCycles = (
  breakPointGraph: Record<number, number[]>,
): number[][] => {
  const unvisited: number[] = Object.keys(breakPointGraph).map((key) =>
    Number(key),
  );
  const cycles: number[][] = [];

  while (unvisited.length > 0) {
    let v = unvisited[0];
    const currentCycle: number[] = [v];
    unvisited.splice(unvisited.indexOf(v), 1);

    while (true) {
      let nextV: number | null = null;
      for (const w of breakPointGraph[v]) {
        if (unvisited.includes(w)) {
          nextV = w;
          break;
        }
      }

      if (!nextV) {
        break;
      }

      currentCycle.push(nextV);
      console.log('Current cycle 2: ', currentCycle);
      unvisited.splice(unvisited.indexOf(nextV), 1);
      v = nextV;
    }

    cycles.push(currentCycle);
  }

  return cycles;
};

export const chromosomeToCycle = (chromosome: number[]): number[] => {
  const n: number = chromosome.length;
  const cycle: number[] = new Array(2 * n).fill(0);

  for (let i = 0; i < n; i++) {
    const j: number = chromosome[i];

    if (j > 0) {
      cycle[2 * i] = 2 * j - 1;
      cycle[2 * i + 1] = 2 * j;
    } else {
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
    if (cycleNodes[j] < cycleNodes[j + 1]) {
      chromosome[j / 2] = cycleNodes[j + 1] / 2;
    } else {
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
