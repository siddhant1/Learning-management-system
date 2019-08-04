import ValidatorResponse from "./validator.response";

class UserValidator {

    static async isValidEmail(email: string): Promise<ValidatorResponse>{
        if (!email || (email && email.trim().length === 0))
            return ValidatorResponse.error('Email is Empty');
        // todo, check email

        return ValidatorResponse.success();
    }

}

export default UserValidator;
