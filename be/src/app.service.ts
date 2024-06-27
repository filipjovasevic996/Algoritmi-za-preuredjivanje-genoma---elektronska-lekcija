import {
  coloredEdges,
  getCycles,
  initializeGraph,
  twoBreakOnGenome,
  twoBreakOnGenomeGraph,
} from '@helpers/breakPointGraph';
import { applySortingReversals } from '@helpers/sortingByReversals';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  greedySortingByReversals(input: { P: number[]; verbose: boolean }) {
    let { P, verbose } = input;
    let permutationDistance: number = 0;
    const permutations: number[][] = [];
    const n: number = P.length;

    for (let k = 0; k < n; k++) {
      if (P[k] !== k + 1) {
        P = applySortingReversals(P, k);
        permutationDistance++;

        if (verbose) {
          permutations.push(P);
        }
      }
      if (P[k] === -(k + 1)) {
        P[k] = -P[k];
        permutationDistance++;

        if (verbose) {
          permutations.push(P);
        }
      }
    }
    return { permutationDistance, permutations };
  }

  numberOfBreakpoints(input: { P: number[] }): number {
    let { P } = input;
    const length = P.length;
    let adjancecies = 0;
    for (let i = 0; i < length - 1; i++) {
      if (P[i + 1] - P[i] === 1) adjancecies++;
    }

    return length + 1 - adjancecies;
  }

  getTwoBreakDistance(input: { P: number[][]; Q: number[][] }): number {
    const syntenyBlocks = input.P[0].length;
    const redEdges = coloredEdges(input.P);
    const blueEdges = coloredEdges(input.Q);
    const breakPointGraph = initializeGraph(redEdges.concat(blueEdges));
    const numberOfCycles = getCycles(breakPointGraph);
    return syntenyBlocks - numberOfCycles.length;
  }

  shortestRearrangementScenario(input: { P: number[][]; Q: number[][] }): any {
    let { P, Q } = input;

    let permutationDistance = 0;
    const permutations = [];

    const redEdges = coloredEdges(P);
    const blueEdges = coloredEdges(Q);
    let breakpointGraph = initializeGraph([...redEdges, ...blueEdges]);

    while (true) {
      const cycles = getCycles(breakpointGraph);

      let selectedCycle: number[] | null = null;
      for (const cycle of cycles) {
        if (cycle.length > 2) {
          selectedCycle = cycle;
          break;
        }
      }

      if (selectedCycle === null) {
        break;
      }

      const selectedCycleEdges = selectedCycle.map((_, i) =>
        i < selectedCycle.length - 1
          ? [selectedCycle[i], selectedCycle[i + 1]]
          : [selectedCycle[selectedCycle.length - 1], selectedCycle[0]],
      );

      const n = selectedCycleEdges.length;
      let k = Math.floor(Math.random() * n);

      let selectedEdge = selectedCycleEdges[k];
      let [u, v] = selectedEdge;

      if (
        !blueEdges.some(
          (edge) =>
            (edge[0] === u && edge[1] === v) ||
            (edge[0] === v && edge[1] === u),
        )
      ) {
        k = (k + 1) % n;
      }

      selectedEdge = selectedCycleEdges[k];
      const previousRedEdge = selectedCycleEdges[(k - 1 + n) % n];
      const nextRedEdge = selectedCycleEdges[(k + 1) % n];

      const [i_p, _] = previousRedEdge;
      const [i, __] = selectedEdge;
      const [j, j_p] = nextRedEdge;

      breakpointGraph = twoBreakOnGenomeGraph(breakpointGraph, i, i_p, j, j_p);
      permutationDistance += 1;

      P = twoBreakOnGenome(P, i, i_p, j, j_p);
      permutations.push(P);
      console.log(P);
    }

    return { permutations, permutationDistance };
  }
}
