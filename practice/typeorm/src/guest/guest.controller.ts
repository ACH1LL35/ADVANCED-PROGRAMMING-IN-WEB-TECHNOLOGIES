import { Controller, Get, Post, Put, Delete, Param, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { GuestEntity } from './guest.entity';
import { GuestsService } from './guest.service';
import { GuestRegistrationDTO } from './guest.dto';



@Controller('guests')
export class GuestsController {
  constructor(private readonly guestsService: GuestsService) {}

  @Get()
  findAll(): Promise<GuestEntity[]> {
    return this.guestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', new ValidationPipe({ transform: true })) id: number): Promise<string | GuestEntity> {
    return this.guestsService.findOne(id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() guestData: GuestRegistrationDTO): Promise<GuestEntity> {
    return this.guestsService.create(guestData);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  update(@Param('id', new ValidationPipe({ transform: true })) id: number, @Body() guestData: GuestRegistrationDTO): Promise<string | GuestEntity> {
    return this.guestsService.update(id, guestData);
  }

  @Delete(':id')
  remove(@Param('id', new ValidationPipe({ transform: true })) id: number): Promise<string> {
    return this.guestsService.remove(id);
  }
}
