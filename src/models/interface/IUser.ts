import GenderEnum from "../enums/GenderEnum";

interface IUser {
    email: string;
    name: string;
    gender: GenderEnum;
    id?: number; // optional because fetched from backend
}

export default IUser;
