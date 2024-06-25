import { Type } from "class-transformer";
import { IsDate, IsDateString, IsEmail, IsInt, IsNotEmpty, IsString, IsUrl, Matches,MaxLength,isNotEmpty,isURL, maxLength } from "class-validator";
import { Url } from "url";

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
  @Matches(/^\d{11}$/, { message: 'Please insert  a valid 11 digit Phone Number' })
  readonly PhoneNumber: string;
  @IsNotEmpty({ message: 'Date of birth is required (YYYY-MM-DD).' })
  @IsDate({ message: 'Date of birth must be a valid date (YYYY-MM-DD).' })
  @Type(() => Date)
  readonly DateOfBirth: Date;
  @IsString()
  readonly Address: string;
  @IsNotEmpty({ message: 'LinkedIn profile URL is required.' })
  @IsUrl({}, { message: 'LinkedIn profile must be a valid URL.' })
  @Matches(/^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/, { message: 'LinkedIn profile URL must match the pattern "www.linkedin.com/in/".' })
  readonly SocialHandle: Url;

}
  export class SupportDto {
    
    readonly SupportID: number;
    readonly GuestID: number;
    readonly Subject: string;
    readonly Message: string;
    readonly Status: number;

  }

  export class PostDto {
    readonly PostID: number;
    readonly GuestID: number;
    readonly Subject: string;
    readonly Message: string;
    readonly Status: number;

  }

  export class NoteDto {
    readonly NoteID: string;
    readonly GuestID: string;
    readonly CourseID: string;
    readonly Content: string;
    readonly Status: number;
  
  }

  export class InstructorDTO {
    @IsInt()
    InstructorID: number;
    @IsString()
    @Matches(/^[A-Za-z\s]+$/, { message: 'Name must not contain numbers' })
    InstructorName: string;
    @IsEmail()
    InstructorEmail: string;
    @IsDateString()
    InstructorJoinDate: Date;
    @IsString()
    InstructorDes: string;
    InstructorStat: number;
    

  
  }
  