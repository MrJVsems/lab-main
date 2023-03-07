import { Controller, Get } from '@nestjs/common';
import { ProvidersService } from './providers.service';

@Controller('/providers')
export class ProvidersController {
  constructor(private readonly providerService: ProvidersService) {}

  @Get('/')
  findAll() {
    return this.providerService.findAll();
  }
  @Get('/add')
  create() {
    return this.providerService.create();
  }

  @Get('/add500')
  create500() {
    return this.providerService.add500();
  }
}
