export const validateRequiredField = (value, label = "Field") => {
    let error;
    if (!value) {
        error = `This ${label} is required`;
    }
    return error;
}

export const validateEmail = (value, label='Email') => {
    let error;
    if (value && !/\S+@\S+\.\S+/.test(value)) {
        error = `The ${label} is invalid`;
    }
    return error;
}