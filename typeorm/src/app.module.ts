import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuestEntity } from './guest/guest.entity';
import { GuestsModule } from './guest/guest.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'tiger',
    database: 'labtest',
    entities: [GuestEntity],
    autoLoadEntities: true,
    synchronize: true,
  }),
  GuestsModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
