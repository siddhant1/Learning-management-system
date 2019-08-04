import IUser from "./IUser";

interface ILoggedUser extends IUser{
    jwt: string;
}

export default ILoggedUser;
