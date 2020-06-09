const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { UserInputError } = require('apollo-server')
const { SECRET_KEY } = require('../../config/secret')

const User = require('../../modules/User')


module.exports = {


  Mutation: {
    async login(_, { email, password }) { 
      try {
        let user = await User.findOne({email})
        if(!user){
        console.log("user does not exist!!!")
        }
        const match = await bcrypt.compare(password, user.password)
        if(!match){
        console.log('FALSE CREDENTIALES!!')
        }
        const payload = { user: { id: user.id }}
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' })
        return { token }
      } catch (err) {
        console.log(err)
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
         await user.save()
         const payload = { user: { id: user.id }}
         const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' })
         return { token }
      } catch (err) {
        console.log(err)
      }
    },  


    async getUser(_, { token }) {
      try {
        console.log(token)
      } catch (err) {
        console.log(err)
      }
    }
  } 


}