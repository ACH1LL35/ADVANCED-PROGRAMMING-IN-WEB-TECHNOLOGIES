import { Type } from 'class-transformer';
import { IsDate, IsEmail, IsInt, IsNotEmpty, IsString, IsUrl, Matches, MaxLength } from 'class-validator';
import { Url } from 'url';

export class GuestRegistrationDTO {
  @IsInt()
  readonly GuestID: number;

  @IsNotEmpty()
  @IsString()
  @Matches(/^[A-Za-z\s]+$/, { message: 'Name must not contain numbers' })
  readonly GuestFName: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^[A-Za-z\s]+$/, { message: 'Name must not contain numbers' })
  readonly GuestLName: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(30)
  readonly GuestEmail: string;

  @IsNotEmpty()
  @Matches(/[@#$&]/, { message: 'Password must contain at least one special character (@, #, $, or &).' })
  readonly Password: string;

  @Matches(/^\d{11}$/, { message: 'Please insert a valid 11 digit Phone Number' })
  readonly PhoneNumber: string;

  @IsNotEmpty({ message: 'Date of birth is required (YYYY-MM-DD).' })
  @IsDate({ message: 'Date of birth must be a valid date (YYYY-MM-DD).' })
  @Type(() => Date)
  readonly DateOfBirth: Date;

  @IsString()
  readonly Address: string;

}
