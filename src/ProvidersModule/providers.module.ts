import { Module } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { ProvidersController } from './providers.controller';
import { Providers } from '../entity/Providers.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Providers])],
  providers: [ProvidersService],
  controllers: [ProvidersController],
})
export class ProvidersModule {}
