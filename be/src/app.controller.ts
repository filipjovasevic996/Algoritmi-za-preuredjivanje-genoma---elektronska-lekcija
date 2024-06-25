import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { GenomeGraphService } from './genome-graph/genome-graph.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/greedy-sorting-by-reversals')
  greedySortingByReversals(@Body() input: any): {
    permutations: number[][];
    permutationDistance: number;
  } {
    return this.appService.greedySortingByReversals(input);
  }

  @Post('/number-of-breakpoints')
  numberOfBreakpoints(@Body() input: any): number {
    return this.appService.numberOfBreakpoints(input);
  }

  @Post('two-break-distance')
  getTwoBreakDistance(@Body() input: { P: number[][]; Q: number[][] }): number {
    return this.appService.getTwoBreakDistance(input);
  }
}
