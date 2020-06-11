const { model, Schema } = require('mongoose')

const todoSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  todo: {
    type: String,
    required: true
  }
})

module.exports = model('Todo', todoSchema)