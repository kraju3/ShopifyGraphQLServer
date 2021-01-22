const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const {Types,Resolvers} = require('./Schema');

const schema = makeExecutableSchema({
    typeDefs:Types,
    resolvers:Resolvers
})

const app = express()

app.use('/graphql',bodyParser.json(),graphqlExpress({schema}))

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(7000, () => {
  console.log('Go to http://localhost:7000/graphiql to run queries!');
});

