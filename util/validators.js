module.exports.validateRegisterInput = ( name, email, password )=> {
    const errors = {}
    if(name.trim() === '') {
        errors.name = 'Name required!'
    }
    if(email.trim() === '') {
        errors.email = 'email required!'
    } else {
        const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/ 
        if (!email.match(regEx)) {
            errors.email = 'Email must be a valid email address'
          }
        }
    if(password === '') {
        errors.password = 'password required'
    } 

    return  { errors, valid: Object.keys(errors).length < 1 }
    }
