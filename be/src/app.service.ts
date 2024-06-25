import {
  coloredEdges,
  getCycles,
  initializeGraph,
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
}
