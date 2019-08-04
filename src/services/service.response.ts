class ServiceResponse<T> {
    success: boolean;
    data?: T
    httpCode?: number;
    message?: string;

    constructor(success: boolean, data?: T, message?: string, httpCode?: number){
        this.success = success;
        this.data = data;
        this.message = message;
        this.httpCode = httpCode;
    }

    static error(message: string, data?: any, httpCode?: number){
        return new ServiceResponse(false, data || {}, message, httpCode || 400)
    }

    static success<T>(data: T, message?: string, httpCode?: number){
        return new ServiceResponse<T>(true, data, message || "", httpCode || 200)
    }
}

export default ServiceResponse;
