export const formValidation = (email,password) => {
    const isEmailValid = (/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/).test(email);
    const isPasswordValid = (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).test(password);
    if(!isEmailValid){
        return "Invalid Email"
    }
    if(!isPasswordValid){
        return "Invalid Password"
    }
    return null;
}