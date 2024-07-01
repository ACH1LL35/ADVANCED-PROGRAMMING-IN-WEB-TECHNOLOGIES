import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { GuestEntity } from './guest.entity';
import { GuestRegistrationDTO } from './guest.dto';
import { GuestsService } from './guest.service';

@Controller('guests')
export class GuestsController {
  constructor(private readonly guestsService: GuestsService) {}

  @Get()
  findAll(): Promise<GuestEntity[]> {
    return this.guestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<GuestEntity> {
    return this.guestsService.findOne(id);
  }

  @Post()
  create(@Body() guestData: GuestRegistrationDTO): Promise<GuestEntity> {
    return this.guestsService.create(guestData);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() guestData: GuestRegistrationDTO): Promise<void> {
    return this.guestsService.update(id, guestData);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.guestsService.remove(id);
  }
}
