import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/greedy-sorting-by-reversals')
  greedySortingByReversals(@Body() input: any): number {
    return this.appService.greedySortingByReversals(input);
  }

  @Post('/number-of-breakpoints')
  numberOfBreakpoints(@Body() input: any): number {
    return this.appService.numberOfBreakpoints(input);
  }
}
