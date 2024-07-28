import { Controller, Get, Param, ParseIntPipe, Patch, Body, Post, Delete, Query, BadRequestException, UsePipes, ValidationPipe } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './student.dto';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async createStudent(@Body() createStudentDto: CreateStudentDto) {
    return await this.studentService.createStudent(createStudentDto);
  }

  @Patch(':id/status')
  @UsePipes(new ValidationPipe())
  async changeStudentStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status') status: 'active' | 'inactive',
  ) {
    if (!['active', 'inactive'].includes(status)) {
      throw new BadRequestException('Invalid status');
    }
    return await this.studentService.changeStudentStatus(id, status);
  }

  @Get(':id')
  async getStudentById(@Param('id', ParseIntPipe) id: number) {
    return await this.studentService.findStudentById(id);
  }

  @Get()
  async getStudents(@Query('status') status: string) {
    if (status) {
      return await this.studentService.findStudentsByStatus(status);
    } else {
      return await this.studentService.findAllStudents();
    }
  }

}
