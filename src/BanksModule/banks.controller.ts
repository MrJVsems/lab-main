import { Controller, Get } from '@nestjs/common';
import { BanksService } from './banks.service';

@Controller('/banks')
export class BanksController {
  constructor(private readonly banksService: BanksService) {}

  @Get('/')
  findAll() {
    return this.banksService.findAll();
  }
  @Get('/add')
  create() {
    return this.banksService.create();
  }

  @Get('/add500')
  create500() {
    return this.banksService.add500();
  }
}
