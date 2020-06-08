const { ApolloServer, gql } = require('apollo-server')
const mongoose = require('mongoose')
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')



require('dotenv').config()
const server = new ApolloServer({ typeDefs, resolvers })

mongoose.connect(process.env.MONGO_URI,
{ useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
 }
).then(()=> {
  console.log('mongoDB connected!!!')
})


server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
});







