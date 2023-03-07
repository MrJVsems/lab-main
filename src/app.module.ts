import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoModule } from './PhotoModule/photo.module';
import { Banks } from './entity/Banks.entity';
import { Providers } from './entity/Providers.entity';
import { Photo } from './entity/Photo.entity';
import { MedPreparations } from './entity/MedPreparations.entity';
import { BanksModule } from './BanksModule/banks.module';
import {ProvidersModule} from "./ProvidersModule/providers.module";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        entities: [Banks, Providers, Photo, MedPreparations],
        //autoLoadEntities: true,
        host: 'localhost',
        port: 5432,
        username: 'ZooRole',
        password: '123',
        database: 'ZooHotel',
        synchronize: true,
        cli: {
          entitiesDir: './entities',
        },
      }),
    }),
    BanksModule,
    PhotoModule,
    ProvidersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
