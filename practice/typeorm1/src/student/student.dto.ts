import { IsString, IsInt, Min, IsNotEmpty, IsIn } from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsInt()
  @Min(0)
  age: number;

  @IsNotEmpty()
  @IsString()
  @IsIn(['active', 'inactive'])
  status: string;
}
