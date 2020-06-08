const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { UserInputError } = require('apollo-server')
const { SECRET_KEY } = require('../../config/secret')

const User = require('../../modules/User')


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




    async register(_, { name, email, password} ) {
      try {
        let user = await User.findOne({ email })
         if(user) {
             console.log('USER ALREDY EXISTS')
         }
         user= new User({ name, email, password })
         const salt = await bcrypt.genSalt(10)
         user.password = await bcrypt.hash(password, salt)
         //await user.save()
         const payload = { user: { id: user.id }}
         /*jwt.sign(payload, SECRET_KEY, (err, token) => {
             if(err) throw err
             console.log(token)
             return{ token }
         })*/
         const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' })
         console.log(token)
         return { token }
      } catch (err) {
        console.log(err)
      }
    } 
  } 


}