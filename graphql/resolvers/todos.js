const jwt = require('jsonwebtoken')
const { SECRET_KEY } = require('../../config/secret')

const User = require('../../modules/User')
const Todo = require('../../modules/Todo')
const { findOne } = require('../../modules/User')

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
                    await todo.save()
                    return( todo )
                }
            } catch (err) {
                console.log(err)
            } 
        },

        async deleteTodo(_, {token, id}) {
            try {
                const decoded = jwt.verify(token, SECRET_KEY)
                const userid = decoded.user.id
                const user = await User.findById(userid)
                if(user){
                    await Todo.findByIdAndDelete(id)
                    return {id}
                }
            } catch (err) {
                console.log(err)
            }
        },

        async getAllTodos(_, {token}) {
            try {
                const decoded = jwt.verify(token, SECRET_KEY)
                const id = decoded.user.id
                const user = await User.findById(id)
                if(user){
                    const{_id} = user
                    const AllTodos = await Todo.find({user: _id})
                    return (AllTodos)
                }
            } catch (err) {
                console.log(err)
            }
        }
    }
}