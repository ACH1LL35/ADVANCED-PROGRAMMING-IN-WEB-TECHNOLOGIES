import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { CreateStudentDto } from './student.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async createStudent(createStudentDto: CreateStudentDto): Promise<Student> {
    const { fullName, age, status } = createStudentDto;
    const student = this.studentRepository.create({ fullName, age, status });
    return await this.studentRepository.save(student);
  }

  async changeStudentStatus(studentId: number, status: string): Promise<Student> {
    const student = await this.findStudentById(studentId);
    student.status = status;
    return await this.studentRepository.save(student);
  }

  async findStudentById(id: number): Promise<Student> {
    const student = await this.studentRepository.findOne({ where: { id } });
    if (!student) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }
    return student;
  }

  async findStudentsByStatus(status: string): Promise<Student[]> {
    return await this.studentRepository.find({ where: { status } });
  }

  async findStudentsOlderThan(age: number): Promise<Student[]> {
    return await this.studentRepository.createQueryBuilder('student')
      .where('student.age > :age', { age })
      .getMany();
  }

  async findAllStudents(): Promise<Student[]> {
    return await this.studentRepository.find();
  }


}
