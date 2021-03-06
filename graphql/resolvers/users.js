const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
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


    async getUser(_, {token}) {
      try {
        const decoded = jwt.verify(token, SECRET_KEY)
        const id = decoded.user.id
        
        const user = await User.findById(id)
        const { name, email, _id } = user
        return{ name, email, _id }
      } catch (err) {
        console.log(err)
      }
    }
  } 


}