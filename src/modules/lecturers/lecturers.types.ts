export type LecturerType = {
    id:string,
    firstName: string,
    middleName: string,
    lastName: string,
    degreeId: string,
    description: string,
    image: string,
    email: string,
    phoneNumber: string,
    position:{
        id:string,
        name:string
    },
    department:{
        id:string,
        name:string
    }
}
