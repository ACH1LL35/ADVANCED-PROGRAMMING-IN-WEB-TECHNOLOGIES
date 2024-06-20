
export class GuestUserDTO {
    readonly name: string;
    readonly email: string;
    readonly age: number;
    readonly isActive: boolean;
    readonly address: {
      readonly street: string;
      readonly city: string;
      readonly country: string;
    };
    readonly tags: string[];
  }

  export class SupportDto {
    readonly SupportID: number;
    readonly GuestID: number;
    readonly Subject: string;
    readonly Message: string;
    readonly Status: boolean;

  }
  