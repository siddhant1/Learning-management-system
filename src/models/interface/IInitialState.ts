import ILoggedUser from "./ILoggedUser";

interface IInitialState {
    loggedIn: boolean;
    loggedUser: ILoggedUser | {};
}

export default IInitialState;
