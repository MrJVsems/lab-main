import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {Providers} from "./Providers.entity";

@Entity('Banks')
export class Banks {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 500 })
  INN: string;

  @Column({ length: 500 })
  OGRN: string;


  @OneToMany(() => Providers, (Providers) => Providers.Bank)
  providers: Providers;
}
