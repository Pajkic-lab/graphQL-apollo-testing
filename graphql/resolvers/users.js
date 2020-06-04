const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');

//const { validateRegisterInput, validateLoginInput } = require('../../util/validators');
const User = require('../../modules/User')



const generateToken = (user) => {
  const token = jwt.sign({
    id: user.id,
    email: user.email,
    name: user.name
  }, process.env.SECRET_KEY, { expiresIn: '12h'})
}




module.exports = {


  Mutation: {
    async login(_, { email, password }) {
      const user = await User.findOne({email})
      if(!user){
        errors.general = 'User not found'
        throw new UserInputError('User not found!', { errors })
      }
      const match = await bcrypt.compare(password, user.password)
      if(!match){
        errors.general = 'False credentiales'
        throw new UserInputError('False credentiales', { errors })
      }
      const token = generateToken(user)
      return {
        ...user._doc,
        id: user._id,
        token
      }
    },




    async register(_, args, context, info) {
      console.log(args) 
      /*
      const { email, name, password } = args
      const user = User.findOne({email})
      if(user){
        throw new UserInputError('User alredy exist')
      }
      password = await bcrypt.hash(password, 10)

      const newUser = new User({email, name, password})
      const res = await newUser //.save()

      const token = generateToken(res)

      return {
        ...res._doc,
        id: res._id,
        token
      }  */
    } 
  }


}