class ValidatorResponse {
    success: boolean;
    message?: string;

    constructor(success: boolean, message?: string){
        this.message = message;
        this.success = success;
    }


    static error(message: string){
        return new ValidatorResponse(false, message);
    }

    static success(message?: string){
        return new ValidatorResponse(true, message);
    }


}

export default ValidatorResponse;
