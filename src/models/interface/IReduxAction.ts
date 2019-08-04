import ReduxActionEnum from "../enums/ReduxActionEnum";


interface IReduxAction {
	type: ReduxActionEnum;
	payload: any;
	successMessage?: string;
	errorMessage?: string;
}

export default IReduxAction;
