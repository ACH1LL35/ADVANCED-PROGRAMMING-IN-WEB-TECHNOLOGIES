  export class SupportDto {
    readonly SupportID: number;
    readonly GuestID: number;
    readonly Subject: string;
    readonly Message: string;
    readonly Status: boolean;

  }

  export class PostDto {
    readonly PostID: number;
    readonly GuestID: number;
    readonly Subject: string;
    readonly Message: string;
    readonly Status: boolean;

  }

  export class NoteDto {
    readonly NoteID: string;
    readonly GuestID: string;
    readonly CourseID: string;
    readonly Content: string;
  
  }
  