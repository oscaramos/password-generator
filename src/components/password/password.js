import password from "secure-random-password";

const generatePassword = (length, options) => {
    if(options) {
        let characters = [];
        for(const key in options) {
            if(key === 'lower') characters = characters.concat(password.lower)
            if(key === 'upper') characters = characters.concat(password.upper)
            if(key === 'number') characters = characters.concat(password.digits)
            if(key === 'symbol') characters = characters.concat(password.symbols)
        }
        return password.randomPassword({ length, characters })
    }
    return password.randomPassword({ length })
}


export default generatePassword;
