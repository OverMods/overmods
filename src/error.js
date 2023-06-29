function declareError(code, text, full) {
    return { code, text, full };
}

export const errors = {
    INVALID_PARAMETER: declareError(1, "Invalid parameter", "The parameter provided is not valid."),
    UNAUTHORIZED: declareError(2, "Unauthorized", "Access is unauthorized."),
    INSUFFICIENT_PRIVILEGES: declareError(3, "Insufficient privileges", "You do not have sufficient privileges."),
    USER_NOT_FOUND: declareError(4, "User not found", "The user was not found."),
    INVALID_PASSWORD: declareError(5, "Invalid password", "The password is invalid."),
    ALREADY_AUTHORIZED: declareError(6, "Already logged in", "You are already logged in."),
    NOT_FOUND: declareError(7, "Not found", "The requested resource was not found."),
    FAILED: declareError(8, "Failed", "The operation failed."),
    USER_ALREADY_EXISTS: declareError(9, "User already exists", "The user already exists.")
};

export function fullError(error) {
    return Object.values(errors).find((e) => error.code === e.code);
}