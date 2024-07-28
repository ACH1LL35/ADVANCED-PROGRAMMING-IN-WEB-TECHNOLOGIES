import { IsString, IsBoolean, IsOptional, Length } from 'class-validator';

export class CreateParentDto {
  @IsString()
  @Length(1, 100)
  username: string;

  @IsString()
  @Length(1, 150)
  fullName: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}

export class UpdateParentDto {
  @IsString()
  @Length(1, 150)
  fullName: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}

