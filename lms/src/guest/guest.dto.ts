import { IsDateString, IsEmail, IsInt, IsNotEmpty, IsString, Matches,isNotEmpty,isURL } from "class-validator";
import { IsPhoneNumber } from './custom-validators';

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
  readonly GuestEmail: string;
  // @IsNotEmpty()
  readonly Password: string;
  @IsPhoneNumber()
  readonly PhoneNumber: number;
  // @IsString()
  readonly Address: string;

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
  