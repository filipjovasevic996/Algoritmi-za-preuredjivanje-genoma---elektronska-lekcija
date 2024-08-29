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

export const convertToChromosome = (cycleNodes: number[]): number[] => {
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

const removeUndirectedEdge = (
  breakPointGraph: Record<number, number[]>,
  [edgeNode1, edgeNode2]: [number, number],
): Record<number, number[]> => {
  const index1 = breakPointGraph[edgeNode1].indexOf(edgeNode2);
  if (index1 > -1) {
    breakPointGraph[edgeNode1].splice(index1, 1);
  }

  const index2 = breakPointGraph[edgeNode2].indexOf(edgeNode1);
  if (index2 > -1) {
    breakPointGraph[edgeNode2].splice(index2, 1);
  }

  return breakPointGraph;
};

const addUndirectedEdge = (
  breakPointGraph: Record<number, number[]>,
  [edgeNode1, edgeNode2]: [number, number],
): Record<number, number[]> => {
  if (!breakPointGraph[edgeNode1]) {
    breakPointGraph[edgeNode1] = [];
  }
  if (!breakPointGraph[edgeNode2]) {
    breakPointGraph[edgeNode2] = [];
  }
  breakPointGraph[edgeNode1].push(edgeNode2);
  breakPointGraph[edgeNode2].push(edgeNode1);

  return breakPointGraph;
};

export const twoBreakOnGenomeGraph = (
  breakPointGraph: Record<number, number[]>,
  i: number,
  i_p: number,
  j: number,
  j_p: number,
): Record<number, number[]> => {
  breakPointGraph = removeUndirectedEdge(breakPointGraph, [i, i_p]);
  breakPointGraph = removeUndirectedEdge(breakPointGraph, [j, j_p]);

  breakPointGraph = addUndirectedEdge(breakPointGraph, [i, j]);
  breakPointGraph = addUndirectedEdge(breakPointGraph, [i_p, j_p]);

  return breakPointGraph;
};

export const cycleToChromosome = (
  breakPointGraph: Record<number, number[]>,
): number[][] => {
  const P: number[][] = [];

  const cycles = getCycles(breakPointGraph);
  for (const cycle of cycles) {
    const chromosome = convertToChromosome(cycle);
    P.push(chromosome);
  }

  return P;
};

export const twoBreakOnGenome = (
  P: number[][],
  i: number,
  i_p: number,
  j: number,
  j_p: number,
): number[][] => {
  let genomeGraph = initializeGraph([...blackEdges(P), ...coloredEdges(P)]);
  genomeGraph = twoBreakOnGenomeGraph(genomeGraph, i, i_p, j, j_p);

  P = cycleToChromosome(genomeGraph);

  return P;
};
