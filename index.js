import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress,graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './schema';
import resolvers from './resolvers';

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

const PORT = 8080;

var app = express();
const graphqlEndpoint = '/graphql';
app.use(graphqlEndpoint, bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', bodyParser.json(), graphiqlExpress({ endpointURL: graphqlEndpoint }));

app.listen(PORT);