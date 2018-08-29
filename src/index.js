import cors from 'cors';
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const app = express();

app.use(cors());

const schema = gql`
  type Query {
    me: User
  }

  type User {
    username: String!
  }
`;

const resolvers = {
  Query: {
    me: () => {
      return {
        username: 'Ayush Goyal'
      };
    }
  }
};

const playground = {
  settings: {
    'editor.cursorShape': 'line'
  }
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  playground
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8080 }, () => {
  console.log('Server running on http://localhost:8080/graphql');
});
