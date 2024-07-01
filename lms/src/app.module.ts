import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GuestModule } from './guest/guest.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [GuestModule, TypeOrmModule.forRoot(
    { type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'tiger',
    database: 'labtest',
    autoLoadEntities: true,
    synchronize: true,
    } ),],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
