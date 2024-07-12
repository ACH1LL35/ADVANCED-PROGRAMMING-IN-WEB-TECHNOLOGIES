import {Injectable} from "@nestjs/common";
import { GuestRegistrationDTO } from "./guest.dto";

@Injectable()
export class GuestService{

    registerGuest(guestRegistrationDto: GuestRegistrationDTO): object {
        return { message: 'Guest registered successfully', data: guestRegistrationDto };
      }
    getCourse(): Object{
        return {message: "Course"}
    }

    getCourseById(id: number): Object{
        return {message: "Course ID: "+id}
    }

    getCourseByName(name: string): Object{
        return {message: "Course Name: "+name}
    }

    getInstructorById(id: number): Object{
        return {message: "Instructor ID: "+id}
    }

    getinstructorByName(name: string): Object{
        return {message: "Instructor Name: "+name}
    }

    ContactSupport(myobj:object): object{
        return myobj;
    }

    createUser(myobj:object): object{
        return myobj;
    }

    forumPost(myobj:object): object{
        return myobj;
    }

    guestNote(myobj:object): object{
        return myobj;
    }

}