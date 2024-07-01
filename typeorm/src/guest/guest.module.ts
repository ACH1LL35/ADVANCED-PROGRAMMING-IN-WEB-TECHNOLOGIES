import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuestEntity } from './guest.entity';
import { GuestsController } from './guest.controller';
import { GuestsService } from './guest.service';

@Module({
  imports: [TypeOrmModule.forFeature([GuestEntity])],
  providers: [GuestsService],
  controllers: [GuestsController],
})
export class GuestsModule {}
