import {
  coloredEdges,
  getCycles,
  initializeGraph,
  twoBreakOnGenome,
  twoBreakOnGenomeGraph,
} from '@helpers/breakPointGraph';
import { isKmer } from '@helpers/kMers';
import { applySortingReversals } from '@helpers/sortingByReversals';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  greedySortingByReversals(input: { P: number[]; verbose: boolean }) {
    let { P, verbose } = input;
    let permutationDistance: number = 0;
    const permutations: number[][] = [[...P]];
    const lefts: number[][] = [];
    const mids: number[][] = [];
    const breakpoints: number[][] = [this.numberOfBreakpoints({ P: P })[1]];
    let p, left, mid;

    const n: number = P.length;

    for (let k = 0; k < n; k++) {
      if (P[k] !== k + 1) {
        [p, left, mid] = applySortingReversals(P, k);
        P = p;
        permutationDistance++;

        if (verbose) {
          permutations.push([...P]);

          breakpoints.push(this.numberOfBreakpoints({ P: P })[1]);
          lefts.push(left);
          mids.push(mid);
        }
      }
      if (P[k] === -(k + 1)) {
        P[k] = -P[k];
        permutationDistance++;

        if (verbose) {
          permutations.push([...P]);
          breakpoints.push(this.numberOfBreakpoints({ P: P })[1]);
          lefts.push(left);
          mids.push([-(k + 1)]);
        }
      }
    }
    lefts.push(Array.from({ length: P.length }, (_, i) => i + 1));
    return { permutationDistance, permutations, lefts, mids, breakpoints };
  }

  numberOfBreakpoints(input: { P: number[] }): [number, number[]] {
    const { P } = input;
    const length = P.length;
    let adjacencies = 0;
    const indexes = new Array(length + 1).fill(1);

    if (P[0] === 1) {
      indexes[0] = 0;
    }

    for (let i = 0; i < length - 1; i++) {
      if (P[i + 1] - P[i] === 1) {
        adjacencies++;
        indexes[i + 1] = 0;
      }
    }

    if (P[length - 1] === length) {
      indexes[length] = 0;
    }

    const breakpoints = length + 1 - adjacencies;
    return [breakpoints, indexes];
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
    }

    return { permutations, permutationDistance };
  }

  getKmers(input: {
    k: number;
    chromosome1: string;
    chromosome2: string;
  }): [number, number][] {
    const { k, chromosome1, chromosome2 } = input;
    const n = chromosome1.length;
    let kMers: [number, number][] = [];

    for (let i = 0; i < n - k + 1; i++) {
      const substring1 = chromosome1.slice(i, i + k);
      for (let j = 0; j < n - k + 1; j++) {
        const substring2 = chromosome2.slice(j, j + k);
        if (isKmer(substring1, substring2)) {
          kMers.push([i, j]);
        }
      }
    }

    return kMers;
  }
}
