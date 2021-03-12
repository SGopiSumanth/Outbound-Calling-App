class AppError extends Error {
    constructor(message, httpStatusCode) {
        super(message);

        this.statusCode = httpStatusCode;
        this.status = `${httpStatusCode}`.startsWith('4') ? 'fail' : 'error';

        // ignore this class(appErrorHandler) from stacktrace
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = AppError;
