import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Banks } from '../entity/Banks.entity';

@Injectable()
export class BanksService {
  constructor(
    @InjectRepository(Banks)
    private BanksRepository: Repository<Banks>,
  ) {}

  async findAll(): Promise<Banks[]> {
    return this.BanksRepository.find();
  }
  async add500() {
    for (let i = 1; i < 500000; i++) {
      console.log(i);
      await this.create();
    }
  }

  async create(): Promise<Banks> {
    return this.BanksRepository.save({
      name: 'имя',
      INN: 'инн',
      OGRN: 'огрн',
    });
  }
}
