import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { Providers } from '../entity/Providers.entity';
import {Banks} from "../entity/Banks.entity";
import { BanksService } from '../BanksModule/banks.service';

@Injectable()
export class ProvidersService {

  constructor(
    @InjectRepository(Providers)
    private ProvidersRepository: Repository<Providers>,
  ) {}

  async findAll(): Promise<Providers[]> {
    return this.ProvidersRepository.find();
  }
  async add500() {
    for (let i = 1; i < 500000; i++) {
      console.log(i);
      this.create();
    }
  }

  async create(): Promise<Providers> {
    return this.ProvidersRepository.save({
      bankId: 1,
      name: 'имя',
      OGRN: 'огрн',
      ResAddress: 'Космонатвов',
      INN: 'инн',
    });
  }
}
