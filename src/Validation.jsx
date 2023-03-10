const Validation = (values) => {
    let errors ={}

    if(!values.name){
        errors.name = "Username cannot be empty"
    }

    else if(values.name.length < 5){
        errors.name = "Username should be minimum 5 digit"
    }

    if(!values.password){
        errors.password= "Enter valid password"
    }

    else if(values.password.length < 8){
        errors.password = "password must be more than 8 char"
    }

    return errors;
   
}

export default Validation;

