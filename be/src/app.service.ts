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
        // k-ti element nije na svom mestu
        P = applySortingReversals(P, k);
        permutationDistance++;

        if (verbose) {
          permutations.push(P);
        }
      }
      // nakon primene prethodne rotacije moze se desiti da smo doveli dobar blok na svoje mesto
      // ali da ima pogresno usmerenje, pa je potrebno izvrsiti jos jednu rotaciju samo oko njega
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
}
