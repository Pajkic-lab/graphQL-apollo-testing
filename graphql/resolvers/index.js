const postsResolvers = require('./posts')
const usersResolvers = require('./users')
const todosResolvers = require('./todos')

module.exports = {
  Query: {
    ...postsResolvers.Query
  },
  Mutation: {
      ...usersResolvers.Mutation,
      ...todosResolvers.Mutation
  }
}