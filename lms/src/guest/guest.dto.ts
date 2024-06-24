import { IsDateString, IsEmail, IsInt, IsString, Matches,isDate,isURL } from "class-validator";

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
  