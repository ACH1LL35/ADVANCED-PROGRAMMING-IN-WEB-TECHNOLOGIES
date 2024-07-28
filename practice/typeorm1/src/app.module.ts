import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student/student.entity'; // Import the Student entity
import { StudentModule } from './student/student.module'; // Import the Student module
import { StudentService } from './student/student.service'; // Import the Student service
import { StudentController } from './student/student.controller'; // Import the Student controller

@Module({
  imports: [
    StudentModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'tiger',
      database: 'typeorm',
      entities: [Student],
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
