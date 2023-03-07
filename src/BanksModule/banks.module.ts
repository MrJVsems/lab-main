import { Module } from '@nestjs/common';
import { BanksService } from './banks.service';
import { BanksController } from './banks.controller';
import { Banks } from '../entity/Banks.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Banks])],
  providers: [BanksService],
  controllers: [BanksController],
})
export class BanksModule {}
