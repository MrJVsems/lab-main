import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoModule } from './PhotoModule/photo.module';
import { Banks } from './entity/Banks.entity';
import { Providers } from './entity/Providers.entity';
import { Photo } from './entity/Photo.entity';
import { MedPreparations } from './entity/MedPreparations.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        // entities: ['./entity/*.ts'],
        autoLoadEntities: true,
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
    PhotoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
