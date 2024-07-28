import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: number): Promise<string | GuestEntity> {
    const guest = await this.guestRepository.findOne({ where: { GuestID: id } });
    if (!guest) {
      return `Guest with ID ${id} not found`;
    }
    return guest;
  }

  async create(guestData: GuestRegistrationDTO): Promise<GuestEntity> {
    const newGuest = this.guestRepository.create(guestData);
    await this.guestRepository.save(newGuest);
    return newGuest;
  }

  async update(id: number, guestData: GuestRegistrationDTO): Promise<string | GuestEntity> {
    const result = await this.guestRepository.update(id, guestData);
    if (result.affected === 0) {
      return `Guest with ID ${id} not found`;
    }
    const updatedGuest = await this.guestRepository.findOne({ where: { GuestID: id } });
    return updatedGuest;
  }

  async remove(id: number): Promise<string> {
    const result = await this.guestRepository.delete(id);
    if (result.affected === 0) {
      return `Guest with ID ${id} not found`;
    }
    return `Guest with ID ${id} removed`;
  }
}
