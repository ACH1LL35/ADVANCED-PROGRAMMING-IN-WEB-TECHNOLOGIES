import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parent } from './parent/parent.entity';
import { ParentModule } from './parent/parent.module';
import { ParentService } from './parent/parent.service';
import { ParentController } from './parent/parent.controller';

@Module({
  imports: [ParentModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'tiger',
    database: 'typeorm',
    entities: [Parent],
    autoLoadEntities: true,
    synchronize: true,
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
