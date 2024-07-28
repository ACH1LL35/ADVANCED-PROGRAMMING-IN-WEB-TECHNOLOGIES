import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository , Like} from 'typeorm';
import { Parent } from './parent.entity';
import { CreateParentDto } from './parent.dto';

@Injectable()
export class ParentService {
  constructor(
    @InjectRepository(Parent)
    private readonly parentRepository: Repository<Parent>,
  ) {}

  async createParent(createParentDto: CreateParentDto): Promise<Parent> {
    const { username } = createParentDto;

    // Check if username already exists
    const existingParent = await this.parentRepository.findOne({ where: { username } });
    if (existingParent) {
      throw new ConflictException('Username already exists');
    }

    const parent = this.parentRepository.create(createParentDto);
    return this.parentRepository.save(parent);
  }

  async findParentsByFullNameSubstring(substring: string): Promise<Parent[]> {
    return this.parentRepository.find({
      where: { fullName: Like(`%${substring}%`) },
    });
  }

  async findParentByUsername(username: string): Promise<Parent> {
    return this.parentRepository.findOne({ where: { username } });
  }

  async removeParentByUsername(username: string): Promise<void> {
    await this.parentRepository.delete({ username });
  }
}
