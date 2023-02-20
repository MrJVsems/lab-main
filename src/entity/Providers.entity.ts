import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany,} from 'typeorm';
import {Banks} from "./Banks.entity";
import {MedPreparations} from "./MedPreparations.entity";

@Entity('Providers')
export class Providers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 500 })
  INN: string;

  @Column({ length: 500 })
  OGRN: string;

  @Column({ length: 500 })
  ResAddress: string;

  @ManyToOne(() => Banks, (Banks) => Banks.providers)
  Bank: Banks;

  @OneToMany(() => MedPreparations, (MedPreparations) => MedPreparations.providers)
  MedPreparations: MedPreparations;

}
