import {Entity, Column, PrimaryGeneratedColumn, ManyToOne,} from 'typeorm';
import {Providers} from "./Providers.entity";

@Entity('MedPreparations')
export class MedPreparations {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 500 })
  manufacturer: string;

  @ManyToOne(() => Providers, (Providers) => Providers.MedPreparations)
  providers: Providers;

}
