const jwt = require('jsonwebtoken')
const { SECRET_KEY } = require('../../config/secret')

const User = require('../../modules/User')
const Todo = require('../../modules/Todo')

module.exports = {
    Mutation: {
        async createTodo(_, { token, todo }) {
            try {
                const decoded = jwt.verify(token, SECRET_KEY)
                const id = decoded.user.id
                const user = await User.findById(id)
                if(user) {
                    const { _id } = user
                    todo = new Todo({ user: _id, todo: todo })
                    //await todo.save()
                    return( todo )
                }
            } catch (err) {
                console.log(err)
            } 
        }
    }
}