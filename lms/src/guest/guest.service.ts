import {Injectable} from "@nestjs/common";

@Injectable()
export class GuestService{
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

}