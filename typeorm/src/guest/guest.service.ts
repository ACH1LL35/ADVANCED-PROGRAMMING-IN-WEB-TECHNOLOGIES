import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GuestEntity } from './guest.entity';
import { GuestRegistrationDTO } from './guest.dto';

@Injectable()
export class GuestsService {
  constructor(
    @InjectRepository(GuestEntity)
    private readonly guestRepository: Repository<GuestEntity>,
  ) {}

  async findAll(): Promise<GuestEntity[]> {
    return await this.guestRepository.find();
  }

  async findOne(id: number): Promise<GuestEntity> {
    return await this.guestRepository.findOne({ where: { GuestID: id } });
  }

  async create(guestData: GuestRegistrationDTO): Promise<GuestEntity> {
    const newGuest = this.guestRepository.create(guestData);
    return await this.guestRepository.save(newGuest);
  }

  async update(id: number, guestData: GuestRegistrationDTO): Promise<void> {
    await this.guestRepository.update(id, guestData);
  }

  async remove(id: number): Promise<void> {
    await this.guestRepository.delete(id);
  }
}
