// custom-validators.ts

import {ValidationOptions,ValidatorConstraint,ValidatorConstraintInterface,registerDecorator,ValidationArguments,} from 'class-validator';
  
  @ValidatorConstraint({ name: 'isPhoneNumber', async: false })
  export class IsPhoneNumberConstraint implements ValidatorConstraintInterface {
    validate(phoneNumber: any, args: ValidationArguments) {
      if (!/^\d{11}$/.test(phoneNumber)) {
        return false;
      }
      return true;
    }
  
    defaultMessage(args: ValidationArguments) {
      return 'Phone number must be exactly 11 digits long.';
    }
  }
  
  export function IsPhoneNumber(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: IsPhoneNumberConstraint,
      });
    };
  }
  