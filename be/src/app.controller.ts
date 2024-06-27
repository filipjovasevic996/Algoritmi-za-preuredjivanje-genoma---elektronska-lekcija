import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/greedy-sorting-by-reversals')
  greedySortingByReversals(@Body() input: { P: number[]; verbose: boolean }): {
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

  @Post('shortest-rearrangement-scenario')
  shortestRearrangementScenario(@Body() input: any): {
    permutations: number[][];
    permutationDistance: number;
  } {
    return this.appService.shortestRearrangementScenario(input);
  }
}
