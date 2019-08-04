import IRegisterUser from "../models/interface/IRegisterUser";
import ServiceResponse from "./service.response";
import IUser from "../models/interface/IUser";
import ILoggedUser from "../models/interface/ILoggedUser";
import GenderEnum from "../models/enums/GenderEnum";

const dummyUser: IUser[] = [];

class UserService {
    static async login(email: string, password: string): Promise<ServiceResponse<ILoggedUser> | ServiceResponse<{message:string}>> {
        // todo make an api call or use dummy data;
        const user: IUser = {name: 'A', email, gender: GenderEnum.MALE};
        if (email === password)
            return ServiceResponse.success<ILoggedUser>({...user, jwt: "token"});
        else return ServiceResponse.error("Invalid credentials")


    }


    static async register({email, password, name, gender}: IRegisterUser): Promise<ServiceResponse<IUser>> {
        // todo, either make api call or use dummy data to save/retrieve/update date
        dummyUser.push({email, name, gender});
        return ServiceResponse.success<IUser>({email, name, gender})
    }
}
