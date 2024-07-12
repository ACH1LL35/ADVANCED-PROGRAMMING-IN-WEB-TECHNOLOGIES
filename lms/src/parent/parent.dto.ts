// parent.dto.ts

import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class ParentDto {
  @IsNotEmpty()
  Fname: string;

  @IsNotEmpty()
  Lname: string;

  @IsNotEmpty()
  @IsEmail()
  Email: string;

  @IsNotEmpty()
  Mobile: string;

  @IsNotEmpty()
  @MinLength(6) // Minimum length for password
  Password: string; // Add password field
}

export class UpdateParentDto extends ParentDto {}
